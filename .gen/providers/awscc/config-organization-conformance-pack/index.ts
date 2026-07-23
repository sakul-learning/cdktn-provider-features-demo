// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigOrganizationConformancePackConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of ConformancePackInputParameter objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#conformance_pack_input_parameters ConfigOrganizationConformancePack#conformance_pack_input_parameters}
  */
  readonly conformancePackInputParameters?: ConfigOrganizationConformancePackConformancePackInputParameters[] | cdktn.IResolvable;
  /**
  * AWS Config stores intermediate files while processing conformance pack template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}
  */
  readonly deliveryS3Bucket?: string;
  /**
  * The prefix for the delivery S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}
  */
  readonly deliveryS3KeyPrefix?: string;
  /**
  * A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}
  */
  readonly excludedAccounts?: string[];
  /**
  * The name of the organization conformance pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#organization_conformance_pack_name ConfigOrganizationConformancePack#organization_conformance_pack_name}
  */
  readonly organizationConformancePackName: string;
  /**
  * A string containing full conformance pack template body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}
  */
  readonly templateBody?: string;
  /**
  * Location of file containing the template body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}
  */
  readonly templateS3Uri?: string;
}
export interface ConfigOrganizationConformancePackConformancePackInputParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}
  */
  readonly parameterValue?: string;
}

export function configOrganizationConformancePackConformancePackInputParametersToTerraform(struct?: ConfigOrganizationConformancePackConformancePackInputParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
  }
}


export function configOrganizationConformancePackConformancePackInputParametersToHclTerraform(struct?: ConfigOrganizationConformancePackConformancePackInputParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktn.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigOrganizationConformancePackConformancePackInputParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigOrganizationConformancePackConformancePackInputParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigOrganizationConformancePackConformancePackInputParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: true, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class ConfigOrganizationConformancePackConformancePackInputParametersList extends cdktn.ComplexList {
  public internalValue? : ConfigOrganizationConformancePackConformancePackInputParameters[] | cdktn.IResolvable

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
  public get(index: number): ConfigOrganizationConformancePackConformancePackInputParametersOutputReference {
    return new ConfigOrganizationConformancePackConformancePackInputParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack awscc_config_organization_conformance_pack}
*/
export class ConfigOrganizationConformancePack extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_config_organization_conformance_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigOrganizationConformancePack to import
  * @param importFromId The id of the existing ConfigOrganizationConformancePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigOrganizationConformancePack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_organization_conformance_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/config_organization_conformance_pack awscc_config_organization_conformance_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigOrganizationConformancePackConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigOrganizationConformancePackConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_organization_conformance_pack',
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
    this._conformancePackInputParameters.internalValue = config.conformancePackInputParameters;
    this._deliveryS3Bucket = config.deliveryS3Bucket;
    this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
    this._excludedAccounts = config.excludedAccounts;
    this._organizationConformancePackName = config.organizationConformancePackName;
    this._templateBody = config.templateBody;
    this._templateS3Uri = config.templateS3Uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conformance_pack_input_parameters - computed: true, optional: true, required: false
  private _conformancePackInputParameters = new ConfigOrganizationConformancePackConformancePackInputParametersList(this, "conformance_pack_input_parameters", false);
  public get conformancePackInputParameters() {
    return this._conformancePackInputParameters;
  }
  public putConformancePackInputParameters(value: ConfigOrganizationConformancePackConformancePackInputParameters[] | cdktn.IResolvable) {
    this._conformancePackInputParameters.internalValue = value;
  }
  public resetConformancePackInputParameters() {
    this._conformancePackInputParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformancePackInputParametersInput() {
    return this._conformancePackInputParameters.internalValue;
  }

  // delivery_s3_bucket - computed: true, optional: true, required: false
  private _deliveryS3Bucket?: string; 
  public get deliveryS3Bucket() {
    return this.getStringAttribute('delivery_s3_bucket');
  }
  public set deliveryS3Bucket(value: string) {
    this._deliveryS3Bucket = value;
  }
  public resetDeliveryS3Bucket() {
    this._deliveryS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryS3BucketInput() {
    return this._deliveryS3Bucket;
  }

  // delivery_s3_key_prefix - computed: true, optional: true, required: false
  private _deliveryS3KeyPrefix?: string; 
  public get deliveryS3KeyPrefix() {
    return this.getStringAttribute('delivery_s3_key_prefix');
  }
  public set deliveryS3KeyPrefix(value: string) {
    this._deliveryS3KeyPrefix = value;
  }
  public resetDeliveryS3KeyPrefix() {
    this._deliveryS3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryS3KeyPrefixInput() {
    return this._deliveryS3KeyPrefix;
  }

  // excluded_accounts - computed: true, optional: true, required: false
  private _excludedAccounts?: string[]; 
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
  }
  public set excludedAccounts(value: string[]) {
    this._excludedAccounts = value;
  }
  public resetExcludedAccounts() {
    this._excludedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAccountsInput() {
    return this._excludedAccounts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_conformance_pack_name - computed: false, optional: false, required: true
  private _organizationConformancePackName?: string; 
  public get organizationConformancePackName() {
    return this.getStringAttribute('organization_conformance_pack_name');
  }
  public set organizationConformancePackName(value: string) {
    this._organizationConformancePackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationConformancePackNameInput() {
    return this._organizationConformancePackName;
  }

  // template_body - computed: true, optional: true, required: false
  private _templateBody?: string; 
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody;
  }

  // template_s3_uri - computed: true, optional: true, required: false
  private _templateS3Uri?: string; 
  public get templateS3Uri() {
    return this.getStringAttribute('template_s3_uri');
  }
  public set templateS3Uri(value: string) {
    this._templateS3Uri = value;
  }
  public resetTemplateS3Uri() {
    this._templateS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateS3UriInput() {
    return this._templateS3Uri;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conformance_pack_input_parameters: cdktn.listMapper(configOrganizationConformancePackConformancePackInputParametersToTerraform, false)(this._conformancePackInputParameters.internalValue),
      delivery_s3_bucket: cdktn.stringToTerraform(this._deliveryS3Bucket),
      delivery_s3_key_prefix: cdktn.stringToTerraform(this._deliveryS3KeyPrefix),
      excluded_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._excludedAccounts),
      organization_conformance_pack_name: cdktn.stringToTerraform(this._organizationConformancePackName),
      template_body: cdktn.stringToTerraform(this._templateBody),
      template_s3_uri: cdktn.stringToTerraform(this._templateS3Uri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conformance_pack_input_parameters: {
        value: cdktn.listMapperHcl(configOrganizationConformancePackConformancePackInputParametersToHclTerraform, false)(this._conformancePackInputParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigOrganizationConformancePackConformancePackInputParametersList",
      },
      delivery_s3_bucket: {
        value: cdktn.stringToHclTerraform(this._deliveryS3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_s3_key_prefix: {
        value: cdktn.stringToHclTerraform(this._deliveryS3KeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_accounts: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._excludedAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      organization_conformance_pack_name: {
        value: cdktn.stringToHclTerraform(this._organizationConformancePackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_body: {
        value: cdktn.stringToHclTerraform(this._templateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_s3_uri: {
        value: cdktn.stringToHclTerraform(this._templateS3Uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
