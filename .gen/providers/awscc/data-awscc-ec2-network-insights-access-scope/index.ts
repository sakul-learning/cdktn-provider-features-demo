// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_insights_access_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2NetworkInsightsAccessScopeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_insights_access_scope#id DataAwsccEc2NetworkInsightsAccessScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_ports - computed: true, optional: false, required: false
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }

  // destination_prefix_lists - computed: true, optional: false, required: false
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }

  // source_prefix_lists - computed: true, optional: false, required: false
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination {
}

export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // packet_header_statement - computed: true, optional: false, required: false
  private _packetHeaderStatement = new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference(this, "packet_header_statement");
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }

  // resource_statement - computed: true, optional: false, required: false
  private _resourceStatement = new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_ports - computed: true, optional: false, required: false
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }

  // destination_prefix_lists - computed: true, optional: false, required: false
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }

  // source_prefix_lists - computed: true, optional: false, required: false
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource {
}

export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // packet_header_statement - computed: true, optional: false, required: false
  private _packetHeaderStatement = new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference(this, "packet_header_statement");
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }

  // resource_statement - computed: true, optional: false, required: false
  private _resourceStatement = new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources {
}

export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_statement - computed: true, optional: false, required: false
  private _resourceStatement = new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference {
    return new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeExcludePaths {
}

export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeExcludePathsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeExcludePaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeExcludePaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeExcludePaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // through_resources - computed: true, optional: false, required: false
  private _throughResources = new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList(this, "through_resources", false);
  public get throughResources() {
    return this._throughResources;
  }
}

export class DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference {
    return new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_ports - computed: true, optional: false, required: false
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }

  // destination_prefix_lists - computed: true, optional: false, required: false
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }

  // source_prefix_lists - computed: true, optional: false, required: false
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination {
}

export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // packet_header_statement - computed: true, optional: false, required: false
  private _packetHeaderStatement = new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference(this, "packet_header_statement");
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }

  // resource_statement - computed: true, optional: false, required: false
  private _resourceStatement = new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_ports - computed: true, optional: false, required: false
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }

  // destination_prefix_lists - computed: true, optional: false, required: false
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }

  // source_prefix_lists - computed: true, optional: false, required: false
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource {
}

export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // packet_header_statement - computed: true, optional: false, required: false
  private _packetHeaderStatement = new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference(this, "packet_header_statement");
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }

  // resource_statement - computed: true, optional: false, required: false
  private _resourceStatement = new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement {
}

export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources {
}

export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_statement - computed: true, optional: false, required: false
  private _resourceStatement = new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference(this, "resource_statement");
  public get resourceStatement() {
    return this._resourceStatement;
  }
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference {
    return new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeMatchPaths {
}

export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeMatchPathsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeMatchPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeMatchPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeMatchPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // through_resources - computed: true, optional: false, required: false
  private _throughResources = new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList(this, "through_resources", false);
  public get throughResources() {
    return this._throughResources;
  }
}

export class DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference {
    return new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAccessScopeTags {
}

export function dataAwsccEc2NetworkInsightsAccessScopeTagsToTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAccessScopeTagsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAccessScopeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAccessScopeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAccessScopeTags | undefined) {
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

export class DataAwsccEc2NetworkInsightsAccessScopeTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference {
    return new DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_insights_access_scope awscc_ec2_network_insights_access_scope}
*/
export class DataAwsccEc2NetworkInsightsAccessScope extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_network_insights_access_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2NetworkInsightsAccessScope to import
  * @param importFromId The id of the existing DataAwsccEc2NetworkInsightsAccessScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2NetworkInsightsAccessScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_insights_access_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_insights_access_scope awscc_ec2_network_insights_access_scope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2NetworkInsightsAccessScopeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2NetworkInsightsAccessScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_network_insights_access_scope',
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

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // exclude_paths - computed: true, optional: false, required: false
  private _excludePaths = new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList(this, "exclude_paths", false);
  public get excludePaths() {
    return this._excludePaths;
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

  // match_paths - computed: true, optional: false, required: false
  private _matchPaths = new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }

  // network_insights_access_scope_arn - computed: true, optional: false, required: false
  public get networkInsightsAccessScopeArn() {
    return this.getStringAttribute('network_insights_access_scope_arn');
  }

  // network_insights_access_scope_id - computed: true, optional: false, required: false
  public get networkInsightsAccessScopeId() {
    return this.getStringAttribute('network_insights_access_scope_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2NetworkInsightsAccessScopeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
