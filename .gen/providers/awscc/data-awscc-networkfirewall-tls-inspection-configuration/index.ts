// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_tls_inspection_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccNetworkfirewallTlsInspectionConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_tls_inspection_configuration#id DataAwsccNetworkfirewallTlsInspectionConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTags {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTagsToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTagsToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTags | undefined) {
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

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallTlsInspectionConfigurationTagsOutputReference {
    return new DataAwsccNetworkfirewallTlsInspectionConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsCheckCertificateRevocationStatus {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsCheckCertificateRevocationStatusToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsCheckCertificateRevocationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsCheckCertificateRevocationStatusToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsCheckCertificateRevocationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsCheckCertificateRevocationStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsCheckCertificateRevocationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsCheckCertificateRevocationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // revoked_status_action - computed: true, optional: false, required: false
  public get revokedStatusAction() {
    return this.getStringAttribute('revoked_status_action');
  }

  // unknown_status_action - computed: true, optional: false, required: false
  public get unknownStatusAction() {
    return this.getStringAttribute('unknown_status_action');
  }
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPorts {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPortsToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPorts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPortsToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPorts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPortsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPortsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPortsOutputReference {
    return new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinations {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationsToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationsToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_definition - computed: true, optional: false, required: false
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationsOutputReference {
    return new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePorts {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePortsToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePorts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePortsToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePorts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePortsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePortsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePortsOutputReference {
    return new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSources {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcesToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcesToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_definition - computed: true, optional: false, required: false
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcesOutputReference {
    return new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopes {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_ports - computed: true, optional: false, required: false
  private _destinationPorts = new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationPortsList(this, "destination_ports", false);
  public get destinationPorts() {
    return this._destinationPorts;
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getNumberListAttribute('protocols');
  }

  // source_ports - computed: true, optional: false, required: false
  private _sourcePorts = new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcePortsList(this, "source_ports", false);
  public get sourcePorts() {
    return this._sourcePorts;
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesOutputReference {
    return new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificates {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificatesToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificatesToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificatesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificatesOutputReference {
    return new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurations {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority_arn - computed: true, optional: false, required: false
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }

  // check_certificate_revocation_status - computed: true, optional: false, required: false
  private _checkCertificateRevocationStatus = new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsCheckCertificateRevocationStatusOutputReference(this, "check_certificate_revocation_status");
  public get checkCertificateRevocationStatus() {
    return this._checkCertificateRevocationStatus;
  }

  // scopes - computed: true, optional: false, required: false
  private _scopes = new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }

  // server_certificates - computed: true, optional: false, required: false
  private _serverCertificates = new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsServerCertificatesList(this, "server_certificates", true);
  public get serverCertificates() {
    return this._serverCertificates;
  }
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsOutputReference {
    return new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration {
}

export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationToTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationToHclTerraform(struct?: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_certificate_configurations - computed: true, optional: false, required: false
  private _serverCertificateConfigurations = new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationsList(this, "server_certificate_configurations", false);
  public get serverCertificateConfigurations() {
    return this._serverCertificateConfigurations;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_tls_inspection_configuration awscc_networkfirewall_tls_inspection_configuration}
*/
export class DataAwsccNetworkfirewallTlsInspectionConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkfirewall_tls_inspection_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccNetworkfirewallTlsInspectionConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccNetworkfirewallTlsInspectionConfiguration to import
  * @param importFromId The id of the existing DataAwsccNetworkfirewallTlsInspectionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_tls_inspection_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccNetworkfirewallTlsInspectionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkfirewall_tls_inspection_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_tls_inspection_configuration awscc_networkfirewall_tls_inspection_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkfirewallTlsInspectionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallTlsInspectionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkfirewall_tls_inspection_configuration',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccNetworkfirewallTlsInspectionConfigurationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // tls_inspection_configuration - computed: true, optional: false, required: false
  private _tlsInspectionConfiguration = new DataAwsccNetworkfirewallTlsInspectionConfigurationTlsInspectionConfigurationOutputReference(this, "tls_inspection_configuration");
  public get tlsInspectionConfiguration() {
    return this._tlsInspectionConfiguration;
  }

  // tls_inspection_configuration_arn - computed: true, optional: false, required: false
  public get tlsInspectionConfigurationArn() {
    return this.getStringAttribute('tls_inspection_configuration_arn');
  }

  // tls_inspection_configuration_id - computed: true, optional: false, required: false
  public get tlsInspectionConfigurationId() {
    return this.getStringAttribute('tls_inspection_configuration_id');
  }

  // tls_inspection_configuration_name - computed: true, optional: false, required: false
  public get tlsInspectionConfigurationName() {
    return this.getStringAttribute('tls_inspection_configuration_name');
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
