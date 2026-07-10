// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApigatewayDomainNameV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name_v2#id DataAwsccApigatewayDomainNameV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApigatewayDomainNameV2EndpointConfiguration {
}

export function dataAwsccApigatewayDomainNameV2EndpointConfigurationToTerraform(struct?: DataAwsccApigatewayDomainNameV2EndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDomainNameV2EndpointConfigurationToHclTerraform(struct?: DataAwsccApigatewayDomainNameV2EndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDomainNameV2EndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayDomainNameV2EndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDomainNameV2EndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccApigatewayDomainNameV2Tags {
}

export function dataAwsccApigatewayDomainNameV2TagsToTerraform(struct?: DataAwsccApigatewayDomainNameV2Tags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDomainNameV2TagsToHclTerraform(struct?: DataAwsccApigatewayDomainNameV2Tags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDomainNameV2TagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApigatewayDomainNameV2Tags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDomainNameV2Tags | undefined) {
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

export class DataAwsccApigatewayDomainNameV2TagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApigatewayDomainNameV2TagsOutputReference {
    return new DataAwsccApigatewayDomainNameV2TagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name_v2 awscc_apigateway_domain_name_v2}
*/
export class DataAwsccApigatewayDomainNameV2 extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigateway_domain_name_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApigatewayDomainNameV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApigatewayDomainNameV2 to import
  * @param importFromId The id of the existing DataAwsccApigatewayDomainNameV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApigatewayDomainNameV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_domain_name_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name_v2 awscc_apigateway_domain_name_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayDomainNameV2Config
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayDomainNameV2Config) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_domain_name_v2',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_name_arn - computed: true, optional: false, required: false
  public get domainNameArn() {
    return this.getStringAttribute('domain_name_arn');
  }

  // domain_name_id - computed: true, optional: false, required: false
  public get domainNameId() {
    return this.getStringAttribute('domain_name_id');
  }

  // endpoint_access_mode - computed: true, optional: false, required: false
  public get endpointAccessMode() {
    return this.getStringAttribute('endpoint_access_mode');
  }

  // endpoint_configuration - computed: true, optional: false, required: false
  private _endpointConfiguration = new DataAwsccApigatewayDomainNameV2EndpointConfigurationOutputReference(this, "endpoint_configuration");
  public get endpointConfiguration() {
    return this._endpointConfiguration;
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

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // routing_mode - computed: true, optional: false, required: false
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApigatewayDomainNameV2TagsList(this, "tags", false);
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
