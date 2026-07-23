import * as cdktn from 'cdktn';
import { SecurityhubInsightFiltersAwsAccountId,
securityhubInsightFiltersAwsAccountIdToTerraform,
securityhubInsightFiltersAwsAccountIdToHclTerraform,
SecurityhubInsightFiltersAwsAccountIdList,
SecurityhubInsightFiltersAwsAccountName,
securityhubInsightFiltersAwsAccountNameToTerraform,
securityhubInsightFiltersAwsAccountNameToHclTerraform,
SecurityhubInsightFiltersAwsAccountNameList,
SecurityhubInsightFiltersCompanyName,
securityhubInsightFiltersCompanyNameToTerraform,
securityhubInsightFiltersCompanyNameToHclTerraform,
SecurityhubInsightFiltersCompanyNameList,
SecurityhubInsightFiltersComplianceAssociatedStandardsId,
securityhubInsightFiltersComplianceAssociatedStandardsIdToTerraform,
securityhubInsightFiltersComplianceAssociatedStandardsIdToHclTerraform,
SecurityhubInsightFiltersComplianceAssociatedStandardsIdList,
SecurityhubInsightFiltersComplianceSecurityControlId,
securityhubInsightFiltersComplianceSecurityControlIdToTerraform,
securityhubInsightFiltersComplianceSecurityControlIdToHclTerraform,
SecurityhubInsightFiltersComplianceSecurityControlIdList,
SecurityhubInsightFiltersComplianceSecurityControlParametersName,
securityhubInsightFiltersComplianceSecurityControlParametersNameToTerraform,
securityhubInsightFiltersComplianceSecurityControlParametersNameToHclTerraform,
SecurityhubInsightFiltersComplianceSecurityControlParametersNameList,
SecurityhubInsightFiltersComplianceSecurityControlParametersValue,
securityhubInsightFiltersComplianceSecurityControlParametersValueToTerraform,
securityhubInsightFiltersComplianceSecurityControlParametersValueToHclTerraform,
SecurityhubInsightFiltersComplianceSecurityControlParametersValueList,
SecurityhubInsightFiltersComplianceStatus,
securityhubInsightFiltersComplianceStatusToTerraform,
securityhubInsightFiltersComplianceStatusToHclTerraform,
SecurityhubInsightFiltersComplianceStatusList,
SecurityhubInsightFiltersConfidence,
securityhubInsightFiltersConfidenceToTerraform,
securityhubInsightFiltersConfidenceToHclTerraform,
SecurityhubInsightFiltersConfidenceList,
SecurityhubInsightFiltersCreatedAt,
securityhubInsightFiltersCreatedAtToTerraform,
securityhubInsightFiltersCreatedAtToHclTerraform,
SecurityhubInsightFiltersCreatedAtList,
SecurityhubInsightFiltersCriticality,
securityhubInsightFiltersCriticalityToTerraform,
securityhubInsightFiltersCriticalityToHclTerraform,
SecurityhubInsightFiltersCriticalityList,
SecurityhubInsightFiltersDescription,
securityhubInsightFiltersDescriptionToTerraform,
securityhubInsightFiltersDescriptionToHclTerraform,
SecurityhubInsightFiltersDescriptionList,
SecurityhubInsightFiltersFindingProviderFieldsConfidence,
securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform,
securityhubInsightFiltersFindingProviderFieldsConfidenceToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsConfidenceList,
SecurityhubInsightFiltersFindingProviderFieldsCriticality,
securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform,
securityhubInsightFiltersFindingProviderFieldsCriticalityToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsCriticalityList,
SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId,
securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform,
securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList,
SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn,
securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform,
securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList,
SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel,
securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform,
securityhubInsightFiltersFindingProviderFieldsSeverityLabelToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList,
SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal,
securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform,
securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList,
SecurityhubInsightFiltersFindingProviderFieldsTypes,
securityhubInsightFiltersFindingProviderFieldsTypesToTerraform,
securityhubInsightFiltersFindingProviderFieldsTypesToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsTypesList,
SecurityhubInsightFiltersFirstObservedAt,
securityhubInsightFiltersFirstObservedAtToTerraform,
securityhubInsightFiltersFirstObservedAtToHclTerraform,
SecurityhubInsightFiltersFirstObservedAtList,
SecurityhubInsightFiltersGeneratorId,
securityhubInsightFiltersGeneratorIdToTerraform,
securityhubInsightFiltersGeneratorIdToHclTerraform,
SecurityhubInsightFiltersGeneratorIdList,
SecurityhubInsightFiltersId,
securityhubInsightFiltersIdToTerraform,
securityhubInsightFiltersIdToHclTerraform,
SecurityhubInsightFiltersIdList,
SecurityhubInsightFiltersKeyword,
securityhubInsightFiltersKeywordToTerraform,
securityhubInsightFiltersKeywordToHclTerraform,
SecurityhubInsightFiltersKeywordList,
SecurityhubInsightFiltersLastObservedAt,
securityhubInsightFiltersLastObservedAtToTerraform,
securityhubInsightFiltersLastObservedAtToHclTerraform,
SecurityhubInsightFiltersLastObservedAtList,
SecurityhubInsightFiltersMalwareName,
securityhubInsightFiltersMalwareNameToTerraform,
securityhubInsightFiltersMalwareNameToHclTerraform,
SecurityhubInsightFiltersMalwareNameList,
SecurityhubInsightFiltersMalwarePath,
securityhubInsightFiltersMalwarePathToTerraform,
securityhubInsightFiltersMalwarePathToHclTerraform,
SecurityhubInsightFiltersMalwarePathList,
SecurityhubInsightFiltersMalwareState,
securityhubInsightFiltersMalwareStateToTerraform,
securityhubInsightFiltersMalwareStateToHclTerraform,
SecurityhubInsightFiltersMalwareStateList,
SecurityhubInsightFiltersMalwareType,
securityhubInsightFiltersMalwareTypeToTerraform,
securityhubInsightFiltersMalwareTypeToHclTerraform,
SecurityhubInsightFiltersMalwareTypeList,
SecurityhubInsightFiltersNetworkDestinationDomain,
securityhubInsightFiltersNetworkDestinationDomainToTerraform,
securityhubInsightFiltersNetworkDestinationDomainToHclTerraform,
SecurityhubInsightFiltersNetworkDestinationDomainList,
SecurityhubInsightFiltersNetworkDestinationIpV4,
securityhubInsightFiltersNetworkDestinationIpV4ToTerraform,
securityhubInsightFiltersNetworkDestinationIpV4ToHclTerraform,
SecurityhubInsightFiltersNetworkDestinationIpV4List,
SecurityhubInsightFiltersNetworkDestinationIpV6,
securityhubInsightFiltersNetworkDestinationIpV6ToTerraform,
securityhubInsightFiltersNetworkDestinationIpV6ToHclTerraform,
SecurityhubInsightFiltersNetworkDestinationIpV6List,
SecurityhubInsightFiltersNetworkDestinationPort,
securityhubInsightFiltersNetworkDestinationPortToTerraform,
securityhubInsightFiltersNetworkDestinationPortToHclTerraform,
SecurityhubInsightFiltersNetworkDestinationPortList,
SecurityhubInsightFiltersNetworkDirection,
securityhubInsightFiltersNetworkDirectionToTerraform,
securityhubInsightFiltersNetworkDirectionToHclTerraform,
SecurityhubInsightFiltersNetworkDirectionList,
SecurityhubInsightFiltersNetworkProtocol,
securityhubInsightFiltersNetworkProtocolToTerraform,
securityhubInsightFiltersNetworkProtocolToHclTerraform,
SecurityhubInsightFiltersNetworkProtocolList,
SecurityhubInsightFiltersNetworkSourceDomain,
securityhubInsightFiltersNetworkSourceDomainToTerraform,
securityhubInsightFiltersNetworkSourceDomainToHclTerraform,
SecurityhubInsightFiltersNetworkSourceDomainList,
SecurityhubInsightFiltersNetworkSourceIpV4,
securityhubInsightFiltersNetworkSourceIpV4ToTerraform,
securityhubInsightFiltersNetworkSourceIpV4ToHclTerraform,
SecurityhubInsightFiltersNetworkSourceIpV4List,
SecurityhubInsightFiltersNetworkSourceIpV6,
securityhubInsightFiltersNetworkSourceIpV6ToTerraform,
securityhubInsightFiltersNetworkSourceIpV6ToHclTerraform,
SecurityhubInsightFiltersNetworkSourceIpV6List,
SecurityhubInsightFiltersNetworkSourceMac,
securityhubInsightFiltersNetworkSourceMacToTerraform,
securityhubInsightFiltersNetworkSourceMacToHclTerraform,
SecurityhubInsightFiltersNetworkSourceMacList,
SecurityhubInsightFiltersNetworkSourcePort,
securityhubInsightFiltersNetworkSourcePortToTerraform,
securityhubInsightFiltersNetworkSourcePortToHclTerraform,
SecurityhubInsightFiltersNetworkSourcePortList,
SecurityhubInsightFiltersNoteText,
securityhubInsightFiltersNoteTextToTerraform,
securityhubInsightFiltersNoteTextToHclTerraform,
SecurityhubInsightFiltersNoteTextList,
SecurityhubInsightFiltersNoteUpdatedAt,
securityhubInsightFiltersNoteUpdatedAtToTerraform,
securityhubInsightFiltersNoteUpdatedAtToHclTerraform,
SecurityhubInsightFiltersNoteUpdatedAtList,
SecurityhubInsightFiltersNoteUpdatedBy,
securityhubInsightFiltersNoteUpdatedByToTerraform,
securityhubInsightFiltersNoteUpdatedByToHclTerraform,
SecurityhubInsightFiltersNoteUpdatedByList,
SecurityhubInsightFiltersProcessLaunchedAt,
securityhubInsightFiltersProcessLaunchedAtToTerraform,
securityhubInsightFiltersProcessLaunchedAtToHclTerraform,
SecurityhubInsightFiltersProcessLaunchedAtList,
SecurityhubInsightFiltersProcessName,
securityhubInsightFiltersProcessNameToTerraform,
securityhubInsightFiltersProcessNameToHclTerraform,
SecurityhubInsightFiltersProcessNameList,
SecurityhubInsightFiltersProcessParentPid,
securityhubInsightFiltersProcessParentPidToTerraform,
securityhubInsightFiltersProcessParentPidToHclTerraform,
SecurityhubInsightFiltersProcessParentPidList,
SecurityhubInsightFiltersProcessPath,
securityhubInsightFiltersProcessPathToTerraform,
securityhubInsightFiltersProcessPathToHclTerraform,
SecurityhubInsightFiltersProcessPathList,
SecurityhubInsightFiltersProcessPid,
securityhubInsightFiltersProcessPidToTerraform,
securityhubInsightFiltersProcessPidToHclTerraform,
SecurityhubInsightFiltersProcessPidList,
SecurityhubInsightFiltersProcessTerminatedAt,
securityhubInsightFiltersProcessTerminatedAtToTerraform,
securityhubInsightFiltersProcessTerminatedAtToHclTerraform,
SecurityhubInsightFiltersProcessTerminatedAtList,
SecurityhubInsightFiltersProductArn,
securityhubInsightFiltersProductArnToTerraform,
securityhubInsightFiltersProductArnToHclTerraform,
SecurityhubInsightFiltersProductArnList,
SecurityhubInsightFiltersProductFields,
securityhubInsightFiltersProductFieldsToTerraform,
securityhubInsightFiltersProductFieldsToHclTerraform,
SecurityhubInsightFiltersProductFieldsList,
SecurityhubInsightFiltersProductName,
securityhubInsightFiltersProductNameToTerraform,
securityhubInsightFiltersProductNameToHclTerraform,
SecurityhubInsightFiltersProductNameList,
SecurityhubInsightFiltersRecommendationText,
securityhubInsightFiltersRecommendationTextToTerraform,
securityhubInsightFiltersRecommendationTextToHclTerraform,
SecurityhubInsightFiltersRecommendationTextList,
SecurityhubInsightFiltersRecordState,
securityhubInsightFiltersRecordStateToTerraform,
securityhubInsightFiltersRecordStateToHclTerraform,
SecurityhubInsightFiltersRecordStateList,
SecurityhubInsightFiltersRegion,
securityhubInsightFiltersRegionToTerraform,
securityhubInsightFiltersRegionToHclTerraform,
SecurityhubInsightFiltersRegionList,
SecurityhubInsightFiltersRelatedFindingsId,
securityhubInsightFiltersRelatedFindingsIdToTerraform,
securityhubInsightFiltersRelatedFindingsIdToHclTerraform,
SecurityhubInsightFiltersRelatedFindingsIdList,
SecurityhubInsightFiltersRelatedFindingsProductArn,
securityhubInsightFiltersRelatedFindingsProductArnToTerraform,
securityhubInsightFiltersRelatedFindingsProductArnToHclTerraform,
SecurityhubInsightFiltersRelatedFindingsProductArnList,
SecurityhubInsightFiltersResourceApplicationArn,
securityhubInsightFiltersResourceApplicationArnToTerraform,
securityhubInsightFiltersResourceApplicationArnToHclTerraform,
SecurityhubInsightFiltersResourceApplicationArnList,
SecurityhubInsightFiltersResourceApplicationName,
securityhubInsightFiltersResourceApplicationNameToTerraform,
securityhubInsightFiltersResourceApplicationNameToHclTerraform,
SecurityhubInsightFiltersResourceApplicationNameList,
SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn,
securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList,
SecurityhubInsightFiltersResourceAwsEc2InstanceImageId,
securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceImageIdToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList,
SecurityhubInsightFiltersResourceAwsEc2InstanceIpV4Addresses,
securityhubInsightFiltersResourceAwsEc2InstanceIpV4AddressesToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceIpV4AddressesToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceIpV4AddressesList,
SecurityhubInsightFiltersResourceAwsEc2InstanceIpV6Addresses,
securityhubInsightFiltersResourceAwsEc2InstanceIpV6AddressesToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceIpV6AddressesToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceIpV6AddressesList,
SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName,
securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList,
SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt,
securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList,
SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId,
securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList,
SecurityhubInsightFiltersResourceAwsEc2InstanceType,
securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceTypeToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList,
SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId,
securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList,
SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt,
securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform,
securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToHclTerraform,
SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList,
SecurityhubInsightFiltersResourceAwsIamAccessKeyPrincipalName,
securityhubInsightFiltersResourceAwsIamAccessKeyPrincipalNameToTerraform,
securityhubInsightFiltersResourceAwsIamAccessKeyPrincipalNameToHclTerraform,
SecurityhubInsightFiltersResourceAwsIamAccessKeyPrincipalNameList,
SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus,
securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform,
securityhubInsightFiltersResourceAwsIamAccessKeyStatusToHclTerraform,
SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList,
SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName,
securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform,
securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToHclTerraform,
SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList,
SecurityhubInsightFiltersResourceAwsIamUserUserName,
securityhubInsightFiltersResourceAwsIamUserUserNameToTerraform,
securityhubInsightFiltersResourceAwsIamUserUserNameToHclTerraform,
SecurityhubInsightFiltersResourceAwsIamUserUserNameList,
SecurityhubInsightFiltersResourceAwsS3BucketOwnerId,
securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform,
securityhubInsightFiltersResourceAwsS3BucketOwnerIdToHclTerraform,
SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList,
SecurityhubInsightFiltersResourceAwsS3BucketOwnerName,
securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform,
securityhubInsightFiltersResourceAwsS3BucketOwnerNameToHclTerraform,
SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList,
SecurityhubInsightFiltersResourceContainerImageId,
securityhubInsightFiltersResourceContainerImageIdToTerraform,
securityhubInsightFiltersResourceContainerImageIdToHclTerraform,
SecurityhubInsightFiltersResourceContainerImageIdList,
SecurityhubInsightFiltersResourceContainerImageName,
securityhubInsightFiltersResourceContainerImageNameToTerraform,
securityhubInsightFiltersResourceContainerImageNameToHclTerraform,
SecurityhubInsightFiltersResourceContainerImageNameList,
SecurityhubInsightFiltersResourceContainerLaunchedAt,
securityhubInsightFiltersResourceContainerLaunchedAtToTerraform,
securityhubInsightFiltersResourceContainerLaunchedAtToHclTerraform,
SecurityhubInsightFiltersResourceContainerLaunchedAtList,
SecurityhubInsightFiltersResourceContainerName,
securityhubInsightFiltersResourceContainerNameToTerraform,
securityhubInsightFiltersResourceContainerNameToHclTerraform,
SecurityhubInsightFiltersResourceContainerNameList,
SecurityhubInsightFiltersResourceDetailsOther,
securityhubInsightFiltersResourceDetailsOtherToTerraform,
securityhubInsightFiltersResourceDetailsOtherToHclTerraform,
SecurityhubInsightFiltersResourceDetailsOtherList,
SecurityhubInsightFiltersResourceId,
securityhubInsightFiltersResourceIdToTerraform,
securityhubInsightFiltersResourceIdToHclTerraform,
SecurityhubInsightFiltersResourceIdList,
SecurityhubInsightFiltersResourcePartition,
securityhubInsightFiltersResourcePartitionToTerraform,
securityhubInsightFiltersResourcePartitionToHclTerraform,
SecurityhubInsightFiltersResourcePartitionList,
SecurityhubInsightFiltersResourceRegion,
securityhubInsightFiltersResourceRegionToTerraform,
securityhubInsightFiltersResourceRegionToHclTerraform,
SecurityhubInsightFiltersResourceRegionList,
SecurityhubInsightFiltersResourceTags,
securityhubInsightFiltersResourceTagsToTerraform,
securityhubInsightFiltersResourceTagsToHclTerraform,
SecurityhubInsightFiltersResourceTagsList,
SecurityhubInsightFiltersResourceType,
securityhubInsightFiltersResourceTypeToTerraform,
securityhubInsightFiltersResourceTypeToHclTerraform,
SecurityhubInsightFiltersResourceTypeList,
SecurityhubInsightFiltersSample,
securityhubInsightFiltersSampleToTerraform,
securityhubInsightFiltersSampleToHclTerraform,
SecurityhubInsightFiltersSampleList,
SecurityhubInsightFiltersSeverityLabel,
securityhubInsightFiltersSeverityLabelToTerraform,
securityhubInsightFiltersSeverityLabelToHclTerraform,
SecurityhubInsightFiltersSeverityLabelList,
SecurityhubInsightFiltersSeverityNormalized,
securityhubInsightFiltersSeverityNormalizedToTerraform,
securityhubInsightFiltersSeverityNormalizedToHclTerraform,
SecurityhubInsightFiltersSeverityNormalizedList,
SecurityhubInsightFiltersSeverityProduct,
securityhubInsightFiltersSeverityProductToTerraform,
securityhubInsightFiltersSeverityProductToHclTerraform,
SecurityhubInsightFiltersSeverityProductList,
SecurityhubInsightFiltersSourceUrl,
securityhubInsightFiltersSourceUrlToTerraform,
securityhubInsightFiltersSourceUrlToHclTerraform,
SecurityhubInsightFiltersSourceUrlList,
SecurityhubInsightFiltersThreatIntelIndicatorCategory,
securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform,
securityhubInsightFiltersThreatIntelIndicatorCategoryToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorCategoryList,
SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt,
securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform,
securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList,
SecurityhubInsightFiltersThreatIntelIndicatorSource,
securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform,
securityhubInsightFiltersThreatIntelIndicatorSourceToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorSourceList,
SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl,
securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform,
securityhubInsightFiltersThreatIntelIndicatorSourceUrlToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList,
SecurityhubInsightFiltersThreatIntelIndicatorType,
securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform,
securityhubInsightFiltersThreatIntelIndicatorTypeToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorTypeList,
SecurityhubInsightFiltersThreatIntelIndicatorValue,
securityhubInsightFiltersThreatIntelIndicatorValueToTerraform,
securityhubInsightFiltersThreatIntelIndicatorValueToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorValueList } from './structs0.ts';
export interface SecurityhubInsightFiltersTitle {
  /**
  * The condition to apply to a string value when filtering Security Hub findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison?: string;
  /**
  * Non-empty string definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value?: string;
}

export function securityhubInsightFiltersTitleToTerraform(struct?: SecurityhubInsightFiltersTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersTitleToHclTerraform(struct?: SecurityhubInsightFiltersTitle | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersTitleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersTitle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersTitle | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersTitleList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersTitle[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubInsightFiltersTitleOutputReference {
    return new SecurityhubInsightFiltersTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersType {
  /**
  * The condition to apply to a string value when filtering Security Hub findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison?: string;
  /**
  * Non-empty string definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value?: string;
}

export function securityhubInsightFiltersTypeToTerraform(struct?: SecurityhubInsightFiltersType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersTypeToHclTerraform(struct?: SecurityhubInsightFiltersType | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersType | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersTypeList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersType[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubInsightFiltersTypeOutputReference {
    return new SecurityhubInsightFiltersTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersUpdatedAtDateRange {
  /**
  * A date range unit for the date filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
  */
  readonly unit?: string;
  /**
  * A date range value for the date filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value?: number;
}

export function securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersUpdatedAtDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersUpdatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersUpdatedAtDateRange | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubInsightFiltersUpdatedAtDateRange | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersUpdatedAtDateRange | cdktn.IResolvable | undefined) {
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
export interface SecurityhubInsightFiltersUpdatedAt {
  /**
  * A date range for the date filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersUpdatedAtDateRange;
  /**
  * The date and time, in UTC and ISO 8601 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * The date and time, in UTC and ISO 8601 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
  */
  readonly start?: string;
}

