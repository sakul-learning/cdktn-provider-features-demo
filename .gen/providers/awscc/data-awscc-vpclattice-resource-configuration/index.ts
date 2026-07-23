// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/vpclattice_resource_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccVpclatticeResourceConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/vpclattice_resource_configuration#id DataAwsccVpclatticeResourceConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource {
}

export function dataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceToTerraform(struct?: DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceToHclTerraform(struct?: DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
}
export interface DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition {
}

export function dataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionToTerraform(struct?: DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionToHclTerraform(struct?: DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn_resource - computed: true, optional: false, required: false
  public get arnResource() {
    return this.getStringAttribute('arn_resource');
  }

  // dns_resource - computed: true, optional: false, required: false
  private _dnsResource = new DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference(this, "dns_resource");
  public get dnsResource() {
    return this._dnsResource;
  }

  // ip_resource - computed: true, optional: false, required: false
  public get ipResource() {
    return this.getStringAttribute('ip_resource');
  }
}
export interface DataAwsccVpclatticeResourceConfigurationTags {
}

export function dataAwsccVpclatticeResourceConfigurationTagsToTerraform(struct?: DataAwsccVpclatticeResourceConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVpclatticeResourceConfigurationTagsToHclTerraform(struct?: DataAwsccVpclatticeResourceConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVpclatticeResourceConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccVpclatticeResourceConfigurationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVpclatticeResourceConfigurationTags | undefined) {
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

export class DataAwsccVpclatticeResourceConfigurationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccVpclatticeResourceConfigurationTagsOutputReference {
    return new DataAwsccVpclatticeResourceConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/vpclattice_resource_configuration awscc_vpclattice_resource_configuration}
*/
export class DataAwsccVpclatticeResourceConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_vpclattice_resource_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccVpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccVpclatticeResourceConfiguration to import
  * @param importFromId The id of the existing DataAwsccVpclatticeResourceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/vpclattice_resource_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccVpclatticeResourceConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_vpclattice_resource_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/vpclattice_resource_configuration awscc_vpclattice_resource_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccVpclatticeResourceConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccVpclatticeResourceConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_vpclattice_resource_configuration',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_association_to_sharable_service_network - computed: true, optional: false, required: false
  public get allowAssociationToSharableServiceNetwork() {
    return this.getBooleanAttribute('allow_association_to_sharable_service_network');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // custom_domain_name - computed: true, optional: false, required: false
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }

  // domain_verification_id - computed: true, optional: false, required: false
  public get domainVerificationId() {
    return this.getStringAttribute('domain_verification_id');
  }

  // group_domain - computed: true, optional: false, required: false
  public get groupDomain() {
    return this.getStringAttribute('group_domain');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port_ranges - computed: true, optional: false, required: false
  public get portRanges() {
    return this.getListAttribute('port_ranges');
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // resource_configuration_auth_type - computed: true, optional: false, required: false
  public get resourceConfigurationAuthType() {
    return this.getStringAttribute('resource_configuration_auth_type');
  }

  // resource_configuration_definition - computed: true, optional: false, required: false
  private _resourceConfigurationDefinition = new DataAwsccVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference(this, "resource_configuration_definition");
  public get resourceConfigurationDefinition() {
    return this._resourceConfigurationDefinition;
  }

  // resource_configuration_group_id - computed: true, optional: false, required: false
  public get resourceConfigurationGroupId() {
    return this.getStringAttribute('resource_configuration_group_id');
  }

  // resource_configuration_id - computed: true, optional: false, required: false
  public get resourceConfigurationId() {
    return this.getStringAttribute('resource_configuration_id');
  }

  // resource_configuration_type - computed: true, optional: false, required: false
  public get resourceConfigurationType() {
    return this.getStringAttribute('resource_configuration_type');
  }

  // resource_gateway_id - computed: true, optional: false, required: false
  public get resourceGatewayId() {
    return this.getStringAttribute('resource_gateway_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccVpclatticeResourceConfigurationTagsList(this, "tags", true);
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
