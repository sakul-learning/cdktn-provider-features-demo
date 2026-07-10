// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApprunnerVpcConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector#security_groups ApprunnerVpcConnector#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector#subnets ApprunnerVpcConnector#subnets}
  */
  readonly subnets: string[];
  /**
  * A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector#tags ApprunnerVpcConnector#tags}
  */
  readonly tags?: ApprunnerVpcConnectorTags[] | cdktn.IResolvable;
  /**
  * A name for the VPC connector. If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector#vpc_connector_name ApprunnerVpcConnector#vpc_connector_name}
  */
  readonly vpcConnectorName?: string;
}
export interface ApprunnerVpcConnectorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector#key ApprunnerVpcConnector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector#value ApprunnerVpcConnector#value}
  */
  readonly value?: string;
}

export function apprunnerVpcConnectorTagsToTerraform(struct?: ApprunnerVpcConnectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apprunnerVpcConnectorTagsToHclTerraform(struct?: ApprunnerVpcConnectorTags | cdktn.IResolvable): any {
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

export class ApprunnerVpcConnectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApprunnerVpcConnectorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApprunnerVpcConnectorTags | cdktn.IResolvable | undefined) {
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

export class ApprunnerVpcConnectorTagsList extends cdktn.ComplexList {
  public internalValue? : ApprunnerVpcConnectorTags[] | cdktn.IResolvable

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
  public get(index: number): ApprunnerVpcConnectorTagsOutputReference {
    return new ApprunnerVpcConnectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector awscc_apprunner_vpc_connector}
*/
export class ApprunnerVpcConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apprunner_vpc_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApprunnerVpcConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApprunnerVpcConnector to import
  * @param importFromId The id of the existing ApprunnerVpcConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApprunnerVpcConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apprunner_vpc_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/apprunner_vpc_connector awscc_apprunner_vpc_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerVpcConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerVpcConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apprunner_vpc_connector',
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
    this._securityGroups = config.securityGroups;
    this._subnets = config.subnets;
    this._tags.internalValue = config.tags;
    this._vpcConnectorName = config.vpcConnectorName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApprunnerVpcConnectorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApprunnerVpcConnectorTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_connector_arn - computed: true, optional: false, required: false
  public get vpcConnectorArn() {
    return this.getStringAttribute('vpc_connector_arn');
  }

  // vpc_connector_name - computed: true, optional: true, required: false
  private _vpcConnectorName?: string; 
  public get vpcConnectorName() {
    return this.getStringAttribute('vpc_connector_name');
  }
  public set vpcConnectorName(value: string) {
    this._vpcConnectorName = value;
  }
  public resetVpcConnectorName() {
    this._vpcConnectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorNameInput() {
    return this._vpcConnectorName;
  }

  // vpc_connector_revision - computed: true, optional: false, required: false
  public get vpcConnectorRevision() {
    return this.getNumberAttribute('vpc_connector_revision');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroups),
      subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnets),
      tags: cdktn.listMapper(apprunnerVpcConnectorTagsToTerraform, false)(this._tags.internalValue),
      vpc_connector_name: cdktn.stringToTerraform(this._vpcConnectorName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      security_groups: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnets: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(apprunnerVpcConnectorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApprunnerVpcConnectorTagsList",
      },
      vpc_connector_name: {
        value: cdktn.stringToHclTerraform(this._vpcConnectorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
