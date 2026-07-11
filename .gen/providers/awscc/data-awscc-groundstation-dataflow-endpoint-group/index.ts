// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_dataflow_endpoint_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGroundstationDataflowEndpointGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_dataflow_endpoint_group#id DataAwsccGroundstationDataflowEndpointGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // socket_address - computed: true, optional: false, required: false
  private _socketAddress = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // socket_address - computed: true, optional: false, required: false
  private _socketAddress = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_status - computed: true, optional: false, required: false
  public get agentStatus() {
    return this.getStringAttribute('agent_status');
  }

  // audit_results - computed: true, optional: false, required: false
  public get auditResults() {
    return this.getStringAttribute('audit_results');
  }

  // egress_address - computed: true, optional: false, required: false
  private _egressAddress = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference(this, "egress_address");
  public get egressAddress() {
    return this._egressAddress;
  }

  // ingress_address - computed: true, optional: false, required: false
  private _ingressAddress = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference(this, "ingress_address");
  public get ingressAddress() {
    return this._ingressAddress;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupEndpointDetails {
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_ground_station_agent_endpoint - computed: true, optional: false, required: false
  private _awsGroundStationAgentEndpoint = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference(this, "aws_ground_station_agent_endpoint");
  public get awsGroundStationAgentEndpoint() {
    return this._awsGroundStationAgentEndpoint;
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }

  // security_details - computed: true, optional: false, required: false
  private _securityDetails = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference(this, "security_details");
  public get securityDetails() {
    return this._securityDetails;
  }
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference {
    return new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGroundstationDataflowEndpointGroupTags {
}

export function dataAwsccGroundstationDataflowEndpointGroupTagsToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationDataflowEndpointGroupTagsToHclTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGroundstationDataflowEndpointGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationDataflowEndpointGroupTags | undefined) {
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

export class DataAwsccGroundstationDataflowEndpointGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference {
    return new DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group}
*/
export class DataAwsccGroundstationDataflowEndpointGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_groundstation_dataflow_endpoint_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGroundstationDataflowEndpointGroup to import
  * @param importFromId The id of the existing DataAwsccGroundstationDataflowEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_dataflow_endpoint_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGroundstationDataflowEndpointGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_dataflow_endpoint_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGroundstationDataflowEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGroundstationDataflowEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_dataflow_endpoint_group',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_post_pass_duration_seconds - computed: true, optional: false, required: false
  public get contactPostPassDurationSeconds() {
    return this.getNumberAttribute('contact_post_pass_duration_seconds');
  }

  // contact_pre_pass_duration_seconds - computed: true, optional: false, required: false
  public get contactPrePassDurationSeconds() {
    return this.getNumberAttribute('contact_pre_pass_duration_seconds');
  }

  // dataflow_endpoint_group_id - computed: true, optional: false, required: false
  public get dataflowEndpointGroupId() {
    return this.getStringAttribute('dataflow_endpoint_group_id');
  }

  // endpoint_details - computed: true, optional: false, required: false
  private _endpointDetails = new DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList(this, "endpoint_details", false);
  public get endpointDetails() {
    return this._endpointDetails;
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
  private _tags = new DataAwsccGroundstationDataflowEndpointGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
