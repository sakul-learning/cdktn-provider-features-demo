// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/neptunegraph_graph_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NeptunegraphGraphSnapshotConfig extends cdktn.TerraformMetaArguments {
  /**
  * The unique identifier of the Neptune Analytics graph to create the snapshot from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/neptunegraph_graph_snapshot#graph_identifier NeptunegraphGraphSnapshot#graph_identifier}
  */
  readonly graphIdentifier: string;
  /**
  * The snapshot name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/neptunegraph_graph_snapshot#snapshot_name NeptunegraphGraphSnapshot#snapshot_name}
  */
  readonly snapshotName: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/neptunegraph_graph_snapshot#tags NeptunegraphGraphSnapshot#tags}
  */
  readonly tags?: NeptunegraphGraphSnapshotTags[] | cdktn.IResolvable;
}
export interface NeptunegraphGraphSnapshotTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/neptunegraph_graph_snapshot#key NeptunegraphGraphSnapshot#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/neptunegraph_graph_snapshot#value NeptunegraphGraphSnapshot#value}
  */
  readonly value?: string;
}

export function neptunegraphGraphSnapshotTagsToTerraform(struct?: NeptunegraphGraphSnapshotTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function neptunegraphGraphSnapshotTagsToHclTerraform(struct?: NeptunegraphGraphSnapshotTags | cdktn.IResolvable): any {
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

export class NeptunegraphGraphSnapshotTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NeptunegraphGraphSnapshotTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NeptunegraphGraphSnapshotTags | cdktn.IResolvable | undefined) {
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

export class NeptunegraphGraphSnapshotTagsList extends cdktn.ComplexList {
  public internalValue? : NeptunegraphGraphSnapshotTags[] | cdktn.IResolvable

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
  public get(index: number): NeptunegraphGraphSnapshotTagsOutputReference {
    return new NeptunegraphGraphSnapshotTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/neptunegraph_graph_snapshot awscc_neptunegraph_graph_snapshot}
*/
export class NeptunegraphGraphSnapshot extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_neptunegraph_graph_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NeptunegraphGraphSnapshot resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NeptunegraphGraphSnapshot to import
  * @param importFromId The id of the existing NeptunegraphGraphSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/neptunegraph_graph_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NeptunegraphGraphSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_neptunegraph_graph_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/neptunegraph_graph_snapshot awscc_neptunegraph_graph_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NeptunegraphGraphSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: NeptunegraphGraphSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_neptunegraph_graph_snapshot',
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
    this._graphIdentifier = config.graphIdentifier;
    this._snapshotName = config.snapshotName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // graph_identifier - computed: false, optional: false, required: true
  private _graphIdentifier?: string; 
  public get graphIdentifier() {
    return this.getStringAttribute('graph_identifier');
  }
  public set graphIdentifier(value: string) {
    this._graphIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphIdentifierInput() {
    return this._graphIdentifier;
  }

  // graph_snapshot_id - computed: true, optional: false, required: false
  public get graphSnapshotId() {
    return this.getStringAttribute('graph_snapshot_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_identifier - computed: true, optional: false, required: false
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }

  // snapshot_create_time - computed: true, optional: false, required: false
  public get snapshotCreateTime() {
    return this.getStringAttribute('snapshot_create_time');
  }

  // snapshot_name - computed: false, optional: false, required: true
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NeptunegraphGraphSnapshotTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NeptunegraphGraphSnapshotTags[] | cdktn.IResolvable) {
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
      graph_identifier: cdktn.stringToTerraform(this._graphIdentifier),
      snapshot_name: cdktn.stringToTerraform(this._snapshotName),
      tags: cdktn.listMapper(neptunegraphGraphSnapshotTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      graph_identifier: {
        value: cdktn.stringToHclTerraform(this._graphIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_name: {
        value: cdktn.stringToHclTerraform(this._snapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(neptunegraphGraphSnapshotTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NeptunegraphGraphSnapshotTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
