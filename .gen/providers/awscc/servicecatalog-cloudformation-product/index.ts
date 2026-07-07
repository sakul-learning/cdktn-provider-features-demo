// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ServicecatalogCloudformationProductConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#accept_language ServicecatalogCloudformationProduct#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#distributor ServicecatalogCloudformationProduct#distributor}
  */
  readonly distributor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#owner ServicecatalogCloudformationProduct#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#product_type ServicecatalogCloudformationProduct#product_type}
  */
  readonly productType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#provisioning_artifact_parameters ServicecatalogCloudformationProduct#provisioning_artifact_parameters}
  */
  readonly provisioningArtifactParameters?: ServicecatalogCloudformationProductProvisioningArtifactParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#replace_provisioning_artifacts ServicecatalogCloudformationProduct#replace_provisioning_artifacts}
  */
  readonly replaceProvisioningArtifacts?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#source_connection ServicecatalogCloudformationProduct#source_connection}
  */
  readonly sourceConnection?: ServicecatalogCloudformationProductSourceConnection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#support_description ServicecatalogCloudformationProduct#support_description}
  */
  readonly supportDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#support_email ServicecatalogCloudformationProduct#support_email}
  */
  readonly supportEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#support_url ServicecatalogCloudformationProduct#support_url}
  */
  readonly supportUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#tags ServicecatalogCloudformationProduct#tags}
  */
  readonly tags?: ServicecatalogCloudformationProductTags[] | cdktn.IResolvable;
}
export interface ServicecatalogCloudformationProductProvisioningArtifactParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#disable_template_validation ServicecatalogCloudformationProduct#disable_template_validation}
  */
  readonly disableTemplateValidation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#info ServicecatalogCloudformationProduct#info}
  */
  readonly info?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}
  */
  readonly type?: string;
}

