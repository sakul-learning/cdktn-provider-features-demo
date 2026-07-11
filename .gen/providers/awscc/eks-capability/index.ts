// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EksCapabilityConfig extends cdktn.TerraformMetaArguments {
  /**
  * A unique name for the capability. The name must be unique within your cluster and can contain alphanumeric characters, hyphens, and underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}
  */
  readonly capabilityName: string;
  /**
  * The name of the EKS cluster where you want to create the capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The configuration settings for the capability. The structure of this object varies depending on the capability type. For Argo CD capabilities, you can configure IAM Identity Center integration, RBAC role mappings, and network access settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#configuration EksCapability#configuration}
  */
  readonly configuration?: EksCapabilityConfiguration;
  /**
  * Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted. Currently, the only supported value is RETAIN which retains all Kubernetes resources managed by the capability when the capability is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}
  */
  readonly deletePropagationPolicy: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services. This role must have a trust policy that allows the EKS service principal to assume it, and it must have the necessary permissions for the capability type you're creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}
  */
  readonly roleArn: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#tags EksCapability#tags}
  */
  readonly tags?: EksCapabilityTags[] | cdktn.IResolvable;
  /**
  * The type of capability to create. Valid values are: ACK (AWS Controllers for Kubernetes, which lets you manage AWS resources directly from Kubernetes), ARGOCD (Argo CD for GitOps-based continuous delivery), or KRO (Kube Resource Orchestrator for composing and managing custom Kubernetes resources).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#type EksCapability#type}
  */
  readonly type: string;
}
export interface EksCapabilityConfigurationArgoCdAwsIdc {
  /**
  * The ARN of the IAM Identity Center instance to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}
  */
  readonly idcInstanceArn?: string;
  /**
  * The Region where your IAM Identity Center instance is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}
  */
  readonly idcRegion?: string;
}

export function eksCapabilityConfigurationArgoCdAwsIdcToTerraform(struct?: EksCapabilityConfigurationArgoCdAwsIdc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idc_instance_arn: cdktn.stringToTerraform(struct!.idcInstanceArn),
    idc_region: cdktn.stringToTerraform(struct!.idcRegion),
  }
}


export function eksCapabilityConfigurationArgoCdAwsIdcToHclTerraform(struct?: EksCapabilityConfigurationArgoCdAwsIdc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idc_instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.idcInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idc_region: {
      value: cdktn.stringToHclTerraform(struct!.idcRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationArgoCdAwsIdcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksCapabilityConfigurationArgoCdAwsIdc | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idcInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcInstanceArn = this._idcInstanceArn;
    }
    if (this._idcRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcRegion = this._idcRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCdAwsIdc | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idcInstanceArn = undefined;
      this._idcRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idcInstanceArn = value.idcInstanceArn;
      this._idcRegion = value.idcRegion;
    }
  }

  // idc_instance_arn - computed: true, optional: true, required: false
  private _idcInstanceArn?: string;
  public get idcInstanceArn() {
    return this.getStringAttribute('idc_instance_arn');
  }
  public set idcInstanceArn(value: string) {
    this._idcInstanceArn = value;
  }
  public resetIdcInstanceArn() {
    this._idcInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcInstanceArnInput() {
    return this._idcInstanceArn;
  }

  // idc_managed_application_arn - computed: true, optional: false, required: false
  public get idcManagedApplicationArn() {
    return this.getStringAttribute('idc_managed_application_arn');
  }

  // idc_region - computed: true, optional: true, required: false
  private _idcRegion?: string;
  public get idcRegion() {
    return this.getStringAttribute('idc_region');
  }
  public set idcRegion(value: string) {
    this._idcRegion = value;
  }
  public resetIdcRegion() {
    this._idcRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcRegionInput() {
    return this._idcRegion;
  }
}
export interface EksCapabilityConfigurationArgoCdNetworkAccess {
  /**
  * A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint. Each VPC endpoint provides private connectivity from a specific VPC to the Argo CD server. You can specify multiple VPC endpoint IDs to enable access from multiple VPCs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}
  */
  readonly vpceIds?: string[];
}

export function eksCapabilityConfigurationArgoCdNetworkAccessToTerraform(struct?: EksCapabilityConfigurationArgoCdNetworkAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpce_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpceIds),
  }
}


