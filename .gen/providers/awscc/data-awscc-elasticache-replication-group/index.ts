// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elasticache_replication_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccElasticacheReplicationGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elasticache_replication_group#id DataAwsccElasticacheReplicationGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccElasticacheReplicationGroupConfigurationEndPoint {
}

export function dataAwsccElasticacheReplicationGroupConfigurationEndPointToTerraform(struct?: DataAwsccElasticacheReplicationGroupConfigurationEndPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupConfigurationEndPointToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupConfigurationEndPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticacheReplicationGroupConfigurationEndPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupConfigurationEndPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails {
}

export function dataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsToTerraform(struct?: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
}
export interface DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails {
}

export function dataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToTerraform(struct?: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery_stream - computed: true, optional: false, required: false
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
}
export interface DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails {
}

export function dataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsToTerraform(struct?: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs_details - computed: true, optional: false, required: false
  private _cloudwatchLogsDetails = new DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(this, "cloudwatch_logs_details");
  public get cloudwatchLogsDetails() {
    return this._cloudwatchLogsDetails;
  }

  // kinesis_firehose_details - computed: true, optional: false, required: false
  private _kinesisFirehoseDetails = new DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(this, "kinesis_firehose_details");
  public get kinesisFirehoseDetails() {
    return this._kinesisFirehoseDetails;
  }
}
export interface DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations {
}

export function dataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsToTerraform(struct?: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_details - computed: true, optional: false, required: false
  private _destinationDetails = new DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference(this, "destination_details");
  public get destinationDetails() {
    return this._destinationDetails;
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // log_format - computed: true, optional: false, required: false
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }
}

export class DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference {
    return new DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticacheReplicationGroupNodeGroupConfiguration {
}

export function dataAwsccElasticacheReplicationGroupNodeGroupConfigurationToTerraform(struct?: DataAwsccElasticacheReplicationGroupNodeGroupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupNodeGroupConfigurationToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupNodeGroupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticacheReplicationGroupNodeGroupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupNodeGroupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_group_id - computed: true, optional: false, required: false
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }

  // primary_availability_zone - computed: true, optional: false, required: false
  public get primaryAvailabilityZone() {
    return this.getStringAttribute('primary_availability_zone');
  }

  // replica_availability_zones - computed: true, optional: false, required: false
  public get replicaAvailabilityZones() {
    return this.getListAttribute('replica_availability_zones');
  }

  // replica_count - computed: true, optional: false, required: false
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }

  // slots - computed: true, optional: false, required: false
  public get slots() {
    return this.getStringAttribute('slots');
  }
}

export class DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference {
    return new DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticacheReplicationGroupPrimaryEndPoint {
}

export function dataAwsccElasticacheReplicationGroupPrimaryEndPointToTerraform(struct?: DataAwsccElasticacheReplicationGroupPrimaryEndPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupPrimaryEndPointToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupPrimaryEndPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticacheReplicationGroupPrimaryEndPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupPrimaryEndPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface DataAwsccElasticacheReplicationGroupReadEndPoint {
}

export function dataAwsccElasticacheReplicationGroupReadEndPointToTerraform(struct?: DataAwsccElasticacheReplicationGroupReadEndPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupReadEndPointToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupReadEndPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupReadEndPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticacheReplicationGroupReadEndPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupReadEndPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getStringAttribute('addresses');
  }

  // addresses_list - computed: true, optional: false, required: false
  public get addressesList() {
    return this.getListAttribute('addresses_list');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getStringAttribute('ports');
  }

  // ports_list - computed: true, optional: false, required: false
  public get portsList() {
    return this.getListAttribute('ports_list');
  }
}
export interface DataAwsccElasticacheReplicationGroupReaderEndPoint {
}

export function dataAwsccElasticacheReplicationGroupReaderEndPointToTerraform(struct?: DataAwsccElasticacheReplicationGroupReaderEndPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupReaderEndPointToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupReaderEndPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticacheReplicationGroupReaderEndPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupReaderEndPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface DataAwsccElasticacheReplicationGroupTags {
}

export function dataAwsccElasticacheReplicationGroupTagsToTerraform(struct?: DataAwsccElasticacheReplicationGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticacheReplicationGroupTagsToHclTerraform(struct?: DataAwsccElasticacheReplicationGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticacheReplicationGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticacheReplicationGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticacheReplicationGroupTags | undefined) {
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

export class DataAwsccElasticacheReplicationGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticacheReplicationGroupTagsOutputReference {
    return new DataAwsccElasticacheReplicationGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elasticache_replication_group awscc_elasticache_replication_group}
*/
export class DataAwsccElasticacheReplicationGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticache_replication_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccElasticacheReplicationGroup to import
  * @param importFromId The id of the existing DataAwsccElasticacheReplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccElasticacheReplicationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticache_replication_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/elasticache_replication_group awscc_elasticache_replication_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticacheReplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticacheReplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticache_replication_group',
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

  // at_rest_encryption_enabled - computed: true, optional: false, required: false
  public get atRestEncryptionEnabled() {
    return this.getBooleanAttribute('at_rest_encryption_enabled');
  }

  // auth_token - computed: true, optional: false, required: false
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // auto_minor_version_upgrade - computed: true, optional: false, required: false
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }

  // automatic_failover_enabled - computed: true, optional: false, required: false
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }

  // cache_node_type - computed: true, optional: false, required: false
  public get cacheNodeType() {
    return this.getStringAttribute('cache_node_type');
  }

  // cache_parameter_group_name - computed: true, optional: false, required: false
  public get cacheParameterGroupName() {
    return this.getStringAttribute('cache_parameter_group_name');
  }

  // cache_security_group_names - computed: true, optional: false, required: false
  public get cacheSecurityGroupNames() {
    return this.getListAttribute('cache_security_group_names');
  }

  // cache_subnet_group_name - computed: true, optional: false, required: false
  public get cacheSubnetGroupName() {
    return this.getStringAttribute('cache_subnet_group_name');
  }

  // cluster_mode - computed: true, optional: false, required: false
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }

