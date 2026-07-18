// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2NetworkInsightsAccessScopeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#exclude_paths Ec2NetworkInsightsAccessScope#exclude_paths}
  */
  readonly excludePaths?: Ec2NetworkInsightsAccessScopeExcludePaths[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#match_paths Ec2NetworkInsightsAccessScope#match_paths}
  */
  readonly matchPaths?: Ec2NetworkInsightsAccessScopeMatchPaths[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}
  */
  readonly tags?: Ec2NetworkInsightsAccessScopeTags[] | cdktn.IResolvable;
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: true, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: true, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: true, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: true, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: true, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: true, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement;
}

export function ec2NetworkInsightsAccessScopeExcludePathsDestinationToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToTerraform(struct!.packetHeaderStatement),
    resource_statement: ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToTerraform(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsDestinationToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToHclTerraform(struct!.packetHeaderStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement",
    },
    resource_statement: {
      value: ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToHclTerraform(struct!.resourceStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: true, optional: true, required: false
  private _packetHeaderStatement = new Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference(this, "packet_header_statement");
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: true, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: true, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: true, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: true, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: true, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: true, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: true, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement;
}

export function ec2NetworkInsightsAccessScopeExcludePathsSourceToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToTerraform(struct!.packetHeaderStatement),
    resource_statement: ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToTerraform(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsSourceToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToHclTerraform(struct!.packetHeaderStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement",
    },
    resource_statement: {
      value: ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToHclTerraform(struct!.resourceStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: true, optional: true, required: false
  private _packetHeaderStatement = new Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference(this, "packet_header_statement");
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: true, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsThroughResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement;
}

export function ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_statement: ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToTerraform(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_statement: {
      value: ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToHclTerraform(struct!.resourceStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsThroughResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // resource_statement - computed: true, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[] | cdktn.IResolvable

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
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}
  */
  readonly destination?: Ec2NetworkInsightsAccessScopeExcludePathsDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}
  */
  readonly source?: Ec2NetworkInsightsAccessScopeExcludePathsSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#through_resources Ec2NetworkInsightsAccessScope#through_resources}
  */
  readonly throughResources?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[] | cdktn.IResolvable;
}

export function ec2NetworkInsightsAccessScopeExcludePathsToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: ec2NetworkInsightsAccessScopeExcludePathsDestinationToTerraform(struct!.destination),
    source: ec2NetworkInsightsAccessScopeExcludePathsSourceToTerraform(struct!.source),
    through_resources: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesToTerraform, false)(struct!.throughResources),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: ec2NetworkInsightsAccessScopeExcludePathsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsDestination",
    },
    source: {
      value: ec2NetworkInsightsAccessScopeExcludePathsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsSource",
    },
    through_resources: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesToHclTerraform, false)(struct!.throughResources),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._throughResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughResources = this._throughResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
      this._throughResources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
      this._throughResources.internalValue = value.throughResources;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: Ec2NetworkInsightsAccessScopeExcludePathsDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: true, optional: true, required: false
  private _source = new Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: Ec2NetworkInsightsAccessScopeExcludePathsSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // through_resources - computed: true, optional: true, required: false
  private _throughResources = new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList(this, "through_resources", false);
  public get throughResources() {
    return this._throughResources;
  }
  public putThroughResources(value: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[] | cdktn.IResolvable) {
    this._throughResources.internalValue = value;
  }
  public resetThroughResources() {
    this._throughResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughResourcesInput() {
    return this._throughResources.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePaths[] | cdktn.IResolvable

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
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}

export function ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: true, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: true, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: true, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: true, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: true, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: true, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement;
}

export function ec2NetworkInsightsAccessScopeMatchPathsDestinationToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToTerraform(struct!.packetHeaderStatement),
    resource_statement: ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToTerraform(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsDestinationToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToHclTerraform(struct!.packetHeaderStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement",
    },
    resource_statement: {
      value: ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToHclTerraform(struct!.resourceStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: true, optional: true, required: false
  private _packetHeaderStatement = new Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference(this, "packet_header_statement");
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: true, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}

export function ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: true, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: true, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: true, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: true, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: true, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: true, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement;
}

export function ec2NetworkInsightsAccessScopeMatchPathsSourceToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToTerraform(struct!.packetHeaderStatement),
    resource_statement: ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToTerraform(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsSourceToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToHclTerraform(struct!.packetHeaderStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement",
    },
    resource_statement: {
      value: ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToHclTerraform(struct!.resourceStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: true, optional: true, required: false
  private _packetHeaderStatement = new Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference(this, "packet_header_statement");
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: true, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsThroughResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement;
}

export function ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsThroughResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_statement: ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementToTerraform(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsThroughResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_statement: {
      value: ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementToHclTerraform(struct!.resourceStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsThroughResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsThroughResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // resource_statement - computed: true, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeMatchPathsThroughResources[] | cdktn.IResolvable

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
  public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference {
    return new Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}
  */
  readonly destination?: Ec2NetworkInsightsAccessScopeMatchPathsDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}
  */
  readonly source?: Ec2NetworkInsightsAccessScopeMatchPathsSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#through_resources Ec2NetworkInsightsAccessScope#through_resources}
  */
  readonly throughResources?: Ec2NetworkInsightsAccessScopeMatchPathsThroughResources[] | cdktn.IResolvable;
}

export function ec2NetworkInsightsAccessScopeMatchPathsToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: ec2NetworkInsightsAccessScopeMatchPathsDestinationToTerraform(struct!.destination),
    source: ec2NetworkInsightsAccessScopeMatchPathsSourceToTerraform(struct!.source),
    through_resources: cdktn.listMapper(ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesToTerraform, false)(struct!.throughResources),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: ec2NetworkInsightsAccessScopeMatchPathsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsDestination",
    },
    source: {
      value: ec2NetworkInsightsAccessScopeMatchPathsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsSource",
    },
    through_resources: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesToHclTerraform, false)(struct!.throughResources),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._throughResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughResources = this._throughResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
      this._throughResources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
      this._throughResources.internalValue = value.throughResources;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: Ec2NetworkInsightsAccessScopeMatchPathsDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: true, optional: true, required: false
  private _source = new Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: Ec2NetworkInsightsAccessScopeMatchPathsSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // through_resources - computed: true, optional: true, required: false
  private _throughResources = new Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList(this, "through_resources", false);
  public get throughResources() {
    return this._throughResources;
  }
  public putThroughResources(value: Ec2NetworkInsightsAccessScopeMatchPathsThroughResources[] | cdktn.IResolvable) {
    this._throughResources.internalValue = value;
  }
  public resetThroughResources() {
    this._throughResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughResourcesInput() {
    return this._throughResources.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeMatchPathsList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeMatchPaths[] | cdktn.IResolvable

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
  public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsOutputReference {
    return new Ec2NetworkInsightsAccessScopeMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#key Ec2NetworkInsightsAccessScope#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#value Ec2NetworkInsightsAccessScope#value}
  */
  readonly value?: string;
}

export function ec2NetworkInsightsAccessScopeTagsToTerraform(struct?: Ec2NetworkInsightsAccessScopeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2NetworkInsightsAccessScopeTagsToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeTags | cdktn.IResolvable): any {
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

export class Ec2NetworkInsightsAccessScopeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2NetworkInsightsAccessScopeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2NetworkInsightsAccessScopeTags | cdktn.IResolvable | undefined) {
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

export class Ec2NetworkInsightsAccessScopeTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2NetworkInsightsAccessScopeTagsOutputReference {
    return new Ec2NetworkInsightsAccessScopeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope awscc_ec2_network_insights_access_scope}
*/
export class Ec2NetworkInsightsAccessScope extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_network_insights_access_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2NetworkInsightsAccessScope to import
  * @param importFromId The id of the existing Ec2NetworkInsightsAccessScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2NetworkInsightsAccessScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_insights_access_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope awscc_ec2_network_insights_access_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2NetworkInsightsAccessScopeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2NetworkInsightsAccessScopeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_network_insights_access_scope',
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
    this._excludePaths.internalValue = config.excludePaths;
    this._matchPaths.internalValue = config.matchPaths;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // exclude_paths - computed: true, optional: true, required: false
  private _excludePaths = new Ec2NetworkInsightsAccessScopeExcludePathsList(this, "exclude_paths", false);
  public get excludePaths() {
    return this._excludePaths;
  }
  public putExcludePaths(value: Ec2NetworkInsightsAccessScopeExcludePaths[] | cdktn.IResolvable) {
    this._excludePaths.internalValue = value;
  }
  public resetExcludePaths() {
    this._excludePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathsInput() {
    return this._excludePaths.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_paths - computed: true, optional: true, required: false
  private _matchPaths = new Ec2NetworkInsightsAccessScopeMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: Ec2NetworkInsightsAccessScopeMatchPaths[] | cdktn.IResolvable) {
    this._matchPaths.internalValue = value;
  }
  public resetMatchPaths() {
    this._matchPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPathsInput() {
    return this._matchPaths.internalValue;
  }

  // network_insights_access_scope_arn - computed: true, optional: false, required: false
  public get networkInsightsAccessScopeArn() {
    return this.getStringAttribute('network_insights_access_scope_arn');
  }

  // network_insights_access_scope_id - computed: true, optional: false, required: false
  public get networkInsightsAccessScopeId() {
    return this.getStringAttribute('network_insights_access_scope_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2NetworkInsightsAccessScopeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2NetworkInsightsAccessScopeTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_paths: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsToTerraform, false)(this._excludePaths.internalValue),
      match_paths: cdktn.listMapper(ec2NetworkInsightsAccessScopeMatchPathsToTerraform, false)(this._matchPaths.internalValue),
      tags: cdktn.listMapper(ec2NetworkInsightsAccessScopeTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_paths: {
        value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsToHclTerraform, false)(this._excludePaths.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsList",
      },
      match_paths: {
        value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeMatchPathsToHclTerraform, false)(this._matchPaths.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsList",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2NetworkInsightsAccessScopeTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
