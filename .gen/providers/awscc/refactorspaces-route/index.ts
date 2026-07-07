// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RefactorspacesRouteConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#application_identifier RefactorspacesRoute#application_identifier}
  */
  readonly applicationIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#default_route RefactorspacesRoute#default_route}
  */
  readonly defaultRoute?: RefactorspacesRouteDefaultRoute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#environment_identifier RefactorspacesRoute#environment_identifier}
  */
  readonly environmentIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#route_type RefactorspacesRoute#route_type}
  */
  readonly routeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#service_identifier RefactorspacesRoute#service_identifier}
  */
  readonly serviceIdentifier: string;
  /**
  * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#tags RefactorspacesRoute#tags}
  */
  readonly tags?: RefactorspacesRouteTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#uri_path_route RefactorspacesRoute#uri_path_route}
  */
  readonly uriPathRoute?: RefactorspacesRouteUriPathRoute;
}
export interface RefactorspacesRouteDefaultRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}
  */
  readonly activationState?: string;
}

export function refactorspacesRouteDefaultRouteToTerraform(struct?: RefactorspacesRouteDefaultRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    activation_state: cdktn.stringToTerraform(struct!.activationState),
  }
}


export function refactorspacesRouteDefaultRouteToHclTerraform(struct?: RefactorspacesRouteDefaultRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    activation_state: {
      value: cdktn.stringToHclTerraform(struct!.activationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RefactorspacesRouteDefaultRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RefactorspacesRouteDefaultRoute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationState = this._activationState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RefactorspacesRouteDefaultRoute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationState = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationState = value.activationState;
    }
  }

  // activation_state - computed: true, optional: true, required: false
  private _activationState?: string; 
  public get activationState() {
    return this.getStringAttribute('activation_state');
  }
  public set activationState(value: string) {
    this._activationState = value;
  }
  public resetActivationState() {
    this._activationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationStateInput() {
    return this._activationState;
  }
}
export interface RefactorspacesRouteTags {
  /**
  * A string used to identify this tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#key RefactorspacesRoute#key}
  */
  readonly key?: string;
  /**
  * A string containing the value for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#value RefactorspacesRoute#value}
  */
  readonly value?: string;
}

export function refactorspacesRouteTagsToTerraform(struct?: RefactorspacesRouteTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function refactorspacesRouteTagsToHclTerraform(struct?: RefactorspacesRouteTags | cdktn.IResolvable): any {
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

export class RefactorspacesRouteTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RefactorspacesRouteTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RefactorspacesRouteTags | cdktn.IResolvable | undefined) {
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

export class RefactorspacesRouteTagsList extends cdktn.ComplexList {
  public internalValue? : RefactorspacesRouteTags[] | cdktn.IResolvable

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
  public get(index: number): RefactorspacesRouteTagsOutputReference {
    return new RefactorspacesRouteTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RefactorspacesRouteUriPathRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}
  */
  readonly activationState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#append_source_path RefactorspacesRoute#append_source_path}
  */
  readonly appendSourcePath?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#include_child_paths RefactorspacesRoute#include_child_paths}
  */
  readonly includeChildPaths?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#methods RefactorspacesRoute#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#source_path RefactorspacesRoute#source_path}
  */
  readonly sourcePath?: string;
}

export function refactorspacesRouteUriPathRouteToTerraform(struct?: RefactorspacesRouteUriPathRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    activation_state: cdktn.stringToTerraform(struct!.activationState),
    append_source_path: cdktn.booleanToTerraform(struct!.appendSourcePath),
    include_child_paths: cdktn.booleanToTerraform(struct!.includeChildPaths),
    methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.methods),
    source_path: cdktn.stringToTerraform(struct!.sourcePath),
  }
}


export function refactorspacesRouteUriPathRouteToHclTerraform(struct?: RefactorspacesRouteUriPathRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    activation_state: {
      value: cdktn.stringToHclTerraform(struct!.activationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    append_source_path: {
      value: cdktn.booleanToHclTerraform(struct!.appendSourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_child_paths: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_path: {
      value: cdktn.stringToHclTerraform(struct!.sourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RefactorspacesRouteUriPathRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RefactorspacesRouteUriPathRoute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationState = this._activationState;
    }
    if (this._appendSourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendSourcePath = this._appendSourcePath;
    }
    if (this._includeChildPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildPaths = this._includeChildPaths;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RefactorspacesRouteUriPathRoute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationState = undefined;
      this._appendSourcePath = undefined;
      this._includeChildPaths = undefined;
      this._methods = undefined;
      this._sourcePath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationState = value.activationState;
      this._appendSourcePath = value.appendSourcePath;
      this._includeChildPaths = value.includeChildPaths;
      this._methods = value.methods;
      this._sourcePath = value.sourcePath;
    }
  }

  // activation_state - computed: true, optional: true, required: false
  private _activationState?: string; 
  public get activationState() {
    return this.getStringAttribute('activation_state');
  }
  public set activationState(value: string) {
    this._activationState = value;
  }
  public resetActivationState() {
    this._activationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationStateInput() {
    return this._activationState;
  }

  // append_source_path - computed: true, optional: true, required: false
  private _appendSourcePath?: boolean | cdktn.IResolvable; 
  public get appendSourcePath() {
    return this.getBooleanAttribute('append_source_path');
  }
  public set appendSourcePath(value: boolean | cdktn.IResolvable) {
    this._appendSourcePath = value;
  }
  public resetAppendSourcePath() {
    this._appendSourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendSourcePathInput() {
    return this._appendSourcePath;
  }

  // include_child_paths - computed: true, optional: true, required: false
  private _includeChildPaths?: boolean | cdktn.IResolvable; 
  public get includeChildPaths() {
    return this.getBooleanAttribute('include_child_paths');
  }
  public set includeChildPaths(value: boolean | cdktn.IResolvable) {
    this._includeChildPaths = value;
  }
  public resetIncludeChildPaths() {
    this._includeChildPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildPathsInput() {
    return this._includeChildPaths;
  }

  // methods - computed: true, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // source_path - computed: true, optional: true, required: false
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route awscc_refactorspaces_route}
*/
export class RefactorspacesRoute extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_refactorspaces_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RefactorspacesRoute resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RefactorspacesRoute to import
  * @param importFromId The id of the existing RefactorspacesRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RefactorspacesRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_refactorspaces_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/refactorspaces_route awscc_refactorspaces_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RefactorspacesRouteConfig
  */
  public constructor(scope: Construct, id: string, config: RefactorspacesRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_refactorspaces_route',
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
    this._applicationIdentifier = config.applicationIdentifier;
    this._defaultRoute.internalValue = config.defaultRoute;
    this._environmentIdentifier = config.environmentIdentifier;
    this._routeType = config.routeType;
    this._serviceIdentifier = config.serviceIdentifier;
    this._tags.internalValue = config.tags;
    this._uriPathRoute.internalValue = config.uriPathRoute;
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

  // default_route - computed: true, optional: true, required: false
  private _defaultRoute = new RefactorspacesRouteDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: RefactorspacesRouteDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
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

  // path_resource_to_id - computed: true, optional: false, required: false
  public get pathResourceToId() {
    return this.getStringAttribute('path_resource_to_id');
  }

  // route_identifier - computed: true, optional: false, required: false
  public get routeIdentifier() {
    return this.getStringAttribute('route_identifier');
  }

  // route_type - computed: false, optional: false, required: true
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }

  // service_identifier - computed: false, optional: false, required: true
  private _serviceIdentifier?: string; 
  public get serviceIdentifier() {
    return this.getStringAttribute('service_identifier');
  }
  public set serviceIdentifier(value: string) {
    this._serviceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdentifierInput() {
    return this._serviceIdentifier;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new RefactorspacesRouteTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RefactorspacesRouteTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // uri_path_route - computed: true, optional: true, required: false
  private _uriPathRoute = new RefactorspacesRouteUriPathRouteOutputReference(this, "uri_path_route");
  public get uriPathRoute() {
    return this._uriPathRoute;
  }
  public putUriPathRoute(value: RefactorspacesRouteUriPathRoute) {
    this._uriPathRoute.internalValue = value;
  }
  public resetUriPathRoute() {
    this._uriPathRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathRouteInput() {
    return this._uriPathRoute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_identifier: cdktn.stringToTerraform(this._applicationIdentifier),
      default_route: refactorspacesRouteDefaultRouteToTerraform(this._defaultRoute.internalValue),
      environment_identifier: cdktn.stringToTerraform(this._environmentIdentifier),
      route_type: cdktn.stringToTerraform(this._routeType),
      service_identifier: cdktn.stringToTerraform(this._serviceIdentifier),
      tags: cdktn.listMapper(refactorspacesRouteTagsToTerraform, false)(this._tags.internalValue),
      uri_path_route: refactorspacesRouteUriPathRouteToTerraform(this._uriPathRoute.internalValue),
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
      default_route: {
        value: refactorspacesRouteDefaultRouteToHclTerraform(this._defaultRoute.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RefactorspacesRouteDefaultRoute",
      },
      environment_identifier: {
        value: cdktn.stringToHclTerraform(this._environmentIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_type: {
        value: cdktn.stringToHclTerraform(this._routeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_identifier: {
        value: cdktn.stringToHclTerraform(this._serviceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(refactorspacesRouteTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RefactorspacesRouteTagsList",
      },
      uri_path_route: {
        value: refactorspacesRouteUriPathRouteToHclTerraform(this._uriPathRoute.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RefactorspacesRouteUriPathRoute",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