export function eksCapabilityConfigurationArgoCdNetworkAccessToHclTerraform(struct?: EksCapabilityConfigurationArgoCdNetworkAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpce_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationArgoCdNetworkAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksCapabilityConfigurationArgoCdNetworkAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpceIds = this._vpceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCdNetworkAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpceIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpceIds = value.vpceIds;
    }
  }

  // vpce_ids - computed: true, optional: true, required: false
  private _vpceIds?: string[];
  public get vpceIds() {
    return this.getListAttribute('vpce_ids');
  }
  public set vpceIds(value: string[]) {
    this._vpceIds = value;
  }
  public resetVpceIds() {
    this._vpceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpceIdsInput() {
    return this._vpceIds;
  }
}
export interface EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities {
  /**
  * The unique identifier of the IAM Identity Center user or group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#id EksCapability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of identity. Valid values are SSO_USER or SSO_GROUP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#type EksCapability#type}
  */
  readonly type?: string;
}

export function eksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesToTerraform(struct?: EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function eksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesToHclTerraform(struct?: EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
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

export class EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList extends cdktn.ComplexList {
  public internalValue? : EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities[] | cdktn.IResolvable

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
  public get(index: number): EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference {
    return new EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksCapabilityConfigurationArgoCdRbacRoleMappings {
  /**
  * A list of IAM Identity Center identities (users or groups) that should be assigned this Argo CD role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#identities EksCapability#identities}
  */
  readonly identities?: EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities[] | cdktn.IResolvable;
  /**
  * The Argo CD role to assign. Valid values are: ADMIN (full administrative access to Argo CD), EDITOR (edit access to Argo CD resources), or VIEWER (read-only access to Argo CD resources).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#role EksCapability#role}
  */
  readonly role?: string;
}

export function eksCapabilityConfigurationArgoCdRbacRoleMappingsToTerraform(struct?: EksCapabilityConfigurationArgoCdRbacRoleMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identities: cdktn.listMapper(eksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesToTerraform, false)(struct!.identities),
    role: cdktn.stringToTerraform(struct!.role),
  }
}


export function eksCapabilityConfigurationArgoCdRbacRoleMappingsToHclTerraform(struct?: EksCapabilityConfigurationArgoCdRbacRoleMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(eksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesToHclTerraform, false)(struct!.identities),
      isBlock: true,
      type: "list",
      storageClassType: "EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksCapabilityConfigurationArgoCdRbacRoleMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities?.internalValue;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCdRbacRoleMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identities.internalValue = undefined;
      this._role = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identities.internalValue = value.identities;
      this._role = value.role;
    }
  }

  // identities - computed: true, optional: true, required: false
  private _identities = new EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities[] | cdktn.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class EksCapabilityConfigurationArgoCdRbacRoleMappingsList extends cdktn.ComplexList {
  public internalValue? : EksCapabilityConfigurationArgoCdRbacRoleMappings[] | cdktn.IResolvable

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
  public get(index: number): EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference {
    return new EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksCapabilityConfigurationArgoCd {
  /**
  * Configuration for integrating Argo CD with IAM Identity Center. This allows you to use your organization's identity provider for authentication to Argo CD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#aws_idc EksCapability#aws_idc}
  */
  readonly awsIdc?: EksCapabilityConfigurationArgoCdAwsIdc;
  /**
  * The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#namespace EksCapability#namespace}
  */
  readonly namespace?: string;
  /**
  * Configuration for network access to the Argo CD capability's managed API server endpoint. By default, the Argo CD server is accessible via a public endpoint. You can optionally specify one or more VPC endpoint IDs to enable private connectivity from your VPCs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#network_access EksCapability#network_access}
  */
  readonly networkAccess?: EksCapabilityConfigurationArgoCdNetworkAccess;
  /**
  * A list of role mappings that define which IAM Identity Center users or groups have which Argo CD roles. Each mapping associates an Argo CD role (ADMIN, EDITOR, or VIEWER) with one or more IAM Identity Center identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#rbac_role_mappings EksCapability#rbac_role_mappings}
  */
  readonly rbacRoleMappings?: EksCapabilityConfigurationArgoCdRbacRoleMappings[] | cdktn.IResolvable;
}

export function eksCapabilityConfigurationArgoCdToTerraform(struct?: EksCapabilityConfigurationArgoCd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_idc: eksCapabilityConfigurationArgoCdAwsIdcToTerraform(struct!.awsIdc),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    network_access: eksCapabilityConfigurationArgoCdNetworkAccessToTerraform(struct!.networkAccess),
    rbac_role_mappings: cdktn.listMapper(eksCapabilityConfigurationArgoCdRbacRoleMappingsToTerraform, false)(struct!.rbacRoleMappings),
  }
}


export function eksCapabilityConfigurationArgoCdToHclTerraform(struct?: EksCapabilityConfigurationArgoCd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_idc: {
      value: eksCapabilityConfigurationArgoCdAwsIdcToHclTerraform(struct!.awsIdc),
      isBlock: true,
      type: "struct",
      storageClassType: "EksCapabilityConfigurationArgoCdAwsIdc",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_access: {
      value: eksCapabilityConfigurationArgoCdNetworkAccessToHclTerraform(struct!.networkAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "EksCapabilityConfigurationArgoCdNetworkAccess",
    },
    rbac_role_mappings: {
      value: cdktn.listMapperHcl(eksCapabilityConfigurationArgoCdRbacRoleMappingsToHclTerraform, false)(struct!.rbacRoleMappings),
      isBlock: true,
      type: "list",
      storageClassType: "EksCapabilityConfigurationArgoCdRbacRoleMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationArgoCdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksCapabilityConfigurationArgoCd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIdc = this._awsIdc?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._networkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccess = this._networkAccess?.internalValue;
    }
    if (this._rbacRoleMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbacRoleMappings = this._rbacRoleMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfigurationArgoCd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsIdc.internalValue = undefined;
      this._namespace = undefined;
      this._networkAccess.internalValue = undefined;
      this._rbacRoleMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsIdc.internalValue = value.awsIdc;
      this._namespace = value.namespace;
      this._networkAccess.internalValue = value.networkAccess;
      this._rbacRoleMappings.internalValue = value.rbacRoleMappings;
    }
  }

  // aws_idc - computed: true, optional: true, required: false
  private _awsIdc = new EksCapabilityConfigurationArgoCdAwsIdcOutputReference(this, "aws_idc");
  public get awsIdc() {
    return this._awsIdc;
  }
  public putAwsIdc(value: EksCapabilityConfigurationArgoCdAwsIdc) {
    this._awsIdc.internalValue = value;
  }
  public resetAwsIdc() {
    this._awsIdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIdcInput() {
    return this._awsIdc.internalValue;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // network_access - computed: true, optional: true, required: false
  private _networkAccess = new EksCapabilityConfigurationArgoCdNetworkAccessOutputReference(this, "network_access");
  public get networkAccess() {
    return this._networkAccess;
  }
  public putNetworkAccess(value: EksCapabilityConfigurationArgoCdNetworkAccess) {
    this._networkAccess.internalValue = value;
  }
  public resetNetworkAccess() {
    this._networkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessInput() {
    return this._networkAccess.internalValue;
  }

  // rbac_role_mappings - computed: true, optional: true, required: false
  private _rbacRoleMappings = new EksCapabilityConfigurationArgoCdRbacRoleMappingsList(this, "rbac_role_mappings", false);
  public get rbacRoleMappings() {
    return this._rbacRoleMappings;
  }
  public putRbacRoleMappings(value: EksCapabilityConfigurationArgoCdRbacRoleMappings[] | cdktn.IResolvable) {
    this._rbacRoleMappings.internalValue = value;
  }
  public resetRbacRoleMappings() {
    this._rbacRoleMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacRoleMappingsInput() {
    return this._rbacRoleMappings.internalValue;
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
}
export interface EksCapabilityConfiguration {
  /**
  * Configuration settings for an Argo CD capability. This includes the Kubernetes namespace, IAM Identity Center integration, RBAC role mappings, and network access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#argo_cd EksCapability#argo_cd}
  */
  readonly argoCd?: EksCapabilityConfigurationArgoCd;
}

export function eksCapabilityConfigurationToTerraform(struct?: EksCapabilityConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    argo_cd: eksCapabilityConfigurationArgoCdToTerraform(struct!.argoCd),
  }
}


export function eksCapabilityConfigurationToHclTerraform(struct?: EksCapabilityConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    argo_cd: {
      value: eksCapabilityConfigurationArgoCdToHclTerraform(struct!.argoCd),
      isBlock: true,
      type: "struct",
      storageClassType: "EksCapabilityConfigurationArgoCd",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksCapabilityConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksCapabilityConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argoCd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argoCd = this._argoCd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCapabilityConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argoCd.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argoCd.internalValue = value.argoCd;
    }
  }

  // argo_cd - computed: true, optional: true, required: false
  private _argoCd = new EksCapabilityConfigurationArgoCdOutputReference(this, "argo_cd");
  public get argoCd() {
    return this._argoCd;
  }
  public putArgoCd(value: EksCapabilityConfigurationArgoCd) {
    this._argoCd.internalValue = value;
  }
  public resetArgoCd() {
    this._argoCd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argoCdInput() {
    return this._argoCd.internalValue;
  }
}
export interface EksCapabilityTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#key EksCapability#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#value EksCapability#value}
  */
  readonly value?: string;
}

export function eksCapabilityTagsToTerraform(struct?: EksCapabilityTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eksCapabilityTagsToHclTerraform(struct?: EksCapabilityTags | cdktn.IResolvable): any {
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

export class EksCapabilityTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksCapabilityTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EksCapabilityTags | cdktn.IResolvable | undefined) {
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

export class EksCapabilityTagsList extends cdktn.ComplexList {
  public internalValue? : EksCapabilityTags[] | cdktn.IResolvable

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
  public get(index: number): EksCapabilityTagsOutputReference {
    return new EksCapabilityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability awscc_eks_capability}
*/
export class EksCapability extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_eks_capability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EksCapability resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksCapability to import
  * @param importFromId The id of the existing EksCapability that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksCapability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eks_capability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/eks_capability awscc_eks_capability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksCapabilityConfig
  */
  public constructor(scope: Construct, id: string, config: EksCapabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_eks_capability',
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
    this._capabilityName = config.capabilityName;
    this._clusterName = config.clusterName;
    this._configuration.internalValue = config.configuration;
    this._deletePropagationPolicy = config.deletePropagationPolicy;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capability_name - computed: false, optional: false, required: true
  private _capabilityName?: string;
  public get capabilityName() {
    return this.getStringAttribute('capability_name');
  }
  public set capabilityName(value: string) {
    this._capabilityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityNameInput() {
    return this._capabilityName;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration = new EksCapabilityConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: EksCapabilityConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delete_propagation_policy - computed: false, optional: false, required: true
  private _deletePropagationPolicy?: string;
  public get deletePropagationPolicy() {
    return this.getStringAttribute('delete_propagation_policy');
  }
  public set deletePropagationPolicy(value: string) {
    this._deletePropagationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePropagationPolicyInput() {
    return this._deletePropagationPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EksCapabilityTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EksCapabilityTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capability_name: cdktn.stringToTerraform(this._capabilityName),
      cluster_name: cdktn.stringToTerraform(this._clusterName),
      configuration: eksCapabilityConfigurationToTerraform(this._configuration.internalValue),
      delete_propagation_policy: cdktn.stringToTerraform(this._deletePropagationPolicy),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(eksCapabilityTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capability_name: {
        value: cdktn.stringToHclTerraform(this._capabilityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktn.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: eksCapabilityConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EksCapabilityConfiguration",
      },
      delete_propagation_policy: {
        value: cdktn.stringToHclTerraform(this._deletePropagationPolicy),
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
      tags: {
        value: cdktn.listMapperHcl(eksCapabilityTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EksCapabilityTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
