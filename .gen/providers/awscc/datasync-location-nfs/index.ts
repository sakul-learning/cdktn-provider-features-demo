// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatasyncLocationNfsConfig extends cdktn.TerraformMetaArguments {
  /**
  * The NFS mount options that DataSync can use to mount your NFS share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#mount_options DatasyncLocationNfs#mount_options}
  */
  readonly mountOptions?: DatasyncLocationNfsMountOptions;
  /**
  * Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#on_prem_config DatasyncLocationNfs#on_prem_config}
  */
  readonly onPremConfig: DatasyncLocationNfsOnPremConfig;
  /**
  * The name of the NFS server. This value is the IP address or DNS name of the NFS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}
  */
  readonly serverHostname?: string;
  /**
  * The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#tags DatasyncLocationNfs#tags}
  */
  readonly tags?: DatasyncLocationNfsTags[] | cdktn.IResolvable;
}
export interface DatasyncLocationNfsMountOptions {
  /**
  * The specific NFS version that you want DataSync to use to mount your NFS share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#version DatasyncLocationNfs#version}
  */
  readonly version?: string;
}

export function datasyncLocationNfsMountOptionsToTerraform(struct?: DatasyncLocationNfsMountOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function datasyncLocationNfsMountOptionsToHclTerraform(struct?: DatasyncLocationNfsMountOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationNfsMountOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationNfsMountOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationNfsMountOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DatasyncLocationNfsOnPremConfig {
  /**
  * ARN(s) of the agent(s) to use for an NFS location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}
  */
  readonly agentArns: string[];
}

export function datasyncLocationNfsOnPremConfigToTerraform(struct?: DatasyncLocationNfsOnPremConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.agentArns),
  }
}


export function datasyncLocationNfsOnPremConfigToHclTerraform(struct?: DatasyncLocationNfsOnPremConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.agentArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationNfsOnPremConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationNfsOnPremConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentArns = this._agentArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationNfsOnPremConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentArns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentArns = value.agentArns;
    }
  }

  // agent_arns - computed: false, optional: false, required: true
  private _agentArns?: string[];
  public get agentArns() {
    return this.getListAttribute('agent_arns');
  }
  public set agentArns(value: string[]) {
    this._agentArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentArnsInput() {
    return this._agentArns;
  }
}
export interface DatasyncLocationNfsTags {
  /**
  * The key for an AWS resource tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#key DatasyncLocationNfs#key}
  */
  readonly key?: string;
  /**
  * The value for an AWS resource tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#value DatasyncLocationNfs#value}
  */
  readonly value?: string;
}

export function datasyncLocationNfsTagsToTerraform(struct?: DatasyncLocationNfsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function datasyncLocationNfsTagsToHclTerraform(struct?: DatasyncLocationNfsTags | cdktn.IResolvable): any {
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

export class DatasyncLocationNfsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatasyncLocationNfsTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatasyncLocationNfsTags | cdktn.IResolvable | undefined) {
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

export class DatasyncLocationNfsTagsList extends cdktn.ComplexList {
  public internalValue? : DatasyncLocationNfsTags[] | cdktn.IResolvable

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
  public get(index: number): DatasyncLocationNfsTagsOutputReference {
    return new DatasyncLocationNfsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs awscc_datasync_location_nfs}
*/
export class DatasyncLocationNfs extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datasync_location_nfs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatasyncLocationNfs resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationNfs to import
  * @param importFromId The id of the existing DatasyncLocationNfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationNfs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_nfs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datasync_location_nfs awscc_datasync_location_nfs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationNfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_nfs',
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
    this._mountOptions.internalValue = config.mountOptions;
    this._onPremConfig.internalValue = config.onPremConfig;
    this._serverHostname = config.serverHostname;
    this._subdirectory = config.subdirectory;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }

  // mount_options - computed: true, optional: true, required: false
  private _mountOptions = new DatasyncLocationNfsMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DatasyncLocationNfsMountOptions) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }

  // on_prem_config - computed: false, optional: false, required: true
  private _onPremConfig = new DatasyncLocationNfsOnPremConfigOutputReference(this, "on_prem_config");
  public get onPremConfig() {
    return this._onPremConfig;
  }
  public putOnPremConfig(value: DatasyncLocationNfsOnPremConfig) {
    this._onPremConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremConfigInput() {
    return this._onPremConfig.internalValue;
  }

  // server_hostname - computed: true, optional: true, required: false
  private _serverHostname?: string;
  public get serverHostname() {
    return this.getStringAttribute('server_hostname');
  }
  public set serverHostname(value: string) {
    this._serverHostname = value;
  }
  public resetServerHostname() {
    this._serverHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname;
  }

  // subdirectory - computed: true, optional: true, required: false
  private _subdirectory?: string;
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DatasyncLocationNfsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DatasyncLocationNfsTags[] | cdktn.IResolvable) {
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
      mount_options: datasyncLocationNfsMountOptionsToTerraform(this._mountOptions.internalValue),
      on_prem_config: datasyncLocationNfsOnPremConfigToTerraform(this._onPremConfig.internalValue),
      server_hostname: cdktn.stringToTerraform(this._serverHostname),
      subdirectory: cdktn.stringToTerraform(this._subdirectory),
      tags: cdktn.listMapper(datasyncLocationNfsTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mount_options: {
        value: datasyncLocationNfsMountOptionsToHclTerraform(this._mountOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasyncLocationNfsMountOptions",
      },
      on_prem_config: {
        value: datasyncLocationNfsOnPremConfigToHclTerraform(this._onPremConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasyncLocationNfsOnPremConfig",
      },
      server_hostname: {
        value: cdktn.stringToHclTerraform(this._serverHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdirectory: {
        value: cdktn.stringToHclTerraform(this._subdirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(datasyncLocationNfsTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatasyncLocationNfsTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