  // configuration_end_point - computed: true, optional: false, required: false
  private _configurationEndPoint = new DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference(this, "configuration_end_point");
  public get configurationEndPoint() {
    return this._configurationEndPoint;
  }

  // data_tiering_enabled - computed: true, optional: false, required: false
  public get dataTieringEnabled() {
    return this.getBooleanAttribute('data_tiering_enabled');
  }

  // durability - computed: true, optional: false, required: false
  public get durability() {
    return this.getStringAttribute('durability');
  }

  // effective_durability - computed: true, optional: false, required: false
  public get effectiveDurability() {
    return this.getStringAttribute('effective_durability');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // global_replication_group_id - computed: true, optional: false, required: false
  public get globalReplicationGroupId() {
    return this.getStringAttribute('global_replication_group_id');
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

  // ip_discovery - computed: true, optional: false, required: false
  public get ipDiscovery() {
    return this.getStringAttribute('ip_discovery');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // log_delivery_configurations - computed: true, optional: false, required: false
  private _logDeliveryConfigurations = new DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList(this, "log_delivery_configurations", false);
  public get logDeliveryConfigurations() {
    return this._logDeliveryConfigurations;
  }

  // multi_az_enabled - computed: true, optional: false, required: false
  public get multiAzEnabled() {
    return this.getBooleanAttribute('multi_az_enabled');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // node_group_configuration - computed: true, optional: false, required: false
  private _nodeGroupConfiguration = new DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList(this, "node_group_configuration", false);
  public get nodeGroupConfiguration() {
    return this._nodeGroupConfiguration;
  }

  // notification_topic_arn - computed: true, optional: false, required: false
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }

  // num_cache_clusters - computed: true, optional: false, required: false
  public get numCacheClusters() {
    return this.getNumberAttribute('num_cache_clusters');
  }

  // num_node_groups - computed: true, optional: false, required: false
  public get numNodeGroups() {
    return this.getNumberAttribute('num_node_groups');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_cache_cluster_a_zs - computed: true, optional: false, required: false
  public get preferredCacheClusterAZs() {
    return this.getListAttribute('preferred_cache_cluster_a_zs');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // primary_cluster_id - computed: true, optional: false, required: false
  public get primaryClusterId() {
    return this.getStringAttribute('primary_cluster_id');
  }

  // primary_end_point - computed: true, optional: false, required: false
  private _primaryEndPoint = new DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference(this, "primary_end_point");
  public get primaryEndPoint() {
    return this._primaryEndPoint;
  }

  // read_end_point - computed: true, optional: false, required: false
  private _readEndPoint = new DataAwsccElasticacheReplicationGroupReadEndPointOutputReference(this, "read_end_point");
  public get readEndPoint() {
    return this._readEndPoint;
  }

  // reader_end_point - computed: true, optional: false, required: false
  private _readerEndPoint = new DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference(this, "reader_end_point");
  public get readerEndPoint() {
    return this._readerEndPoint;
  }

  // replicas_per_node_group - computed: true, optional: false, required: false
  public get replicasPerNodeGroup() {
    return this.getNumberAttribute('replicas_per_node_group');
  }

  // replication_group_description - computed: true, optional: false, required: false
  public get replicationGroupDescription() {
    return this.getStringAttribute('replication_group_description');
  }

  // replication_group_id - computed: true, optional: false, required: false
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // snapshot_arns - computed: true, optional: false, required: false
  public get snapshotArns() {
    return this.getListAttribute('snapshot_arns');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }

  // snapshot_retention_limit - computed: true, optional: false, required: false
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }

  // snapshot_window - computed: true, optional: false, required: false
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }

  // snapshotting_cluster_id - computed: true, optional: false, required: false
  public get snapshottingClusterId() {
    return this.getStringAttribute('snapshotting_cluster_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccElasticacheReplicationGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // transit_encryption_enabled - computed: true, optional: false, required: false
  public get transitEncryptionEnabled() {
    return this.getBooleanAttribute('transit_encryption_enabled');
  }

  // transit_encryption_mode - computed: true, optional: false, required: false
  public get transitEncryptionMode() {
    return this.getStringAttribute('transit_encryption_mode');
  }

  // user_group_ids - computed: true, optional: false, required: false
  public get userGroupIds() {
    return this.getListAttribute('user_group_ids');
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
