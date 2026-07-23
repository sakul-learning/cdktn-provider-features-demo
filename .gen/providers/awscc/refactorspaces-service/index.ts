// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RefactorspacesServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#application_identifier RefactorspacesService#application_identifier}
  */
  readonly applicationIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#description RefactorspacesService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#endpoint_type RefactorspacesService#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#environment_identifier RefactorspacesService#environment_identifier}
  */
  readonly environmentIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#lambda_endpoint RefactorspacesService#lambda_endpoint}
  */
  readonly lambdaEndpoint?: RefactorspacesServiceLambdaEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#name RefactorspacesService#name}
  */
  readonly name: string;
  /**
  * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#tags RefactorspacesService#tags}
  */
  readonly tags?: RefactorspacesServiceTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#url_endpoint RefactorspacesService#url_endpoint}
  */
  readonly urlEndpoint?: RefactorspacesServiceUrlEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#vpc_id RefactorspacesService#vpc_id}
  */
  readonly vpcId?: string;
}
export interface RefactorspacesServiceLambdaEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#arn RefactorspacesService#arn}
  */
  readonly arn?: string;
}

export function refactorspacesServiceLambdaEndpointToTerraform(struct?: RefactorspacesServiceLambdaEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function refactorspacesServiceLambdaEndpointToHclTerraform(struct?: RefactorspacesServiceLambdaEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RefactorspacesServiceLambdaEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RefactorspacesServiceLambdaEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RefactorspacesServiceLambdaEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface RefactorspacesServiceTags {
  /**
  * A string used to identify this tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#key RefactorspacesService#key}
  */
  readonly key?: string;
  /**
  * A string containing the value for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#value RefactorspacesService#value}
  */
  readonly value?: string;
}

export function refactorspacesServiceTagsToTerraform(struct?: RefactorspacesServiceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function refactorspacesServiceTagsToHclTerraform(struct?: RefactorspacesServiceTags | cdktn.IResolvable): any {
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

export class RefactorspacesServiceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RefactorspacesServiceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RefactorspacesServiceTags | cdktn.IResolvable | undefined) {
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

export class RefactorspacesServiceTagsList extends cdktn.ComplexList {
  public internalValue? : RefactorspacesServiceTags[] | cdktn.IResolvable

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
  public get(index: number): RefactorspacesServiceTagsOutputReference {
    return new RefactorspacesServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RefactorspacesServiceUrlEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#health_url RefactorspacesService#health_url}
  */
  readonly healthUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#url RefactorspacesService#url}
  */
  readonly url?: string;
}

export function refactorspacesServiceUrlEndpointToTerraform(struct?: RefactorspacesServiceUrlEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    health_url: cdktn.stringToTerraform(struct!.healthUrl),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function refactorspacesServiceUrlEndpointToHclTerraform(struct?: RefactorspacesServiceUrlEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    health_url: {
      value: cdktn.stringToHclTerraform(struct!.healthUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RefactorspacesServiceUrlEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RefactorspacesServiceUrlEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthUrl = this._healthUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RefactorspacesServiceUrlEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthUrl = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthUrl = value.healthUrl;
      this._url = value.url;
    }
  }

  // health_url - computed: true, optional: true, required: false
  private _healthUrl?: string; 
  public get healthUrl() {
    return this.getStringAttribute('health_url');
  }
  public set healthUrl(value: string) {
    this._healthUrl = value;
  }
  public resetHealthUrl() {
    this._healthUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthUrlInput() {
    return this._healthUrl;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service awscc_refactorspaces_service}
*/
export class RefactorspacesService extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_refactorspaces_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RefactorspacesService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RefactorspacesService to import
  * @param importFromId The id of the existing RefactorspacesService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RefactorspacesService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_refactorspaces_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/refactorspaces_service awscc_refactorspaces_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RefactorspacesServiceConfig
  */
  public constructor(scope: Construct, id: string, config: RefactorspacesServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_refactorspaces_service',
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
    this._applicationIdentifier = config.applicationIdentifier;
    this._description = config.description;
    this._endpointType = config.endpointType;
    this._environmentIdentifier = config.environmentIdentifier;
    this._lambdaEndpoint.internalValue = config.lambdaEndpoint;
    this._name = config.name;
    this._tags.internalValue = config.tags;
    this._urlEndpoint.internalValue = config.urlEndpoint;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_identifier - computed: false, optional: false, required: true
  private _applicationIdentifier?: string; 
  public get applicationIdentifier() {
    return this.getStringAttribute('application_identifier');
  }
  public set applicationIdentifier(value: string) {
    this._applicationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdentifierInput() {
    return this._applicationIdentifier;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // environment_identifier - computed: false, optional: false, required: true
  private _environmentIdentifier?: string; 
  public get environmentIdentifier() {
    return this.getStringAttribute('environment_identifier');
  }
  public set environmentIdentifier(value: string) {
    this._environmentIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdentifierInput() {
    return this._environmentIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lambda_endpoint - computed: true, optional: true, required: false
  private _lambdaEndpoint = new RefactorspacesServiceLambdaEndpointOutputReference(this, "lambda_endpoint");
  public get lambdaEndpoint() {
    return this._lambdaEndpoint;
  }
  public putLambdaEndpoint(value: RefactorspacesServiceLambdaEndpoint) {
    this._lambdaEndpoint.internalValue = value;
  }
  public resetLambdaEndpoint() {
    this._lambdaEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaEndpointInput() {
    return this._lambdaEndpoint.internalValue;
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

  // service_identifier - computed: true, optional: false, required: false
  public get serviceIdentifier() {
    return this.getStringAttribute('service_identifier');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new RefactorspacesServiceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RefactorspacesServiceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // url_endpoint - computed: true, optional: true, required: false
  private _urlEndpoint = new RefactorspacesServiceUrlEndpointOutputReference(this, "url_endpoint");
  public get urlEndpoint() {
    return this._urlEndpoint;
  }
  public putUrlEndpoint(value: RefactorspacesServiceUrlEndpoint) {
    this._urlEndpoint.internalValue = value;
  }
  public resetUrlEndpoint() {
    this._urlEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEndpointInput() {
    return this._urlEndpoint.internalValue;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_identifier: cdktn.stringToTerraform(this._applicationIdentifier),
      description: cdktn.stringToTerraform(this._description),
      endpoint_type: cdktn.stringToTerraform(this._endpointType),
      environment_identifier: cdktn.stringToTerraform(this._environmentIdentifier),
      lambda_endpoint: refactorspacesServiceLambdaEndpointToTerraform(this._lambdaEndpoint.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(refactorspacesServiceTagsToTerraform, false)(this._tags.internalValue),
      url_endpoint: refactorspacesServiceUrlEndpointToTerraform(this._urlEndpoint.internalValue),
      vpc_id: cdktn.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_identifier: {
        value: cdktn.stringToHclTerraform(this._applicationIdentifier),
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
      endpoint_type: {
        value: cdktn.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_identifier: {
        value: cdktn.stringToHclTerraform(this._environmentIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_endpoint: {
        value: refactorspacesServiceLambdaEndpointToHclTerraform(this._lambdaEndpoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RefactorspacesServiceLambdaEndpoint",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(refactorspacesServiceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RefactorspacesServiceTagsList",
      },
      url_endpoint: {
        value: refactorspacesServiceUrlEndpointToHclTerraform(this._urlEndpoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RefactorspacesServiceUrlEndpoint",
      },
      vpc_id: {
        value: cdktn.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
