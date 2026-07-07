// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GameliftContainerGroupDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The scope of the container group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#container_group_type GameliftContainerGroupDefinition#container_group_type}
  */
  readonly containerGroupType?: string;
  /**
  * Specifies the information required to run game servers with this container group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#game_server_container_definition GameliftContainerGroupDefinition#game_server_container_definition}
  */
  readonly gameServerContainerDefinition?: GameliftContainerGroupDefinitionGameServerContainerDefinition;
  /**
  * A descriptive label for the container group definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}
  */
  readonly name: string;
  /**
  * The operating system of the container group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#operating_system GameliftContainerGroupDefinition#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * A specific ContainerGroupDefinition version to be updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#source_version_number GameliftContainerGroupDefinition#source_version_number}
  */
  readonly sourceVersionNumber?: number;
  /**
  * A collection of support container definitions that define the containers in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#support_container_definitions GameliftContainerGroupDefinition#support_container_definitions}
  */
  readonly supportContainerDefinitions?: GameliftContainerGroupDefinitionSupportContainerDefinitions[] | cdktn.IResolvable;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#tags GameliftContainerGroupDefinition#tags}
  */
  readonly tags?: GameliftContainerGroupDefinitionTags[] | cdktn.IResolvable;
  /**
  * The total memory limit of container groups following this definition in MiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#total_memory_limit_mebibytes GameliftContainerGroupDefinition#total_memory_limit_mebibytes}
  */
  readonly totalMemoryLimitMebibytes: number;
  /**
  * The total amount of virtual CPUs on the container group definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#total_vcpu_limit GameliftContainerGroupDefinition#total_vcpu_limit}
  */
  readonly totalVcpuLimit: number;
  /**
  * The description of this version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#version_description GameliftContainerGroupDefinition#version_description}
  */
  readonly versionDescription?: string;
}
export interface GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn {
  /**
  * The type of dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}
  */
  readonly condition?: string;
  /**
  * A descriptive label for the container definition. The container being defined depends on this container's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}
  */
  readonly containerName?: string;
}

export function gameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnToTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    container_name: cdktn.stringToTerraform(struct!.containerName),
  }
}


export function gameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnToHclTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._containerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._containerName = value.containerName;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }
}

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference {
    return new GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride {
  /**
  * The environment variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}
  */
  readonly name?: string;
  /**
  * The environment variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}
  */
  readonly value?: string;
}

export function gameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideToTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function gameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideToHclTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference {
    return new GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities {
  /**
  * The list of Linux capabilities to add to the container's default configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}
  */
  readonly include?: string[];
}

export function gameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesToTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
  }
}


export function gameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesToHclTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include = value.include;
    }
  }

  // include - computed: true, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktn.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints {
  /**
  * The access permissions for the mounted path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}
  */
  readonly accessLevel?: string;
  /**
  * The path inside the container where the mount is accessible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * The path on the host that will be mounted in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}
  */
  readonly instancePath?: string;
}

export function gameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsToTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_level: cdktn.stringToTerraform(struct!.accessLevel),
    container_path: cdktn.stringToTerraform(struct!.containerPath),
    instance_path: cdktn.stringToTerraform(struct!.instancePath),
  }
}