export function securityhubInsightFiltersUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_range: securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct!.dateRange),
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
  }
}


export function securityhubInsightFiltersUpdatedAtToHclTerraform(struct?: SecurityhubInsightFiltersUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_range: {
      value: securityhubInsightFiltersUpdatedAtDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubInsightFiltersUpdatedAtDateRange",
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

export class SecurityhubInsightFiltersUpdatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersUpdatedAt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersUpdatedAt | cdktn.IResolvable | undefined) {
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
  private _dateRange = new SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubInsightFiltersUpdatedAtDateRange) {
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

export class SecurityhubInsightFiltersUpdatedAtList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersUpdatedAt[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubInsightFiltersUpdatedAtOutputReference {
    return new SecurityhubInsightFiltersUpdatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersUserDefinedFields {
  /**
  * The condition to apply to the key value when filtering Security Hub findings with a map filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison?: string;
  /**
  * Non-empty string definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#key SecurityhubInsight#key}
  */
  readonly key?: string;
  /**
  * Non-empty string definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value?: string;
}

export function securityhubInsightFiltersUserDefinedFieldsToTerraform(struct?: SecurityhubInsightFiltersUserDefinedFields | cdktn.IResolvable): any {
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


export function securityhubInsightFiltersUserDefinedFieldsToHclTerraform(struct?: SecurityhubInsightFiltersUserDefinedFields | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersUserDefinedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersUserDefinedFields | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersUserDefinedFields | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersUserDefinedFieldsList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersUserDefinedFields[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubInsightFiltersUserDefinedFieldsOutputReference {
    return new SecurityhubInsightFiltersUserDefinedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersVerificationState {
  /**
  * The condition to apply to a string value when filtering Security Hub findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison?: string;
  /**
  * Non-empty string definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value?: string;
}

export function securityhubInsightFiltersVerificationStateToTerraform(struct?: SecurityhubInsightFiltersVerificationState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersVerificationStateToHclTerraform(struct?: SecurityhubInsightFiltersVerificationState | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersVerificationStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersVerificationState | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersVerificationState | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersVerificationStateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersVerificationState[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubInsightFiltersVerificationStateOutputReference {
    return new SecurityhubInsightFiltersVerificationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersVulnerabilitiesExploitAvailable {
  /**
  * The condition to apply to a string value when filtering Security Hub findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison?: string;
  /**
  * Non-empty string definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value?: string;
}

export function securityhubInsightFiltersVulnerabilitiesExploitAvailableToTerraform(struct?: SecurityhubInsightFiltersVulnerabilitiesExploitAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersVulnerabilitiesExploitAvailableToHclTerraform(struct?: SecurityhubInsightFiltersVulnerabilitiesExploitAvailable | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersVulnerabilitiesExploitAvailableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersVulnerabilitiesExploitAvailable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersVulnerabilitiesExploitAvailable | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersVulnerabilitiesExploitAvailableList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersVulnerabilitiesExploitAvailable[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubInsightFiltersVulnerabilitiesExploitAvailableOutputReference {
    return new SecurityhubInsightFiltersVulnerabilitiesExploitAvailableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersVulnerabilitiesFixAvailable {
  /**
  * The condition to apply to a string value when filtering Security Hub findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison?: string;
  /**
  * Non-empty string definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value?: string;
}

export function securityhubInsightFiltersVulnerabilitiesFixAvailableToTerraform(struct?: SecurityhubInsightFiltersVulnerabilitiesFixAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersVulnerabilitiesFixAvailableToHclTerraform(struct?: SecurityhubInsightFiltersVulnerabilitiesFixAvailable | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersVulnerabilitiesFixAvailableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersVulnerabilitiesFixAvailable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersVulnerabilitiesFixAvailable | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersVulnerabilitiesFixAvailableList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersVulnerabilitiesFixAvailable[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubInsightFiltersVulnerabilitiesFixAvailableOutputReference {
    return new SecurityhubInsightFiltersVulnerabilitiesFixAvailableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersWorkflowState {
  /**
  * The condition to apply to a string value when filtering Security Hub findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison?: string;
  /**
  * Non-empty string definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value?: string;
}

export function securityhubInsightFiltersWorkflowStateToTerraform(struct?: SecurityhubInsightFiltersWorkflowState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersWorkflowStateToHclTerraform(struct?: SecurityhubInsightFiltersWorkflowState | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersWorkflowStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersWorkflowState | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersWorkflowState | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersWorkflowStateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersWorkflowState[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubInsightFiltersWorkflowStateOutputReference {
    return new SecurityhubInsightFiltersWorkflowStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersWorkflowStatus {
  /**
  * The condition to apply to a string value when filtering Security Hub findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison?: string;
  /**
  * Non-empty string definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value?: string;
}

export function securityhubInsightFiltersWorkflowStatusToTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersWorkflowStatusToHclTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable): any {
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

export class SecurityhubInsightFiltersWorkflowStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable | undefined) {
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

export class SecurityhubInsightFiltersWorkflowStatusList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersWorkflowStatus[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubInsightFiltersWorkflowStatusOutputReference {
    return new SecurityhubInsightFiltersWorkflowStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFilters {
  /**
  * The AWS account ID in which a finding is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#aws_account_id SecurityhubInsight#aws_account_id}
  */
  readonly awsAccountId?: SecurityhubInsightFiltersAwsAccountId[] | cdktn.IResolvable;
  /**
  * The name of the AWS account in which a finding is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#aws_account_name SecurityhubInsight#aws_account_name}
  */
  readonly awsAccountName?: SecurityhubInsightFiltersAwsAccountName[] | cdktn.IResolvable;
  /**
  * The name of the findings provider (company) that owns the solution (product) that generates findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#company_name SecurityhubInsight#company_name}
  */
  readonly companyName?: SecurityhubInsightFiltersCompanyName[] | cdktn.IResolvable;
  /**
  * The unique identifier of a standard in which a control is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#compliance_associated_standards_id SecurityhubInsight#compliance_associated_standards_id}
  */
  readonly complianceAssociatedStandardsId?: SecurityhubInsightFiltersComplianceAssociatedStandardsId[] | cdktn.IResolvable;
  /**
  * The unique identifier of a control across standards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#compliance_security_control_id SecurityhubInsight#compliance_security_control_id}
  */
  readonly complianceSecurityControlId?: SecurityhubInsightFiltersComplianceSecurityControlId[] | cdktn.IResolvable;
  /**
  * The name of a security control parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#compliance_security_control_parameters_name SecurityhubInsight#compliance_security_control_parameters_name}
  */
  readonly complianceSecurityControlParametersName?: SecurityhubInsightFiltersComplianceSecurityControlParametersName[] | cdktn.IResolvable;
  /**
  * The current value of a security control parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#compliance_security_control_parameters_value SecurityhubInsight#compliance_security_control_parameters_value}
  */
  readonly complianceSecurityControlParametersValue?: SecurityhubInsightFiltersComplianceSecurityControlParametersValue[] | cdktn.IResolvable;
  /**
  * Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#compliance_status SecurityhubInsight#compliance_status}
  */
  readonly complianceStatus?: SecurityhubInsightFiltersComplianceStatus[] | cdktn.IResolvable;
  /**
  * A finding's confidence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#confidence SecurityhubInsight#confidence}
  */
  readonly confidence?: SecurityhubInsightFiltersConfidence[] | cdktn.IResolvable;
  /**
  * An ISO8601-formatted timestamp that indicates when the security findings provider captured the potential security issue that a finding captured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#created_at SecurityhubInsight#created_at}
  */
  readonly createdAt?: SecurityhubInsightFiltersCreatedAt[] | cdktn.IResolvable;
  /**
  * The level of importance assigned to the resources associated with the finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#criticality SecurityhubInsight#criticality}
  */
  readonly criticality?: SecurityhubInsightFiltersCriticality[] | cdktn.IResolvable;
  /**
  * A finding's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#description SecurityhubInsight#description}
  */
  readonly description?: SecurityhubInsightFiltersDescription[] | cdktn.IResolvable;
  /**
  * The finding provider value for the finding confidence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#finding_provider_fields_confidence SecurityhubInsight#finding_provider_fields_confidence}
  */
  readonly findingProviderFieldsConfidence?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktn.IResolvable;
  /**
  * The finding provider value for the level of importance assigned to the resources associated with the findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#finding_provider_fields_criticality SecurityhubInsight#finding_provider_fields_criticality}
  */
  readonly findingProviderFieldsCriticality?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktn.IResolvable;
  /**
  * The finding identifier of a related finding that is identified by the finding provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_id SecurityhubInsight#finding_provider_fields_related_findings_id}
  */
  readonly findingProviderFieldsRelatedFindingsId?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktn.IResolvable;
  /**
  * The ARN of the solution that generated a related finding that is identified by the finding provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_product_arn SecurityhubInsight#finding_provider_fields_related_findings_product_arn}
  */
  readonly findingProviderFieldsRelatedFindingsProductArn?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktn.IResolvable;
  /**
  * The finding provider value for the severity label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#finding_provider_fields_severity_label SecurityhubInsight#finding_provider_fields_severity_label}
  */
  readonly findingProviderFieldsSeverityLabel?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktn.IResolvable;
  /**
  * The finding provider's original value for the severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#finding_provider_fields_severity_original SecurityhubInsight#finding_provider_fields_severity_original}
  */
  readonly findingProviderFieldsSeverityOriginal?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktn.IResolvable;
  /**
  * One or more finding types that the finding provider assigned to the finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#finding_provider_fields_types SecurityhubInsight#finding_provider_fields_types}
  */
  readonly findingProviderFieldsTypes?: SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktn.IResolvable;
  /**
  * An ISO8601-formatted timestamp that indicates when the security findings provider first observed the potential security issue that a finding captured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#first_observed_at SecurityhubInsight#first_observed_at}
  */
  readonly firstObservedAt?: SecurityhubInsightFiltersFirstObservedAt[] | cdktn.IResolvable;
  /**
  * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#generator_id SecurityhubInsight#generator_id}
  */
  readonly generatorId?: SecurityhubInsightFiltersGeneratorId[] | cdktn.IResolvable;
  /**
  * The security findings provider-specific identifier for a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#id SecurityhubInsight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: SecurityhubInsightFiltersId[] | cdktn.IResolvable;
  /**
  * A keyword for a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#keyword SecurityhubInsight#keyword}
  */
  readonly keyword?: SecurityhubInsightFiltersKeyword[] | cdktn.IResolvable;
  /**
  * An ISO8601-formatted timestamp that indicates when the security findings provider most recently observed the potential security issue that a finding captured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#last_observed_at SecurityhubInsight#last_observed_at}
  */
  readonly lastObservedAt?: SecurityhubInsightFiltersLastObservedAt[] | cdktn.IResolvable;
  /**
  * The name of the malware that was observed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#malware_name SecurityhubInsight#malware_name}
  */
  readonly malwareName?: SecurityhubInsightFiltersMalwareName[] | cdktn.IResolvable;
  /**
  * The filesystem path of the malware that was observed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#malware_path SecurityhubInsight#malware_path}
  */
  readonly malwarePath?: SecurityhubInsightFiltersMalwarePath[] | cdktn.IResolvable;
  /**
  * The state of the malware that was observed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#malware_state SecurityhubInsight#malware_state}
  */
  readonly malwareState?: SecurityhubInsightFiltersMalwareState[] | cdktn.IResolvable;
  /**
  * The type of the malware that was observed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#malware_type SecurityhubInsight#malware_type}
  */
  readonly malwareType?: SecurityhubInsightFiltersMalwareType[] | cdktn.IResolvable;
  /**
  * The destination domain of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_destination_domain SecurityhubInsight#network_destination_domain}
  */
  readonly networkDestinationDomain?: SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktn.IResolvable;
  /**
  * The destination IPv4 address of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_destination_ip_v4 SecurityhubInsight#network_destination_ip_v4}
  */
  readonly networkDestinationIpV4?: SecurityhubInsightFiltersNetworkDestinationIpV4[] | cdktn.IResolvable;
  /**
  * The destination IPv6 address of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_destination_ip_v6 SecurityhubInsight#network_destination_ip_v6}
  */
  readonly networkDestinationIpV6?: SecurityhubInsightFiltersNetworkDestinationIpV6[] | cdktn.IResolvable;
  /**
  * The destination port of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_destination_port SecurityhubInsight#network_destination_port}
  */
  readonly networkDestinationPort?: SecurityhubInsightFiltersNetworkDestinationPort[] | cdktn.IResolvable;
  /**
  * Indicates the direction of network traffic associated with a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_direction SecurityhubInsight#network_direction}
  */
  readonly networkDirection?: SecurityhubInsightFiltersNetworkDirection[] | cdktn.IResolvable;
  /**
  * The protocol of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_protocol SecurityhubInsight#network_protocol}
  */
  readonly networkProtocol?: SecurityhubInsightFiltersNetworkProtocol[] | cdktn.IResolvable;
  /**
  * The source domain of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_source_domain SecurityhubInsight#network_source_domain}
  */
  readonly networkSourceDomain?: SecurityhubInsightFiltersNetworkSourceDomain[] | cdktn.IResolvable;
  /**
  * The source IPv4 address of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_source_ip_v4 SecurityhubInsight#network_source_ip_v4}
  */
  readonly networkSourceIpV4?: SecurityhubInsightFiltersNetworkSourceIpV4[] | cdktn.IResolvable;
  /**
  * The source IPv6 address of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_source_ip_v6 SecurityhubInsight#network_source_ip_v6}
  */
  readonly networkSourceIpV6?: SecurityhubInsightFiltersNetworkSourceIpV6[] | cdktn.IResolvable;
  /**
  * The source media access control (MAC) address of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_source_mac SecurityhubInsight#network_source_mac}
  */
  readonly networkSourceMac?: SecurityhubInsightFiltersNetworkSourceMac[] | cdktn.IResolvable;
  /**
  * The source port of network-related information about a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#network_source_port SecurityhubInsight#network_source_port}
  */
  readonly networkSourcePort?: SecurityhubInsightFiltersNetworkSourcePort[] | cdktn.IResolvable;
  /**
  * The text of a note.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#note_text SecurityhubInsight#note_text}
  */
  readonly noteText?: SecurityhubInsightFiltersNoteText[] | cdktn.IResolvable;
  /**
  * The timestamp of when the note was updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#note_updated_at SecurityhubInsight#note_updated_at}
  */
  readonly noteUpdatedAt?: SecurityhubInsightFiltersNoteUpdatedAt[] | cdktn.IResolvable;
  /**
  * The principal that created a note.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#note_updated_by SecurityhubInsight#note_updated_by}
  */
  readonly noteUpdatedBy?: SecurityhubInsightFiltersNoteUpdatedBy[] | cdktn.IResolvable;
  /**
  * A timestamp that identifies when the process was launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#process_launched_at SecurityhubInsight#process_launched_at}
  */
  readonly processLaunchedAt?: SecurityhubInsightFiltersProcessLaunchedAt[] | cdktn.IResolvable;
  /**
  * The name of the process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#process_name SecurityhubInsight#process_name}
  */
  readonly processName?: SecurityhubInsightFiltersProcessName[] | cdktn.IResolvable;
  /**
  * The parent process ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#process_parent_pid SecurityhubInsight#process_parent_pid}
  */
  readonly processParentPid?: SecurityhubInsightFiltersProcessParentPid[] | cdktn.IResolvable;
  /**
  * The path to the process executable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#process_path SecurityhubInsight#process_path}
  */
  readonly processPath?: SecurityhubInsightFiltersProcessPath[] | cdktn.IResolvable;
  /**
  * The process ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#process_pid SecurityhubInsight#process_pid}
  */
  readonly processPid?: SecurityhubInsightFiltersProcessPid[] | cdktn.IResolvable;
  /**
  * A timestamp that identifies when the process was terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#process_terminated_at SecurityhubInsight#process_terminated_at}
  */
  readonly processTerminatedAt?: SecurityhubInsightFiltersProcessTerminatedAt[] | cdktn.IResolvable;
  /**
  * The ARN generated by Security Hub that uniquely identifies a third-party company (security findings provider) after this provider's product (solution that generates findings) is registered with Security Hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#product_arn SecurityhubInsight#product_arn}
  */
  readonly productArn?: SecurityhubInsightFiltersProductArn[] | cdktn.IResolvable;
  /**
  * A data type where security findings providers can include additional solution-specific details that aren't part of the defined AwsSecurityFinding format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#product_fields SecurityhubInsight#product_fields}
  */
  readonly productFields?: SecurityhubInsightFiltersProductFields[] | cdktn.IResolvable;
  /**
  * The name of the solution (product) that generates findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#product_name SecurityhubInsight#product_name}
  */
  readonly productName?: SecurityhubInsightFiltersProductName[] | cdktn.IResolvable;
  /**
  * The recommendation of what to do about the issue described in a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#recommendation_text SecurityhubInsight#recommendation_text}
  */
  readonly recommendationText?: SecurityhubInsightFiltersRecommendationText[] | cdktn.IResolvable;
  /**
  * The updated record state for the finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#record_state SecurityhubInsight#record_state}
  */
  readonly recordState?: SecurityhubInsightFiltersRecordState[] | cdktn.IResolvable;
  /**
  * The Region from which the finding was generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#region SecurityhubInsight#region}
  */
  readonly region?: SecurityhubInsightFiltersRegion[] | cdktn.IResolvable;
  /**
  * The solution-generated identifier for a related finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#related_findings_id SecurityhubInsight#related_findings_id}
  */
  readonly relatedFindingsId?: SecurityhubInsightFiltersRelatedFindingsId[] | cdktn.IResolvable;
  /**
  * The ARN of the solution that generated a related finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#related_findings_product_arn SecurityhubInsight#related_findings_product_arn}
  */
  readonly relatedFindingsProductArn?: SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktn.IResolvable;
  /**
  * The ARN of the application that is related to a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_application_arn SecurityhubInsight#resource_application_arn}
  */
  readonly resourceApplicationArn?: SecurityhubInsightFiltersResourceApplicationArn[] | cdktn.IResolvable;
  /**
  * The name of the application that is related to a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_application_name SecurityhubInsight#resource_application_name}
  */
  readonly resourceApplicationName?: SecurityhubInsightFiltersResourceApplicationName[] | cdktn.IResolvable;
  /**
  * The IAM profile ARN of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_iam_instance_profile_arn SecurityhubInsight#resource_aws_ec_2_instance_iam_instance_profile_arn}
  */
  readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktn.IResolvable;
  /**
  * The Amazon Machine Image (AMI) ID of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_image_id SecurityhubInsight#resource_aws_ec_2_instance_image_id}
  */
  readonly resourceAwsEc2InstanceImageId?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktn.IResolvable;
  /**
  * The IPv4 addresses associated with the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_ip_v4_addresses SecurityhubInsight#resource_aws_ec_2_instance_ip_v4_addresses}
  */
  readonly resourceAwsEc2InstanceIpV4Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpV4Addresses[] | cdktn.IResolvable;
  /**
  * The IPv6 addresses associated with the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_ip_v6_addresses SecurityhubInsight#resource_aws_ec_2_instance_ip_v6_addresses}
  */
  readonly resourceAwsEc2InstanceIpV6Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpV6Addresses[] | cdktn.IResolvable;
  /**
  * The key name associated with the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_key_name SecurityhubInsight#resource_aws_ec_2_instance_key_name}
  */
  readonly resourceAwsEc2InstanceKeyName?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktn.IResolvable;
  /**
  * The date and time the instance was launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_launched_at SecurityhubInsight#resource_aws_ec_2_instance_launched_at}
  */
  readonly resourceAwsEc2InstanceLaunchedAt?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktn.IResolvable;
  /**
  * The identifier of the subnet that the instance was launched in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_subnet_id SecurityhubInsight#resource_aws_ec_2_instance_subnet_id}
  */
  readonly resourceAwsEc2InstanceSubnetId?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktn.IResolvable;
  /**
  * The instance type of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_type SecurityhubInsight#resource_aws_ec_2_instance_type}
  */
  readonly resourceAwsEc2InstanceType?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktn.IResolvable;
  /**
  * The identifier of the VPC that the instance was launched in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_vpc_id SecurityhubInsight#resource_aws_ec_2_instance_vpc_id}
  */
  readonly resourceAwsEc2InstanceVpcId?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktn.IResolvable;
  /**
  * The creation date/time of the IAM access key related to a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_created_at SecurityhubInsight#resource_aws_iam_access_key_created_at}
  */
  readonly resourceAwsIamAccessKeyCreatedAt?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktn.IResolvable;
  /**
  * The name of the principal that is associated with an IAM access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_principal_name SecurityhubInsight#resource_aws_iam_access_key_principal_name}
  */
  readonly resourceAwsIamAccessKeyPrincipalName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyPrincipalName[] | cdktn.IResolvable;
  /**
  * The status of the IAM access key related to a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_status SecurityhubInsight#resource_aws_iam_access_key_status}
  */
  readonly resourceAwsIamAccessKeyStatus?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktn.IResolvable;
  /**
  * The user associated with the IAM access key related to a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_user_name SecurityhubInsight#resource_aws_iam_access_key_user_name}
  */
  readonly resourceAwsIamAccessKeyUserName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktn.IResolvable;
  /**
  * The name of an IAM user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_iam_user_user_name SecurityhubInsight#resource_aws_iam_user_user_name}
  */
  readonly resourceAwsIamUserUserName?: SecurityhubInsightFiltersResourceAwsIamUserUserName[] | cdktn.IResolvable;
  /**
  * The canonical user ID of the owner of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_id SecurityhubInsight#resource_aws_s3_bucket_owner_id}
  */
  readonly resourceAwsS3BucketOwnerId?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktn.IResolvable;
  /**
  * The display name of the owner of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_name SecurityhubInsight#resource_aws_s3_bucket_owner_name}
  */
  readonly resourceAwsS3BucketOwnerName?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktn.IResolvable;
  /**
  * The identifier of the image related to a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_container_image_id SecurityhubInsight#resource_container_image_id}
  */
  readonly resourceContainerImageId?: SecurityhubInsightFiltersResourceContainerImageId[] | cdktn.IResolvable;
  /**
  * The name of the image related to a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_container_image_name SecurityhubInsight#resource_container_image_name}
  */
  readonly resourceContainerImageName?: SecurityhubInsightFiltersResourceContainerImageName[] | cdktn.IResolvable;
  /**
  * A timestamp that identifies when the container was started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_container_launched_at SecurityhubInsight#resource_container_launched_at}
  */
  readonly resourceContainerLaunchedAt?: SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktn.IResolvable;
  /**
  * The name of the container related to a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_container_name SecurityhubInsight#resource_container_name}
  */
  readonly resourceContainerName?: SecurityhubInsightFiltersResourceContainerName[] | cdktn.IResolvable;
  /**
  * The details of a resource that doesn't have a specific subfield for the resource type defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_details_other SecurityhubInsight#resource_details_other}
  */
  readonly resourceDetailsOther?: SecurityhubInsightFiltersResourceDetailsOther[] | cdktn.IResolvable;
  /**
  * The canonical identifier for the given resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_id SecurityhubInsight#resource_id}
  */
  readonly resourceId?: SecurityhubInsightFiltersResourceId[] | cdktn.IResolvable;
  /**
  * The canonical AWS partition name that the Region is assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_partition SecurityhubInsight#resource_partition}
  */
  readonly resourcePartition?: SecurityhubInsightFiltersResourcePartition[] | cdktn.IResolvable;
  /**
  * The canonical AWS external Region name where this resource is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_region SecurityhubInsight#resource_region}
  */
  readonly resourceRegion?: SecurityhubInsightFiltersResourceRegion[] | cdktn.IResolvable;
  /**
  * A list of AWS tags associated with a resource at the time the finding was processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_tags SecurityhubInsight#resource_tags}
  */
  readonly resourceTags?: SecurityhubInsightFiltersResourceTags[] | cdktn.IResolvable;
  /**
  * Specifies the type of the resource that details are provided for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#resource_type SecurityhubInsight#resource_type}
  */
  readonly resourceType?: SecurityhubInsightFiltersResourceType[] | cdktn.IResolvable;
  /**
  * Indicates whether or not sample findings are included in the filter results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#sample SecurityhubInsight#sample}
  */
  readonly sample?: SecurityhubInsightFiltersSample[] | cdktn.IResolvable;
  /**
  * The label of a finding's severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#severity_label SecurityhubInsight#severity_label}
  */
  readonly severityLabel?: SecurityhubInsightFiltersSeverityLabel[] | cdktn.IResolvable;
  /**
  * The normalized severity of a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#severity_normalized SecurityhubInsight#severity_normalized}
  */
  readonly severityNormalized?: SecurityhubInsightFiltersSeverityNormalized[] | cdktn.IResolvable;
  /**
  * The native severity as defined by the security findings provider's solution that generated the finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#severity_product SecurityhubInsight#severity_product}
  */
  readonly severityProduct?: SecurityhubInsightFiltersSeverityProduct[] | cdktn.IResolvable;
  /**
  * A URL that links to a page about the current finding in the security findings provider's solution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#source_url SecurityhubInsight#source_url}
  */
  readonly sourceUrl?: SecurityhubInsightFiltersSourceUrl[] | cdktn.IResolvable;
  /**
  * The category of a threat intelligence indicator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#threat_intel_indicator_category SecurityhubInsight#threat_intel_indicator_category}
  */
  readonly threatIntelIndicatorCategory?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktn.IResolvable;
  /**
  * A timestamp that identifies the last observation of a threat intelligence indicator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#threat_intel_indicator_last_observed_at SecurityhubInsight#threat_intel_indicator_last_observed_at}
  */
  readonly threatIntelIndicatorLastObservedAt?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktn.IResolvable;
  /**
  * The source of the threat intelligence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#threat_intel_indicator_source SecurityhubInsight#threat_intel_indicator_source}
  */
  readonly threatIntelIndicatorSource?: SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktn.IResolvable;
  /**
  * The URL for more details from the source of the threat intelligence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#threat_intel_indicator_source_url SecurityhubInsight#threat_intel_indicator_source_url}
  */
  readonly threatIntelIndicatorSourceUrl?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktn.IResolvable;
  /**
  * The type of a threat intelligence indicator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#threat_intel_indicator_type SecurityhubInsight#threat_intel_indicator_type}
  */
  readonly threatIntelIndicatorType?: SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktn.IResolvable;
  /**
  * The value of a threat intelligence indicator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#threat_intel_indicator_value SecurityhubInsight#threat_intel_indicator_value}
  */
  readonly threatIntelIndicatorValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktn.IResolvable;
  /**
  * A finding's title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#title SecurityhubInsight#title}
  */
  readonly title?: SecurityhubInsightFiltersTitle[] | cdktn.IResolvable;
  /**
  * A finding type in the format of namespace/category/classifier that classifies a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#type SecurityhubInsight#type}
  */
  readonly type?: SecurityhubInsightFiltersType[] | cdktn.IResolvable;
  /**
  * An ISO8601-formatted timestamp that indicates when the security findings provider last updated the finding record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#updated_at SecurityhubInsight#updated_at}
  */
  readonly updatedAt?: SecurityhubInsightFiltersUpdatedAt[] | cdktn.IResolvable;
  /**
  * A list of name/value string pairs associated with the finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#user_defined_fields SecurityhubInsight#user_defined_fields}
  */
  readonly userDefinedFields?: SecurityhubInsightFiltersUserDefinedFields[] | cdktn.IResolvable;
  /**
  * The veracity of a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#verification_state SecurityhubInsight#verification_state}
  */
  readonly verificationState?: SecurityhubInsightFiltersVerificationState[] | cdktn.IResolvable;
  /**
  * Indicates whether a software vulnerability in your environment has a known exploit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#vulnerabilities_exploit_available SecurityhubInsight#vulnerabilities_exploit_available}
  */
  readonly vulnerabilitiesExploitAvailable?: SecurityhubInsightFiltersVulnerabilitiesExploitAvailable[] | cdktn.IResolvable;
  /**
  * Indicates whether a vulnerability is fixed in a newer version of the affected software packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#vulnerabilities_fix_available SecurityhubInsight#vulnerabilities_fix_available}
  */
  readonly vulnerabilitiesFixAvailable?: SecurityhubInsightFiltersVulnerabilitiesFixAvailable[] | cdktn.IResolvable;
  /**
  * The workflow state of a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#workflow_state SecurityhubInsight#workflow_state}
  */
  readonly workflowState?: SecurityhubInsightFiltersWorkflowState[] | cdktn.IResolvable;
  /**
  * The status of the investigation into a finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/securityhub_insight#workflow_status SecurityhubInsight#workflow_status}
  */
  readonly workflowStatus?: SecurityhubInsightFiltersWorkflowStatus[] | cdktn.IResolvable;
}

export function securityhubInsightFiltersToTerraform(struct?: SecurityhubInsightFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account_id: cdktn.listMapper(securityhubInsightFiltersAwsAccountIdToTerraform, false)(struct!.awsAccountId),
    aws_account_name: cdktn.listMapper(securityhubInsightFiltersAwsAccountNameToTerraform, false)(struct!.awsAccountName),
    company_name: cdktn.listMapper(securityhubInsightFiltersCompanyNameToTerraform, false)(struct!.companyName),
    compliance_associated_standards_id: cdktn.listMapper(securityhubInsightFiltersComplianceAssociatedStandardsIdToTerraform, false)(struct!.complianceAssociatedStandardsId),
    compliance_security_control_id: cdktn.listMapper(securityhubInsightFiltersComplianceSecurityControlIdToTerraform, false)(struct!.complianceSecurityControlId),
    compliance_security_control_parameters_name: cdktn.listMapper(securityhubInsightFiltersComplianceSecurityControlParametersNameToTerraform, false)(struct!.complianceSecurityControlParametersName),
    compliance_security_control_parameters_value: cdktn.listMapper(securityhubInsightFiltersComplianceSecurityControlParametersValueToTerraform, false)(struct!.complianceSecurityControlParametersValue),
    compliance_status: cdktn.listMapper(securityhubInsightFiltersComplianceStatusToTerraform, false)(struct!.complianceStatus),
    confidence: cdktn.listMapper(securityhubInsightFiltersConfidenceToTerraform, false)(struct!.confidence),
    created_at: cdktn.listMapper(securityhubInsightFiltersCreatedAtToTerraform, false)(struct!.createdAt),
    criticality: cdktn.listMapper(securityhubInsightFiltersCriticalityToTerraform, false)(struct!.criticality),
    description: cdktn.listMapper(securityhubInsightFiltersDescriptionToTerraform, false)(struct!.description),
    finding_provider_fields_confidence: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform, false)(struct!.findingProviderFieldsConfidence),
    finding_provider_fields_criticality: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform, false)(struct!.findingProviderFieldsCriticality),
    finding_provider_fields_related_findings_id: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform, false)(struct!.findingProviderFieldsRelatedFindingsId),
    finding_provider_fields_related_findings_product_arn: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform, false)(struct!.findingProviderFieldsRelatedFindingsProductArn),
    finding_provider_fields_severity_label: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform, false)(struct!.findingProviderFieldsSeverityLabel),
    finding_provider_fields_severity_original: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform, false)(struct!.findingProviderFieldsSeverityOriginal),
    finding_provider_fields_types: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsTypesToTerraform, false)(struct!.findingProviderFieldsTypes),
    first_observed_at: cdktn.listMapper(securityhubInsightFiltersFirstObservedAtToTerraform, false)(struct!.firstObservedAt),
    generator_id: cdktn.listMapper(securityhubInsightFiltersGeneratorIdToTerraform, false)(struct!.generatorId),
    id: cdktn.listMapper(securityhubInsightFiltersIdToTerraform, false)(struct!.id),
    keyword: cdktn.listMapper(securityhubInsightFiltersKeywordToTerraform, false)(struct!.keyword),
    last_observed_at: cdktn.listMapper(securityhubInsightFiltersLastObservedAtToTerraform, false)(struct!.lastObservedAt),
    malware_name: cdktn.listMapper(securityhubInsightFiltersMalwareNameToTerraform, false)(struct!.malwareName),
    malware_path: cdktn.listMapper(securityhubInsightFiltersMalwarePathToTerraform, false)(struct!.malwarePath),
    malware_state: cdktn.listMapper(securityhubInsightFiltersMalwareStateToTerraform, false)(struct!.malwareState),
    malware_type: cdktn.listMapper(securityhubInsightFiltersMalwareTypeToTerraform, false)(struct!.malwareType),
    network_destination_domain: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationDomainToTerraform, false)(struct!.networkDestinationDomain),
    network_destination_ip_v4: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationIpV4ToTerraform, false)(struct!.networkDestinationIpV4),
    network_destination_ip_v6: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationIpV6ToTerraform, false)(struct!.networkDestinationIpV6),
    network_destination_port: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationPortToTerraform, false)(struct!.networkDestinationPort),
    network_direction: cdktn.listMapper(securityhubInsightFiltersNetworkDirectionToTerraform, false)(struct!.networkDirection),
    network_protocol: cdktn.listMapper(securityhubInsightFiltersNetworkProtocolToTerraform, false)(struct!.networkProtocol),
    network_source_domain: cdktn.listMapper(securityhubInsightFiltersNetworkSourceDomainToTerraform, false)(struct!.networkSourceDomain),
    network_source_ip_v4: cdktn.listMapper(securityhubInsightFiltersNetworkSourceIpV4ToTerraform, false)(struct!.networkSourceIpV4),
    network_source_ip_v6: cdktn.listMapper(securityhubInsightFiltersNetworkSourceIpV6ToTerraform, false)(struct!.networkSourceIpV6),
    network_source_mac: cdktn.listMapper(securityhubInsightFiltersNetworkSourceMacToTerraform, false)(struct!.networkSourceMac),
    network_source_port: cdktn.listMapper(securityhubInsightFiltersNetworkSourcePortToTerraform, false)(struct!.networkSourcePort),
    note_text: cdktn.listMapper(securityhubInsightFiltersNoteTextToTerraform, false)(struct!.noteText),
    note_updated_at: cdktn.listMapper(securityhubInsightFiltersNoteUpdatedAtToTerraform, false)(struct!.noteUpdatedAt),
    note_updated_by: cdktn.listMapper(securityhubInsightFiltersNoteUpdatedByToTerraform, false)(struct!.noteUpdatedBy),
    process_launched_at: cdktn.listMapper(securityhubInsightFiltersProcessLaunchedAtToTerraform, false)(struct!.processLaunchedAt),
    process_name: cdktn.listMapper(securityhubInsightFiltersProcessNameToTerraform, false)(struct!.processName),
    process_parent_pid: cdktn.listMapper(securityhubInsightFiltersProcessParentPidToTerraform, false)(struct!.processParentPid),
    process_path: cdktn.listMapper(securityhubInsightFiltersProcessPathToTerraform, false)(struct!.processPath),
    process_pid: cdktn.listMapper(securityhubInsightFiltersProcessPidToTerraform, false)(struct!.processPid),
    process_terminated_at: cdktn.listMapper(securityhubInsightFiltersProcessTerminatedAtToTerraform, false)(struct!.processTerminatedAt),
    product_arn: cdktn.listMapper(securityhubInsightFiltersProductArnToTerraform, false)(struct!.productArn),
    product_fields: cdktn.listMapper(securityhubInsightFiltersProductFieldsToTerraform, false)(struct!.productFields),
    product_name: cdktn.listMapper(securityhubInsightFiltersProductNameToTerraform, false)(struct!.productName),
    recommendation_text: cdktn.listMapper(securityhubInsightFiltersRecommendationTextToTerraform, false)(struct!.recommendationText),
    record_state: cdktn.listMapper(securityhubInsightFiltersRecordStateToTerraform, false)(struct!.recordState),
    region: cdktn.listMapper(securityhubInsightFiltersRegionToTerraform, false)(struct!.region),
    related_findings_id: cdktn.listMapper(securityhubInsightFiltersRelatedFindingsIdToTerraform, false)(struct!.relatedFindingsId),
    related_findings_product_arn: cdktn.listMapper(securityhubInsightFiltersRelatedFindingsProductArnToTerraform, false)(struct!.relatedFindingsProductArn),
    resource_application_arn: cdktn.listMapper(securityhubInsightFiltersResourceApplicationArnToTerraform, false)(struct!.resourceApplicationArn),
    resource_application_name: cdktn.listMapper(securityhubInsightFiltersResourceApplicationNameToTerraform, false)(struct!.resourceApplicationName),
    resource_aws_ec_2_instance_iam_instance_profile_arn: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform, false)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
    resource_aws_ec_2_instance_image_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform, false)(struct!.resourceAwsEc2InstanceImageId),
    resource_aws_ec_2_instance_ip_v4_addresses: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpV4AddressesToTerraform, false)(struct!.resourceAwsEc2InstanceIpV4Addresses),
    resource_aws_ec_2_instance_ip_v6_addresses: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpV6AddressesToTerraform, false)(struct!.resourceAwsEc2InstanceIpV6Addresses),
    resource_aws_ec_2_instance_key_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform, false)(struct!.resourceAwsEc2InstanceKeyName),
    resource_aws_ec_2_instance_launched_at: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform, false)(struct!.resourceAwsEc2InstanceLaunchedAt),
    resource_aws_ec_2_instance_subnet_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform, false)(struct!.resourceAwsEc2InstanceSubnetId),
    resource_aws_ec_2_instance_type: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform, false)(struct!.resourceAwsEc2InstanceType),
    resource_aws_ec_2_instance_vpc_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform, false)(struct!.resourceAwsEc2InstanceVpcId),
    resource_aws_iam_access_key_created_at: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform, false)(struct!.resourceAwsIamAccessKeyCreatedAt),
    resource_aws_iam_access_key_principal_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyPrincipalNameToTerraform, false)(struct!.resourceAwsIamAccessKeyPrincipalName),
    resource_aws_iam_access_key_status: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform, false)(struct!.resourceAwsIamAccessKeyStatus),
    resource_aws_iam_access_key_user_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform, false)(struct!.resourceAwsIamAccessKeyUserName),
    resource_aws_iam_user_user_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamUserUserNameToTerraform, false)(struct!.resourceAwsIamUserUserName),
    resource_aws_s3_bucket_owner_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform, false)(struct!.resourceAwsS3BucketOwnerId),
    resource_aws_s3_bucket_owner_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform, false)(struct!.resourceAwsS3BucketOwnerName),
    resource_container_image_id: cdktn.listMapper(securityhubInsightFiltersResourceContainerImageIdToTerraform, false)(struct!.resourceContainerImageId),
    resource_container_image_name: cdktn.listMapper(securityhubInsightFiltersResourceContainerImageNameToTerraform, false)(struct!.resourceContainerImageName),
    resource_container_launched_at: cdktn.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtToTerraform, false)(struct!.resourceContainerLaunchedAt),
    resource_container_name: cdktn.listMapper(securityhubInsightFiltersResourceContainerNameToTerraform, false)(struct!.resourceContainerName),
    resource_details_other: cdktn.listMapper(securityhubInsightFiltersResourceDetailsOtherToTerraform, false)(struct!.resourceDetailsOther),
    resource_id: cdktn.listMapper(securityhubInsightFiltersResourceIdToTerraform, false)(struct!.resourceId),
    resource_partition: cdktn.listMapper(securityhubInsightFiltersResourcePartitionToTerraform, false)(struct!.resourcePartition),
    resource_region: cdktn.listMapper(securityhubInsightFiltersResourceRegionToTerraform, false)(struct!.resourceRegion),
    resource_tags: cdktn.listMapper(securityhubInsightFiltersResourceTagsToTerraform, false)(struct!.resourceTags),
    resource_type: cdktn.listMapper(securityhubInsightFiltersResourceTypeToTerraform, false)(struct!.resourceType),
    sample: cdktn.listMapper(securityhubInsightFiltersSampleToTerraform, false)(struct!.sample),
    severity_label: cdktn.listMapper(securityhubInsightFiltersSeverityLabelToTerraform, false)(struct!.severityLabel),
    severity_normalized: cdktn.listMapper(securityhubInsightFiltersSeverityNormalizedToTerraform, false)(struct!.severityNormalized),
    severity_product: cdktn.listMapper(securityhubInsightFiltersSeverityProductToTerraform, false)(struct!.severityProduct),
    source_url: cdktn.listMapper(securityhubInsightFiltersSourceUrlToTerraform, false)(struct!.sourceUrl),
    threat_intel_indicator_category: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform, false)(struct!.threatIntelIndicatorCategory),
    threat_intel_indicator_last_observed_at: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform, false)(struct!.threatIntelIndicatorLastObservedAt),
    threat_intel_indicator_source: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform, false)(struct!.threatIntelIndicatorSource),
    threat_intel_indicator_source_url: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform, false)(struct!.threatIntelIndicatorSourceUrl),
    threat_intel_indicator_type: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform, false)(struct!.threatIntelIndicatorType),
    threat_intel_indicator_value: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorValueToTerraform, false)(struct!.threatIntelIndicatorValue),
    title: cdktn.listMapper(securityhubInsightFiltersTitleToTerraform, false)(struct!.title),
    type: cdktn.listMapper(securityhubInsightFiltersTypeToTerraform, false)(struct!.type),
    updated_at: cdktn.listMapper(securityhubInsightFiltersUpdatedAtToTerraform, false)(struct!.updatedAt),
    user_defined_fields: cdktn.listMapper(securityhubInsightFiltersUserDefinedFieldsToTerraform, false)(struct!.userDefinedFields),
    verification_state: cdktn.listMapper(securityhubInsightFiltersVerificationStateToTerraform, false)(struct!.verificationState),
    vulnerabilities_exploit_available: cdktn.listMapper(securityhubInsightFiltersVulnerabilitiesExploitAvailableToTerraform, false)(struct!.vulnerabilitiesExploitAvailable),
    vulnerabilities_fix_available: cdktn.listMapper(securityhubInsightFiltersVulnerabilitiesFixAvailableToTerraform, false)(struct!.vulnerabilitiesFixAvailable),
    workflow_state: cdktn.listMapper(securityhubInsightFiltersWorkflowStateToTerraform, false)(struct!.workflowState),
    workflow_status: cdktn.listMapper(securityhubInsightFiltersWorkflowStatusToTerraform, false)(struct!.workflowStatus),
  }
}


