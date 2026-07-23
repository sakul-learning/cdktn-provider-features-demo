// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GroundstationDataflowEndpointGroupV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_post_pass_duration_seconds GroundstationDataflowEndpointGroupV2#contact_post_pass_duration_seconds}
  */
  readonly contactPostPassDurationSeconds?: number;
  /**
  * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_pre_pass_duration_seconds GroundstationDataflowEndpointGroupV2#contact_pre_pass_duration_seconds}
  */
  readonly contactPrePassDurationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#endpoints GroundstationDataflowEndpointGroupV2#endpoints}
  */
  readonly endpoints?: GroundstationDataflowEndpointGroupV2Endpoints[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#tags GroundstationDataflowEndpointGroupV2#tags}
  */
  readonly tags?: GroundstationDataflowEndpointGroupV2Tags[] | cdktn.IResolvable;
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | undefined) {
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
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | undefined) {
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
  private _portRange = new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | undefined) {
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
  private _socketAddress = new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress | undefined) {
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
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort | undefined) {
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
  private _socketAddress = new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_ip_and_port_address - computed: true, optional: false, required: false
  private _agentIpAndPortAddress = new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(this, "agent_ip_and_port_address");
  public get agentIpAndPortAddress() {
    return this._agentIpAndPortAddress;
  }

  // egress_address_and_port - computed: true, optional: false, required: false
  private _egressAddressAndPort = new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(this, "egress_address_and_port");
  public get egressAddressAndPort() {
    return this._egressAddressAndPort;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_connection_details - computed: true, optional: false, required: false
  private _agentConnectionDetails = new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(this, "agent_connection_details");
  public get agentConnectionDetails() {
    return this._agentConnectionDetails;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint | undefined) {
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

  // dataflow_details - computed: true, optional: false, required: false
  private _dataflowDetails = new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(this, "dataflow_details");
  public get dataflowDetails() {
    return this._dataflowDetails;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | undefined) {
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
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | undefined) {
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
  private _portRange = new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | undefined) {
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
  private _socketAddress = new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress | undefined) {
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
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort | undefined) {
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
  private _socketAddress = new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_ip_and_port_address - computed: true, optional: false, required: false
  private _agentIpAndPortAddress = new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(this, "agent_ip_and_port_address");
  public get agentIpAndPortAddress() {
    return this._agentIpAndPortAddress;
  }

  // ingress_address_and_port - computed: true, optional: false, required: false
  private _ingressAddressAndPort = new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(this, "ingress_address_and_port");
  public get ingressAddressAndPort() {
    return this._ingressAddressAndPort;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_connection_details - computed: true, optional: false, required: false
  private _agentConnectionDetails = new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(this, "agent_connection_details");
  public get agentConnectionDetails() {
    return this._agentConnectionDetails;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint | undefined) {
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

  // dataflow_details - computed: true, optional: false, required: false
  private _dataflowDetails = new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(this, "dataflow_details");
  public get dataflowDetails() {
    return this._dataflowDetails;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointDetails {
}

export function groundstationDataflowEndpointGroupV2EndpointDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function groundstationDataflowEndpointGroupV2EndpointDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // downlink_aws_ground_station_agent_endpoint - computed: true, optional: false, required: false
  private _downlinkAwsGroundStationAgentEndpoint = new GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference(this, "downlink_aws_ground_station_agent_endpoint");
  public get downlinkAwsGroundStationAgentEndpoint() {
    return this._downlinkAwsGroundStationAgentEndpoint;
  }

  // uplink_aws_ground_station_agent_endpoint - computed: true, optional: false, required: false
  private _uplinkAwsGroundStationAgentEndpoint = new GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference(this, "uplink_aws_ground_station_agent_endpoint");
  public get uplinkAwsGroundStationAgentEndpoint() {
    return this._uplinkAwsGroundStationAgentEndpoint;
  }
}

export class GroundstationDataflowEndpointGroupV2EndpointDetailsList extends cdktn.ComplexList {

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
  public get(index: number): GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference {
    return new GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {
  /**
  * A maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum GroundstationDataflowEndpointGroupV2#maximum}
  */
  readonly maximum?: number;
  /**
  * A minimum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum GroundstationDataflowEndpointGroupV2#minimum}
  */
  readonly minimum?: number;
}

export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum: cdktn.numberToTerraform(struct!.maximum),
    minimum: cdktn.numberToTerraform(struct!.minimum),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum: {
      value: cdktn.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktn.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {
  /**
  * IPv4 socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}
  */
  readonly name?: string;
  /**
  * Port range of a socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range GroundstationDataflowEndpointGroupV2#port_range}
  */
  readonly portRange?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
}

export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    port_range: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToTerraform(struct!.portRange),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | cdktn.IResolvable): any {
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
    port_range: {
      value: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._portRange.internalValue = value.portRange;
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

  // port_range - computed: true, optional: true, required: false
  private _portRange = new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {
  /**
  * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}
  */
  readonly mtu?: number;
  /**
  * A socket address with a port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}
  */
  readonly socketAddress?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
}

export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mtu: cdktn.numberToTerraform(struct!.mtu),
    socket_address: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToTerraform(struct!.socketAddress),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mtu: {
      value: cdktn.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_address: {
      value: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToHclTerraform(struct!.socketAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._socketAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketAddress = this._socketAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._socketAddress.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._socketAddress.internalValue = value.socketAddress;
    }
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // socket_address - computed: true, optional: true, required: false
  private _socketAddress = new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
  public putSocketAddress(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress) {
    this._socketAddress.internalValue = value;
  }
  public resetSocketAddress() {
    this._socketAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAddressInput() {
    return this._socketAddress.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress {
  /**
  * IPv4 socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}
  */
  readonly name?: string;
  /**
  * Port of a socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port GroundstationDataflowEndpointGroupV2#port}
  */
  readonly port?: number;
}

export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress | cdktn.IResolvable): any {
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
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort {
  /**
  * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}
  */
  readonly socketAddress?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress;
}

export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mtu: cdktn.numberToTerraform(struct!.mtu),
    socket_address: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressToTerraform(struct!.socketAddress),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mtu: {
      value: cdktn.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_address: {
      value: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressToHclTerraform(struct!.socketAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._socketAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketAddress = this._socketAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._socketAddress.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._socketAddress.internalValue = value.socketAddress;
    }
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // socket_address - computed: true, optional: true, required: false
  private _socketAddress = new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
  public putSocketAddress(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress) {
    this._socketAddress.internalValue = value;
  }
  public resetSocketAddress() {
    this._socketAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAddressInput() {
    return this._socketAddress.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {
  /**
  * Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address GroundstationDataflowEndpointGroupV2#agent_ip_and_port_address}
  */
  readonly agentIpAndPortAddress?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
  /**
  * Socket address of an uplink or downlink agent endpoint with an optional mtu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#egress_address_and_port GroundstationDataflowEndpointGroupV2#egress_address_and_port}
  */
  readonly egressAddressAndPort?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort;
}

export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_ip_and_port_address: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToTerraform(struct!.agentIpAndPortAddress),
    egress_address_and_port: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortToTerraform(struct!.egressAddressAndPort),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_ip_and_port_address: {
      value: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToHclTerraform(struct!.agentIpAndPortAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress",
    },
    egress_address_and_port: {
      value: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortToHclTerraform(struct!.egressAddressAndPort),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentIpAndPortAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentIpAndPortAddress = this._agentIpAndPortAddress?.internalValue;
    }
    if (this._egressAddressAndPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressAddressAndPort = this._egressAddressAndPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentIpAndPortAddress.internalValue = undefined;
      this._egressAddressAndPort.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentIpAndPortAddress.internalValue = value.agentIpAndPortAddress;
      this._egressAddressAndPort.internalValue = value.egressAddressAndPort;
    }
  }

  // agent_ip_and_port_address - computed: true, optional: true, required: false
  private _agentIpAndPortAddress = new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(this, "agent_ip_and_port_address");
  public get agentIpAndPortAddress() {
    return this._agentIpAndPortAddress;
  }
  public putAgentIpAndPortAddress(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress) {
    this._agentIpAndPortAddress.internalValue = value;
  }
  public resetAgentIpAndPortAddress() {
    this._agentIpAndPortAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIpAndPortAddressInput() {
    return this._agentIpAndPortAddress.internalValue;
  }

  // egress_address_and_port - computed: true, optional: true, required: false
  private _egressAddressAndPort = new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(this, "egress_address_and_port");
  public get egressAddressAndPort() {
    return this._egressAddressAndPort;
  }
  public putEgressAddressAndPort(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort) {
    this._egressAddressAndPort.internalValue = value;
  }
  public resetEgressAddressAndPort() {
    this._egressAddressAndPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressAddressAndPortInput() {
    return this._egressAddressAndPort.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails {
  /**
  * Connection details for downlink, from ground station to agent, and customer to agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details GroundstationDataflowEndpointGroupV2#agent_connection_details}
  */
  readonly agentConnectionDetails?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
}

export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_connection_details: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToTerraform(struct!.agentConnectionDetails),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_connection_details: {
      value: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToHclTerraform(struct!.agentConnectionDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentConnectionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConnectionDetails = this._agentConnectionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentConnectionDetails.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentConnectionDetails.internalValue = value.agentConnectionDetails;
    }
  }

  // agent_connection_details - computed: true, optional: true, required: false
  private _agentConnectionDetails = new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(this, "agent_connection_details");
  public get agentConnectionDetails() {
    return this._agentConnectionDetails;
  }
  public putAgentConnectionDetails(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails) {
    this._agentConnectionDetails.internalValue = value;
  }
  public resetAgentConnectionDetails() {
    this._agentConnectionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConnectionDetailsInput() {
    return this._agentConnectionDetails.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint {
  /**
  * Dataflow details for downlink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details GroundstationDataflowEndpointGroupV2#dataflow_details}
  */
  readonly dataflowDetails?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}
  */
  readonly name?: string;
}

export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataflow_details: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsToTerraform(struct!.dataflowDetails),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataflow_details: {
      value: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsToHclTerraform(struct!.dataflowDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataflowDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowDetails = this._dataflowDetails?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataflowDetails.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataflowDetails.internalValue = value.dataflowDetails;
      this._name = value.name;
    }
  }

  // dataflow_details - computed: true, optional: true, required: false
  private _dataflowDetails = new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(this, "dataflow_details");
  public get dataflowDetails() {
    return this._dataflowDetails;
  }
  public putDataflowDetails(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails) {
    this._dataflowDetails.internalValue = value;
  }
  public resetDataflowDetails() {
    this._dataflowDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowDetailsInput() {
    return this._dataflowDetails.internalValue;
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
}
export interface GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {
  /**
  * A maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum GroundstationDataflowEndpointGroupV2#maximum}
  */
  readonly maximum?: number;
  /**
  * A minimum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum GroundstationDataflowEndpointGroupV2#minimum}
  */
  readonly minimum?: number;
}

export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum: cdktn.numberToTerraform(struct!.maximum),
    minimum: cdktn.numberToTerraform(struct!.minimum),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum: {
      value: cdktn.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktn.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {
  /**
  * IPv4 socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}
  */
  readonly name?: string;
  /**
  * Port range of a socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range GroundstationDataflowEndpointGroupV2#port_range}
  */
  readonly portRange?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
}

export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    port_range: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToTerraform(struct!.portRange),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | cdktn.IResolvable): any {
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
    port_range: {
      value: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._portRange.internalValue = value.portRange;
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

  // port_range - computed: true, optional: true, required: false
  private _portRange = new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {
  /**
  * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}
  */
  readonly mtu?: number;
  /**
  * A socket address with a port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}
  */
  readonly socketAddress?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
}

export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mtu: cdktn.numberToTerraform(struct!.mtu),
    socket_address: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToTerraform(struct!.socketAddress),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mtu: {
      value: cdktn.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_address: {
      value: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressToHclTerraform(struct!.socketAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._socketAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketAddress = this._socketAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._socketAddress.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._socketAddress.internalValue = value.socketAddress;
    }
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // socket_address - computed: true, optional: true, required: false
  private _socketAddress = new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
  public putSocketAddress(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress) {
    this._socketAddress.internalValue = value;
  }
  public resetSocketAddress() {
    this._socketAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAddressInput() {
    return this._socketAddress.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress {
  /**
  * IPv4 socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}
  */
  readonly name?: string;
  /**
  * Port of a socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port GroundstationDataflowEndpointGroupV2#port}
  */
  readonly port?: number;
}

export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress | cdktn.IResolvable): any {
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
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort {
  /**
  * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}
  */
  readonly socketAddress?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress;
}

export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mtu: cdktn.numberToTerraform(struct!.mtu),
    socket_address: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressToTerraform(struct!.socketAddress),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mtu: {
      value: cdktn.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_address: {
      value: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressToHclTerraform(struct!.socketAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._socketAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketAddress = this._socketAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._socketAddress.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._socketAddress.internalValue = value.socketAddress;
    }
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // socket_address - computed: true, optional: true, required: false
  private _socketAddress = new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
  public putSocketAddress(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress) {
    this._socketAddress.internalValue = value;
  }
  public resetSocketAddress() {
    this._socketAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAddressInput() {
    return this._socketAddress.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {
  /**
  * Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address GroundstationDataflowEndpointGroupV2#agent_ip_and_port_address}
  */
  readonly agentIpAndPortAddress?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
  /**
  * Socket address of an uplink or downlink agent endpoint with an optional mtu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#ingress_address_and_port GroundstationDataflowEndpointGroupV2#ingress_address_and_port}
  */
  readonly ingressAddressAndPort?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort;
}

export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_ip_and_port_address: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToTerraform(struct!.agentIpAndPortAddress),
    ingress_address_and_port: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortToTerraform(struct!.ingressAddressAndPort),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_ip_and_port_address: {
      value: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressToHclTerraform(struct!.agentIpAndPortAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress",
    },
    ingress_address_and_port: {
      value: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortToHclTerraform(struct!.ingressAddressAndPort),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentIpAndPortAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentIpAndPortAddress = this._agentIpAndPortAddress?.internalValue;
    }
    if (this._ingressAddressAndPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressAddressAndPort = this._ingressAddressAndPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentIpAndPortAddress.internalValue = undefined;
      this._ingressAddressAndPort.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentIpAndPortAddress.internalValue = value.agentIpAndPortAddress;
      this._ingressAddressAndPort.internalValue = value.ingressAddressAndPort;
    }
  }

  // agent_ip_and_port_address - computed: true, optional: true, required: false
  private _agentIpAndPortAddress = new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(this, "agent_ip_and_port_address");
  public get agentIpAndPortAddress() {
    return this._agentIpAndPortAddress;
  }
  public putAgentIpAndPortAddress(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress) {
    this._agentIpAndPortAddress.internalValue = value;
  }
  public resetAgentIpAndPortAddress() {
    this._agentIpAndPortAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIpAndPortAddressInput() {
    return this._agentIpAndPortAddress.internalValue;
  }

  // ingress_address_and_port - computed: true, optional: true, required: false
  private _ingressAddressAndPort = new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(this, "ingress_address_and_port");
  public get ingressAddressAndPort() {
    return this._ingressAddressAndPort;
  }
  public putIngressAddressAndPort(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort) {
    this._ingressAddressAndPort.internalValue = value;
  }
  public resetIngressAddressAndPort() {
    this._ingressAddressAndPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressAddressAndPortInput() {
    return this._ingressAddressAndPort.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails {
  /**
  * Connection details for uplink, from ground station to agent, and customer to agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details GroundstationDataflowEndpointGroupV2#agent_connection_details}
  */
  readonly agentConnectionDetails?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
}

export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_connection_details: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToTerraform(struct!.agentConnectionDetails),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_connection_details: {
      value: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsToHclTerraform(struct!.agentConnectionDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentConnectionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConnectionDetails = this._agentConnectionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentConnectionDetails.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentConnectionDetails.internalValue = value.agentConnectionDetails;
    }
  }

  // agent_connection_details - computed: true, optional: true, required: false
  private _agentConnectionDetails = new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(this, "agent_connection_details");
  public get agentConnectionDetails() {
    return this._agentConnectionDetails;
  }
  public putAgentConnectionDetails(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails) {
    this._agentConnectionDetails.internalValue = value;
  }
  public resetAgentConnectionDetails() {
    this._agentConnectionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConnectionDetailsInput() {
    return this._agentConnectionDetails.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint {
  /**
  * Dataflow details for uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details GroundstationDataflowEndpointGroupV2#dataflow_details}
  */
  readonly dataflowDetails?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}
  */
  readonly name?: string;
}

export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointToTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataflow_details: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsToTerraform(struct!.dataflowDetails),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataflow_details: {
      value: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsToHclTerraform(struct!.dataflowDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataflowDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowDetails = this._dataflowDetails?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataflowDetails.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataflowDetails.internalValue = value.dataflowDetails;
      this._name = value.name;
    }
  }

  // dataflow_details - computed: true, optional: true, required: false
  private _dataflowDetails = new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(this, "dataflow_details");
  public get dataflowDetails() {
    return this._dataflowDetails;
  }
  public putDataflowDetails(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails) {
    this._dataflowDetails.internalValue = value;
  }
  public resetDataflowDetails() {
    this._dataflowDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowDetailsInput() {
    return this._dataflowDetails.internalValue;
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
}
export interface GroundstationDataflowEndpointGroupV2Endpoints {
  /**
  * Information about DownlinkAwsGroundStationAgentEndpoint used for create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#downlink_aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroupV2#downlink_aws_ground_station_agent_endpoint}
  */
  readonly downlinkAwsGroundStationAgentEndpoint?: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint;
  /**
  * Information about UplinkAwsGroundStationAgentEndpoint used for create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#uplink_aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroupV2#uplink_aws_ground_station_agent_endpoint}
  */
  readonly uplinkAwsGroundStationAgentEndpoint?: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint;
}

export function groundstationDataflowEndpointGroupV2EndpointsToTerraform(struct?: GroundstationDataflowEndpointGroupV2Endpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    downlink_aws_ground_station_agent_endpoint: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointToTerraform(struct!.downlinkAwsGroundStationAgentEndpoint),
    uplink_aws_ground_station_agent_endpoint: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointToTerraform(struct!.uplinkAwsGroundStationAgentEndpoint),
  }
}


export function groundstationDataflowEndpointGroupV2EndpointsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2Endpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    downlink_aws_ground_station_agent_endpoint: {
      value: groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointToHclTerraform(struct!.downlinkAwsGroundStationAgentEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint",
    },
    uplink_aws_ground_station_agent_endpoint: {
      value: groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointToHclTerraform(struct!.uplinkAwsGroundStationAgentEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupV2EndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GroundstationDataflowEndpointGroupV2Endpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downlinkAwsGroundStationAgentEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkAwsGroundStationAgentEndpoint = this._downlinkAwsGroundStationAgentEndpoint?.internalValue;
    }
    if (this._uplinkAwsGroundStationAgentEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkAwsGroundStationAgentEndpoint = this._uplinkAwsGroundStationAgentEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupV2Endpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downlinkAwsGroundStationAgentEndpoint.internalValue = undefined;
      this._uplinkAwsGroundStationAgentEndpoint.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downlinkAwsGroundStationAgentEndpoint.internalValue = value.downlinkAwsGroundStationAgentEndpoint;
      this._uplinkAwsGroundStationAgentEndpoint.internalValue = value.uplinkAwsGroundStationAgentEndpoint;
    }
  }

  // downlink_aws_ground_station_agent_endpoint - computed: true, optional: true, required: false
  private _downlinkAwsGroundStationAgentEndpoint = new GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference(this, "downlink_aws_ground_station_agent_endpoint");
  public get downlinkAwsGroundStationAgentEndpoint() {
    return this._downlinkAwsGroundStationAgentEndpoint;
  }
  public putDownlinkAwsGroundStationAgentEndpoint(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint) {
    this._downlinkAwsGroundStationAgentEndpoint.internalValue = value;
  }
  public resetDownlinkAwsGroundStationAgentEndpoint() {
    this._downlinkAwsGroundStationAgentEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkAwsGroundStationAgentEndpointInput() {
    return this._downlinkAwsGroundStationAgentEndpoint.internalValue;
  }

  // uplink_aws_ground_station_agent_endpoint - computed: true, optional: true, required: false
  private _uplinkAwsGroundStationAgentEndpoint = new GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference(this, "uplink_aws_ground_station_agent_endpoint");
  public get uplinkAwsGroundStationAgentEndpoint() {
    return this._uplinkAwsGroundStationAgentEndpoint;
  }
  public putUplinkAwsGroundStationAgentEndpoint(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint) {
    this._uplinkAwsGroundStationAgentEndpoint.internalValue = value;
  }
  public resetUplinkAwsGroundStationAgentEndpoint() {
    this._uplinkAwsGroundStationAgentEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkAwsGroundStationAgentEndpointInput() {
    return this._uplinkAwsGroundStationAgentEndpoint.internalValue;
  }
}

export class GroundstationDataflowEndpointGroupV2EndpointsList extends cdktn.ComplexList {
  public internalValue? : GroundstationDataflowEndpointGroupV2Endpoints[] | cdktn.IResolvable

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
  public get(index: number): GroundstationDataflowEndpointGroupV2EndpointsOutputReference {
    return new GroundstationDataflowEndpointGroupV2EndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroundstationDataflowEndpointGroupV2Tags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#key GroundstationDataflowEndpointGroupV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#value GroundstationDataflowEndpointGroupV2#value}
  */
  readonly value?: string;
}

export function groundstationDataflowEndpointGroupV2TagsToTerraform(struct?: GroundstationDataflowEndpointGroupV2Tags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function groundstationDataflowEndpointGroupV2TagsToHclTerraform(struct?: GroundstationDataflowEndpointGroupV2Tags | cdktn.IResolvable): any {
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

export class GroundstationDataflowEndpointGroupV2TagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GroundstationDataflowEndpointGroupV2Tags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GroundstationDataflowEndpointGroupV2Tags | cdktn.IResolvable | undefined) {
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

export class GroundstationDataflowEndpointGroupV2TagsList extends cdktn.ComplexList {
  public internalValue? : GroundstationDataflowEndpointGroupV2Tags[] | cdktn.IResolvable

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
  public get(index: number): GroundstationDataflowEndpointGroupV2TagsOutputReference {
    return new GroundstationDataflowEndpointGroupV2TagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2 awscc_groundstation_dataflow_endpoint_group_v2}
*/
export class GroundstationDataflowEndpointGroupV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_groundstation_dataflow_endpoint_group_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GroundstationDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroundstationDataflowEndpointGroupV2 to import
  * @param importFromId The id of the existing GroundstationDataflowEndpointGroupV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroundstationDataflowEndpointGroupV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_dataflow_endpoint_group_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_dataflow_endpoint_group_v2 awscc_groundstation_dataflow_endpoint_group_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroundstationDataflowEndpointGroupV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: GroundstationDataflowEndpointGroupV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_dataflow_endpoint_group_v2',
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
    this._contactPostPassDurationSeconds = config.contactPostPassDurationSeconds;
    this._contactPrePassDurationSeconds = config.contactPrePassDurationSeconds;
    this._endpoints.internalValue = config.endpoints;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_post_pass_duration_seconds - computed: true, optional: true, required: false
  private _contactPostPassDurationSeconds?: number; 
  public get contactPostPassDurationSeconds() {
    return this.getNumberAttribute('contact_post_pass_duration_seconds');
  }
  public set contactPostPassDurationSeconds(value: number) {
    this._contactPostPassDurationSeconds = value;
  }
  public resetContactPostPassDurationSeconds() {
    this._contactPostPassDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPostPassDurationSecondsInput() {
    return this._contactPostPassDurationSeconds;
  }

  // contact_pre_pass_duration_seconds - computed: true, optional: true, required: false
  private _contactPrePassDurationSeconds?: number; 
  public get contactPrePassDurationSeconds() {
    return this.getNumberAttribute('contact_pre_pass_duration_seconds');
  }
  public set contactPrePassDurationSeconds(value: number) {
    this._contactPrePassDurationSeconds = value;
  }
  public resetContactPrePassDurationSeconds() {
    this._contactPrePassDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPrePassDurationSecondsInput() {
    return this._contactPrePassDurationSeconds;
  }

  // dataflow_endpoint_group_v2_id - computed: true, optional: false, required: false
  public get dataflowEndpointGroupV2Id() {
    return this.getStringAttribute('dataflow_endpoint_group_v2_id');
  }

  // endpoint_details - computed: true, optional: false, required: false
  private _endpointDetails = new GroundstationDataflowEndpointGroupV2EndpointDetailsList(this, "endpoint_details", false);
  public get endpointDetails() {
    return this._endpointDetails;
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints = new GroundstationDataflowEndpointGroupV2EndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: GroundstationDataflowEndpointGroupV2Endpoints[] | cdktn.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new GroundstationDataflowEndpointGroupV2TagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GroundstationDataflowEndpointGroupV2Tags[] | cdktn.IResolvable) {
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
      contact_post_pass_duration_seconds: cdktn.numberToTerraform(this._contactPostPassDurationSeconds),
      contact_pre_pass_duration_seconds: cdktn.numberToTerraform(this._contactPrePassDurationSeconds),
      endpoints: cdktn.listMapper(groundstationDataflowEndpointGroupV2EndpointsToTerraform, false)(this._endpoints.internalValue),
      tags: cdktn.listMapper(groundstationDataflowEndpointGroupV2TagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_post_pass_duration_seconds: {
        value: cdktn.numberToHclTerraform(this._contactPostPassDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contact_pre_pass_duration_seconds: {
        value: cdktn.numberToHclTerraform(this._contactPrePassDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoints: {
        value: cdktn.listMapperHcl(groundstationDataflowEndpointGroupV2EndpointsToHclTerraform, false)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroundstationDataflowEndpointGroupV2EndpointsList",
      },
      tags: {
        value: cdktn.listMapperHcl(groundstationDataflowEndpointGroupV2TagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroundstationDataflowEndpointGroupV2TagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