export function servicecatalogCloudformationProductProvisioningArtifactParametersToTerraform(struct?: ServicecatalogCloudformationProductProvisioningArtifactParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    disable_template_validation: cdktn.booleanToTerraform(struct!.disableTemplateValidation),
    info: cdktn.stringToTerraform(struct!.info),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function servicecatalogCloudformationProductProvisioningArtifactParametersToHclTerraform(struct?: ServicecatalogCloudformationProductProvisioningArtifactParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_template_validation: {
      value: cdktn.booleanToHclTerraform(struct!.disableTemplateValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    info: {
      value: cdktn.stringToHclTerraform(struct!.info),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServicecatalogCloudformationProductProvisioningArtifactParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableTemplateValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTemplateValidation = this._disableTemplateValidation;
    }
    if (this._info !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicecatalogCloudformationProductProvisioningArtifactParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disableTemplateValidation = undefined;
      this._info = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disableTemplateValidation = value.disableTemplateValidation;
      this._info = value.info;
      this._name = value.name;
      this._type = value.type;
    }
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

  // disable_template_validation - computed: true, optional: true, required: false
  private _disableTemplateValidation?: boolean | cdktn.IResolvable; 
  public get disableTemplateValidation() {
    return this.getBooleanAttribute('disable_template_validation');
  }
  public set disableTemplateValidation(value: boolean | cdktn.IResolvable) {
    this._disableTemplateValidation = value;
  }
  public resetDisableTemplateValidation() {
    this._disableTemplateValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTemplateValidationInput() {
    return this._disableTemplateValidation;
  }

  // info - computed: true, optional: true, required: false
  private _info?: string; 
  public get info() {
    return this.getStringAttribute('info');
  }
  public set info(value: string) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
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

export class ServicecatalogCloudformationProductProvisioningArtifactParametersList extends cdktn.ComplexList {
  public internalValue? : ServicecatalogCloudformationProductProvisioningArtifactParameters[] | cdktn.IResolvable

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
  public get(index: number): ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference {
    return new ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#artifact_path ServicecatalogCloudformationProduct#artifact_path}
  */
  readonly artifactPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#branch ServicecatalogCloudformationProduct#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#connection_arn ServicecatalogCloudformationProduct#connection_arn}
  */
  readonly connectionArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#repository ServicecatalogCloudformationProduct#repository}
  */
  readonly repository?: string;
}

export function servicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarToTerraform(struct?: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_path: cdktn.stringToTerraform(struct!.artifactPath),
    branch: cdktn.stringToTerraform(struct!.branch),
    connection_arn: cdktn.stringToTerraform(struct!.connectionArn),
    repository: cdktn.stringToTerraform(struct!.repository),
  }
}


export function servicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarToHclTerraform(struct?: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_path: {
      value: cdktn.stringToHclTerraform(struct!.artifactPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktn.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.connectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktn.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactPath = this._artifactPath;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._connectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionArn = this._connectionArn;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactPath = undefined;
      this._branch = undefined;
      this._connectionArn = undefined;
      this._repository = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactPath = value.artifactPath;
      this._branch = value.branch;
      this._connectionArn = value.connectionArn;
      this._repository = value.repository;
    }
  }

  // artifact_path - computed: true, optional: true, required: false
  private _artifactPath?: string; 
  public get artifactPath() {
    return this.getStringAttribute('artifact_path');
  }
  public set artifactPath(value: string) {
    this._artifactPath = value;
  }
  public resetArtifactPath() {
    this._artifactPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactPathInput() {
    return this._artifactPath;
  }

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // connection_arn - computed: true, optional: true, required: false
  private _connectionArn?: string; 
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }
  public set connectionArn(value: string) {
    this._connectionArn = value;
  }
  public resetConnectionArn() {
    this._connectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionArnInput() {
    return this._connectionArn;
  }

  // repository - computed: true, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}
export interface ServicecatalogCloudformationProductSourceConnectionConnectionParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}
  */
  readonly codeStar?: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar;
}

export function servicecatalogCloudformationProductSourceConnectionConnectionParametersToTerraform(struct?: ServicecatalogCloudformationProductSourceConnectionConnectionParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_star: servicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarToTerraform(struct!.codeStar),
  }
}


export function servicecatalogCloudformationProductSourceConnectionConnectionParametersToHclTerraform(struct?: ServicecatalogCloudformationProductSourceConnectionConnectionParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_star: {
      value: servicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarToHclTerraform(struct!.codeStar),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicecatalogCloudformationProductSourceConnectionConnectionParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeStar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeStar = this._codeStar?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicecatalogCloudformationProductSourceConnectionConnectionParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeStar.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeStar.internalValue = value.codeStar;
    }
  }

  // code_star - computed: true, optional: true, required: false
  private _codeStar = new ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference(this, "code_star");
  public get codeStar() {
    return this._codeStar;
  }
  public putCodeStar(value: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar) {
    this._codeStar.internalValue = value;
  }
  public resetCodeStar() {
    this._codeStar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeStarInput() {
    return this._codeStar.internalValue;
  }
}
export interface ServicecatalogCloudformationProductSourceConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#connection_parameters ServicecatalogCloudformationProduct#connection_parameters}
  */
  readonly connectionParameters?: ServicecatalogCloudformationProductSourceConnectionConnectionParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}
  */
  readonly type?: string;
}

export function servicecatalogCloudformationProductSourceConnectionToTerraform(struct?: ServicecatalogCloudformationProductSourceConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_parameters: servicecatalogCloudformationProductSourceConnectionConnectionParametersToTerraform(struct!.connectionParameters),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function servicecatalogCloudformationProductSourceConnectionToHclTerraform(struct?: ServicecatalogCloudformationProductSourceConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_parameters: {
      value: servicecatalogCloudformationProductSourceConnectionConnectionParametersToHclTerraform(struct!.connectionParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicecatalogCloudformationProductSourceConnectionConnectionParameters",
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

export class ServicecatalogCloudformationProductSourceConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicecatalogCloudformationProductSourceConnection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionParameters = this._connectionParameters?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicecatalogCloudformationProductSourceConnection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionParameters.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionParameters.internalValue = value.connectionParameters;
      this._type = value.type;
    }
  }

  // connection_parameters - computed: true, optional: true, required: false
  private _connectionParameters = new ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference(this, "connection_parameters");
  public get connectionParameters() {
    return this._connectionParameters;
  }
  public putConnectionParameters(value: ServicecatalogCloudformationProductSourceConnectionConnectionParameters) {
    this._connectionParameters.internalValue = value;
  }
  public resetConnectionParameters() {
    this._connectionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionParametersInput() {
    return this._connectionParameters.internalValue;
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
export interface ServicecatalogCloudformationProductTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#key ServicecatalogCloudformationProduct#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#value ServicecatalogCloudformationProduct#value}
  */
  readonly value?: string;
}

export function servicecatalogCloudformationProductTagsToTerraform(struct?: ServicecatalogCloudformationProductTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function servicecatalogCloudformationProductTagsToHclTerraform(struct?: ServicecatalogCloudformationProductTags | cdktn.IResolvable): any {
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

export class ServicecatalogCloudformationProductTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServicecatalogCloudformationProductTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ServicecatalogCloudformationProductTags | cdktn.IResolvable | undefined) {
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

export class ServicecatalogCloudformationProductTagsList extends cdktn.ComplexList {
  public internalValue? : ServicecatalogCloudformationProductTags[] | cdktn.IResolvable

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
  public get(index: number): ServicecatalogCloudformationProductTagsOutputReference {
    return new ServicecatalogCloudformationProductTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product}
*/
export class ServicecatalogCloudformationProduct extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_servicecatalog_cloudformation_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicecatalogCloudformationProduct to import
  * @param importFromId The id of the existing ServicecatalogCloudformationProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicecatalogCloudformationProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_cloudformation_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogCloudformationProductConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogCloudformationProductConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalog_cloudformation_product',
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
    this._acceptLanguage = config.acceptLanguage;
    this._description = config.description;
    this._distributor = config.distributor;
    this._name = config.name;
    this._owner = config.owner;
    this._productType = config.productType;
    this._provisioningArtifactParameters.internalValue = config.provisioningArtifactParameters;
    this._replaceProvisioningArtifacts = config.replaceProvisioningArtifacts;
    this._sourceConnection.internalValue = config.sourceConnection;
    this._supportDescription = config.supportDescription;
    this._supportEmail = config.supportEmail;
    this._supportUrl = config.supportUrl;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: true, optional: true, required: false
  private _acceptLanguage?: string; 
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage;
  }

  // cloudformation_product_id - computed: true, optional: false, required: false
  public get cloudformationProductId() {
    return this.getStringAttribute('cloudformation_product_id');
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

  // distributor - computed: true, optional: true, required: false
  private _distributor?: string; 
  public get distributor() {
    return this.getStringAttribute('distributor');
  }
  public set distributor(value: string) {
    this._distributor = value;
  }
  public resetDistributor() {
    this._distributor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributorInput() {
    return this._distributor;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_type - computed: true, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }

  // provisioning_artifact_ids - computed: true, optional: false, required: false
  public get provisioningArtifactIds() {
    return this.getStringAttribute('provisioning_artifact_ids');
  }

  // provisioning_artifact_names - computed: true, optional: false, required: false
  public get provisioningArtifactNames() {
    return this.getStringAttribute('provisioning_artifact_names');
  }

  // provisioning_artifact_parameters - computed: true, optional: true, required: false
  private _provisioningArtifactParameters = new ServicecatalogCloudformationProductProvisioningArtifactParametersList(this, "provisioning_artifact_parameters", false);
  public get provisioningArtifactParameters() {
    return this._provisioningArtifactParameters;
  }
  public putProvisioningArtifactParameters(value: ServicecatalogCloudformationProductProvisioningArtifactParameters[] | cdktn.IResolvable) {
    this._provisioningArtifactParameters.internalValue = value;
  }
  public resetProvisioningArtifactParameters() {
    this._provisioningArtifactParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactParametersInput() {
    return this._provisioningArtifactParameters.internalValue;
  }

  // replace_provisioning_artifacts - computed: true, optional: true, required: false
  private _replaceProvisioningArtifacts?: boolean | cdktn.IResolvable; 
  public get replaceProvisioningArtifacts() {
    return this.getBooleanAttribute('replace_provisioning_artifacts');
  }
  public set replaceProvisioningArtifacts(value: boolean | cdktn.IResolvable) {
    this._replaceProvisioningArtifacts = value;
  }
  public resetReplaceProvisioningArtifacts() {
    this._replaceProvisioningArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceProvisioningArtifactsInput() {
    return this._replaceProvisioningArtifacts;
  }

  // source_connection - computed: true, optional: true, required: false
  private _sourceConnection = new ServicecatalogCloudformationProductSourceConnectionOutputReference(this, "source_connection");
  public get sourceConnection() {
    return this._sourceConnection;
  }
  public putSourceConnection(value: ServicecatalogCloudformationProductSourceConnection) {
    this._sourceConnection.internalValue = value;
  }
  public resetSourceConnection() {
    this._sourceConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionInput() {
    return this._sourceConnection.internalValue;
  }

  // support_description - computed: true, optional: true, required: false
  private _supportDescription?: string; 
  public get supportDescription() {
    return this.getStringAttribute('support_description');
  }
  public set supportDescription(value: string) {
    this._supportDescription = value;
  }
  public resetSupportDescription() {
    this._supportDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportDescriptionInput() {
    return this._supportDescription;
  }

  // support_email - computed: true, optional: true, required: false
  private _supportEmail?: string; 
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }
  public set supportEmail(value: string) {
    this._supportEmail = value;
  }
  public resetSupportEmail() {
    this._supportEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEmailInput() {
    return this._supportEmail;
  }

  // support_url - computed: true, optional: true, required: false
  private _supportUrl?: string; 
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
  public set supportUrl(value: string) {
    this._supportUrl = value;
  }
  public resetSupportUrl() {
    this._supportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUrlInput() {
    return this._supportUrl;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ServicecatalogCloudformationProductTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ServicecatalogCloudformationProductTags[] | cdktn.IResolvable) {
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
      accept_language: cdktn.stringToTerraform(this._acceptLanguage),
      description: cdktn.stringToTerraform(this._description),
      distributor: cdktn.stringToTerraform(this._distributor),
      name: cdktn.stringToTerraform(this._name),
      owner: cdktn.stringToTerraform(this._owner),
      product_type: cdktn.stringToTerraform(this._productType),
      provisioning_artifact_parameters: cdktn.listMapper(servicecatalogCloudformationProductProvisioningArtifactParametersToTerraform, false)(this._provisioningArtifactParameters.internalValue),
      replace_provisioning_artifacts: cdktn.booleanToTerraform(this._replaceProvisioningArtifacts),
      source_connection: servicecatalogCloudformationProductSourceConnectionToTerraform(this._sourceConnection.internalValue),
      support_description: cdktn.stringToTerraform(this._supportDescription),
      support_email: cdktn.stringToTerraform(this._supportEmail),
      support_url: cdktn.stringToTerraform(this._supportUrl),
      tags: cdktn.listMapper(servicecatalogCloudformationProductTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_language: {
        value: cdktn.stringToHclTerraform(this._acceptLanguage),
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
      distributor: {
        value: cdktn.stringToHclTerraform(this._distributor),
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
      owner: {
        value: cdktn.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_type: {
        value: cdktn.stringToHclTerraform(this._productType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_artifact_parameters: {
        value: cdktn.listMapperHcl(servicecatalogCloudformationProductProvisioningArtifactParametersToHclTerraform, false)(this._provisioningArtifactParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicecatalogCloudformationProductProvisioningArtifactParametersList",
      },
      replace_provisioning_artifacts: {
        value: cdktn.booleanToHclTerraform(this._replaceProvisioningArtifacts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_connection: {
        value: servicecatalogCloudformationProductSourceConnectionToHclTerraform(this._sourceConnection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicecatalogCloudformationProductSourceConnection",
      },
      support_description: {
        value: cdktn.stringToHclTerraform(this._supportDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_email: {
        value: cdktn.stringToHclTerraform(this._supportEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_url: {
        value: cdktn.stringToHclTerraform(this._supportUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(servicecatalogCloudformationProductTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicecatalogCloudformationProductTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