export function securityhubInsightFiltersToHclTerraform(struct?: SecurityhubInsightFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersAwsAccountIdToHclTerraform, false)(struct!.awsAccountId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersAwsAccountIdList",
    },
    aws_account_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersAwsAccountNameToHclTerraform, false)(struct!.awsAccountName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersAwsAccountNameList",
    },
    company_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersCompanyNameToHclTerraform, false)(struct!.companyName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersCompanyNameList",
    },
    compliance_associated_standards_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceAssociatedStandardsIdToHclTerraform, false)(struct!.complianceAssociatedStandardsId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersComplianceAssociatedStandardsIdList",
    },
    compliance_security_control_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceSecurityControlIdToHclTerraform, false)(struct!.complianceSecurityControlId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersComplianceSecurityControlIdList",
    },
    compliance_security_control_parameters_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceSecurityControlParametersNameToHclTerraform, false)(struct!.complianceSecurityControlParametersName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersComplianceSecurityControlParametersNameList",
    },
    compliance_security_control_parameters_value: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceSecurityControlParametersValueToHclTerraform, false)(struct!.complianceSecurityControlParametersValue),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersComplianceSecurityControlParametersValueList",
    },
    compliance_status: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceStatusToHclTerraform, false)(struct!.complianceStatus),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersComplianceStatusList",
    },
    confidence: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersConfidenceToHclTerraform, false)(struct!.confidence),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersConfidenceList",
    },
    created_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersCreatedAtToHclTerraform, false)(struct!.createdAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersCreatedAtList",
    },
    criticality: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersCriticalityToHclTerraform, false)(struct!.criticality),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersCriticalityList",
    },
    description: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersDescriptionToHclTerraform, false)(struct!.description),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersDescriptionList",
    },
    finding_provider_fields_confidence: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsConfidenceToHclTerraform, false)(struct!.findingProviderFieldsConfidence),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsConfidenceList",
    },
    finding_provider_fields_criticality: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsCriticalityToHclTerraform, false)(struct!.findingProviderFieldsCriticality),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsCriticalityList",
    },
    finding_provider_fields_related_findings_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToHclTerraform, false)(struct!.findingProviderFieldsRelatedFindingsId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList",
    },
    finding_provider_fields_related_findings_product_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToHclTerraform, false)(struct!.findingProviderFieldsRelatedFindingsProductArn),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList",
    },
    finding_provider_fields_severity_label: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToHclTerraform, false)(struct!.findingProviderFieldsSeverityLabel),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList",
    },
    finding_provider_fields_severity_original: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToHclTerraform, false)(struct!.findingProviderFieldsSeverityOriginal),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList",
    },
    finding_provider_fields_types: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsTypesToHclTerraform, false)(struct!.findingProviderFieldsTypes),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsTypesList",
    },
    first_observed_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFirstObservedAtToHclTerraform, false)(struct!.firstObservedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersFirstObservedAtList",
    },
    generator_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersGeneratorIdToHclTerraform, false)(struct!.generatorId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersGeneratorIdList",
    },
    id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersIdToHclTerraform, false)(struct!.id),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersIdList",
    },
    keyword: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersKeywordToHclTerraform, false)(struct!.keyword),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersKeywordList",
    },
    last_observed_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersLastObservedAtToHclTerraform, false)(struct!.lastObservedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersLastObservedAtList",
    },
    malware_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwareNameToHclTerraform, false)(struct!.malwareName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersMalwareNameList",
    },
    malware_path: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwarePathToHclTerraform, false)(struct!.malwarePath),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersMalwarePathList",
    },
    malware_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwareStateToHclTerraform, false)(struct!.malwareState),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersMalwareStateList",
    },
    malware_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwareTypeToHclTerraform, false)(struct!.malwareType),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersMalwareTypeList",
    },
    network_destination_domain: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationDomainToHclTerraform, false)(struct!.networkDestinationDomain),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationDomainList",
    },
    network_destination_ip_v4: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationIpV4ToHclTerraform, false)(struct!.networkDestinationIpV4),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationIpV4List",
    },
    network_destination_ip_v6: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationIpV6ToHclTerraform, false)(struct!.networkDestinationIpV6),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationIpV6List",
    },
    network_destination_port: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationPortToHclTerraform, false)(struct!.networkDestinationPort),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationPortList",
    },
    network_direction: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDirectionToHclTerraform, false)(struct!.networkDirection),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkDirectionList",
    },
    network_protocol: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkProtocolToHclTerraform, false)(struct!.networkProtocol),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkProtocolList",
    },
    network_source_domain: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceDomainToHclTerraform, false)(struct!.networkSourceDomain),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceDomainList",
    },
    network_source_ip_v4: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceIpV4ToHclTerraform, false)(struct!.networkSourceIpV4),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceIpV4List",
    },
    network_source_ip_v6: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceIpV6ToHclTerraform, false)(struct!.networkSourceIpV6),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceIpV6List",
    },
    network_source_mac: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceMacToHclTerraform, false)(struct!.networkSourceMac),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceMacList",
    },
    network_source_port: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourcePortToHclTerraform, false)(struct!.networkSourcePort),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNetworkSourcePortList",
    },
    note_text: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNoteTextToHclTerraform, false)(struct!.noteText),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNoteTextList",
    },
    note_updated_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNoteUpdatedAtToHclTerraform, false)(struct!.noteUpdatedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNoteUpdatedAtList",
    },
    note_updated_by: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNoteUpdatedByToHclTerraform, false)(struct!.noteUpdatedBy),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersNoteUpdatedByList",
    },
    process_launched_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessLaunchedAtToHclTerraform, false)(struct!.processLaunchedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProcessLaunchedAtList",
    },
    process_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessNameToHclTerraform, false)(struct!.processName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProcessNameList",
    },
    process_parent_pid: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessParentPidToHclTerraform, false)(struct!.processParentPid),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProcessParentPidList",
    },
    process_path: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessPathToHclTerraform, false)(struct!.processPath),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProcessPathList",
    },
    process_pid: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessPidToHclTerraform, false)(struct!.processPid),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProcessPidList",
    },
    process_terminated_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessTerminatedAtToHclTerraform, false)(struct!.processTerminatedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProcessTerminatedAtList",
    },
    product_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProductArnToHclTerraform, false)(struct!.productArn),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProductArnList",
    },
    product_fields: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProductFieldsToHclTerraform, false)(struct!.productFields),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProductFieldsList",
    },
    product_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProductNameToHclTerraform, false)(struct!.productName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersProductNameList",
    },
    recommendation_text: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRecommendationTextToHclTerraform, false)(struct!.recommendationText),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersRecommendationTextList",
    },
    record_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRecordStateToHclTerraform, false)(struct!.recordState),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersRecordStateList",
    },
    region: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRegionToHclTerraform, false)(struct!.region),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersRegionList",
    },
    related_findings_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRelatedFindingsIdToHclTerraform, false)(struct!.relatedFindingsId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersRelatedFindingsIdList",
    },
    related_findings_product_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRelatedFindingsProductArnToHclTerraform, false)(struct!.relatedFindingsProductArn),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersRelatedFindingsProductArnList",
    },
    resource_application_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceApplicationArnToHclTerraform, false)(struct!.resourceApplicationArn),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceApplicationArnList",
    },
    resource_application_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceApplicationNameToHclTerraform, false)(struct!.resourceApplicationName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceApplicationNameList",
    },
    resource_aws_ec_2_instance_iam_instance_profile_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToHclTerraform, false)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList",
    },
    resource_aws_ec_2_instance_image_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToHclTerraform, false)(struct!.resourceAwsEc2InstanceImageId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList",
    },
    resource_aws_ec_2_instance_ip_v4_addresses: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceIpV4AddressesToHclTerraform, false)(struct!.resourceAwsEc2InstanceIpV4Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceIpV4AddressesList",
    },
    resource_aws_ec_2_instance_ip_v6_addresses: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceIpV6AddressesToHclTerraform, false)(struct!.resourceAwsEc2InstanceIpV6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceIpV6AddressesList",
    },
    resource_aws_ec_2_instance_key_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToHclTerraform, false)(struct!.resourceAwsEc2InstanceKeyName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList",
    },
    resource_aws_ec_2_instance_launched_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToHclTerraform, false)(struct!.resourceAwsEc2InstanceLaunchedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList",
    },
    resource_aws_ec_2_instance_subnet_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToHclTerraform, false)(struct!.resourceAwsEc2InstanceSubnetId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList",
    },
    resource_aws_ec_2_instance_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceTypeToHclTerraform, false)(struct!.resourceAwsEc2InstanceType),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList",
    },
    resource_aws_ec_2_instance_vpc_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToHclTerraform, false)(struct!.resourceAwsEc2InstanceVpcId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList",
    },
    resource_aws_iam_access_key_created_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToHclTerraform, false)(struct!.resourceAwsIamAccessKeyCreatedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList",
    },
    resource_aws_iam_access_key_principal_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyPrincipalNameToHclTerraform, false)(struct!.resourceAwsIamAccessKeyPrincipalName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyPrincipalNameList",
    },
    resource_aws_iam_access_key_status: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToHclTerraform, false)(struct!.resourceAwsIamAccessKeyStatus),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList",
    },
    resource_aws_iam_access_key_user_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToHclTerraform, false)(struct!.resourceAwsIamAccessKeyUserName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList",
    },
    resource_aws_iam_user_user_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamUserUserNameToHclTerraform, false)(struct!.resourceAwsIamUserUserName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamUserUserNameList",
    },
    resource_aws_s3_bucket_owner_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToHclTerraform, false)(struct!.resourceAwsS3BucketOwnerId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList",
    },
    resource_aws_s3_bucket_owner_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToHclTerraform, false)(struct!.resourceAwsS3BucketOwnerName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList",
    },
    resource_container_image_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerImageIdToHclTerraform, false)(struct!.resourceContainerImageId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceContainerImageIdList",
    },
    resource_container_image_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerImageNameToHclTerraform, false)(struct!.resourceContainerImageName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceContainerImageNameList",
    },
    resource_container_launched_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerLaunchedAtToHclTerraform, false)(struct!.resourceContainerLaunchedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceContainerLaunchedAtList",
    },
    resource_container_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerNameToHclTerraform, false)(struct!.resourceContainerName),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceContainerNameList",
    },
    resource_details_other: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceDetailsOtherToHclTerraform, false)(struct!.resourceDetailsOther),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceDetailsOtherList",
    },
    resource_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceIdToHclTerraform, false)(struct!.resourceId),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceIdList",
    },
    resource_partition: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourcePartitionToHclTerraform, false)(struct!.resourcePartition),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourcePartitionList",
    },
    resource_region: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceRegionToHclTerraform, false)(struct!.resourceRegion),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceRegionList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceTagsToHclTerraform, false)(struct!.resourceTags),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceTagsList",
    },
    resource_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceTypeToHclTerraform, false)(struct!.resourceType),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersResourceTypeList",
    },
    sample: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersSampleToHclTerraform, false)(struct!.sample),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersSampleList",
    },
    severity_label: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersSeverityLabelToHclTerraform, false)(struct!.severityLabel),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersSeverityLabelList",
    },
    severity_normalized: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersSeverityNormalizedToHclTerraform, false)(struct!.severityNormalized),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersSeverityNormalizedList",
    },
    severity_product: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersSeverityProductToHclTerraform, false)(struct!.severityProduct),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersSeverityProductList",
    },
    source_url: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersSourceUrlToHclTerraform, false)(struct!.sourceUrl),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersSourceUrlList",
    },
    threat_intel_indicator_category: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorCategoryToHclTerraform, false)(struct!.threatIntelIndicatorCategory),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorCategoryList",
    },
    threat_intel_indicator_last_observed_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToHclTerraform, false)(struct!.threatIntelIndicatorLastObservedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList",
    },
    threat_intel_indicator_source: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorSourceToHclTerraform, false)(struct!.threatIntelIndicatorSource),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorSourceList",
    },
    threat_intel_indicator_source_url: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToHclTerraform, false)(struct!.threatIntelIndicatorSourceUrl),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList",
    },
    threat_intel_indicator_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorTypeToHclTerraform, false)(struct!.threatIntelIndicatorType),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorTypeList",
    },
    threat_intel_indicator_value: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorValueToHclTerraform, false)(struct!.threatIntelIndicatorValue),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorValueList",
    },
    title: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersTitleToHclTerraform, false)(struct!.title),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersTitleList",
    },
    type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersTypeToHclTerraform, false)(struct!.type),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersTypeList",
    },
    updated_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersUpdatedAtToHclTerraform, false)(struct!.updatedAt),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersUpdatedAtList",
    },
    user_defined_fields: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersUserDefinedFieldsToHclTerraform, false)(struct!.userDefinedFields),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersUserDefinedFieldsList",
    },
    verification_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersVerificationStateToHclTerraform, false)(struct!.verificationState),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersVerificationStateList",
    },
    vulnerabilities_exploit_available: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersVulnerabilitiesExploitAvailableToHclTerraform, false)(struct!.vulnerabilitiesExploitAvailable),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersVulnerabilitiesExploitAvailableList",
    },
    vulnerabilities_fix_available: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersVulnerabilitiesFixAvailableToHclTerraform, false)(struct!.vulnerabilitiesFixAvailable),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersVulnerabilitiesFixAvailableList",
    },
    workflow_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersWorkflowStateToHclTerraform, false)(struct!.workflowState),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersWorkflowStateList",
    },
    workflow_status: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersWorkflowStatusToHclTerraform, false)(struct!.workflowStatus),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubInsightFiltersWorkflowStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubInsightFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
    }
    if (this._awsAccountName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountName = this._awsAccountName?.internalValue;
    }
    if (this._companyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName?.internalValue;
    }
    if (this._complianceAssociatedStandardsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceAssociatedStandardsId = this._complianceAssociatedStandardsId?.internalValue;
    }
    if (this._complianceSecurityControlId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlId = this._complianceSecurityControlId?.internalValue;
    }
    if (this._complianceSecurityControlParametersName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlParametersName = this._complianceSecurityControlParametersName?.internalValue;
    }
    if (this._complianceSecurityControlParametersValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlParametersValue = this._complianceSecurityControlParametersValue?.internalValue;
    }
    if (this._complianceStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStatus = this._complianceStatus?.internalValue;
    }
    if (this._confidence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidence = this._confidence?.internalValue;
    }
    if (this._createdAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt?.internalValue;
    }
    if (this._criticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality?.internalValue;
    }
    if (this._description?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._findingProviderFieldsConfidence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsConfidence = this._findingProviderFieldsConfidence?.internalValue;
    }
    if (this._findingProviderFieldsCriticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsCriticality = this._findingProviderFieldsCriticality?.internalValue;
    }
    if (this._findingProviderFieldsRelatedFindingsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsId = this._findingProviderFieldsRelatedFindingsId?.internalValue;
    }
    if (this._findingProviderFieldsRelatedFindingsProductArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsProductArn = this._findingProviderFieldsRelatedFindingsProductArn?.internalValue;
    }
    if (this._findingProviderFieldsSeverityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityLabel = this._findingProviderFieldsSeverityLabel?.internalValue;
    }
    if (this._findingProviderFieldsSeverityOriginal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityOriginal = this._findingProviderFieldsSeverityOriginal?.internalValue;
    }
    if (this._findingProviderFieldsTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsTypes = this._findingProviderFieldsTypes?.internalValue;
    }
    if (this._firstObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
    }
    if (this._generatorId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatorId = this._generatorId?.internalValue;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._keyword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword?.internalValue;
    }
    if (this._lastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
    }
    if (this._malwareName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareName = this._malwareName?.internalValue;
    }
    if (this._malwarePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwarePath = this._malwarePath?.internalValue;
    }
    if (this._malwareState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareState = this._malwareState?.internalValue;
    }
    if (this._malwareType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareType = this._malwareType?.internalValue;
    }
    if (this._networkDestinationDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationDomain = this._networkDestinationDomain?.internalValue;
    }
    if (this._networkDestinationIpV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpV4 = this._networkDestinationIpV4?.internalValue;
    }
    if (this._networkDestinationIpV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpV6 = this._networkDestinationIpV6?.internalValue;
    }
    if (this._networkDestinationPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationPort = this._networkDestinationPort?.internalValue;
    }
    if (this._networkDirection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDirection = this._networkDirection?.internalValue;
    }
    if (this._networkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol?.internalValue;
    }
    if (this._networkSourceDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceDomain = this._networkSourceDomain?.internalValue;
    }
    if (this._networkSourceIpV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpV4 = this._networkSourceIpV4?.internalValue;
    }
    if (this._networkSourceIpV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpV6 = this._networkSourceIpV6?.internalValue;
    }
    if (this._networkSourceMac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceMac = this._networkSourceMac?.internalValue;
    }
    if (this._networkSourcePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourcePort = this._networkSourcePort?.internalValue;
    }
    if (this._noteText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteText = this._noteText?.internalValue;
    }
    if (this._noteUpdatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedAt = this._noteUpdatedAt?.internalValue;
    }
    if (this._noteUpdatedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedBy = this._noteUpdatedBy?.internalValue;
    }
    if (this._processLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processLaunchedAt = this._processLaunchedAt?.internalValue;
    }
    if (this._processName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName?.internalValue;
    }
    if (this._processParentPid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processParentPid = this._processParentPid?.internalValue;
    }
    if (this._processPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processPath = this._processPath?.internalValue;
    }
    if (this._processPid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processPid = this._processPid?.internalValue;
    }
    if (this._processTerminatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processTerminatedAt = this._processTerminatedAt?.internalValue;
    }
    if (this._productArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productArn = this._productArn?.internalValue;
    }
    if (this._productFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productFields = this._productFields?.internalValue;
    }
    if (this._productName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName?.internalValue;
    }
    if (this._recommendationText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendationText = this._recommendationText?.internalValue;
    }
    if (this._recordState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordState = this._recordState?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    if (this._relatedFindingsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsId = this._relatedFindingsId?.internalValue;
    }
    if (this._relatedFindingsProductArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsProductArn = this._relatedFindingsProductArn?.internalValue;
    }
    if (this._resourceApplicationArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceApplicationArn = this._resourceApplicationArn?.internalValue;
    }
    if (this._resourceApplicationName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceApplicationName = this._resourceApplicationName?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIamInstanceProfileArn = this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue;
    }
    if (this._resourceAwsEc2InstanceImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceImageId = this._resourceAwsEc2InstanceImageId?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIpV4Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpV4Addresses = this._resourceAwsEc2InstanceIpV4Addresses?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIpV6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpV6Addresses = this._resourceAwsEc2InstanceIpV6Addresses?.internalValue;
    }
    if (this._resourceAwsEc2InstanceKeyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceKeyName = this._resourceAwsEc2InstanceKeyName?.internalValue;
    }
    if (this._resourceAwsEc2InstanceLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceLaunchedAt = this._resourceAwsEc2InstanceLaunchedAt?.internalValue;
    }
    if (this._resourceAwsEc2InstanceSubnetId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceSubnetId = this._resourceAwsEc2InstanceSubnetId?.internalValue;
    }
    if (this._resourceAwsEc2InstanceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceType = this._resourceAwsEc2InstanceType?.internalValue;
    }
    if (this._resourceAwsEc2InstanceVpcId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceVpcId = this._resourceAwsEc2InstanceVpcId?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyCreatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyCreatedAt = this._resourceAwsIamAccessKeyCreatedAt?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyPrincipalName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyPrincipalName = this._resourceAwsIamAccessKeyPrincipalName?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyStatus = this._resourceAwsIamAccessKeyStatus?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyUserName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyUserName = this._resourceAwsIamAccessKeyUserName?.internalValue;
    }
    if (this._resourceAwsIamUserUserName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamUserUserName = this._resourceAwsIamUserUserName?.internalValue;
    }
    if (this._resourceAwsS3BucketOwnerId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerId = this._resourceAwsS3BucketOwnerId?.internalValue;
    }
    if (this._resourceAwsS3BucketOwnerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerName = this._resourceAwsS3BucketOwnerName?.internalValue;
    }
    if (this._resourceContainerImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageId = this._resourceContainerImageId?.internalValue;
    }
    if (this._resourceContainerImageName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageName = this._resourceContainerImageName?.internalValue;
    }
    if (this._resourceContainerLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerLaunchedAt = this._resourceContainerLaunchedAt?.internalValue;
    }
    if (this._resourceContainerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerName = this._resourceContainerName?.internalValue;
    }
    if (this._resourceDetailsOther?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceDetailsOther = this._resourceDetailsOther?.internalValue;
    }
    if (this._resourceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId?.internalValue;
    }
    if (this._resourcePartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePartition = this._resourcePartition?.internalValue;
    }
    if (this._resourceRegion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRegion = this._resourceRegion?.internalValue;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    if (this._resourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType?.internalValue;
    }
    if (this._sample?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample?.internalValue;
    }
    if (this._severityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLabel = this._severityLabel?.internalValue;
    }
    if (this._severityNormalized?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityNormalized = this._severityNormalized?.internalValue;
    }
    if (this._severityProduct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityProduct = this._severityProduct?.internalValue;
    }
    if (this._sourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl?.internalValue;
    }
    if (this._threatIntelIndicatorCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorCategory = this._threatIntelIndicatorCategory?.internalValue;
    }
    if (this._threatIntelIndicatorLastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorLastObservedAt = this._threatIntelIndicatorLastObservedAt?.internalValue;
    }
    if (this._threatIntelIndicatorSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSource = this._threatIntelIndicatorSource?.internalValue;
    }
    if (this._threatIntelIndicatorSourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSourceUrl = this._threatIntelIndicatorSourceUrl?.internalValue;
    }
    if (this._threatIntelIndicatorType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorType = this._threatIntelIndicatorType?.internalValue;
    }
    if (this._threatIntelIndicatorValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorValue = this._threatIntelIndicatorValue?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._updatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt?.internalValue;
    }
    if (this._userDefinedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedFields = this._userDefinedFields?.internalValue;
    }
    if (this._verificationState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationState = this._verificationState?.internalValue;
    }
    if (this._vulnerabilitiesExploitAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilitiesExploitAvailable = this._vulnerabilitiesExploitAvailable?.internalValue;
    }
    if (this._vulnerabilitiesFixAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilitiesFixAvailable = this._vulnerabilitiesFixAvailable?.internalValue;
    }
    if (this._workflowState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowState = this._workflowState?.internalValue;
    }
    if (this._workflowStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowStatus = this._workflowStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = undefined;
      this._awsAccountName.internalValue = undefined;
      this._companyName.internalValue = undefined;
      this._complianceAssociatedStandardsId.internalValue = undefined;
      this._complianceSecurityControlId.internalValue = undefined;
      this._complianceSecurityControlParametersName.internalValue = undefined;
      this._complianceSecurityControlParametersValue.internalValue = undefined;
      this._complianceStatus.internalValue = undefined;
      this._confidence.internalValue = undefined;
      this._createdAt.internalValue = undefined;
      this._criticality.internalValue = undefined;
      this._description.internalValue = undefined;
      this._findingProviderFieldsConfidence.internalValue = undefined;
      this._findingProviderFieldsCriticality.internalValue = undefined;
      this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
      this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
      this._findingProviderFieldsSeverityLabel.internalValue = undefined;
      this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
      this._findingProviderFieldsTypes.internalValue = undefined;
      this._firstObservedAt.internalValue = undefined;
      this._generatorId.internalValue = undefined;
      this._id.internalValue = undefined;
      this._keyword.internalValue = undefined;
      this._lastObservedAt.internalValue = undefined;
      this._malwareName.internalValue = undefined;
      this._malwarePath.internalValue = undefined;
      this._malwareState.internalValue = undefined;
      this._malwareType.internalValue = undefined;
      this._networkDestinationDomain.internalValue = undefined;
      this._networkDestinationIpV4.internalValue = undefined;
      this._networkDestinationIpV6.internalValue = undefined;
      this._networkDestinationPort.internalValue = undefined;
      this._networkDirection.internalValue = undefined;
      this._networkProtocol.internalValue = undefined;
      this._networkSourceDomain.internalValue = undefined;
      this._networkSourceIpV4.internalValue = undefined;
      this._networkSourceIpV6.internalValue = undefined;
      this._networkSourceMac.internalValue = undefined;
      this._networkSourcePort.internalValue = undefined;
      this._noteText.internalValue = undefined;
      this._noteUpdatedAt.internalValue = undefined;
      this._noteUpdatedBy.internalValue = undefined;
      this._processLaunchedAt.internalValue = undefined;
      this._processName.internalValue = undefined;
      this._processParentPid.internalValue = undefined;
      this._processPath.internalValue = undefined;
      this._processPid.internalValue = undefined;
      this._processTerminatedAt.internalValue = undefined;
      this._productArn.internalValue = undefined;
      this._productFields.internalValue = undefined;
      this._productName.internalValue = undefined;
      this._recommendationText.internalValue = undefined;
      this._recordState.internalValue = undefined;
      this._region.internalValue = undefined;
      this._relatedFindingsId.internalValue = undefined;
      this._relatedFindingsProductArn.internalValue = undefined;
      this._resourceApplicationArn.internalValue = undefined;
      this._resourceApplicationName.internalValue = undefined;
      this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
      this._resourceAwsEc2InstanceImageId.internalValue = undefined;
      this._resourceAwsEc2InstanceIpV4Addresses.internalValue = undefined;
      this._resourceAwsEc2InstanceIpV6Addresses.internalValue = undefined;
      this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
      this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
      this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
      this._resourceAwsEc2InstanceType.internalValue = undefined;
      this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
      this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
      this._resourceAwsIamAccessKeyPrincipalName.internalValue = undefined;
      this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
      this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
      this._resourceAwsIamUserUserName.internalValue = undefined;
      this._resourceAwsS3BucketOwnerId.internalValue = undefined;
      this._resourceAwsS3BucketOwnerName.internalValue = undefined;
      this._resourceContainerImageId.internalValue = undefined;
      this._resourceContainerImageName.internalValue = undefined;
      this._resourceContainerLaunchedAt.internalValue = undefined;
      this._resourceContainerName.internalValue = undefined;
      this._resourceDetailsOther.internalValue = undefined;
      this._resourceId.internalValue = undefined;
      this._resourcePartition.internalValue = undefined;
      this._resourceRegion.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._resourceType.internalValue = undefined;
      this._sample.internalValue = undefined;
      this._severityLabel.internalValue = undefined;
      this._severityNormalized.internalValue = undefined;
      this._severityProduct.internalValue = undefined;
      this._sourceUrl.internalValue = undefined;
      this._threatIntelIndicatorCategory.internalValue = undefined;
      this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
      this._threatIntelIndicatorSource.internalValue = undefined;
      this._threatIntelIndicatorSourceUrl.internalValue = undefined;
      this._threatIntelIndicatorType.internalValue = undefined;
      this._threatIntelIndicatorValue.internalValue = undefined;
      this._title.internalValue = undefined;
      this._type.internalValue = undefined;
      this._updatedAt.internalValue = undefined;
      this._userDefinedFields.internalValue = undefined;
      this._verificationState.internalValue = undefined;
      this._vulnerabilitiesExploitAvailable.internalValue = undefined;
      this._vulnerabilitiesFixAvailable.internalValue = undefined;
      this._workflowState.internalValue = undefined;
      this._workflowStatus.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = value.awsAccountId;
      this._awsAccountName.internalValue = value.awsAccountName;
      this._companyName.internalValue = value.companyName;
      this._complianceAssociatedStandardsId.internalValue = value.complianceAssociatedStandardsId;
      this._complianceSecurityControlId.internalValue = value.complianceSecurityControlId;
      this._complianceSecurityControlParametersName.internalValue = value.complianceSecurityControlParametersName;
      this._complianceSecurityControlParametersValue.internalValue = value.complianceSecurityControlParametersValue;
      this._complianceStatus.internalValue = value.complianceStatus;
      this._confidence.internalValue = value.confidence;
      this._createdAt.internalValue = value.createdAt;
      this._criticality.internalValue = value.criticality;
      this._description.internalValue = value.description;
      this._findingProviderFieldsConfidence.internalValue = value.findingProviderFieldsConfidence;
      this._findingProviderFieldsCriticality.internalValue = value.findingProviderFieldsCriticality;
      this._findingProviderFieldsRelatedFindingsId.internalValue = value.findingProviderFieldsRelatedFindingsId;
      this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value.findingProviderFieldsRelatedFindingsProductArn;
      this._findingProviderFieldsSeverityLabel.internalValue = value.findingProviderFieldsSeverityLabel;
      this._findingProviderFieldsSeverityOriginal.internalValue = value.findingProviderFieldsSeverityOriginal;
      this._findingProviderFieldsTypes.internalValue = value.findingProviderFieldsTypes;
      this._firstObservedAt.internalValue = value.firstObservedAt;
      this._generatorId.internalValue = value.generatorId;
      this._id.internalValue = value.id;
      this._keyword.internalValue = value.keyword;
      this._lastObservedAt.internalValue = value.lastObservedAt;
      this._malwareName.internalValue = value.malwareName;
      this._malwarePath.internalValue = value.malwarePath;
      this._malwareState.internalValue = value.malwareState;
      this._malwareType.internalValue = value.malwareType;
      this._networkDestinationDomain.internalValue = value.networkDestinationDomain;
      this._networkDestinationIpV4.internalValue = value.networkDestinationIpV4;
      this._networkDestinationIpV6.internalValue = value.networkDestinationIpV6;
      this._networkDestinationPort.internalValue = value.networkDestinationPort;
      this._networkDirection.internalValue = value.networkDirection;
      this._networkProtocol.internalValue = value.networkProtocol;
      this._networkSourceDomain.internalValue = value.networkSourceDomain;
      this._networkSourceIpV4.internalValue = value.networkSourceIpV4;
      this._networkSourceIpV6.internalValue = value.networkSourceIpV6;
      this._networkSourceMac.internalValue = value.networkSourceMac;
      this._networkSourcePort.internalValue = value.networkSourcePort;
      this._noteText.internalValue = value.noteText;
      this._noteUpdatedAt.internalValue = value.noteUpdatedAt;
      this._noteUpdatedBy.internalValue = value.noteUpdatedBy;
      this._processLaunchedAt.internalValue = value.processLaunchedAt;
      this._processName.internalValue = value.processName;
      this._processParentPid.internalValue = value.processParentPid;
      this._processPath.internalValue = value.processPath;
      this._processPid.internalValue = value.processPid;
      this._processTerminatedAt.internalValue = value.processTerminatedAt;
      this._productArn.internalValue = value.productArn;
      this._productFields.internalValue = value.productFields;
      this._productName.internalValue = value.productName;
      this._recommendationText.internalValue = value.recommendationText;
      this._recordState.internalValue = value.recordState;
      this._region.internalValue = value.region;
      this._relatedFindingsId.internalValue = value.relatedFindingsId;
      this._relatedFindingsProductArn.internalValue = value.relatedFindingsProductArn;
      this._resourceApplicationArn.internalValue = value.resourceApplicationArn;
      this._resourceApplicationName.internalValue = value.resourceApplicationName;
      this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value.resourceAwsEc2InstanceIamInstanceProfileArn;
      this._resourceAwsEc2InstanceImageId.internalValue = value.resourceAwsEc2InstanceImageId;
      this._resourceAwsEc2InstanceIpV4Addresses.internalValue = value.resourceAwsEc2InstanceIpV4Addresses;
      this._resourceAwsEc2InstanceIpV6Addresses.internalValue = value.resourceAwsEc2InstanceIpV6Addresses;
      this._resourceAwsEc2InstanceKeyName.internalValue = value.resourceAwsEc2InstanceKeyName;
      this._resourceAwsEc2InstanceLaunchedAt.internalValue = value.resourceAwsEc2InstanceLaunchedAt;
      this._resourceAwsEc2InstanceSubnetId.internalValue = value.resourceAwsEc2InstanceSubnetId;
      this._resourceAwsEc2InstanceType.internalValue = value.resourceAwsEc2InstanceType;
      this._resourceAwsEc2InstanceVpcId.internalValue = value.resourceAwsEc2InstanceVpcId;
      this._resourceAwsIamAccessKeyCreatedAt.internalValue = value.resourceAwsIamAccessKeyCreatedAt;
      this._resourceAwsIamAccessKeyPrincipalName.internalValue = value.resourceAwsIamAccessKeyPrincipalName;
      this._resourceAwsIamAccessKeyStatus.internalValue = value.resourceAwsIamAccessKeyStatus;
      this._resourceAwsIamAccessKeyUserName.internalValue = value.resourceAwsIamAccessKeyUserName;
      this._resourceAwsIamUserUserName.internalValue = value.resourceAwsIamUserUserName;
      this._resourceAwsS3BucketOwnerId.internalValue = value.resourceAwsS3BucketOwnerId;
      this._resourceAwsS3BucketOwnerName.internalValue = value.resourceAwsS3BucketOwnerName;
      this._resourceContainerImageId.internalValue = value.resourceContainerImageId;
      this._resourceContainerImageName.internalValue = value.resourceContainerImageName;
      this._resourceContainerLaunchedAt.internalValue = value.resourceContainerLaunchedAt;
      this._resourceContainerName.internalValue = value.resourceContainerName;
      this._resourceDetailsOther.internalValue = value.resourceDetailsOther;
      this._resourceId.internalValue = value.resourceId;
      this._resourcePartition.internalValue = value.resourcePartition;
      this._resourceRegion.internalValue = value.resourceRegion;
      this._resourceTags.internalValue = value.resourceTags;
      this._resourceType.internalValue = value.resourceType;
      this._sample.internalValue = value.sample;
      this._severityLabel.internalValue = value.severityLabel;
      this._severityNormalized.internalValue = value.severityNormalized;
      this._severityProduct.internalValue = value.severityProduct;
      this._sourceUrl.internalValue = value.sourceUrl;
      this._threatIntelIndicatorCategory.internalValue = value.threatIntelIndicatorCategory;
      this._threatIntelIndicatorLastObservedAt.internalValue = value.threatIntelIndicatorLastObservedAt;
      this._threatIntelIndicatorSource.internalValue = value.threatIntelIndicatorSource;
      this._threatIntelIndicatorSourceUrl.internalValue = value.threatIntelIndicatorSourceUrl;
      this._threatIntelIndicatorType.internalValue = value.threatIntelIndicatorType;
      this._threatIntelIndicatorValue.internalValue = value.threatIntelIndicatorValue;
      this._title.internalValue = value.title;
      this._type.internalValue = value.type;
      this._updatedAt.internalValue = value.updatedAt;
      this._userDefinedFields.internalValue = value.userDefinedFields;
      this._verificationState.internalValue = value.verificationState;
      this._vulnerabilitiesExploitAvailable.internalValue = value.vulnerabilitiesExploitAvailable;
      this._vulnerabilitiesFixAvailable.internalValue = value.vulnerabilitiesFixAvailable;
      this._workflowState.internalValue = value.workflowState;
      this._workflowStatus.internalValue = value.workflowStatus;
    }
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId = new SecurityhubInsightFiltersAwsAccountIdList(this, "aws_account_id", false);
  public get awsAccountId() {
    return this._awsAccountId;
  }
  public putAwsAccountId(value: SecurityhubInsightFiltersAwsAccountId[] | cdktn.IResolvable) {
    this._awsAccountId.internalValue = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId.internalValue;
  }

  // aws_account_name - computed: true, optional: true, required: false
  private _awsAccountName = new SecurityhubInsightFiltersAwsAccountNameList(this, "aws_account_name", false);
  public get awsAccountName() {
    return this._awsAccountName;
  }
  public putAwsAccountName(value: SecurityhubInsightFiltersAwsAccountName[] | cdktn.IResolvable) {
    this._awsAccountName.internalValue = value;
  }
  public resetAwsAccountName() {
    this._awsAccountName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountNameInput() {
    return this._awsAccountName.internalValue;
  }

  // company_name - computed: true, optional: true, required: false
  private _companyName = new SecurityhubInsightFiltersCompanyNameList(this, "company_name", false);
  public get companyName() {
    return this._companyName;
  }
  public putCompanyName(value: SecurityhubInsightFiltersCompanyName[] | cdktn.IResolvable) {
    this._companyName.internalValue = value;
  }
  public resetCompanyName() {
    this._companyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName.internalValue;
  }

  // compliance_associated_standards_id - computed: true, optional: true, required: false
  private _complianceAssociatedStandardsId = new SecurityhubInsightFiltersComplianceAssociatedStandardsIdList(this, "compliance_associated_standards_id", false);
  public get complianceAssociatedStandardsId() {
    return this._complianceAssociatedStandardsId;
  }
  public putComplianceAssociatedStandardsId(value: SecurityhubInsightFiltersComplianceAssociatedStandardsId[] | cdktn.IResolvable) {
    this._complianceAssociatedStandardsId.internalValue = value;
  }
  public resetComplianceAssociatedStandardsId() {
    this._complianceAssociatedStandardsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceAssociatedStandardsIdInput() {
    return this._complianceAssociatedStandardsId.internalValue;
  }

  // compliance_security_control_id - computed: true, optional: true, required: false
  private _complianceSecurityControlId = new SecurityhubInsightFiltersComplianceSecurityControlIdList(this, "compliance_security_control_id", false);
  public get complianceSecurityControlId() {
    return this._complianceSecurityControlId;
  }
  public putComplianceSecurityControlId(value: SecurityhubInsightFiltersComplianceSecurityControlId[] | cdktn.IResolvable) {
    this._complianceSecurityControlId.internalValue = value;
  }
  public resetComplianceSecurityControlId() {
    this._complianceSecurityControlId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlIdInput() {
    return this._complianceSecurityControlId.internalValue;
  }

  // compliance_security_control_parameters_name - computed: true, optional: true, required: false
  private _complianceSecurityControlParametersName = new SecurityhubInsightFiltersComplianceSecurityControlParametersNameList(this, "compliance_security_control_parameters_name", false);
  public get complianceSecurityControlParametersName() {
    return this._complianceSecurityControlParametersName;
  }
  public putComplianceSecurityControlParametersName(value: SecurityhubInsightFiltersComplianceSecurityControlParametersName[] | cdktn.IResolvable) {
    this._complianceSecurityControlParametersName.internalValue = value;
  }
  public resetComplianceSecurityControlParametersName() {
    this._complianceSecurityControlParametersName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlParametersNameInput() {
    return this._complianceSecurityControlParametersName.internalValue;
  }

  // compliance_security_control_parameters_value - computed: true, optional: true, required: false
  private _complianceSecurityControlParametersValue = new SecurityhubInsightFiltersComplianceSecurityControlParametersValueList(this, "compliance_security_control_parameters_value", false);
  public get complianceSecurityControlParametersValue() {
    return this._complianceSecurityControlParametersValue;
  }
  public putComplianceSecurityControlParametersValue(value: SecurityhubInsightFiltersComplianceSecurityControlParametersValue[] | cdktn.IResolvable) {
    this._complianceSecurityControlParametersValue.internalValue = value;
  }
  public resetComplianceSecurityControlParametersValue() {
    this._complianceSecurityControlParametersValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlParametersValueInput() {
    return this._complianceSecurityControlParametersValue.internalValue;
  }

  // compliance_status - computed: true, optional: true, required: false
  private _complianceStatus = new SecurityhubInsightFiltersComplianceStatusList(this, "compliance_status", false);
  public get complianceStatus() {
    return this._complianceStatus;
  }
  public putComplianceStatus(value: SecurityhubInsightFiltersComplianceStatus[] | cdktn.IResolvable) {
    this._complianceStatus.internalValue = value;
  }
  public resetComplianceStatus() {
    this._complianceStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStatusInput() {
    return this._complianceStatus.internalValue;
  }

  // confidence - computed: true, optional: true, required: false
  private _confidence = new SecurityhubInsightFiltersConfidenceList(this, "confidence", false);
  public get confidence() {
    return this._confidence;
  }
  public putConfidence(value: SecurityhubInsightFiltersConfidence[] | cdktn.IResolvable) {
    this._confidence.internalValue = value;
  }
  public resetConfidence() {
    this._confidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence.internalValue;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt = new SecurityhubInsightFiltersCreatedAtList(this, "created_at", false);
  public get createdAt() {
    return this._createdAt;
  }
  public putCreatedAt(value: SecurityhubInsightFiltersCreatedAt[] | cdktn.IResolvable) {
    this._createdAt.internalValue = value;
  }
  public resetCreatedAt() {
    this._createdAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt.internalValue;
  }

  // criticality - computed: true, optional: true, required: false
  private _criticality = new SecurityhubInsightFiltersCriticalityList(this, "criticality", false);
  public get criticality() {
    return this._criticality;
  }
  public putCriticality(value: SecurityhubInsightFiltersCriticality[] | cdktn.IResolvable) {
    this._criticality.internalValue = value;
  }
  public resetCriticality() {
    this._criticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description = new SecurityhubInsightFiltersDescriptionList(this, "description", false);
  public get description() {
    return this._description;
  }
  public putDescription(value: SecurityhubInsightFiltersDescription[] | cdktn.IResolvable) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // finding_provider_fields_confidence - computed: true, optional: true, required: false
  private _findingProviderFieldsConfidence = new SecurityhubInsightFiltersFindingProviderFieldsConfidenceList(this, "finding_provider_fields_confidence", false);
  public get findingProviderFieldsConfidence() {
    return this._findingProviderFieldsConfidence;
  }
  public putFindingProviderFieldsConfidence(value: SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktn.IResolvable) {
    this._findingProviderFieldsConfidence.internalValue = value;
  }
  public resetFindingProviderFieldsConfidence() {
    this._findingProviderFieldsConfidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsConfidenceInput() {
    return this._findingProviderFieldsConfidence.internalValue;
  }

  // finding_provider_fields_criticality - computed: true, optional: true, required: false
  private _findingProviderFieldsCriticality = new SecurityhubInsightFiltersFindingProviderFieldsCriticalityList(this, "finding_provider_fields_criticality", false);
  public get findingProviderFieldsCriticality() {
    return this._findingProviderFieldsCriticality;
  }
  public putFindingProviderFieldsCriticality(value: SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktn.IResolvable) {
    this._findingProviderFieldsCriticality.internalValue = value;
  }
  public resetFindingProviderFieldsCriticality() {
    this._findingProviderFieldsCriticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsCriticalityInput() {
    return this._findingProviderFieldsCriticality.internalValue;
  }

  // finding_provider_fields_related_findings_id - computed: true, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsId = new SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList(this, "finding_provider_fields_related_findings_id", false);
  public get findingProviderFieldsRelatedFindingsId() {
    return this._findingProviderFieldsRelatedFindingsId;
  }
  public putFindingProviderFieldsRelatedFindingsId(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktn.IResolvable) {
    this._findingProviderFieldsRelatedFindingsId.internalValue = value;
  }
  public resetFindingProviderFieldsRelatedFindingsId() {
    this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsIdInput() {
    return this._findingProviderFieldsRelatedFindingsId.internalValue;
  }

  // finding_provider_fields_related_findings_product_arn - computed: true, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsProductArn = new SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList(this, "finding_provider_fields_related_findings_product_arn", false);
  public get findingProviderFieldsRelatedFindingsProductArn() {
    return this._findingProviderFieldsRelatedFindingsProductArn;
  }
  public putFindingProviderFieldsRelatedFindingsProductArn(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktn.IResolvable) {
    this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value;
  }
  public resetFindingProviderFieldsRelatedFindingsProductArn() {
    this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsProductArnInput() {
    return this._findingProviderFieldsRelatedFindingsProductArn.internalValue;
  }

  // finding_provider_fields_severity_label - computed: true, optional: true, required: false
  private _findingProviderFieldsSeverityLabel = new SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList(this, "finding_provider_fields_severity_label", false);
  public get findingProviderFieldsSeverityLabel() {
    return this._findingProviderFieldsSeverityLabel;
  }
  public putFindingProviderFieldsSeverityLabel(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktn.IResolvable) {
    this._findingProviderFieldsSeverityLabel.internalValue = value;
  }
  public resetFindingProviderFieldsSeverityLabel() {
    this._findingProviderFieldsSeverityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityLabelInput() {
    return this._findingProviderFieldsSeverityLabel.internalValue;
  }

  // finding_provider_fields_severity_original - computed: true, optional: true, required: false
  private _findingProviderFieldsSeverityOriginal = new SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList(this, "finding_provider_fields_severity_original", false);
  public get findingProviderFieldsSeverityOriginal() {
    return this._findingProviderFieldsSeverityOriginal;
  }
  public putFindingProviderFieldsSeverityOriginal(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktn.IResolvable) {
    this._findingProviderFieldsSeverityOriginal.internalValue = value;
  }
  public resetFindingProviderFieldsSeverityOriginal() {
    this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityOriginalInput() {
    return this._findingProviderFieldsSeverityOriginal.internalValue;
  }

  // finding_provider_fields_types - computed: true, optional: true, required: false
  private _findingProviderFieldsTypes = new SecurityhubInsightFiltersFindingProviderFieldsTypesList(this, "finding_provider_fields_types", false);
  public get findingProviderFieldsTypes() {
    return this._findingProviderFieldsTypes;
  }
  public putFindingProviderFieldsTypes(value: SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktn.IResolvable) {
    this._findingProviderFieldsTypes.internalValue = value;
  }
  public resetFindingProviderFieldsTypes() {
    this._findingProviderFieldsTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsTypesInput() {
    return this._findingProviderFieldsTypes.internalValue;
  }

  // first_observed_at - computed: true, optional: true, required: false
  private _firstObservedAt = new SecurityhubInsightFiltersFirstObservedAtList(this, "first_observed_at", false);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }
  public putFirstObservedAt(value: SecurityhubInsightFiltersFirstObservedAt[] | cdktn.IResolvable) {
    this._firstObservedAt.internalValue = value;
  }
  public resetFirstObservedAt() {
    this._firstObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstObservedAtInput() {
    return this._firstObservedAt.internalValue;
  }

  // generator_id - computed: true, optional: true, required: false
  private _generatorId = new SecurityhubInsightFiltersGeneratorIdList(this, "generator_id", false);
  public get generatorId() {
    return this._generatorId;
  }
  public putGeneratorId(value: SecurityhubInsightFiltersGeneratorId[] | cdktn.IResolvable) {
    this._generatorId.internalValue = value;
  }
  public resetGeneratorId() {
    this._generatorId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorIdInput() {
    return this._generatorId.internalValue;
  }

  // id - computed: true, optional: true, required: false
  private _id = new SecurityhubInsightFiltersIdList(this, "id", false);
  public get id() {
    return this._id;
  }
  public putId(value: SecurityhubInsightFiltersId[] | cdktn.IResolvable) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // keyword - computed: true, optional: true, required: false
  private _keyword = new SecurityhubInsightFiltersKeywordList(this, "keyword", false);
  public get keyword() {
    return this._keyword;
  }
  public putKeyword(value: SecurityhubInsightFiltersKeyword[] | cdktn.IResolvable) {
    this._keyword.internalValue = value;
  }
  public resetKeyword() {
    this._keyword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword.internalValue;
  }

  // last_observed_at - computed: true, optional: true, required: false
  private _lastObservedAt = new SecurityhubInsightFiltersLastObservedAtList(this, "last_observed_at", false);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }
  public putLastObservedAt(value: SecurityhubInsightFiltersLastObservedAt[] | cdktn.IResolvable) {
    this._lastObservedAt.internalValue = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt.internalValue;
  }

  // malware_name - computed: true, optional: true, required: false
  private _malwareName = new SecurityhubInsightFiltersMalwareNameList(this, "malware_name", false);
  public get malwareName() {
    return this._malwareName;
  }
  public putMalwareName(value: SecurityhubInsightFiltersMalwareName[] | cdktn.IResolvable) {
    this._malwareName.internalValue = value;
  }
  public resetMalwareName() {
    this._malwareName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareNameInput() {
    return this._malwareName.internalValue;
  }

  // malware_path - computed: true, optional: true, required: false
  private _malwarePath = new SecurityhubInsightFiltersMalwarePathList(this, "malware_path", false);
  public get malwarePath() {
    return this._malwarePath;
  }
  public putMalwarePath(value: SecurityhubInsightFiltersMalwarePath[] | cdktn.IResolvable) {
    this._malwarePath.internalValue = value;
  }
  public resetMalwarePath() {
    this._malwarePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwarePathInput() {
    return this._malwarePath.internalValue;
  }

  // malware_state - computed: true, optional: true, required: false
  private _malwareState = new SecurityhubInsightFiltersMalwareStateList(this, "malware_state", false);
  public get malwareState() {
    return this._malwareState;
  }
  public putMalwareState(value: SecurityhubInsightFiltersMalwareState[] | cdktn.IResolvable) {
    this._malwareState.internalValue = value;
  }
  public resetMalwareState() {
    this._malwareState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStateInput() {
    return this._malwareState.internalValue;
  }

  // malware_type - computed: true, optional: true, required: false
  private _malwareType = new SecurityhubInsightFiltersMalwareTypeList(this, "malware_type", false);
  public get malwareType() {
    return this._malwareType;
  }
  public putMalwareType(value: SecurityhubInsightFiltersMalwareType[] | cdktn.IResolvable) {
    this._malwareType.internalValue = value;
  }
  public resetMalwareType() {
    this._malwareType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareTypeInput() {
    return this._malwareType.internalValue;
  }

  // network_destination_domain - computed: true, optional: true, required: false
  private _networkDestinationDomain = new SecurityhubInsightFiltersNetworkDestinationDomainList(this, "network_destination_domain", false);
  public get networkDestinationDomain() {
    return this._networkDestinationDomain;
  }
  public putNetworkDestinationDomain(value: SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktn.IResolvable) {
    this._networkDestinationDomain.internalValue = value;
  }
  public resetNetworkDestinationDomain() {
    this._networkDestinationDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationDomainInput() {
    return this._networkDestinationDomain.internalValue;
  }

  // network_destination_ip_v4 - computed: true, optional: true, required: false
  private _networkDestinationIpV4 = new SecurityhubInsightFiltersNetworkDestinationIpV4List(this, "network_destination_ip_v4", false);
  public get networkDestinationIpV4() {
    return this._networkDestinationIpV4;
  }
  public putNetworkDestinationIpV4(value: SecurityhubInsightFiltersNetworkDestinationIpV4[] | cdktn.IResolvable) {
    this._networkDestinationIpV4.internalValue = value;
  }
  public resetNetworkDestinationIpV4() {
    this._networkDestinationIpV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpV4Input() {
    return this._networkDestinationIpV4.internalValue;
  }

  // network_destination_ip_v6 - computed: true, optional: true, required: false
  private _networkDestinationIpV6 = new SecurityhubInsightFiltersNetworkDestinationIpV6List(this, "network_destination_ip_v6", false);
  public get networkDestinationIpV6() {
    return this._networkDestinationIpV6;
  }
  public putNetworkDestinationIpV6(value: SecurityhubInsightFiltersNetworkDestinationIpV6[] | cdktn.IResolvable) {
    this._networkDestinationIpV6.internalValue = value;
  }
  public resetNetworkDestinationIpV6() {
    this._networkDestinationIpV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpV6Input() {
    return this._networkDestinationIpV6.internalValue;
  }

  // network_destination_port - computed: true, optional: true, required: false
  private _networkDestinationPort = new SecurityhubInsightFiltersNetworkDestinationPortList(this, "network_destination_port", false);
  public get networkDestinationPort() {
    return this._networkDestinationPort;
  }
  public putNetworkDestinationPort(value: SecurityhubInsightFiltersNetworkDestinationPort[] | cdktn.IResolvable) {
    this._networkDestinationPort.internalValue = value;
  }
  public resetNetworkDestinationPort() {
    this._networkDestinationPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationPortInput() {
    return this._networkDestinationPort.internalValue;
  }

  // network_direction - computed: true, optional: true, required: false
  private _networkDirection = new SecurityhubInsightFiltersNetworkDirectionList(this, "network_direction", false);
  public get networkDirection() {
    return this._networkDirection;
  }
  public putNetworkDirection(value: SecurityhubInsightFiltersNetworkDirection[] | cdktn.IResolvable) {
    this._networkDirection.internalValue = value;
  }
  public resetNetworkDirection() {
    this._networkDirection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDirectionInput() {
    return this._networkDirection.internalValue;
  }

  // network_protocol - computed: true, optional: true, required: false
  private _networkProtocol = new SecurityhubInsightFiltersNetworkProtocolList(this, "network_protocol", false);
  public get networkProtocol() {
    return this._networkProtocol;
  }
  public putNetworkProtocol(value: SecurityhubInsightFiltersNetworkProtocol[] | cdktn.IResolvable) {
    this._networkProtocol.internalValue = value;
  }
  public resetNetworkProtocol() {
    this._networkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol.internalValue;
  }

  // network_source_domain - computed: true, optional: true, required: false
  private _networkSourceDomain = new SecurityhubInsightFiltersNetworkSourceDomainList(this, "network_source_domain", false);
  public get networkSourceDomain() {
    return this._networkSourceDomain;
  }
  public putNetworkSourceDomain(value: SecurityhubInsightFiltersNetworkSourceDomain[] | cdktn.IResolvable) {
    this._networkSourceDomain.internalValue = value;
  }
  public resetNetworkSourceDomain() {
    this._networkSourceDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceDomainInput() {
    return this._networkSourceDomain.internalValue;
  }

  // network_source_ip_v4 - computed: true, optional: true, required: false
  private _networkSourceIpV4 = new SecurityhubInsightFiltersNetworkSourceIpV4List(this, "network_source_ip_v4", false);
  public get networkSourceIpV4() {
    return this._networkSourceIpV4;
  }
  public putNetworkSourceIpV4(value: SecurityhubInsightFiltersNetworkSourceIpV4[] | cdktn.IResolvable) {
    this._networkSourceIpV4.internalValue = value;
  }
  public resetNetworkSourceIpV4() {
    this._networkSourceIpV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpV4Input() {
    return this._networkSourceIpV4.internalValue;
  }

  // network_source_ip_v6 - computed: true, optional: true, required: false
  private _networkSourceIpV6 = new SecurityhubInsightFiltersNetworkSourceIpV6List(this, "network_source_ip_v6", false);
  public get networkSourceIpV6() {
    return this._networkSourceIpV6;
  }
  public putNetworkSourceIpV6(value: SecurityhubInsightFiltersNetworkSourceIpV6[] | cdktn.IResolvable) {
    this._networkSourceIpV6.internalValue = value;
  }
  public resetNetworkSourceIpV6() {
    this._networkSourceIpV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpV6Input() {
    return this._networkSourceIpV6.internalValue;
  }

  // network_source_mac - computed: true, optional: true, required: false
  private _networkSourceMac = new SecurityhubInsightFiltersNetworkSourceMacList(this, "network_source_mac", false);
  public get networkSourceMac() {
    return this._networkSourceMac;
  }
  public putNetworkSourceMac(value: SecurityhubInsightFiltersNetworkSourceMac[] | cdktn.IResolvable) {
    this._networkSourceMac.internalValue = value;
  }
  public resetNetworkSourceMac() {
    this._networkSourceMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceMacInput() {
    return this._networkSourceMac.internalValue;
  }

  // network_source_port - computed: true, optional: true, required: false
  private _networkSourcePort = new SecurityhubInsightFiltersNetworkSourcePortList(this, "network_source_port", false);
  public get networkSourcePort() {
    return this._networkSourcePort;
  }
  public putNetworkSourcePort(value: SecurityhubInsightFiltersNetworkSourcePort[] | cdktn.IResolvable) {
    this._networkSourcePort.internalValue = value;
  }
  public resetNetworkSourcePort() {
    this._networkSourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourcePortInput() {
    return this._networkSourcePort.internalValue;
  }

  // note_text - computed: true, optional: true, required: false
  private _noteText = new SecurityhubInsightFiltersNoteTextList(this, "note_text", false);
  public get noteText() {
    return this._noteText;
  }
  public putNoteText(value: SecurityhubInsightFiltersNoteText[] | cdktn.IResolvable) {
    this._noteText.internalValue = value;
  }
  public resetNoteText() {
    this._noteText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteTextInput() {
    return this._noteText.internalValue;
  }

  // note_updated_at - computed: true, optional: true, required: false
  private _noteUpdatedAt = new SecurityhubInsightFiltersNoteUpdatedAtList(this, "note_updated_at", false);
  public get noteUpdatedAt() {
    return this._noteUpdatedAt;
  }
  public putNoteUpdatedAt(value: SecurityhubInsightFiltersNoteUpdatedAt[] | cdktn.IResolvable) {
    this._noteUpdatedAt.internalValue = value;
  }
  public resetNoteUpdatedAt() {
    this._noteUpdatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedAtInput() {
    return this._noteUpdatedAt.internalValue;
  }

  // note_updated_by - computed: true, optional: true, required: false
  private _noteUpdatedBy = new SecurityhubInsightFiltersNoteUpdatedByList(this, "note_updated_by", false);
  public get noteUpdatedBy() {
    return this._noteUpdatedBy;
  }
  public putNoteUpdatedBy(value: SecurityhubInsightFiltersNoteUpdatedBy[] | cdktn.IResolvable) {
    this._noteUpdatedBy.internalValue = value;
  }
  public resetNoteUpdatedBy() {
    this._noteUpdatedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedByInput() {
    return this._noteUpdatedBy.internalValue;
  }

  // process_launched_at - computed: true, optional: true, required: false
  private _processLaunchedAt = new SecurityhubInsightFiltersProcessLaunchedAtList(this, "process_launched_at", false);
  public get processLaunchedAt() {
    return this._processLaunchedAt;
  }
  public putProcessLaunchedAt(value: SecurityhubInsightFiltersProcessLaunchedAt[] | cdktn.IResolvable) {
    this._processLaunchedAt.internalValue = value;
  }
  public resetProcessLaunchedAt() {
    this._processLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processLaunchedAtInput() {
    return this._processLaunchedAt.internalValue;
  }

  // process_name - computed: true, optional: true, required: false
  private _processName = new SecurityhubInsightFiltersProcessNameList(this, "process_name", false);
  public get processName() {
    return this._processName;
  }
  public putProcessName(value: SecurityhubInsightFiltersProcessName[] | cdktn.IResolvable) {
    this._processName.internalValue = value;
  }
  public resetProcessName() {
    this._processName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName.internalValue;
  }

  // process_parent_pid - computed: true, optional: true, required: false
  private _processParentPid = new SecurityhubInsightFiltersProcessParentPidList(this, "process_parent_pid", false);
  public get processParentPid() {
    return this._processParentPid;
  }
  public putProcessParentPid(value: SecurityhubInsightFiltersProcessParentPid[] | cdktn.IResolvable) {
    this._processParentPid.internalValue = value;
  }
  public resetProcessParentPid() {
    this._processParentPid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processParentPidInput() {
    return this._processParentPid.internalValue;
  }

  // process_path - computed: true, optional: true, required: false
  private _processPath = new SecurityhubInsightFiltersProcessPathList(this, "process_path", false);
  public get processPath() {
    return this._processPath;
  }
  public putProcessPath(value: SecurityhubInsightFiltersProcessPath[] | cdktn.IResolvable) {
    this._processPath.internalValue = value;
  }
  public resetProcessPath() {
    this._processPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPathInput() {
    return this._processPath.internalValue;
  }

  // process_pid - computed: true, optional: true, required: false
  private _processPid = new SecurityhubInsightFiltersProcessPidList(this, "process_pid", false);
  public get processPid() {
    return this._processPid;
  }
  public putProcessPid(value: SecurityhubInsightFiltersProcessPid[] | cdktn.IResolvable) {
    this._processPid.internalValue = value;
  }
  public resetProcessPid() {
    this._processPid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPidInput() {
    return this._processPid.internalValue;
  }

  // process_terminated_at - computed: true, optional: true, required: false
  private _processTerminatedAt = new SecurityhubInsightFiltersProcessTerminatedAtList(this, "process_terminated_at", false);
  public get processTerminatedAt() {
    return this._processTerminatedAt;
  }
  public putProcessTerminatedAt(value: SecurityhubInsightFiltersProcessTerminatedAt[] | cdktn.IResolvable) {
    this._processTerminatedAt.internalValue = value;
  }
  public resetProcessTerminatedAt() {
    this._processTerminatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processTerminatedAtInput() {
    return this._processTerminatedAt.internalValue;
  }

  // product_arn - computed: true, optional: true, required: false
  private _productArn = new SecurityhubInsightFiltersProductArnList(this, "product_arn", false);
  public get productArn() {
    return this._productArn;
  }
  public putProductArn(value: SecurityhubInsightFiltersProductArn[] | cdktn.IResolvable) {
    this._productArn.internalValue = value;
  }
  public resetProductArn() {
    this._productArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn.internalValue;
  }

  // product_fields - computed: true, optional: true, required: false
  private _productFields = new SecurityhubInsightFiltersProductFieldsList(this, "product_fields", false);
  public get productFields() {
    return this._productFields;
  }
  public putProductFields(value: SecurityhubInsightFiltersProductFields[] | cdktn.IResolvable) {
    this._productFields.internalValue = value;
  }
  public resetProductFields() {
    this._productFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFieldsInput() {
    return this._productFields.internalValue;
  }

  // product_name - computed: true, optional: true, required: false
  private _productName = new SecurityhubInsightFiltersProductNameList(this, "product_name", false);
  public get productName() {
    return this._productName;
  }
  public putProductName(value: SecurityhubInsightFiltersProductName[] | cdktn.IResolvable) {
    this._productName.internalValue = value;
  }
  public resetProductName() {
    this._productName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName.internalValue;
  }

  // recommendation_text - computed: true, optional: true, required: false
  private _recommendationText = new SecurityhubInsightFiltersRecommendationTextList(this, "recommendation_text", false);
  public get recommendationText() {
    return this._recommendationText;
  }
  public putRecommendationText(value: SecurityhubInsightFiltersRecommendationText[] | cdktn.IResolvable) {
    this._recommendationText.internalValue = value;
  }
  public resetRecommendationText() {
    this._recommendationText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationTextInput() {
    return this._recommendationText.internalValue;
  }

  // record_state - computed: true, optional: true, required: false
  private _recordState = new SecurityhubInsightFiltersRecordStateList(this, "record_state", false);
  public get recordState() {
    return this._recordState;
  }
  public putRecordState(value: SecurityhubInsightFiltersRecordState[] | cdktn.IResolvable) {
    this._recordState.internalValue = value;
  }
  public resetRecordState() {
    this._recordState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordStateInput() {
    return this._recordState.internalValue;
  }

  // region - computed: true, optional: true, required: false
  private _region = new SecurityhubInsightFiltersRegionList(this, "region", false);
  public get region() {
    return this._region;
  }
  public putRegion(value: SecurityhubInsightFiltersRegion[] | cdktn.IResolvable) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // related_findings_id - computed: true, optional: true, required: false
  private _relatedFindingsId = new SecurityhubInsightFiltersRelatedFindingsIdList(this, "related_findings_id", false);
  public get relatedFindingsId() {
    return this._relatedFindingsId;
  }
  public putRelatedFindingsId(value: SecurityhubInsightFiltersRelatedFindingsId[] | cdktn.IResolvable) {
    this._relatedFindingsId.internalValue = value;
  }
  public resetRelatedFindingsId() {
    this._relatedFindingsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsIdInput() {
    return this._relatedFindingsId.internalValue;
  }

  // related_findings_product_arn - computed: true, optional: true, required: false
  private _relatedFindingsProductArn = new SecurityhubInsightFiltersRelatedFindingsProductArnList(this, "related_findings_product_arn", false);
  public get relatedFindingsProductArn() {
    return this._relatedFindingsProductArn;
  }
  public putRelatedFindingsProductArn(value: SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktn.IResolvable) {
    this._relatedFindingsProductArn.internalValue = value;
  }
  public resetRelatedFindingsProductArn() {
    this._relatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsProductArnInput() {
    return this._relatedFindingsProductArn.internalValue;
  }

  // resource_application_arn - computed: true, optional: true, required: false
  private _resourceApplicationArn = new SecurityhubInsightFiltersResourceApplicationArnList(this, "resource_application_arn", false);
  public get resourceApplicationArn() {
    return this._resourceApplicationArn;
  }
  public putResourceApplicationArn(value: SecurityhubInsightFiltersResourceApplicationArn[] | cdktn.IResolvable) {
    this._resourceApplicationArn.internalValue = value;
  }
  public resetResourceApplicationArn() {
    this._resourceApplicationArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceApplicationArnInput() {
    return this._resourceApplicationArn.internalValue;
  }

  // resource_application_name - computed: true, optional: true, required: false
  private _resourceApplicationName = new SecurityhubInsightFiltersResourceApplicationNameList(this, "resource_application_name", false);
  public get resourceApplicationName() {
    return this._resourceApplicationName;
  }
  public putResourceApplicationName(value: SecurityhubInsightFiltersResourceApplicationName[] | cdktn.IResolvable) {
    this._resourceApplicationName.internalValue = value;
  }
  public resetResourceApplicationName() {
    this._resourceApplicationName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceApplicationNameInput() {
    return this._resourceApplicationName.internalValue;
  }

  // resource_aws_ec_2_instance_iam_instance_profile_arn - computed: true, optional: true, required: false
  private _resourceAwsEc2InstanceIamInstanceProfileArn = new SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList(this, "resource_aws_ec_2_instance_iam_instance_profile_arn", false);
  public get resourceAwsEc2InstanceIamInstanceProfileArn() {
    return this._resourceAwsEc2InstanceIamInstanceProfileArn;
  }
  public putResourceAwsEc2InstanceIamInstanceProfileArn(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIamInstanceProfileArn() {
    this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIamInstanceProfileArnInput() {
    return this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue;
  }

  // resource_aws_ec_2_instance_image_id - computed: true, optional: true, required: false
  private _resourceAwsEc2InstanceImageId = new SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList(this, "resource_aws_ec_2_instance_image_id", false);
  public get resourceAwsEc2InstanceImageId() {
    return this._resourceAwsEc2InstanceImageId;
  }
  public putResourceAwsEc2InstanceImageId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceImageId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceImageId() {
    this._resourceAwsEc2InstanceImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceImageIdInput() {
    return this._resourceAwsEc2InstanceImageId.internalValue;
  }

  // resource_aws_ec_2_instance_ip_v4_addresses - computed: true, optional: true, required: false
  private _resourceAwsEc2InstanceIpV4Addresses = new SecurityhubInsightFiltersResourceAwsEc2InstanceIpV4AddressesList(this, "resource_aws_ec_2_instance_ip_v4_addresses", false);
  public get resourceAwsEc2InstanceIpV4Addresses() {
    return this._resourceAwsEc2InstanceIpV4Addresses;
  }
  public putResourceAwsEc2InstanceIpV4Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpV4Addresses[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIpV4Addresses.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIpV4Addresses() {
    this._resourceAwsEc2InstanceIpV4Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpV4AddressesInput() {
    return this._resourceAwsEc2InstanceIpV4Addresses.internalValue;
  }

  // resource_aws_ec_2_instance_ip_v6_addresses - computed: true, optional: true, required: false
  private _resourceAwsEc2InstanceIpV6Addresses = new SecurityhubInsightFiltersResourceAwsEc2InstanceIpV6AddressesList(this, "resource_aws_ec_2_instance_ip_v6_addresses", false);
  public get resourceAwsEc2InstanceIpV6Addresses() {
    return this._resourceAwsEc2InstanceIpV6Addresses;
  }
  public putResourceAwsEc2InstanceIpV6Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpV6Addresses[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIpV6Addresses.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIpV6Addresses() {
    this._resourceAwsEc2InstanceIpV6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpV6AddressesInput() {
    return this._resourceAwsEc2InstanceIpV6Addresses.internalValue;
  }

  // resource_aws_ec_2_instance_key_name - computed: true, optional: true, required: false
  private _resourceAwsEc2InstanceKeyName = new SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList(this, "resource_aws_ec_2_instance_key_name", false);
  public get resourceAwsEc2InstanceKeyName() {
    return this._resourceAwsEc2InstanceKeyName;
  }
  public putResourceAwsEc2InstanceKeyName(value: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceKeyName.internalValue = value;
  }
  public resetResourceAwsEc2InstanceKeyName() {
    this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceKeyNameInput() {
    return this._resourceAwsEc2InstanceKeyName.internalValue;
  }

  // resource_aws_ec_2_instance_launched_at - computed: true, optional: true, required: false
  private _resourceAwsEc2InstanceLaunchedAt = new SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList(this, "resource_aws_ec_2_instance_launched_at", false);
  public get resourceAwsEc2InstanceLaunchedAt() {
    return this._resourceAwsEc2InstanceLaunchedAt;
  }
  public putResourceAwsEc2InstanceLaunchedAt(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceLaunchedAt.internalValue = value;
  }
  public resetResourceAwsEc2InstanceLaunchedAt() {
    this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceLaunchedAtInput() {
    return this._resourceAwsEc2InstanceLaunchedAt.internalValue;
  }

  // resource_aws_ec_2_instance_subnet_id - computed: true, optional: true, required: false
  private _resourceAwsEc2InstanceSubnetId = new SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList(this, "resource_aws_ec_2_instance_subnet_id", false);
  public get resourceAwsEc2InstanceSubnetId() {
    return this._resourceAwsEc2InstanceSubnetId;
  }
  public putResourceAwsEc2InstanceSubnetId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceSubnetId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceSubnetId() {
    this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceSubnetIdInput() {
    return this._resourceAwsEc2InstanceSubnetId.internalValue;
  }

  // resource_aws_ec_2_instance_type - computed: true, optional: true, required: false
  private _resourceAwsEc2InstanceType = new SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList(this, "resource_aws_ec_2_instance_type", false);
  public get resourceAwsEc2InstanceType() {
    return this._resourceAwsEc2InstanceType;
  }
  public putResourceAwsEc2InstanceType(value: SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceType.internalValue = value;
  }
  public resetResourceAwsEc2InstanceType() {
    this._resourceAwsEc2InstanceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceTypeInput() {
    return this._resourceAwsEc2InstanceType.internalValue;
  }

  // resource_aws_ec_2_instance_vpc_id - computed: true, optional: true, required: false
  private _resourceAwsEc2InstanceVpcId = new SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList(this, "resource_aws_ec_2_instance_vpc_id", false);
  public get resourceAwsEc2InstanceVpcId() {
    return this._resourceAwsEc2InstanceVpcId;
  }
  public putResourceAwsEc2InstanceVpcId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceVpcId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceVpcId() {
    this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceVpcIdInput() {
    return this._resourceAwsEc2InstanceVpcId.internalValue;
  }

  // resource_aws_iam_access_key_created_at - computed: true, optional: true, required: false
  private _resourceAwsIamAccessKeyCreatedAt = new SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList(this, "resource_aws_iam_access_key_created_at", false);
  public get resourceAwsIamAccessKeyCreatedAt() {
    return this._resourceAwsIamAccessKeyCreatedAt;
  }
  public putResourceAwsIamAccessKeyCreatedAt(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyCreatedAt.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyCreatedAt() {
    this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyCreatedAtInput() {
    return this._resourceAwsIamAccessKeyCreatedAt.internalValue;
  }

  // resource_aws_iam_access_key_principal_name - computed: true, optional: true, required: false
  private _resourceAwsIamAccessKeyPrincipalName = new SecurityhubInsightFiltersResourceAwsIamAccessKeyPrincipalNameList(this, "resource_aws_iam_access_key_principal_name", false);
  public get resourceAwsIamAccessKeyPrincipalName() {
    return this._resourceAwsIamAccessKeyPrincipalName;
  }
  public putResourceAwsIamAccessKeyPrincipalName(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyPrincipalName[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyPrincipalName.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyPrincipalName() {
    this._resourceAwsIamAccessKeyPrincipalName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyPrincipalNameInput() {
    return this._resourceAwsIamAccessKeyPrincipalName.internalValue;
  }

  // resource_aws_iam_access_key_status - computed: true, optional: true, required: false
  private _resourceAwsIamAccessKeyStatus = new SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList(this, "resource_aws_iam_access_key_status", false);
  public get resourceAwsIamAccessKeyStatus() {
    return this._resourceAwsIamAccessKeyStatus;
  }
  public putResourceAwsIamAccessKeyStatus(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyStatus.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyStatus() {
    this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyStatusInput() {
    return this._resourceAwsIamAccessKeyStatus.internalValue;
  }

  // resource_aws_iam_access_key_user_name - computed: true, optional: true, required: false
  private _resourceAwsIamAccessKeyUserName = new SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList(this, "resource_aws_iam_access_key_user_name", false);
  public get resourceAwsIamAccessKeyUserName() {
    return this._resourceAwsIamAccessKeyUserName;
  }
  public putResourceAwsIamAccessKeyUserName(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyUserName.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyUserName() {
    this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyUserNameInput() {
    return this._resourceAwsIamAccessKeyUserName.internalValue;
  }

  // resource_aws_iam_user_user_name - computed: true, optional: true, required: false
  private _resourceAwsIamUserUserName = new SecurityhubInsightFiltersResourceAwsIamUserUserNameList(this, "resource_aws_iam_user_user_name", false);
  public get resourceAwsIamUserUserName() {
    return this._resourceAwsIamUserUserName;
  }
  public putResourceAwsIamUserUserName(value: SecurityhubInsightFiltersResourceAwsIamUserUserName[] | cdktn.IResolvable) {
    this._resourceAwsIamUserUserName.internalValue = value;
  }
  public resetResourceAwsIamUserUserName() {
    this._resourceAwsIamUserUserName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamUserUserNameInput() {
    return this._resourceAwsIamUserUserName.internalValue;
  }

  // resource_aws_s3_bucket_owner_id - computed: true, optional: true, required: false
  private _resourceAwsS3BucketOwnerId = new SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList(this, "resource_aws_s3_bucket_owner_id", false);
  public get resourceAwsS3BucketOwnerId() {
    return this._resourceAwsS3BucketOwnerId;
  }
  public putResourceAwsS3BucketOwnerId(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktn.IResolvable) {
    this._resourceAwsS3BucketOwnerId.internalValue = value;
  }
  public resetResourceAwsS3BucketOwnerId() {
    this._resourceAwsS3BucketOwnerId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerIdInput() {
    return this._resourceAwsS3BucketOwnerId.internalValue;
  }

  // resource_aws_s3_bucket_owner_name - computed: true, optional: true, required: false
  private _resourceAwsS3BucketOwnerName = new SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList(this, "resource_aws_s3_bucket_owner_name", false);
  public get resourceAwsS3BucketOwnerName() {
    return this._resourceAwsS3BucketOwnerName;
  }
  public putResourceAwsS3BucketOwnerName(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktn.IResolvable) {
    this._resourceAwsS3BucketOwnerName.internalValue = value;
  }
  public resetResourceAwsS3BucketOwnerName() {
    this._resourceAwsS3BucketOwnerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerNameInput() {
    return this._resourceAwsS3BucketOwnerName.internalValue;
  }

  // resource_container_image_id - computed: true, optional: true, required: false
  private _resourceContainerImageId = new SecurityhubInsightFiltersResourceContainerImageIdList(this, "resource_container_image_id", false);
  public get resourceContainerImageId() {
    return this._resourceContainerImageId;
  }
  public putResourceContainerImageId(value: SecurityhubInsightFiltersResourceContainerImageId[] | cdktn.IResolvable) {
    this._resourceContainerImageId.internalValue = value;
  }
  public resetResourceContainerImageId() {
    this._resourceContainerImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageIdInput() {
    return this._resourceContainerImageId.internalValue;
  }

  // resource_container_image_name - computed: true, optional: true, required: false
  private _resourceContainerImageName = new SecurityhubInsightFiltersResourceContainerImageNameList(this, "resource_container_image_name", false);
  public get resourceContainerImageName() {
    return this._resourceContainerImageName;
  }
  public putResourceContainerImageName(value: SecurityhubInsightFiltersResourceContainerImageName[] | cdktn.IResolvable) {
    this._resourceContainerImageName.internalValue = value;
  }
  public resetResourceContainerImageName() {
    this._resourceContainerImageName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageNameInput() {
    return this._resourceContainerImageName.internalValue;
  }

  // resource_container_launched_at - computed: true, optional: true, required: false
  private _resourceContainerLaunchedAt = new SecurityhubInsightFiltersResourceContainerLaunchedAtList(this, "resource_container_launched_at", false);
  public get resourceContainerLaunchedAt() {
    return this._resourceContainerLaunchedAt;
  }
  public putResourceContainerLaunchedAt(value: SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktn.IResolvable) {
    this._resourceContainerLaunchedAt.internalValue = value;
  }
  public resetResourceContainerLaunchedAt() {
    this._resourceContainerLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerLaunchedAtInput() {
    return this._resourceContainerLaunchedAt.internalValue;
  }

  // resource_container_name - computed: true, optional: true, required: false
  private _resourceContainerName = new SecurityhubInsightFiltersResourceContainerNameList(this, "resource_container_name", false);
  public get resourceContainerName() {
    return this._resourceContainerName;
  }
  public putResourceContainerName(value: SecurityhubInsightFiltersResourceContainerName[] | cdktn.IResolvable) {
    this._resourceContainerName.internalValue = value;
  }
  public resetResourceContainerName() {
    this._resourceContainerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerNameInput() {
    return this._resourceContainerName.internalValue;
  }

  // resource_details_other - computed: true, optional: true, required: false
  private _resourceDetailsOther = new SecurityhubInsightFiltersResourceDetailsOtherList(this, "resource_details_other", false);
  public get resourceDetailsOther() {
    return this._resourceDetailsOther;
  }
  public putResourceDetailsOther(value: SecurityhubInsightFiltersResourceDetailsOther[] | cdktn.IResolvable) {
    this._resourceDetailsOther.internalValue = value;
  }
  public resetResourceDetailsOther() {
    this._resourceDetailsOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDetailsOtherInput() {
    return this._resourceDetailsOther.internalValue;
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId = new SecurityhubInsightFiltersResourceIdList(this, "resource_id", false);
  public get resourceId() {
    return this._resourceId;
  }
  public putResourceId(value: SecurityhubInsightFiltersResourceId[] | cdktn.IResolvable) {
    this._resourceId.internalValue = value;
  }
  public resetResourceId() {
    this._resourceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId.internalValue;
  }

  // resource_partition - computed: true, optional: true, required: false
  private _resourcePartition = new SecurityhubInsightFiltersResourcePartitionList(this, "resource_partition", false);
  public get resourcePartition() {
    return this._resourcePartition;
  }
  public putResourcePartition(value: SecurityhubInsightFiltersResourcePartition[] | cdktn.IResolvable) {
    this._resourcePartition.internalValue = value;
  }
  public resetResourcePartition() {
    this._resourcePartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePartitionInput() {
    return this._resourcePartition.internalValue;
  }

  // resource_region - computed: true, optional: true, required: false
  private _resourceRegion = new SecurityhubInsightFiltersResourceRegionList(this, "resource_region", false);
  public get resourceRegion() {
    return this._resourceRegion;
  }
  public putResourceRegion(value: SecurityhubInsightFiltersResourceRegion[] | cdktn.IResolvable) {
    this._resourceRegion.internalValue = value;
  }
  public resetResourceRegion() {
    this._resourceRegion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRegionInput() {
    return this._resourceRegion.internalValue;
  }

  // resource_tags - computed: true, optional: true, required: false
  private _resourceTags = new SecurityhubInsightFiltersResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: SecurityhubInsightFiltersResourceTags[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType = new SecurityhubInsightFiltersResourceTypeList(this, "resource_type", false);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: SecurityhubInsightFiltersResourceType[] | cdktn.IResolvable) {
    this._resourceType.internalValue = value;
  }
  public resetResourceType() {
    this._resourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType.internalValue;
  }

  // sample - computed: true, optional: true, required: false
  private _sample = new SecurityhubInsightFiltersSampleList(this, "sample", false);
  public get sample() {
    return this._sample;
  }
  public putSample(value: SecurityhubInsightFiltersSample[] | cdktn.IResolvable) {
    this._sample.internalValue = value;
  }
  public resetSample() {
    this._sample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample.internalValue;
  }

  // severity_label - computed: true, optional: true, required: false
  private _severityLabel = new SecurityhubInsightFiltersSeverityLabelList(this, "severity_label", false);
  public get severityLabel() {
    return this._severityLabel;
  }
  public putSeverityLabel(value: SecurityhubInsightFiltersSeverityLabel[] | cdktn.IResolvable) {
    this._severityLabel.internalValue = value;
  }
  public resetSeverityLabel() {
    this._severityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLabelInput() {
    return this._severityLabel.internalValue;
  }

  // severity_normalized - computed: true, optional: true, required: false
  private _severityNormalized = new SecurityhubInsightFiltersSeverityNormalizedList(this, "severity_normalized", false);
  public get severityNormalized() {
    return this._severityNormalized;
  }
  public putSeverityNormalized(value: SecurityhubInsightFiltersSeverityNormalized[] | cdktn.IResolvable) {
    this._severityNormalized.internalValue = value;
  }
  public resetSeverityNormalized() {
    this._severityNormalized.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityNormalizedInput() {
    return this._severityNormalized.internalValue;
  }

  // severity_product - computed: true, optional: true, required: false
  private _severityProduct = new SecurityhubInsightFiltersSeverityProductList(this, "severity_product", false);
  public get severityProduct() {
    return this._severityProduct;
  }
  public putSeverityProduct(value: SecurityhubInsightFiltersSeverityProduct[] | cdktn.IResolvable) {
    this._severityProduct.internalValue = value;
  }
  public resetSeverityProduct() {
    this._severityProduct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityProductInput() {
    return this._severityProduct.internalValue;
  }

  // source_url - computed: true, optional: true, required: false
  private _sourceUrl = new SecurityhubInsightFiltersSourceUrlList(this, "source_url", false);
  public get sourceUrl() {
    return this._sourceUrl;
  }
  public putSourceUrl(value: SecurityhubInsightFiltersSourceUrl[] | cdktn.IResolvable) {
    this._sourceUrl.internalValue = value;
  }
  public resetSourceUrl() {
    this._sourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl.internalValue;
  }

  // threat_intel_indicator_category - computed: true, optional: true, required: false
  private _threatIntelIndicatorCategory = new SecurityhubInsightFiltersThreatIntelIndicatorCategoryList(this, "threat_intel_indicator_category", false);
  public get threatIntelIndicatorCategory() {
    return this._threatIntelIndicatorCategory;
  }
  public putThreatIntelIndicatorCategory(value: SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktn.IResolvable) {
    this._threatIntelIndicatorCategory.internalValue = value;
  }
  public resetThreatIntelIndicatorCategory() {
    this._threatIntelIndicatorCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorCategoryInput() {
    return this._threatIntelIndicatorCategory.internalValue;
  }

  // threat_intel_indicator_last_observed_at - computed: true, optional: true, required: false
  private _threatIntelIndicatorLastObservedAt = new SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList(this, "threat_intel_indicator_last_observed_at", false);
  public get threatIntelIndicatorLastObservedAt() {
    return this._threatIntelIndicatorLastObservedAt;
  }
  public putThreatIntelIndicatorLastObservedAt(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktn.IResolvable) {
    this._threatIntelIndicatorLastObservedAt.internalValue = value;
  }
  public resetThreatIntelIndicatorLastObservedAt() {
    this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorLastObservedAtInput() {
    return this._threatIntelIndicatorLastObservedAt.internalValue;
  }

  // threat_intel_indicator_source - computed: true, optional: true, required: false
  private _threatIntelIndicatorSource = new SecurityhubInsightFiltersThreatIntelIndicatorSourceList(this, "threat_intel_indicator_source", false);
  public get threatIntelIndicatorSource() {
    return this._threatIntelIndicatorSource;
  }
  public putThreatIntelIndicatorSource(value: SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktn.IResolvable) {
    this._threatIntelIndicatorSource.internalValue = value;
  }
  public resetThreatIntelIndicatorSource() {
    this._threatIntelIndicatorSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceInput() {
    return this._threatIntelIndicatorSource.internalValue;
  }

  // threat_intel_indicator_source_url - computed: true, optional: true, required: false
  private _threatIntelIndicatorSourceUrl = new SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList(this, "threat_intel_indicator_source_url", false);
  public get threatIntelIndicatorSourceUrl() {
    return this._threatIntelIndicatorSourceUrl;
  }
  public putThreatIntelIndicatorSourceUrl(value: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktn.IResolvable) {
    this._threatIntelIndicatorSourceUrl.internalValue = value;
  }
  public resetThreatIntelIndicatorSourceUrl() {
    this._threatIntelIndicatorSourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceUrlInput() {
    return this._threatIntelIndicatorSourceUrl.internalValue;
  }

  // threat_intel_indicator_type - computed: true, optional: true, required: false
  private _threatIntelIndicatorType = new SecurityhubInsightFiltersThreatIntelIndicatorTypeList(this, "threat_intel_indicator_type", false);
  public get threatIntelIndicatorType() {
    return this._threatIntelIndicatorType;
  }
  public putThreatIntelIndicatorType(value: SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktn.IResolvable) {
    this._threatIntelIndicatorType.internalValue = value;
  }
  public resetThreatIntelIndicatorType() {
    this._threatIntelIndicatorType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorTypeInput() {
    return this._threatIntelIndicatorType.internalValue;
  }

  // threat_intel_indicator_value - computed: true, optional: true, required: false
  private _threatIntelIndicatorValue = new SecurityhubInsightFiltersThreatIntelIndicatorValueList(this, "threat_intel_indicator_value", false);
  public get threatIntelIndicatorValue() {
    return this._threatIntelIndicatorValue;
  }
  public putThreatIntelIndicatorValue(value: SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktn.IResolvable) {
    this._threatIntelIndicatorValue.internalValue = value;
  }
  public resetThreatIntelIndicatorValue() {
    this._threatIntelIndicatorValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorValueInput() {
    return this._threatIntelIndicatorValue.internalValue;
  }

  // title - computed: true, optional: true, required: false
  private _title = new SecurityhubInsightFiltersTitleList(this, "title", false);
  public get title() {
    return this._title;
  }
  public putTitle(value: SecurityhubInsightFiltersTitle[] | cdktn.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type = new SecurityhubInsightFiltersTypeList(this, "type", false);
  public get type() {
    return this._type;
  }
  public putType(value: SecurityhubInsightFiltersType[] | cdktn.IResolvable) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt = new SecurityhubInsightFiltersUpdatedAtList(this, "updated_at", false);
  public get updatedAt() {
    return this._updatedAt;
  }
  public putUpdatedAt(value: SecurityhubInsightFiltersUpdatedAt[] | cdktn.IResolvable) {
    this._updatedAt.internalValue = value;
  }
  public resetUpdatedAt() {
    this._updatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt.internalValue;
  }

  // user_defined_fields - computed: true, optional: true, required: false
  private _userDefinedFields = new SecurityhubInsightFiltersUserDefinedFieldsList(this, "user_defined_fields", false);
  public get userDefinedFields() {
    return this._userDefinedFields;
  }
  public putUserDefinedFields(value: SecurityhubInsightFiltersUserDefinedFields[] | cdktn.IResolvable) {
    this._userDefinedFields.internalValue = value;
  }
  public resetUserDefinedFields() {
    this._userDefinedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFieldsInput() {
    return this._userDefinedFields.internalValue;
  }

  // verification_state - computed: true, optional: true, required: false
  private _verificationState = new SecurityhubInsightFiltersVerificationStateList(this, "verification_state", false);
  public get verificationState() {
    return this._verificationState;
  }
  public putVerificationState(value: SecurityhubInsightFiltersVerificationState[] | cdktn.IResolvable) {
    this._verificationState.internalValue = value;
  }
  public resetVerificationState() {
    this._verificationState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStateInput() {
    return this._verificationState.internalValue;
  }

  // vulnerabilities_exploit_available - computed: true, optional: true, required: false
  private _vulnerabilitiesExploitAvailable = new SecurityhubInsightFiltersVulnerabilitiesExploitAvailableList(this, "vulnerabilities_exploit_available", false);
  public get vulnerabilitiesExploitAvailable() {
    return this._vulnerabilitiesExploitAvailable;
  }
  public putVulnerabilitiesExploitAvailable(value: SecurityhubInsightFiltersVulnerabilitiesExploitAvailable[] | cdktn.IResolvable) {
    this._vulnerabilitiesExploitAvailable.internalValue = value;
  }
  public resetVulnerabilitiesExploitAvailable() {
    this._vulnerabilitiesExploitAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilitiesExploitAvailableInput() {
    return this._vulnerabilitiesExploitAvailable.internalValue;
  }

  // vulnerabilities_fix_available - computed: true, optional: true, required: false
  private _vulnerabilitiesFixAvailable = new SecurityhubInsightFiltersVulnerabilitiesFixAvailableList(this, "vulnerabilities_fix_available", false);
  public get vulnerabilitiesFixAvailable() {
    return this._vulnerabilitiesFixAvailable;
  }
  public putVulnerabilitiesFixAvailable(value: SecurityhubInsightFiltersVulnerabilitiesFixAvailable[] | cdktn.IResolvable) {
    this._vulnerabilitiesFixAvailable.internalValue = value;
  }
  public resetVulnerabilitiesFixAvailable() {
    this._vulnerabilitiesFixAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilitiesFixAvailableInput() {
    return this._vulnerabilitiesFixAvailable.internalValue;
  }

  // workflow_state - computed: true, optional: true, required: false
  private _workflowState = new SecurityhubInsightFiltersWorkflowStateList(this, "workflow_state", false);
  public get workflowState() {
    return this._workflowState;
  }
  public putWorkflowState(value: SecurityhubInsightFiltersWorkflowState[] | cdktn.IResolvable) {
    this._workflowState.internalValue = value;
  }
  public resetWorkflowState() {
    this._workflowState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowStateInput() {
    return this._workflowState.internalValue;
  }

  // workflow_status - computed: true, optional: true, required: false
  private _workflowStatus = new SecurityhubInsightFiltersWorkflowStatusList(this, "workflow_status", false);
  public get workflowStatus() {
    return this._workflowStatus;
  }
  public putWorkflowStatus(value: SecurityhubInsightFiltersWorkflowStatus[] | cdktn.IResolvable) {
    this._workflowStatus.internalValue = value;
  }
  public resetWorkflowStatus() {
    this._workflowStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowStatusInput() {
    return this._workflowStatus.internalValue;
  }
}
