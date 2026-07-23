// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_custom_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQuicksightCustomPermissionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_custom_permissions#id DataAwsccQuicksightCustomPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQuicksightCustomPermissionsCapabilities {
}

export function dataAwsccQuicksightCustomPermissionsCapabilitiesToTerraform(struct?: DataAwsccQuicksightCustomPermissionsCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightCustomPermissionsCapabilitiesToHclTerraform(struct?: DataAwsccQuicksightCustomPermissionsCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightCustomPermissionsCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightCustomPermissionsCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_apps_native_data_store - computed: true, optional: false, required: false
  public get accessAppsNativeDataStore() {
    return this.getStringAttribute('access_apps_native_data_store');
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // add_or_run_anomaly_detection_for_analyses - computed: true, optional: false, required: false
  public get addOrRunAnomalyDetectionForAnalyses() {
    return this.getStringAttribute('add_or_run_anomaly_detection_for_analyses');
  }

  // amazon_bedrock_ars_action - computed: true, optional: false, required: false
  public get amazonBedrockArsAction() {
    return this.getStringAttribute('amazon_bedrock_ars_action');
  }

  // amazon_bedrock_fs_action - computed: true, optional: false, required: false
  public get amazonBedrockFsAction() {
    return this.getStringAttribute('amazon_bedrock_fs_action');
  }

  // amazon_bedrock_krs_action - computed: true, optional: false, required: false
  public get amazonBedrockKrsAction() {
    return this.getStringAttribute('amazon_bedrock_krs_action');
  }

  // amazon_s_three_action - computed: true, optional: false, required: false
  public get amazonSThreeAction() {
    return this.getStringAttribute('amazon_s_three_action');
  }

  // analysis - computed: true, optional: false, required: false
  public get analysis() {
    return this.getStringAttribute('analysis');
  }

  // approve_flow_share_requests - computed: true, optional: false, required: false
  public get approveFlowShareRequests() {
    return this.getStringAttribute('approve_flow_share_requests');
  }

  // apps - computed: true, optional: false, required: false
  public get apps() {
    return this.getStringAttribute('apps');
  }

  // asana_action - computed: true, optional: false, required: false
  public get asanaAction() {
    return this.getStringAttribute('asana_action');
  }

  // automate - computed: true, optional: false, required: false
  public get automate() {
    return this.getStringAttribute('automate');
  }

  // bamboo_hr_action - computed: true, optional: false, required: false
  public get bambooHrAction() {
    return this.getStringAttribute('bamboo_hr_action');
  }

  // box_agent_action - computed: true, optional: false, required: false
  public get boxAgentAction() {
    return this.getStringAttribute('box_agent_action');
  }

  // build_calculated_field_with_q - computed: true, optional: false, required: false
  public get buildCalculatedFieldWithQ() {
    return this.getStringAttribute('build_calculated_field_with_q');
  }

  // canva_agent_action - computed: true, optional: false, required: false
  public get canvaAgentAction() {
    return this.getStringAttribute('canva_agent_action');
  }

  // chat_agent - computed: true, optional: false, required: false
  public get chatAgent() {
    return this.getStringAttribute('chat_agent');
  }

  // comprehend_action - computed: true, optional: false, required: false
  public get comprehendAction() {
    return this.getStringAttribute('comprehend_action');
  }

  // comprehend_medical_action - computed: true, optional: false, required: false
  public get comprehendMedicalAction() {
    return this.getStringAttribute('comprehend_medical_action');
  }

  // confluence_action - computed: true, optional: false, required: false
  public get confluenceAction() {
    return this.getStringAttribute('confluence_action');
  }

  // create_and_update_amazon_bedrock_ars_action - computed: true, optional: false, required: false
  public get createAndUpdateAmazonBedrockArsAction() {
    return this.getStringAttribute('create_and_update_amazon_bedrock_ars_action');
  }

  // create_and_update_amazon_bedrock_fs_action - computed: true, optional: false, required: false
  public get createAndUpdateAmazonBedrockFsAction() {
    return this.getStringAttribute('create_and_update_amazon_bedrock_fs_action');
  }

  // create_and_update_amazon_bedrock_krs_action - computed: true, optional: false, required: false
  public get createAndUpdateAmazonBedrockKrsAction() {
    return this.getStringAttribute('create_and_update_amazon_bedrock_krs_action');
  }

  // create_and_update_amazon_s_three_action - computed: true, optional: false, required: false
  public get createAndUpdateAmazonSThreeAction() {
    return this.getStringAttribute('create_and_update_amazon_s_three_action');
  }

  // create_and_update_apps - computed: true, optional: false, required: false
  public get createAndUpdateApps() {
    return this.getStringAttribute('create_and_update_apps');
  }

  // create_and_update_asana_action - computed: true, optional: false, required: false
  public get createAndUpdateAsanaAction() {
    return this.getStringAttribute('create_and_update_asana_action');
  }

  // create_and_update_bamboo_hr_action - computed: true, optional: false, required: false
  public get createAndUpdateBambooHrAction() {
    return this.getStringAttribute('create_and_update_bamboo_hr_action');
  }

  // create_and_update_box_agent_action - computed: true, optional: false, required: false
  public get createAndUpdateBoxAgentAction() {
    return this.getStringAttribute('create_and_update_box_agent_action');
  }

  // create_and_update_canva_agent_action - computed: true, optional: false, required: false
  public get createAndUpdateCanvaAgentAction() {
    return this.getStringAttribute('create_and_update_canva_agent_action');
  }

  // create_and_update_comprehend_action - computed: true, optional: false, required: false
  public get createAndUpdateComprehendAction() {
    return this.getStringAttribute('create_and_update_comprehend_action');
  }

  // create_and_update_comprehend_medical_action - computed: true, optional: false, required: false
  public get createAndUpdateComprehendMedicalAction() {
    return this.getStringAttribute('create_and_update_comprehend_medical_action');
  }

  // create_and_update_confluence_action - computed: true, optional: false, required: false
  public get createAndUpdateConfluenceAction() {
    return this.getStringAttribute('create_and_update_confluence_action');
  }

  // create_and_update_dashboard_email_reports - computed: true, optional: false, required: false
  public get createAndUpdateDashboardEmailReports() {
    return this.getStringAttribute('create_and_update_dashboard_email_reports');
  }

  // create_and_update_data_sources - computed: true, optional: false, required: false
  public get createAndUpdateDataSources() {
    return this.getStringAttribute('create_and_update_data_sources');
  }

  // create_and_update_datasets - computed: true, optional: false, required: false
  public get createAndUpdateDatasets() {
    return this.getStringAttribute('create_and_update_datasets');
  }

  // create_and_update_fact_set_action - computed: true, optional: false, required: false
  public get createAndUpdateFactSetAction() {
    return this.getStringAttribute('create_and_update_fact_set_action');
  }

  // create_and_update_generic_http_action - computed: true, optional: false, required: false
  public get createAndUpdateGenericHttpAction() {
    return this.getStringAttribute('create_and_update_generic_http_action');
  }

  // create_and_update_github_action - computed: true, optional: false, required: false
  public get createAndUpdateGithubAction() {
    return this.getStringAttribute('create_and_update_github_action');
  }

  // create_and_update_google_calendar_action - computed: true, optional: false, required: false
  public get createAndUpdateGoogleCalendarAction() {
    return this.getStringAttribute('create_and_update_google_calendar_action');
  }

  // create_and_update_hubspot_action - computed: true, optional: false, required: false
  public get createAndUpdateHubspotAction() {
    return this.getStringAttribute('create_and_update_hubspot_action');
  }

  // create_and_update_hugging_face_action - computed: true, optional: false, required: false
  public get createAndUpdateHuggingFaceAction() {
    return this.getStringAttribute('create_and_update_hugging_face_action');
  }

  // create_and_update_intercom_action - computed: true, optional: false, required: false
  public get createAndUpdateIntercomAction() {
    return this.getStringAttribute('create_and_update_intercom_action');
  }

  // create_and_update_jira_action - computed: true, optional: false, required: false
  public get createAndUpdateJiraAction() {
    return this.getStringAttribute('create_and_update_jira_action');
  }

  // create_and_update_knowledge_bases - computed: true, optional: false, required: false
  public get createAndUpdateKnowledgeBases() {
    return this.getStringAttribute('create_and_update_knowledge_bases');
  }

  // create_and_update_linear_action - computed: true, optional: false, required: false
  public get createAndUpdateLinearAction() {
    return this.getStringAttribute('create_and_update_linear_action');
  }

  // create_and_update_mcp_action - computed: true, optional: false, required: false
  public get createAndUpdateMcpAction() {
    return this.getStringAttribute('create_and_update_mcp_action');
  }

  // create_and_update_monday_action - computed: true, optional: false, required: false
  public get createAndUpdateMondayAction() {
    return this.getStringAttribute('create_and_update_monday_action');
  }

  // create_and_update_ms_exchange_action - computed: true, optional: false, required: false
  public get createAndUpdateMsExchangeAction() {
    return this.getStringAttribute('create_and_update_ms_exchange_action');
  }

  // create_and_update_ms_teams_action - computed: true, optional: false, required: false
  public get createAndUpdateMsTeamsAction() {
    return this.getStringAttribute('create_and_update_ms_teams_action');
  }

  // create_and_update_new_relic_action - computed: true, optional: false, required: false
  public get createAndUpdateNewRelicAction() {
    return this.getStringAttribute('create_and_update_new_relic_action');
  }

  // create_and_update_notion_action - computed: true, optional: false, required: false
  public get createAndUpdateNotionAction() {
    return this.getStringAttribute('create_and_update_notion_action');
  }

  // create_and_update_one_drive_action - computed: true, optional: false, required: false
  public get createAndUpdateOneDriveAction() {
    return this.getStringAttribute('create_and_update_one_drive_action');
  }

  // create_and_update_open_api_action - computed: true, optional: false, required: false
  public get createAndUpdateOpenApiAction() {
    return this.getStringAttribute('create_and_update_open_api_action');
  }

  // create_and_update_pager_duty_action - computed: true, optional: false, required: false
  public get createAndUpdatePagerDutyAction() {
    return this.getStringAttribute('create_and_update_pager_duty_action');
  }

  // create_and_update_salesforce_action - computed: true, optional: false, required: false
  public get createAndUpdateSalesforceAction() {
    return this.getStringAttribute('create_and_update_salesforce_action');
  }

  // create_and_update_sand_p_global_energy_action - computed: true, optional: false, required: false
  public get createAndUpdateSandPGlobalEnergyAction() {
    return this.getStringAttribute('create_and_update_sand_p_global_energy_action');
  }

  // create_and_update_sand_pgmi_action - computed: true, optional: false, required: false
  public get createAndUpdateSandPgmiAction() {
    return this.getStringAttribute('create_and_update_sand_pgmi_action');
  }

  // create_and_update_sap_bill_of_material_action - computed: true, optional: false, required: false
  public get createAndUpdateSapBillOfMaterialAction() {
    return this.getStringAttribute('create_and_update_sap_bill_of_material_action');
  }

  // create_and_update_sap_business_partner_action - computed: true, optional: false, required: false
  public get createAndUpdateSapBusinessPartnerAction() {
    return this.getStringAttribute('create_and_update_sap_business_partner_action');
  }

  // create_and_update_sap_material_stock_action - computed: true, optional: false, required: false
  public get createAndUpdateSapMaterialStockAction() {
    return this.getStringAttribute('create_and_update_sap_material_stock_action');
  }

  // create_and_update_sap_physical_inventory_action - computed: true, optional: false, required: false
  public get createAndUpdateSapPhysicalInventoryAction() {
    return this.getStringAttribute('create_and_update_sap_physical_inventory_action');
  }

  // create_and_update_sap_product_master_data_action - computed: true, optional: false, required: false
  public get createAndUpdateSapProductMasterDataAction() {
    return this.getStringAttribute('create_and_update_sap_product_master_data_action');
  }

  // create_and_update_service_now_action - computed: true, optional: false, required: false
  public get createAndUpdateServiceNowAction() {
    return this.getStringAttribute('create_and_update_service_now_action');
  }

  // create_and_update_share_point_action - computed: true, optional: false, required: false
  public get createAndUpdateSharePointAction() {
    return this.getStringAttribute('create_and_update_share_point_action');
  }

  // create_and_update_slack_action - computed: true, optional: false, required: false
  public get createAndUpdateSlackAction() {
    return this.getStringAttribute('create_and_update_slack_action');
  }

  // create_and_update_smartsheet_action - computed: true, optional: false, required: false
  public get createAndUpdateSmartsheetAction() {
    return this.getStringAttribute('create_and_update_smartsheet_action');
  }

  // create_and_update_textract_action - computed: true, optional: false, required: false
  public get createAndUpdateTextractAction() {
    return this.getStringAttribute('create_and_update_textract_action');
  }

  // create_and_update_themes - computed: true, optional: false, required: false
  public get createAndUpdateThemes() {
    return this.getStringAttribute('create_and_update_themes');
  }

  // create_and_update_threshold_alerts - computed: true, optional: false, required: false
  public get createAndUpdateThresholdAlerts() {
    return this.getStringAttribute('create_and_update_threshold_alerts');
  }

  // create_and_update_zendesk_action - computed: true, optional: false, required: false
  public get createAndUpdateZendeskAction() {
    return this.getStringAttribute('create_and_update_zendesk_action');
  }

  // create_chat_agents - computed: true, optional: false, required: false
  public get createChatAgents() {
    return this.getStringAttribute('create_chat_agents');
  }

  // create_dashboard_executive_summary_with_q - computed: true, optional: false, required: false
  public get createDashboardExecutiveSummaryWithQ() {
    return this.getStringAttribute('create_dashboard_executive_summary_with_q');
  }

  // create_shared_folders - computed: true, optional: false, required: false
  public get createSharedFolders() {
    return this.getStringAttribute('create_shared_folders');
  }

  // create_spaces - computed: true, optional: false, required: false
  public get createSpaces() {
    return this.getStringAttribute('create_spaces');
  }

  // create_spice_dataset - computed: true, optional: false, required: false
  public get createSpiceDataset() {
    return this.getStringAttribute('create_spice_dataset');
  }

  // dashboard - computed: true, optional: false, required: false
  public get dashboard() {
    return this.getStringAttribute('dashboard');
  }

  // edit_visual_with_q - computed: true, optional: false, required: false
  public get editVisualWithQ() {
    return this.getStringAttribute('edit_visual_with_q');
  }

  // export_to_csv - computed: true, optional: false, required: false
  public get exportToCsv() {
    return this.getStringAttribute('export_to_csv');
  }

  // export_to_csv_in_scheduled_reports - computed: true, optional: false, required: false
  public get exportToCsvInScheduledReports() {
    return this.getStringAttribute('export_to_csv_in_scheduled_reports');
  }

  // export_to_excel - computed: true, optional: false, required: false
  public get exportToExcel() {
    return this.getStringAttribute('export_to_excel');
  }

  // export_to_excel_in_scheduled_reports - computed: true, optional: false, required: false
  public get exportToExcelInScheduledReports() {
    return this.getStringAttribute('export_to_excel_in_scheduled_reports');
  }

  // export_to_pdf - computed: true, optional: false, required: false
  public get exportToPdf() {
    return this.getStringAttribute('export_to_pdf');
  }

  // export_to_pdf_in_scheduled_reports - computed: true, optional: false, required: false
  public get exportToPdfInScheduledReports() {
    return this.getStringAttribute('export_to_pdf_in_scheduled_reports');
  }

  // extension - computed: true, optional: false, required: false
  public get extension() {
    return this.getStringAttribute('extension');
  }

  // fact_set_action - computed: true, optional: false, required: false
  public get factSetAction() {
    return this.getStringAttribute('fact_set_action');
  }

  // flow - computed: true, optional: false, required: false
  public get flow() {
    return this.getStringAttribute('flow');
  }

  // generic_http_action - computed: true, optional: false, required: false
  public get genericHttpAction() {
    return this.getStringAttribute('generic_http_action');
  }

  // github_action - computed: true, optional: false, required: false
  public get githubAction() {
    return this.getStringAttribute('github_action');
  }

  // google_calendar_action - computed: true, optional: false, required: false
  public get googleCalendarAction() {
    return this.getStringAttribute('google_calendar_action');
  }

  // hubspot_action - computed: true, optional: false, required: false
  public get hubspotAction() {
    return this.getStringAttribute('hubspot_action');
  }

  // hugging_face_action - computed: true, optional: false, required: false
  public get huggingFaceAction() {
    return this.getStringAttribute('hugging_face_action');
  }

  // include_content_in_scheduled_reports_email - computed: true, optional: false, required: false
  public get includeContentInScheduledReportsEmail() {
    return this.getStringAttribute('include_content_in_scheduled_reports_email');
  }

  // intercom_action - computed: true, optional: false, required: false
  public get intercomAction() {
    return this.getStringAttribute('intercom_action');
  }

  // invoke_apps_ai_inference - computed: true, optional: false, required: false
  public get invokeAppsAiInference() {
    return this.getStringAttribute('invoke_apps_ai_inference');
  }

  // jira_action - computed: true, optional: false, required: false
  public get jiraAction() {
    return this.getStringAttribute('jira_action');
  }

  // knowledge_base - computed: true, optional: false, required: false
  public get knowledgeBase() {
    return this.getStringAttribute('knowledge_base');
  }

  // linear_action - computed: true, optional: false, required: false
  public get linearAction() {
    return this.getStringAttribute('linear_action');
  }

  // manage_shared_folders - computed: true, optional: false, required: false
  public get manageSharedFolders() {
    return this.getStringAttribute('manage_shared_folders');
  }

  // mcp_action - computed: true, optional: false, required: false
  public get mcpAction() {
    return this.getStringAttribute('mcp_action');
  }

  // monday_action - computed: true, optional: false, required: false
  public get mondayAction() {
    return this.getStringAttribute('monday_action');
  }

  // ms_exchange_action - computed: true, optional: false, required: false
  public get msExchangeAction() {
    return this.getStringAttribute('ms_exchange_action');
  }

  // ms_teams_action - computed: true, optional: false, required: false
  public get msTeamsAction() {
    return this.getStringAttribute('ms_teams_action');
  }

  // new_relic_action - computed: true, optional: false, required: false
  public get newRelicAction() {
    return this.getStringAttribute('new_relic_action');
  }

  // notion_action - computed: true, optional: false, required: false
  public get notionAction() {
    return this.getStringAttribute('notion_action');
  }

  // one_drive_action - computed: true, optional: false, required: false
  public get oneDriveAction() {
    return this.getStringAttribute('one_drive_action');
  }

  // open_api_action - computed: true, optional: false, required: false
  public get openApiAction() {
    return this.getStringAttribute('open_api_action');
  }

  // pager_duty_action - computed: true, optional: false, required: false
  public get pagerDutyAction() {
    return this.getStringAttribute('pager_duty_action');
  }

  // perform_flow_ui_task - computed: true, optional: false, required: false
  public get performFlowUiTask() {
    return this.getStringAttribute('perform_flow_ui_task');
  }

  // print_reports - computed: true, optional: false, required: false
  public get printReports() {
    return this.getStringAttribute('print_reports');
  }

  // publish_without_approval - computed: true, optional: false, required: false
  public get publishWithoutApproval() {
    return this.getStringAttribute('publish_without_approval');
  }

  // rename_shared_folders - computed: true, optional: false, required: false
  public get renameSharedFolders() {
    return this.getStringAttribute('rename_shared_folders');
  }

  // research - computed: true, optional: false, required: false
  public get research() {
    return this.getStringAttribute('research');
  }

  // salesforce_action - computed: true, optional: false, required: false
  public get salesforceAction() {
    return this.getStringAttribute('salesforce_action');
  }

  // sand_p_global_energy_action - computed: true, optional: false, required: false
  public get sandPGlobalEnergyAction() {
    return this.getStringAttribute('sand_p_global_energy_action');
  }

  // sand_pgmi_action - computed: true, optional: false, required: false
  public get sandPgmiAction() {
    return this.getStringAttribute('sand_pgmi_action');
  }

  // sap_bill_of_material_action - computed: true, optional: false, required: false
  public get sapBillOfMaterialAction() {
    return this.getStringAttribute('sap_bill_of_material_action');
  }

  // sap_business_partner_action - computed: true, optional: false, required: false
  public get sapBusinessPartnerAction() {
    return this.getStringAttribute('sap_business_partner_action');
  }

  // sap_material_stock_action - computed: true, optional: false, required: false
  public get sapMaterialStockAction() {
    return this.getStringAttribute('sap_material_stock_action');
  }

  // sap_physical_inventory_action - computed: true, optional: false, required: false
  public get sapPhysicalInventoryAction() {
    return this.getStringAttribute('sap_physical_inventory_action');
  }

  // sap_product_master_data_action - computed: true, optional: false, required: false
  public get sapProductMasterDataAction() {
    return this.getStringAttribute('sap_product_master_data_action');
  }

  // service_now_action - computed: true, optional: false, required: false
  public get serviceNowAction() {
    return this.getStringAttribute('service_now_action');
  }

  // share_amazon_bedrock_ars_action - computed: true, optional: false, required: false
  public get shareAmazonBedrockArsAction() {
    return this.getStringAttribute('share_amazon_bedrock_ars_action');
  }

  // share_amazon_bedrock_fs_action - computed: true, optional: false, required: false
  public get shareAmazonBedrockFsAction() {
    return this.getStringAttribute('share_amazon_bedrock_fs_action');
  }

  // share_amazon_bedrock_krs_action - computed: true, optional: false, required: false
  public get shareAmazonBedrockKrsAction() {
    return this.getStringAttribute('share_amazon_bedrock_krs_action');
  }

  // share_amazon_s_three_action - computed: true, optional: false, required: false
  public get shareAmazonSThreeAction() {
    return this.getStringAttribute('share_amazon_s_three_action');
  }

  // share_analyses - computed: true, optional: false, required: false
  public get shareAnalyses() {
    return this.getStringAttribute('share_analyses');
  }

  // share_apps - computed: true, optional: false, required: false
  public get shareApps() {
    return this.getStringAttribute('share_apps');
  }

  // share_asana_action - computed: true, optional: false, required: false
  public get shareAsanaAction() {
    return this.getStringAttribute('share_asana_action');
  }

  // share_bamboo_hr_action - computed: true, optional: false, required: false
  public get shareBambooHrAction() {
    return this.getStringAttribute('share_bamboo_hr_action');
  }

  // share_box_agent_action - computed: true, optional: false, required: false
  public get shareBoxAgentAction() {
    return this.getStringAttribute('share_box_agent_action');
  }

  // share_canva_agent_action - computed: true, optional: false, required: false
  public get shareCanvaAgentAction() {
    return this.getStringAttribute('share_canva_agent_action');
  }

  // share_chat_agents - computed: true, optional: false, required: false
  public get shareChatAgents() {
    return this.getStringAttribute('share_chat_agents');
  }

  // share_comprehend_action - computed: true, optional: false, required: false
  public get shareComprehendAction() {
    return this.getStringAttribute('share_comprehend_action');
  }

  // share_comprehend_medical_action - computed: true, optional: false, required: false
  public get shareComprehendMedicalAction() {
    return this.getStringAttribute('share_comprehend_medical_action');
  }

  // share_confluence_action - computed: true, optional: false, required: false
  public get shareConfluenceAction() {
    return this.getStringAttribute('share_confluence_action');
  }

  // share_dashboards - computed: true, optional: false, required: false
  public get shareDashboards() {
    return this.getStringAttribute('share_dashboards');
  }

  // share_data_sources - computed: true, optional: false, required: false
  public get shareDataSources() {
    return this.getStringAttribute('share_data_sources');
  }

  // share_datasets - computed: true, optional: false, required: false
  public get shareDatasets() {
    return this.getStringAttribute('share_datasets');
  }

  // share_fact_set_action - computed: true, optional: false, required: false
  public get shareFactSetAction() {
    return this.getStringAttribute('share_fact_set_action');
  }

  // share_generic_http_action - computed: true, optional: false, required: false
  public get shareGenericHttpAction() {
    return this.getStringAttribute('share_generic_http_action');
  }

  // share_github_action - computed: true, optional: false, required: false
  public get shareGithubAction() {
    return this.getStringAttribute('share_github_action');
  }

  // share_google_calendar_action - computed: true, optional: false, required: false
  public get shareGoogleCalendarAction() {
    return this.getStringAttribute('share_google_calendar_action');
  }

  // share_hubspot_action - computed: true, optional: false, required: false
  public get shareHubspotAction() {
    return this.getStringAttribute('share_hubspot_action');
  }

  // share_hugging_face_action - computed: true, optional: false, required: false
  public get shareHuggingFaceAction() {
    return this.getStringAttribute('share_hugging_face_action');
  }

  // share_intercom_action - computed: true, optional: false, required: false
  public get shareIntercomAction() {
    return this.getStringAttribute('share_intercom_action');
  }

  // share_jira_action - computed: true, optional: false, required: false
  public get shareJiraAction() {
    return this.getStringAttribute('share_jira_action');
  }

  // share_knowledge_bases - computed: true, optional: false, required: false
  public get shareKnowledgeBases() {
    return this.getStringAttribute('share_knowledge_bases');
  }

  // share_linear_action - computed: true, optional: false, required: false
  public get shareLinearAction() {
    return this.getStringAttribute('share_linear_action');
  }

  // share_mcp_action - computed: true, optional: false, required: false
  public get shareMcpAction() {
    return this.getStringAttribute('share_mcp_action');
  }

  // share_monday_action - computed: true, optional: false, required: false
  public get shareMondayAction() {
    return this.getStringAttribute('share_monday_action');
  }

  // share_ms_exchange_action - computed: true, optional: false, required: false
  public get shareMsExchangeAction() {
    return this.getStringAttribute('share_ms_exchange_action');
  }

  // share_ms_teams_action - computed: true, optional: false, required: false
  public get shareMsTeamsAction() {
    return this.getStringAttribute('share_ms_teams_action');
  }

  // share_new_relic_action - computed: true, optional: false, required: false
  public get shareNewRelicAction() {
    return this.getStringAttribute('share_new_relic_action');
  }

  // share_notion_action - computed: true, optional: false, required: false
  public get shareNotionAction() {
    return this.getStringAttribute('share_notion_action');
  }

  // share_one_drive_action - computed: true, optional: false, required: false
  public get shareOneDriveAction() {
    return this.getStringAttribute('share_one_drive_action');
  }

  // share_open_api_action - computed: true, optional: false, required: false
  public get shareOpenApiAction() {
    return this.getStringAttribute('share_open_api_action');
  }

  // share_pager_duty_action - computed: true, optional: false, required: false
  public get sharePagerDutyAction() {
    return this.getStringAttribute('share_pager_duty_action');
  }

  // share_point_action - computed: true, optional: false, required: false
  public get sharePointAction() {
    return this.getStringAttribute('share_point_action');
  }

  // share_salesforce_action - computed: true, optional: false, required: false
  public get shareSalesforceAction() {
    return this.getStringAttribute('share_salesforce_action');
  }

  // share_sand_p_global_energy_action - computed: true, optional: false, required: false
  public get shareSandPGlobalEnergyAction() {
    return this.getStringAttribute('share_sand_p_global_energy_action');
  }

  // share_sand_pgmi_action - computed: true, optional: false, required: false
  public get shareSandPgmiAction() {
    return this.getStringAttribute('share_sand_pgmi_action');
  }

  // share_sap_bill_of_material_action - computed: true, optional: false, required: false
  public get shareSapBillOfMaterialAction() {
    return this.getStringAttribute('share_sap_bill_of_material_action');
  }

  // share_sap_business_partner_action - computed: true, optional: false, required: false
  public get shareSapBusinessPartnerAction() {
    return this.getStringAttribute('share_sap_business_partner_action');
  }

  // share_sap_material_stock_action - computed: true, optional: false, required: false
  public get shareSapMaterialStockAction() {
    return this.getStringAttribute('share_sap_material_stock_action');
  }

  // share_sap_physical_inventory_action - computed: true, optional: false, required: false
  public get shareSapPhysicalInventoryAction() {
    return this.getStringAttribute('share_sap_physical_inventory_action');
  }

  // share_sap_product_master_data_action - computed: true, optional: false, required: false
  public get shareSapProductMasterDataAction() {
    return this.getStringAttribute('share_sap_product_master_data_action');
  }

  // share_service_now_action - computed: true, optional: false, required: false
  public get shareServiceNowAction() {
    return this.getStringAttribute('share_service_now_action');
  }

  // share_share_point_action - computed: true, optional: false, required: false
  public get shareSharePointAction() {
    return this.getStringAttribute('share_share_point_action');
  }

  // share_slack_action - computed: true, optional: false, required: false
  public get shareSlackAction() {
    return this.getStringAttribute('share_slack_action');
  }

  // share_smartsheet_action - computed: true, optional: false, required: false
  public get shareSmartsheetAction() {
    return this.getStringAttribute('share_smartsheet_action');
  }

  // share_spaces - computed: true, optional: false, required: false
  public get shareSpaces() {
    return this.getStringAttribute('share_spaces');
  }

  // share_textract_action - computed: true, optional: false, required: false
  public get shareTextractAction() {
    return this.getStringAttribute('share_textract_action');
  }

  // share_zendesk_action - computed: true, optional: false, required: false
  public get shareZendeskAction() {
    return this.getStringAttribute('share_zendesk_action');
  }

  // slack_action - computed: true, optional: false, required: false
  public get slackAction() {
    return this.getStringAttribute('slack_action');
  }

  // smartsheet_action - computed: true, optional: false, required: false
  public get smartsheetAction() {
    return this.getStringAttribute('smartsheet_action');
  }

  // space - computed: true, optional: false, required: false
  public get space() {
    return this.getStringAttribute('space');
  }

  // subscribe_dashboard_email_reports - computed: true, optional: false, required: false
  public get subscribeDashboardEmailReports() {
    return this.getStringAttribute('subscribe_dashboard_email_reports');
  }

  // textract_action - computed: true, optional: false, required: false
  public get textractAction() {
    return this.getStringAttribute('textract_action');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // use_agent_web_search - computed: true, optional: false, required: false
  public get useAgentWebSearch() {
    return this.getStringAttribute('use_agent_web_search');
  }

  // use_amazon_bedrock_ars_action - computed: true, optional: false, required: false
  public get useAmazonBedrockArsAction() {
    return this.getStringAttribute('use_amazon_bedrock_ars_action');
  }

  // use_amazon_bedrock_fs_action - computed: true, optional: false, required: false
  public get useAmazonBedrockFsAction() {
    return this.getStringAttribute('use_amazon_bedrock_fs_action');
  }

  // use_amazon_bedrock_krs_action - computed: true, optional: false, required: false
  public get useAmazonBedrockKrsAction() {
    return this.getStringAttribute('use_amazon_bedrock_krs_action');
  }

  // use_amazon_s_three_action - computed: true, optional: false, required: false
  public get useAmazonSThreeAction() {
    return this.getStringAttribute('use_amazon_s_three_action');
  }

  // use_asana_action - computed: true, optional: false, required: false
  public get useAsanaAction() {
    return this.getStringAttribute('use_asana_action');
  }

  // use_bamboo_hr_action - computed: true, optional: false, required: false
  public get useBambooHrAction() {
    return this.getStringAttribute('use_bamboo_hr_action');
  }

  // use_bedrock_models - computed: true, optional: false, required: false
  public get useBedrockModels() {
    return this.getStringAttribute('use_bedrock_models');
  }

  // use_box_agent_action - computed: true, optional: false, required: false
  public get useBoxAgentAction() {
    return this.getStringAttribute('use_box_agent_action');
  }

  // use_canva_agent_action - computed: true, optional: false, required: false
  public get useCanvaAgentAction() {
    return this.getStringAttribute('use_canva_agent_action');
  }

  // use_comprehend_action - computed: true, optional: false, required: false
  public get useComprehendAction() {
    return this.getStringAttribute('use_comprehend_action');
  }

  // use_comprehend_medical_action - computed: true, optional: false, required: false
  public get useComprehendMedicalAction() {
    return this.getStringAttribute('use_comprehend_medical_action');
  }

  // use_confluence_action - computed: true, optional: false, required: false
  public get useConfluenceAction() {
    return this.getStringAttribute('use_confluence_action');
  }

  // use_fact_set_action - computed: true, optional: false, required: false
  public get useFactSetAction() {
    return this.getStringAttribute('use_fact_set_action');
  }

  // use_generic_http_action - computed: true, optional: false, required: false
  public get useGenericHttpAction() {
    return this.getStringAttribute('use_generic_http_action');
  }

  // use_github_action - computed: true, optional: false, required: false
  public get useGithubAction() {
    return this.getStringAttribute('use_github_action');
  }

  // use_google_calendar_action - computed: true, optional: false, required: false
  public get useGoogleCalendarAction() {
    return this.getStringAttribute('use_google_calendar_action');
  }

  // use_hubspot_action - computed: true, optional: false, required: false
  public get useHubspotAction() {
    return this.getStringAttribute('use_hubspot_action');
  }

  // use_hugging_face_action - computed: true, optional: false, required: false
  public get useHuggingFaceAction() {
    return this.getStringAttribute('use_hugging_face_action');
  }

  // use_intercom_action - computed: true, optional: false, required: false
  public get useIntercomAction() {
    return this.getStringAttribute('use_intercom_action');
  }

  // use_jira_action - computed: true, optional: false, required: false
  public get useJiraAction() {
    return this.getStringAttribute('use_jira_action');
  }

  // use_linear_action - computed: true, optional: false, required: false
  public get useLinearAction() {
    return this.getStringAttribute('use_linear_action');
  }

  // use_mcp_action - computed: true, optional: false, required: false
  public get useMcpAction() {
    return this.getStringAttribute('use_mcp_action');
  }

  // use_monday_action - computed: true, optional: false, required: false
  public get useMondayAction() {
    return this.getStringAttribute('use_monday_action');
  }

  // use_ms_exchange_action - computed: true, optional: false, required: false
  public get useMsExchangeAction() {
    return this.getStringAttribute('use_ms_exchange_action');
  }

  // use_ms_teams_action - computed: true, optional: false, required: false
  public get useMsTeamsAction() {
    return this.getStringAttribute('use_ms_teams_action');
  }

  // use_new_relic_action - computed: true, optional: false, required: false
  public get useNewRelicAction() {
    return this.getStringAttribute('use_new_relic_action');
  }

  // use_notion_action - computed: true, optional: false, required: false
  public get useNotionAction() {
    return this.getStringAttribute('use_notion_action');
  }

  // use_one_drive_action - computed: true, optional: false, required: false
  public get useOneDriveAction() {
    return this.getStringAttribute('use_one_drive_action');
  }

  // use_open_api_action - computed: true, optional: false, required: false
  public get useOpenApiAction() {
    return this.getStringAttribute('use_open_api_action');
  }

  // use_pager_duty_action - computed: true, optional: false, required: false
  public get usePagerDutyAction() {
    return this.getStringAttribute('use_pager_duty_action');
  }

  // use_salesforce_action - computed: true, optional: false, required: false
  public get useSalesforceAction() {
    return this.getStringAttribute('use_salesforce_action');
  }

  // use_sand_p_global_energy_action - computed: true, optional: false, required: false
  public get useSandPGlobalEnergyAction() {
    return this.getStringAttribute('use_sand_p_global_energy_action');
  }

  // use_sand_pgmi_action - computed: true, optional: false, required: false
  public get useSandPgmiAction() {
    return this.getStringAttribute('use_sand_pgmi_action');
  }

  // use_sap_bill_of_material_action - computed: true, optional: false, required: false
  public get useSapBillOfMaterialAction() {
    return this.getStringAttribute('use_sap_bill_of_material_action');
  }

  // use_sap_business_partner_action - computed: true, optional: false, required: false
  public get useSapBusinessPartnerAction() {
    return this.getStringAttribute('use_sap_business_partner_action');
  }

  // use_sap_material_stock_action - computed: true, optional: false, required: false
  public get useSapMaterialStockAction() {
    return this.getStringAttribute('use_sap_material_stock_action');
  }

  // use_sap_physical_inventory_action - computed: true, optional: false, required: false
  public get useSapPhysicalInventoryAction() {
    return this.getStringAttribute('use_sap_physical_inventory_action');
  }

  // use_sap_product_master_data_action - computed: true, optional: false, required: false
  public get useSapProductMasterDataAction() {
    return this.getStringAttribute('use_sap_product_master_data_action');
  }

  // use_service_now_action - computed: true, optional: false, required: false
  public get useServiceNowAction() {
    return this.getStringAttribute('use_service_now_action');
  }

  // use_share_point_action - computed: true, optional: false, required: false
  public get useSharePointAction() {
    return this.getStringAttribute('use_share_point_action');
  }

  // use_slack_action - computed: true, optional: false, required: false
  public get useSlackAction() {
    return this.getStringAttribute('use_slack_action');
  }

  // use_smartsheet_action - computed: true, optional: false, required: false
  public get useSmartsheetAction() {
    return this.getStringAttribute('use_smartsheet_action');
  }

  // use_textract_action - computed: true, optional: false, required: false
  public get useTextractAction() {
    return this.getStringAttribute('use_textract_action');
  }

  // use_zendesk_action - computed: true, optional: false, required: false
  public get useZendeskAction() {
    return this.getStringAttribute('use_zendesk_action');
  }

  // view_account_spice_capacity - computed: true, optional: false, required: false
  public get viewAccountSpiceCapacity() {
    return this.getStringAttribute('view_account_spice_capacity');
  }

  // zendesk_action - computed: true, optional: false, required: false
  public get zendeskAction() {
    return this.getStringAttribute('zendesk_action');
  }
}
export interface DataAwsccQuicksightCustomPermissionsTags {
}

export function dataAwsccQuicksightCustomPermissionsTagsToTerraform(struct?: DataAwsccQuicksightCustomPermissionsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightCustomPermissionsTagsToHclTerraform(struct?: DataAwsccQuicksightCustomPermissionsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightCustomPermissionsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightCustomPermissionsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightCustomPermissionsTags | undefined) {
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

export class DataAwsccQuicksightCustomPermissionsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightCustomPermissionsTagsOutputReference {
    return new DataAwsccQuicksightCustomPermissionsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_custom_permissions awscc_quicksight_custom_permissions}
*/
export class DataAwsccQuicksightCustomPermissions extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_custom_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQuicksightCustomPermissions to import
  * @param importFromId The id of the existing DataAwsccQuicksightCustomPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQuicksightCustomPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_custom_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_custom_permissions awscc_quicksight_custom_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightCustomPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightCustomPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_custom_permissions',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }

  // custom_permissions_name - computed: true, optional: false, required: false
  public get customPermissionsName() {
    return this.getStringAttribute('custom_permissions_name');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQuicksightCustomPermissionsTagsList(this, "tags", false);
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