export function gameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsToHclTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_level: {
      value: cdktn.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_path: {
      value: cdktn.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_path: {
      value: cdktn.stringToHclTerraform(struct!.instancePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._instancePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePath = this._instancePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._containerPath = undefined;
      this._instancePath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._containerPath = value.containerPath;
      this._instancePath = value.instancePath;
    }
  }

  // access_level - computed: true, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // container_path - computed: true, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // instance_path - computed: true, optional: true, required: false
  private _instancePath?: string; 
  public get instancePath() {
    return this.getStringAttribute('instance_path');
  }
  public set instancePath(value: string) {
    this._instancePath = value;
  }
  public resetInstancePath() {
    this._instancePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePathInput() {
    return this._instancePath;
  }
}

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference {
    return new GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges {
  /**
  * A starting value for the range of allowed port numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}
  */
  readonly fromPort?: number;
  /**
  * Defines the protocol of these ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}
  */
  readonly protocol?: string;
  /**
  * An ending value for the range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than FromPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}
  */
  readonly toPort?: number;
}

export function gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesToTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesToHclTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._protocol = undefined;
      this._toPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._protocol = value.protocol;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: true, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // to_port - computed: true, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference {
    return new GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration {
  /**
  * Specifies one or more ranges of ports on a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}
  */
  readonly containerPortRanges?: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges[] | cdktn.IResolvable;
}

export function gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationToTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_port_ranges: cdktn.listMapper(gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesToTerraform, false)(struct!.containerPortRanges),
  }
}


export function gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationToHclTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_port_ranges: {
      value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesToHclTerraform, false)(struct!.containerPortRanges),
      isBlock: true,
      type: "set",
      storageClassType: "GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPortRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPortRanges = this._containerPortRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPortRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPortRanges.internalValue = value.containerPortRanges;
    }
  }

  // container_port_ranges - computed: true, optional: true, required: false
  private _containerPortRanges = new GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList(this, "container_port_ranges", true);
  public get containerPortRanges() {
    return this._containerPortRanges;
  }
  public putContainerPortRanges(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges[] | cdktn.IResolvable) {
    this._containerPortRanges.internalValue = value;
  }
  public resetContainerPortRanges() {
    this._containerPortRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortRangesInput() {
    return this._containerPortRanges.internalValue;
  }
}
export interface GameliftContainerGroupDefinitionGameServerContainerDefinition {
  /**
  * A descriptive label for the container definition. Container definition names must be unique with a container group definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}
  */
  readonly containerName?: string;
  /**
  * A list of container dependencies that determines when this container starts up and shuts down. For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}
  */
  readonly dependsOn?: GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn[] | cdktn.IResolvable;
  /**
  * The environment variables to pass to a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}
  */
  readonly environmentOverride?: GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride[] | cdktn.IResolvable;
  /**
  * Specifies the image URI of this container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}
  */
  readonly linuxCapabilities?: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities;
  /**
  * A list of mount point configurations to be used in a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}
  */
  readonly mountPoints?: GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints[] | cdktn.IResolvable;
  /**
  * Defines the ports on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}
  */
  readonly portConfiguration?: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration;
  /**
  * The digest of the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}
  */
  readonly resolvedImageDigest?: string;
  /**
  * The version of the server SDK used in this container group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#server_sdk_version GameliftContainerGroupDefinition#server_sdk_version}
  */
  readonly serverSdkVersion?: string;
}

export function gameliftContainerGroupDefinitionGameServerContainerDefinitionToTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_name: cdktn.stringToTerraform(struct!.containerName),
    depends_on: cdktn.listMapper(gameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnToTerraform, false)(struct!.dependsOn),
    environment_override: cdktn.listMapper(gameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideToTerraform, false)(struct!.environmentOverride),
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
    linux_capabilities: gameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesToTerraform(struct!.linuxCapabilities),
    mount_points: cdktn.listMapper(gameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsToTerraform, false)(struct!.mountPoints),
    port_configuration: gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationToTerraform(struct!.portConfiguration),
    resolved_image_digest: cdktn.stringToTerraform(struct!.resolvedImageDigest),
    server_sdk_version: cdktn.stringToTerraform(struct!.serverSdkVersion),
  }
}


export function gameliftContainerGroupDefinitionGameServerContainerDefinitionToHclTerraform(struct?: GameliftContainerGroupDefinitionGameServerContainerDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnToHclTerraform, false)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList",
    },
    environment_override: {
      value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideToHclTerraform, false)(struct!.environmentOverride),
      isBlock: true,
      type: "set",
      storageClassType: "GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList",
    },
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_capabilities: {
      value: gameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesToHclTerraform(struct!.linuxCapabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities",
    },
    mount_points: {
      value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsToHclTerraform, false)(struct!.mountPoints),
      isBlock: true,
      type: "set",
      storageClassType: "GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList",
    },
    port_configuration: {
      value: gameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationToHclTerraform(struct!.portConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration",
    },
    resolved_image_digest: {
      value: cdktn.stringToHclTerraform(struct!.resolvedImageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_sdk_version: {
      value: cdktn.stringToHclTerraform(struct!.serverSdkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GameliftContainerGroupDefinitionGameServerContainerDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._environmentOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentOverride = this._environmentOverride?.internalValue;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._linuxCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxCapabilities = this._linuxCapabilities?.internalValue;
    }
    if (this._mountPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoints = this._mountPoints?.internalValue;
    }
    if (this._portConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConfiguration = this._portConfiguration?.internalValue;
    }
    if (this._resolvedImageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedImageDigest = this._resolvedImageDigest;
    }
    if (this._serverSdkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSdkVersion = this._serverSdkVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionGameServerContainerDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._dependsOn.internalValue = undefined;
      this._environmentOverride.internalValue = undefined;
      this._imageUri = undefined;
      this._linuxCapabilities.internalValue = undefined;
      this._mountPoints.internalValue = undefined;
      this._portConfiguration.internalValue = undefined;
      this._resolvedImageDigest = undefined;
      this._serverSdkVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._dependsOn.internalValue = value.dependsOn;
      this._environmentOverride.internalValue = value.environmentOverride;
      this._imageUri = value.imageUri;
      this._linuxCapabilities.internalValue = value.linuxCapabilities;
      this._mountPoints.internalValue = value.mountPoints;
      this._portConfiguration.internalValue = value.portConfiguration;
      this._resolvedImageDigest = value.resolvedImageDigest;
      this._serverSdkVersion = value.serverSdkVersion;
    }
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // depends_on - computed: true, optional: true, required: false
  private _dependsOn = new GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn[] | cdktn.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // environment_override - computed: true, optional: true, required: false
  private _environmentOverride = new GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList(this, "environment_override", true);
  public get environmentOverride() {
    return this._environmentOverride;
  }
  public putEnvironmentOverride(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride[] | cdktn.IResolvable) {
    this._environmentOverride.internalValue = value;
  }
  public resetEnvironmentOverride() {
    this._environmentOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentOverrideInput() {
    return this._environmentOverride.internalValue;
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // linux_capabilities - computed: true, optional: true, required: false
  private _linuxCapabilities = new GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference(this, "linux_capabilities");
  public get linuxCapabilities() {
    return this._linuxCapabilities;
  }
  public putLinuxCapabilities(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities) {
    this._linuxCapabilities.internalValue = value;
  }
  public resetLinuxCapabilities() {
    this._linuxCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxCapabilitiesInput() {
    return this._linuxCapabilities.internalValue;
  }

  // mount_points - computed: true, optional: true, required: false
  private _mountPoints = new GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList(this, "mount_points", true);
  public get mountPoints() {
    return this._mountPoints;
  }
  public putMountPoints(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints[] | cdktn.IResolvable) {
    this._mountPoints.internalValue = value;
  }
  public resetMountPoints() {
    this._mountPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointsInput() {
    return this._mountPoints.internalValue;
  }

  // port_configuration - computed: true, optional: true, required: false
  private _portConfiguration = new GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference(this, "port_configuration");
  public get portConfiguration() {
    return this._portConfiguration;
  }
  public putPortConfiguration(value: GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration) {
    this._portConfiguration.internalValue = value;
  }
  public resetPortConfiguration() {
    this._portConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigurationInput() {
    return this._portConfiguration.internalValue;
  }

  // resolved_image_digest - computed: true, optional: true, required: false
  private _resolvedImageDigest?: string; 
  public get resolvedImageDigest() {
    return this.getStringAttribute('resolved_image_digest');
  }
  public set resolvedImageDigest(value: string) {
    this._resolvedImageDigest = value;
  }
  public resetResolvedImageDigest() {
    this._resolvedImageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedImageDigestInput() {
    return this._resolvedImageDigest;
  }

  // server_sdk_version - computed: true, optional: true, required: false
  private _serverSdkVersion?: string; 
  public get serverSdkVersion() {
    return this.getStringAttribute('server_sdk_version');
  }
  public set serverSdkVersion(value: string) {
    this._serverSdkVersion = value;
  }
  public resetServerSdkVersion() {
    this._serverSdkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSdkVersionInput() {
    return this._serverSdkVersion;
  }
}
export interface GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn {
  /**
  * The type of dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}
  */
  readonly condition?: string;
  /**
  * A descriptive label for the container definition. The container being defined depends on this container's condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}
  */
  readonly containerName?: string;
}

export function gameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnToTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    container_name: cdktn.stringToTerraform(struct!.containerName),
  }
}


export function gameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnToHclTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._containerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._containerName = value.containerName;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference {
    return new GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride {
  /**
  * The environment variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}
  */
  readonly name?: string;
  /**
  * The environment variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}
  */
  readonly value?: string;
}

export function gameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideToTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function gameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideToHclTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference {
    return new GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck {
  /**
  * A string array representing the command that the container runs to determine if it is healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#command GameliftContainerGroupDefinition#command}
  */
  readonly command?: string[];
  /**
  * How often (in seconds) the health is checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#interval GameliftContainerGroupDefinition#interval}
  */
  readonly interval?: number;
  /**
  * How many times the process manager will retry the command after a timeout. (The first run of the command does not count as a retry.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#retries GameliftContainerGroupDefinition#retries}
  */
  readonly retries?: number;
  /**
  * The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#start_period GameliftContainerGroupDefinition#start_period}
  */
  readonly startPeriod?: number;
  /**
  * How many seconds the process manager allows the command to run before canceling it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#timeout GameliftContainerGroupDefinition#timeout}
  */
  readonly timeout?: number;
}

export function gameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckToTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    interval: cdktn.numberToTerraform(struct!.interval),
    retries: cdktn.numberToTerraform(struct!.retries),
    start_period: cdktn.numberToTerraform(struct!.startPeriod),
    timeout: cdktn.numberToTerraform(struct!.timeout),
  }
}


export function gameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckToHclTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktn.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_period: {
      value: cdktn.numberToHclTerraform(struct!.startPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._startPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPeriod = this._startPeriod;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._interval = undefined;
      this._retries = undefined;
      this._startPeriod = undefined;
      this._timeout = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._interval = value.interval;
      this._retries = value.retries;
      this._startPeriod = value.startPeriod;
      this._timeout = value.timeout;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // start_period - computed: true, optional: true, required: false
  private _startPeriod?: number; 
  public get startPeriod() {
    return this.getNumberAttribute('start_period');
  }
  public set startPeriod(value: number) {
    this._startPeriod = value;
  }
  public resetStartPeriod() {
    this._startPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPeriodInput() {
    return this._startPeriod;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities {
  /**
  * The list of Linux capabilities to add to the container's default configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}
  */
  readonly include?: string[];
}

export function gameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesToTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
  }
}


export function gameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesToHclTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include = value.include;
    }
  }

  // include - computed: true, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktn.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints {
  /**
  * The access permissions for the mounted path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}
  */
  readonly accessLevel?: string;
  /**
  * The path inside the container where the mount is accessible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * The path on the host that will be mounted in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}
  */
  readonly instancePath?: string;
}

export function gameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsToTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_level: cdktn.stringToTerraform(struct!.accessLevel),
    container_path: cdktn.stringToTerraform(struct!.containerPath),
    instance_path: cdktn.stringToTerraform(struct!.instancePath),
  }
}


export function gameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsToHclTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_level: {
      value: cdktn.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_path: {
      value: cdktn.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_path: {
      value: cdktn.stringToHclTerraform(struct!.instancePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._instancePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePath = this._instancePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._containerPath = undefined;
      this._instancePath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._containerPath = value.containerPath;
      this._instancePath = value.instancePath;
    }
  }

  // access_level - computed: true, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // container_path - computed: true, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // instance_path - computed: true, optional: true, required: false
  private _instancePath?: string; 
  public get instancePath() {
    return this.getStringAttribute('instance_path');
  }
  public set instancePath(value: string) {
    this._instancePath = value;
  }
  public resetInstancePath() {
    this._instancePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePathInput() {
    return this._instancePath;
  }
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference {
    return new GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges {
  /**
  * A starting value for the range of allowed port numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}
  */
  readonly fromPort?: number;
  /**
  * Defines the protocol of these ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}
  */
  readonly protocol?: string;
  /**
  * An ending value for the range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than FromPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}
  */
  readonly toPort?: number;
}

export function gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesToTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesToHclTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._protocol = undefined;
      this._toPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._protocol = value.protocol;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: true, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // to_port - computed: true, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference {
    return new GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration {
  /**
  * Specifies one or more ranges of ports on a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}
  */
  readonly containerPortRanges?: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges[] | cdktn.IResolvable;
}

export function gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationToTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_port_ranges: cdktn.listMapper(gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesToTerraform, false)(struct!.containerPortRanges),
  }
}


export function gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationToHclTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_port_ranges: {
      value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesToHclTerraform, false)(struct!.containerPortRanges),
      isBlock: true,
      type: "set",
      storageClassType: "GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPortRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPortRanges = this._containerPortRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPortRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPortRanges.internalValue = value.containerPortRanges;
    }
  }

  // container_port_ranges - computed: true, optional: true, required: false
  private _containerPortRanges = new GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList(this, "container_port_ranges", true);
  public get containerPortRanges() {
    return this._containerPortRanges;
  }
  public putContainerPortRanges(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges[] | cdktn.IResolvable) {
    this._containerPortRanges.internalValue = value;
  }
  public resetContainerPortRanges() {
    this._containerPortRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortRangesInput() {
    return this._containerPortRanges.internalValue;
  }
}
export interface GameliftContainerGroupDefinitionSupportContainerDefinitions {
  /**
  * A descriptive label for the container definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}
  */
  readonly containerName?: string;
  /**
  * A list of container dependencies that determines when this container starts up and shuts down. For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}
  */
  readonly dependsOn?: GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn[] | cdktn.IResolvable;
  /**
  * The environment variables to pass to a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}
  */
  readonly environmentOverride?: GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride[] | cdktn.IResolvable;
  /**
  * Specifies if the container is essential. If an essential container fails a health check, then all containers in the container group will be restarted. You must specify exactly 1 essential container in a container group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#essential GameliftContainerGroupDefinition#essential}
  */
  readonly essential?: boolean | cdktn.IResolvable;
  /**
  * Specifies how the health of the containers will be checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#health_check GameliftContainerGroupDefinition#health_check}
  */
  readonly healthCheck?: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck;
  /**
  * Specifies the image URI of this container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}
  */
  readonly linuxCapabilities?: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities;
  /**
  * The total memory limit of container groups following this definition in MiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#memory_hard_limit_mebibytes GameliftContainerGroupDefinition#memory_hard_limit_mebibytes}
  */
  readonly memoryHardLimitMebibytes?: number;
  /**
  * A list of mount point configurations to be used in a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}
  */
  readonly mountPoints?: GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints[] | cdktn.IResolvable;
  /**
  * Defines the ports on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}
  */
  readonly portConfiguration?: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration;
  /**
  * The digest of the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}
  */
  readonly resolvedImageDigest?: string;
  /**
  * The number of virtual CPUs to give to the support group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#vcpu GameliftContainerGroupDefinition#vcpu}
  */
  readonly vcpu?: number;
}

export function gameliftContainerGroupDefinitionSupportContainerDefinitionsToTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_name: cdktn.stringToTerraform(struct!.containerName),
    depends_on: cdktn.listMapper(gameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnToTerraform, false)(struct!.dependsOn),
    environment_override: cdktn.listMapper(gameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideToTerraform, false)(struct!.environmentOverride),
    essential: cdktn.booleanToTerraform(struct!.essential),
    health_check: gameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckToTerraform(struct!.healthCheck),
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
    linux_capabilities: gameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesToTerraform(struct!.linuxCapabilities),
    memory_hard_limit_mebibytes: cdktn.numberToTerraform(struct!.memoryHardLimitMebibytes),
    mount_points: cdktn.listMapper(gameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsToTerraform, false)(struct!.mountPoints),
    port_configuration: gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationToTerraform(struct!.portConfiguration),
    resolved_image_digest: cdktn.stringToTerraform(struct!.resolvedImageDigest),
    vcpu: cdktn.numberToTerraform(struct!.vcpu),
  }
}


export function gameliftContainerGroupDefinitionSupportContainerDefinitionsToHclTerraform(struct?: GameliftContainerGroupDefinitionSupportContainerDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnToHclTerraform, false)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList",
    },
    environment_override: {
      value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideToHclTerraform, false)(struct!.environmentOverride),
      isBlock: true,
      type: "set",
      storageClassType: "GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList",
    },
    essential: {
      value: cdktn.booleanToHclTerraform(struct!.essential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check: {
      value: gameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck",
    },
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_capabilities: {
      value: gameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesToHclTerraform(struct!.linuxCapabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities",
    },
    memory_hard_limit_mebibytes: {
      value: cdktn.numberToHclTerraform(struct!.memoryHardLimitMebibytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_points: {
      value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsToHclTerraform, false)(struct!.mountPoints),
      isBlock: true,
      type: "set",
      storageClassType: "GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList",
    },
    port_configuration: {
      value: gameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationToHclTerraform(struct!.portConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration",
    },
    resolved_image_digest: {
      value: cdktn.stringToHclTerraform(struct!.resolvedImageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpu: {
      value: cdktn.numberToHclTerraform(struct!.vcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionSupportContainerDefinitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._environmentOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentOverride = this._environmentOverride?.internalValue;
    }
    if (this._essential !== undefined) {
      hasAnyValues = true;
      internalValueResult.essential = this._essential;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._linuxCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxCapabilities = this._linuxCapabilities?.internalValue;
    }
    if (this._memoryHardLimitMebibytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryHardLimitMebibytes = this._memoryHardLimitMebibytes;
    }
    if (this._mountPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoints = this._mountPoints?.internalValue;
    }
    if (this._portConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConfiguration = this._portConfiguration?.internalValue;
    }
    if (this._resolvedImageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedImageDigest = this._resolvedImageDigest;
    }
    if (this._vcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpu = this._vcpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftContainerGroupDefinitionSupportContainerDefinitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._dependsOn.internalValue = undefined;
      this._environmentOverride.internalValue = undefined;
      this._essential = undefined;
      this._healthCheck.internalValue = undefined;
      this._imageUri = undefined;
      this._linuxCapabilities.internalValue = undefined;
      this._memoryHardLimitMebibytes = undefined;
      this._mountPoints.internalValue = undefined;
      this._portConfiguration.internalValue = undefined;
      this._resolvedImageDigest = undefined;
      this._vcpu = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._dependsOn.internalValue = value.dependsOn;
      this._environmentOverride.internalValue = value.environmentOverride;
      this._essential = value.essential;
      this._healthCheck.internalValue = value.healthCheck;
      this._imageUri = value.imageUri;
      this._linuxCapabilities.internalValue = value.linuxCapabilities;
      this._memoryHardLimitMebibytes = value.memoryHardLimitMebibytes;
      this._mountPoints.internalValue = value.mountPoints;
      this._portConfiguration.internalValue = value.portConfiguration;
      this._resolvedImageDigest = value.resolvedImageDigest;
      this._vcpu = value.vcpu;
    }
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // depends_on - computed: true, optional: true, required: false
  private _dependsOn = new GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn[] | cdktn.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // environment_override - computed: true, optional: true, required: false
  private _environmentOverride = new GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList(this, "environment_override", true);
  public get environmentOverride() {
    return this._environmentOverride;
  }
  public putEnvironmentOverride(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride[] | cdktn.IResolvable) {
    this._environmentOverride.internalValue = value;
  }
  public resetEnvironmentOverride() {
    this._environmentOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentOverrideInput() {
    return this._environmentOverride.internalValue;
  }

  // essential - computed: true, optional: true, required: false
  private _essential?: boolean | cdktn.IResolvable; 
  public get essential() {
    return this.getBooleanAttribute('essential');
  }
  public set essential(value: boolean | cdktn.IResolvable) {
    this._essential = value;
  }
  public resetEssential() {
    this._essential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialInput() {
    return this._essential;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck = new GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // linux_capabilities - computed: true, optional: true, required: false
  private _linuxCapabilities = new GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference(this, "linux_capabilities");
  public get linuxCapabilities() {
    return this._linuxCapabilities;
  }
  public putLinuxCapabilities(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities) {
    this._linuxCapabilities.internalValue = value;
  }
  public resetLinuxCapabilities() {
    this._linuxCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxCapabilitiesInput() {
    return this._linuxCapabilities.internalValue;
  }

  // memory_hard_limit_mebibytes - computed: true, optional: true, required: false
  private _memoryHardLimitMebibytes?: number; 
  public get memoryHardLimitMebibytes() {
    return this.getNumberAttribute('memory_hard_limit_mebibytes');
  }
  public set memoryHardLimitMebibytes(value: number) {
    this._memoryHardLimitMebibytes = value;
  }
  public resetMemoryHardLimitMebibytes() {
    this._memoryHardLimitMebibytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryHardLimitMebibytesInput() {
    return this._memoryHardLimitMebibytes;
  }

  // mount_points - computed: true, optional: true, required: false
  private _mountPoints = new GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList(this, "mount_points", true);
  public get mountPoints() {
    return this._mountPoints;
  }
  public putMountPoints(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints[] | cdktn.IResolvable) {
    this._mountPoints.internalValue = value;
  }
  public resetMountPoints() {
    this._mountPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointsInput() {
    return this._mountPoints.internalValue;
  }

  // port_configuration - computed: true, optional: true, required: false
  private _portConfiguration = new GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference(this, "port_configuration");
  public get portConfiguration() {
    return this._portConfiguration;
  }
  public putPortConfiguration(value: GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration) {
    this._portConfiguration.internalValue = value;
  }
  public resetPortConfiguration() {
    this._portConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigurationInput() {
    return this._portConfiguration.internalValue;
  }

  // resolved_image_digest - computed: true, optional: true, required: false
  private _resolvedImageDigest?: string; 
  public get resolvedImageDigest() {
    return this.getStringAttribute('resolved_image_digest');
  }
  public set resolvedImageDigest(value: string) {
    this._resolvedImageDigest = value;
  }
  public resetResolvedImageDigest() {
    this._resolvedImageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedImageDigestInput() {
    return this._resolvedImageDigest;
  }

  // vcpu - computed: true, optional: true, required: false
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }
}

export class GameliftContainerGroupDefinitionSupportContainerDefinitionsList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionSupportContainerDefinitions[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference {
    return new GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftContainerGroupDefinitionTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#key GameliftContainerGroupDefinition#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}
  */
  readonly value?: string;
}

export function gameliftContainerGroupDefinitionTagsToTerraform(struct?: GameliftContainerGroupDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function gameliftContainerGroupDefinitionTagsToHclTerraform(struct?: GameliftContainerGroupDefinitionTags | cdktn.IResolvable): any {
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

export class GameliftContainerGroupDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftContainerGroupDefinitionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GameliftContainerGroupDefinitionTags | cdktn.IResolvable | undefined) {
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

export class GameliftContainerGroupDefinitionTagsList extends cdktn.ComplexList {
  public internalValue? : GameliftContainerGroupDefinitionTags[] | cdktn.IResolvable

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
  public get(index: number): GameliftContainerGroupDefinitionTagsOutputReference {
    return new GameliftContainerGroupDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition awscc_gamelift_container_group_definition}
*/
export class GameliftContainerGroupDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_gamelift_container_group_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GameliftContainerGroupDefinition to import
  * @param importFromId The id of the existing GameliftContainerGroupDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GameliftContainerGroupDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_gamelift_container_group_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/gamelift_container_group_definition awscc_gamelift_container_group_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameliftContainerGroupDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: GameliftContainerGroupDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_gamelift_container_group_definition',
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
    this._containerGroupType = config.containerGroupType;
    this._gameServerContainerDefinition.internalValue = config.gameServerContainerDefinition;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._sourceVersionNumber = config.sourceVersionNumber;
    this._supportContainerDefinitions.internalValue = config.supportContainerDefinitions;
    this._tags.internalValue = config.tags;
    this._totalMemoryLimitMebibytes = config.totalMemoryLimitMebibytes;
    this._totalVcpuLimit = config.totalVcpuLimit;
    this._versionDescription = config.versionDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_group_definition_arn - computed: true, optional: false, required: false
  public get containerGroupDefinitionArn() {
    return this.getStringAttribute('container_group_definition_arn');
  }

  // container_group_type - computed: true, optional: true, required: false
  private _containerGroupType?: string; 
  public get containerGroupType() {
    return this.getStringAttribute('container_group_type');
  }
  public set containerGroupType(value: string) {
    this._containerGroupType = value;
  }
  public resetContainerGroupType() {
    this._containerGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerGroupTypeInput() {
    return this._containerGroupType;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // game_server_container_definition - computed: true, optional: true, required: false
  private _gameServerContainerDefinition = new GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference(this, "game_server_container_definition");
  public get gameServerContainerDefinition() {
    return this._gameServerContainerDefinition;
  }
  public putGameServerContainerDefinition(value: GameliftContainerGroupDefinitionGameServerContainerDefinition) {
    this._gameServerContainerDefinition.internalValue = value;
  }
  public resetGameServerContainerDefinition() {
    this._gameServerContainerDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerContainerDefinitionInput() {
    return this._gameServerContainerDefinition.internalValue;
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

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // source_version_number - computed: true, optional: true, required: false
  private _sourceVersionNumber?: number; 
  public get sourceVersionNumber() {
    return this.getNumberAttribute('source_version_number');
  }
  public set sourceVersionNumber(value: number) {
    this._sourceVersionNumber = value;
  }
  public resetSourceVersionNumber() {
    this._sourceVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionNumberInput() {
    return this._sourceVersionNumber;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // support_container_definitions - computed: true, optional: true, required: false
  private _supportContainerDefinitions = new GameliftContainerGroupDefinitionSupportContainerDefinitionsList(this, "support_container_definitions", true);
  public get supportContainerDefinitions() {
    return this._supportContainerDefinitions;
  }
  public putSupportContainerDefinitions(value: GameliftContainerGroupDefinitionSupportContainerDefinitions[] | cdktn.IResolvable) {
    this._supportContainerDefinitions.internalValue = value;
  }
  public resetSupportContainerDefinitions() {
    this._supportContainerDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportContainerDefinitionsInput() {
    return this._supportContainerDefinitions.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new GameliftContainerGroupDefinitionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GameliftContainerGroupDefinitionTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // total_memory_limit_mebibytes - computed: false, optional: false, required: true
  private _totalMemoryLimitMebibytes?: number; 
  public get totalMemoryLimitMebibytes() {
    return this.getNumberAttribute('total_memory_limit_mebibytes');
  }
  public set totalMemoryLimitMebibytes(value: number) {
    this._totalMemoryLimitMebibytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryLimitMebibytesInput() {
    return this._totalMemoryLimitMebibytes;
  }

  // total_vcpu_limit - computed: false, optional: false, required: true
  private _totalVcpuLimit?: number; 
  public get totalVcpuLimit() {
    return this.getNumberAttribute('total_vcpu_limit');
  }
  public set totalVcpuLimit(value: number) {
    this._totalVcpuLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalVcpuLimitInput() {
    return this._totalVcpuLimit;
  }

  // version_description - computed: true, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_group_type: cdktn.stringToTerraform(this._containerGroupType),
      game_server_container_definition: gameliftContainerGroupDefinitionGameServerContainerDefinitionToTerraform(this._gameServerContainerDefinition.internalValue),
      name: cdktn.stringToTerraform(this._name),
      operating_system: cdktn.stringToTerraform(this._operatingSystem),
      source_version_number: cdktn.numberToTerraform(this._sourceVersionNumber),
      support_container_definitions: cdktn.listMapper(gameliftContainerGroupDefinitionSupportContainerDefinitionsToTerraform, false)(this._supportContainerDefinitions.internalValue),
      tags: cdktn.listMapper(gameliftContainerGroupDefinitionTagsToTerraform, false)(this._tags.internalValue),
      total_memory_limit_mebibytes: cdktn.numberToTerraform(this._totalMemoryLimitMebibytes),
      total_vcpu_limit: cdktn.numberToTerraform(this._totalVcpuLimit),
      version_description: cdktn.stringToTerraform(this._versionDescription),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_group_type: {
        value: cdktn.stringToHclTerraform(this._containerGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      game_server_container_definition: {
        value: gameliftContainerGroupDefinitionGameServerContainerDefinitionToHclTerraform(this._gameServerContainerDefinition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GameliftContainerGroupDefinitionGameServerContainerDefinition",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system: {
        value: cdktn.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_version_number: {
        value: cdktn.numberToHclTerraform(this._sourceVersionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      support_container_definitions: {
        value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionSupportContainerDefinitionsToHclTerraform, false)(this._supportContainerDefinitions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GameliftContainerGroupDefinitionSupportContainerDefinitionsList",
      },
      tags: {
        value: cdktn.listMapperHcl(gameliftContainerGroupDefinitionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GameliftContainerGroupDefinitionTagsList",
      },
      total_memory_limit_mebibytes: {
        value: cdktn.numberToHclTerraform(this._totalMemoryLimitMebibytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_vcpu_limit: {
        value: cdktn.numberToHclTerraform(this._totalVcpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_description: {
        value: cdktn.stringToHclTerraform(this._versionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
