// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2VerifiedAccessEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * The DNS name for users to reach your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#application_domain Ec2VerifiedAccessEndpoint#application_domain}
  */
  readonly applicationDomain?: string;
  /**
  * The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#attachment_type Ec2VerifiedAccessEndpoint#attachment_type}
  */
  readonly attachmentType: string;
  /**
  * The options for cidr type endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#cidr_options Ec2VerifiedAccessEndpoint#cidr_options}
  */
  readonly cidrOptions?: Ec2VerifiedAccessEndpointCidrOptions;
  /**
  * A description for the AWS Verified Access endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#description Ec2VerifiedAccessEndpoint#description}
  */
  readonly description?: string;
  /**
  * The ARN of a public TLS/SSL certificate imported into or created with ACM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#domain_certificate_arn Ec2VerifiedAccessEndpoint#domain_certificate_arn}
  */
  readonly domainCertificateArn?: string;
  /**
  * A custom identifier that gets prepended to a DNS name that is generated for the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#endpoint_domain_prefix Ec2VerifiedAccessEndpoint#endpoint_domain_prefix}
  */
  readonly endpointDomainPrefix?: string;
  /**
  * The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#endpoint_type Ec2VerifiedAccessEndpoint#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#load_balancer_options Ec2VerifiedAccessEndpoint#load_balancer_options}
  */
  readonly loadBalancerOptions?: Ec2VerifiedAccessEndpointLoadBalancerOptions;
  /**
  * The options for network-interface type endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#network_interface_options Ec2VerifiedAccessEndpoint#network_interface_options}
  */
  readonly networkInterfaceOptions?: Ec2VerifiedAccessEndpointNetworkInterfaceOptions;
  /**
  * The AWS Verified Access policy document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#policy_document Ec2VerifiedAccessEndpoint#policy_document}
  */
  readonly policyDocument?: string;
  /**
  * The status of the Verified Access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#policy_enabled Ec2VerifiedAccessEndpoint#policy_enabled}
  */
  readonly policyEnabled?: boolean | cdktn.IResolvable;
  /**
  * The options for rds type endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#rds_options Ec2VerifiedAccessEndpoint#rds_options}
  */
  readonly rdsOptions?: Ec2VerifiedAccessEndpointRdsOptions;
  /**
  * The IDs of the security groups for the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#security_group_ids Ec2VerifiedAccessEndpoint#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The configuration options for customer provided KMS encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#sse_specification Ec2VerifiedAccessEndpoint#sse_specification}
  */
  readonly sseSpecification?: Ec2VerifiedAccessEndpointSseSpecification;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#tags Ec2VerifiedAccessEndpoint#tags}
  */
  readonly tags?: Ec2VerifiedAccessEndpointTags[] | cdktn.IResolvable;
  /**
  * The ID of the AWS Verified Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#verified_access_group_id Ec2VerifiedAccessEndpoint#verified_access_group_id}
  */
  readonly verifiedAccessGroupId: string;
}
export interface Ec2VerifiedAccessEndpointCidrOptionsPortRanges {
  /**
  * The first port in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}
  */
  readonly fromPort?: number;
  /**
  * The last port in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}
  */
  readonly toPort?: number;
}

export function ec2VerifiedAccessEndpointCidrOptionsPortRangesToTerraform(struct?: Ec2VerifiedAccessEndpointCidrOptionsPortRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function ec2VerifiedAccessEndpointCidrOptionsPortRangesToHclTerraform(struct?: Ec2VerifiedAccessEndpointCidrOptionsPortRanges | cdktn.IResolvable): any {
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

export class Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2VerifiedAccessEndpointCidrOptionsPortRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VerifiedAccessEndpointCidrOptionsPortRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
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

export class Ec2VerifiedAccessEndpointCidrOptionsPortRangesList extends cdktn.ComplexList {
  public internalValue? : Ec2VerifiedAccessEndpointCidrOptionsPortRanges[] | cdktn.IResolvable

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
  public get(index: number): Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference {
    return new Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2VerifiedAccessEndpointCidrOptions {
  /**
  * The IP address range, in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#cidr Ec2VerifiedAccessEndpoint#cidr}
  */
  readonly cidr?: string;
  /**
  * The list of port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}
  */
  readonly portRanges?: Ec2VerifiedAccessEndpointCidrOptionsPortRanges[] | cdktn.IResolvable;
  /**
  * The IP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * The IDs of the subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function ec2VerifiedAccessEndpointCidrOptionsToTerraform(struct?: Ec2VerifiedAccessEndpointCidrOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
    port_ranges: cdktn.listMapper(ec2VerifiedAccessEndpointCidrOptionsPortRangesToTerraform, false)(struct!.portRanges),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function ec2VerifiedAccessEndpointCidrOptionsToHclTerraform(struct?: Ec2VerifiedAccessEndpointCidrOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_ranges: {
      value: cdktn.listMapperHcl(ec2VerifiedAccessEndpointCidrOptionsPortRangesToHclTerraform, false)(struct!.portRanges),
      isBlock: true,
      type: "set",
      storageClassType: "Ec2VerifiedAccessEndpointCidrOptionsPortRangesList",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2VerifiedAccessEndpointCidrOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VerifiedAccessEndpointCidrOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._portRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VerifiedAccessEndpointCidrOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._portRanges.internalValue = undefined;
      this._protocol = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._portRanges.internalValue = value.portRanges;
      this._protocol = value.protocol;
      this._subnetIds = value.subnetIds;
    }
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // port_ranges - computed: true, optional: true, required: false
  private _portRanges = new Ec2VerifiedAccessEndpointCidrOptionsPortRangesList(this, "port_ranges", true);
  public get portRanges() {
    return this._portRanges;
  }
  public putPortRanges(value: Ec2VerifiedAccessEndpointCidrOptionsPortRanges[] | cdktn.IResolvable) {
    this._portRanges.internalValue = value;
  }
  public resetPortRanges() {
    this._portRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges.internalValue;
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

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges {
  /**
  * The first port in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}
  */
  readonly fromPort?: number;
  /**
  * The last port in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}
  */
  readonly toPort?: number;
}

export function ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesToTerraform(struct?: Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesToHclTerraform(struct?: Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges | cdktn.IResolvable): any {
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

export class Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
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

export class Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList extends cdktn.ComplexList {
  public internalValue? : Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[] | cdktn.IResolvable

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
  public get(index: number): Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference {
    return new Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2VerifiedAccessEndpointLoadBalancerOptions {
  /**
  * The ARN of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#load_balancer_arn Ec2VerifiedAccessEndpoint#load_balancer_arn}
  */
  readonly loadBalancerArn?: string;
  /**
  * The IP port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}
  */
  readonly port?: number;
  /**
  * The list of port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}
  */
  readonly portRanges?: Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[] | cdktn.IResolvable;
  /**
  * The IP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * The IDs of the subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function ec2VerifiedAccessEndpointLoadBalancerOptionsToTerraform(struct?: Ec2VerifiedAccessEndpointLoadBalancerOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    load_balancer_arn: cdktn.stringToTerraform(struct!.loadBalancerArn),
    port: cdktn.numberToTerraform(struct!.port),
    port_ranges: cdktn.listMapper(ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesToTerraform, false)(struct!.portRanges),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function ec2VerifiedAccessEndpointLoadBalancerOptionsToHclTerraform(struct?: Ec2VerifiedAccessEndpointLoadBalancerOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    load_balancer_arn: {
      value: cdktn.stringToHclTerraform(struct!.loadBalancerArn),
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
    port_ranges: {
      value: cdktn.listMapperHcl(ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesToHclTerraform, false)(struct!.portRanges),
      isBlock: true,
      type: "set",
      storageClassType: "Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VerifiedAccessEndpointLoadBalancerOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerArn = this._loadBalancerArn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VerifiedAccessEndpointLoadBalancerOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalancerArn = undefined;
      this._port = undefined;
      this._portRanges.internalValue = undefined;
      this._protocol = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalancerArn = value.loadBalancerArn;
      this._port = value.port;
      this._portRanges.internalValue = value.portRanges;
      this._protocol = value.protocol;
      this._subnetIds = value.subnetIds;
    }
  }

  // load_balancer_arn - computed: true, optional: true, required: false
  private _loadBalancerArn?: string; 
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }
  public resetLoadBalancerArn() {
    this._loadBalancerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerArnInput() {
    return this._loadBalancerArn;
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

  // port_ranges - computed: true, optional: true, required: false
  private _portRanges = new Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(this, "port_ranges", true);
  public get portRanges() {
    return this._portRanges;
  }
  public putPortRanges(value: Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[] | cdktn.IResolvable) {
    this._portRanges.internalValue = value;
  }
  public resetPortRanges() {
    this._portRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges.internalValue;
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

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges {
  /**
  * The first port in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}
  */
  readonly fromPort?: number;
  /**
  * The last port in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}
  */
  readonly toPort?: number;
}

export function ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesToTerraform(struct?: Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesToHclTerraform(struct?: Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges | cdktn.IResolvable): any {
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

export class Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
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

export class Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList extends cdktn.ComplexList {
  public internalValue? : Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[] | cdktn.IResolvable

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
  public get(index: number): Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference {
    return new Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2VerifiedAccessEndpointNetworkInterfaceOptions {
  /**
  * The ID of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#network_interface_id Ec2VerifiedAccessEndpoint#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * The IP port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}
  */
  readonly port?: number;
  /**
  * The list of port ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}
  */
  readonly portRanges?: Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[] | cdktn.IResolvable;
  /**
  * The IP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}
  */
  readonly protocol?: string;
}

export function ec2VerifiedAccessEndpointNetworkInterfaceOptionsToTerraform(struct?: Ec2VerifiedAccessEndpointNetworkInterfaceOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_interface_id: cdktn.stringToTerraform(struct!.networkInterfaceId),
    port: cdktn.numberToTerraform(struct!.port),
    port_ranges: cdktn.listMapper(ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesToTerraform, false)(struct!.portRanges),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function ec2VerifiedAccessEndpointNetworkInterfaceOptionsToHclTerraform(struct?: Ec2VerifiedAccessEndpointNetworkInterfaceOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_interface_id: {
      value: cdktn.stringToHclTerraform(struct!.networkInterfaceId),
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
    port_ranges: {
      value: cdktn.listMapperHcl(ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesToHclTerraform, false)(struct!.portRanges),
      isBlock: true,
      type: "set",
      storageClassType: "Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VerifiedAccessEndpointNetworkInterfaceOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VerifiedAccessEndpointNetworkInterfaceOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkInterfaceId = undefined;
      this._port = undefined;
      this._portRanges.internalValue = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkInterfaceId = value.networkInterfaceId;
      this._port = value.port;
      this._portRanges.internalValue = value.portRanges;
      this._protocol = value.protocol;
    }
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
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

  // port_ranges - computed: true, optional: true, required: false
  private _portRanges = new Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(this, "port_ranges", true);
  public get portRanges() {
    return this._portRanges;
  }
  public putPortRanges(value: Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[] | cdktn.IResolvable) {
    this._portRanges.internalValue = value;
  }
  public resetPortRanges() {
    this._portRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges.internalValue;
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
}
export interface Ec2VerifiedAccessEndpointRdsOptions {
  /**
  * The IP port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}
  */
  readonly port?: number;
  /**
  * The IP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * The ARN of the RDS DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#rds_db_cluster_arn Ec2VerifiedAccessEndpoint#rds_db_cluster_arn}
  */
  readonly rdsDbClusterArn?: string;
  /**
  * The ARN of the RDS DB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#rds_db_instance_arn Ec2VerifiedAccessEndpoint#rds_db_instance_arn}
  */
  readonly rdsDbInstanceArn?: string;
  /**
  * The ARN of the RDS DB proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#rds_db_proxy_arn Ec2VerifiedAccessEndpoint#rds_db_proxy_arn}
  */
  readonly rdsDbProxyArn?: string;
  /**
  * The RDS endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#rds_endpoint Ec2VerifiedAccessEndpoint#rds_endpoint}
  */
  readonly rdsEndpoint?: string;
  /**
  * The IDs of the subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function ec2VerifiedAccessEndpointRdsOptionsToTerraform(struct?: Ec2VerifiedAccessEndpointRdsOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    rds_db_cluster_arn: cdktn.stringToTerraform(struct!.rdsDbClusterArn),
    rds_db_instance_arn: cdktn.stringToTerraform(struct!.rdsDbInstanceArn),
    rds_db_proxy_arn: cdktn.stringToTerraform(struct!.rdsDbProxyArn),
    rds_endpoint: cdktn.stringToTerraform(struct!.rdsEndpoint),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function ec2VerifiedAccessEndpointRdsOptionsToHclTerraform(struct?: Ec2VerifiedAccessEndpointRdsOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
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
    rds_db_cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.rdsDbClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds_db_instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.rdsDbInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds_db_proxy_arn: {
      value: cdktn.stringToHclTerraform(struct!.rdsDbProxyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.rdsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2VerifiedAccessEndpointRdsOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VerifiedAccessEndpointRdsOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rdsDbClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsDbClusterArn = this._rdsDbClusterArn;
    }
    if (this._rdsDbInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsDbInstanceArn = this._rdsDbInstanceArn;
    }
    if (this._rdsDbProxyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsDbProxyArn = this._rdsDbProxyArn;
    }
    if (this._rdsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsEndpoint = this._rdsEndpoint;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VerifiedAccessEndpointRdsOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._rdsDbClusterArn = undefined;
      this._rdsDbInstanceArn = undefined;
      this._rdsDbProxyArn = undefined;
      this._rdsEndpoint = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
      this._rdsDbClusterArn = value.rdsDbClusterArn;
      this._rdsDbInstanceArn = value.rdsDbInstanceArn;
      this._rdsDbProxyArn = value.rdsDbProxyArn;
      this._rdsEndpoint = value.rdsEndpoint;
      this._subnetIds = value.subnetIds;
    }
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

  // rds_db_cluster_arn - computed: true, optional: true, required: false
  private _rdsDbClusterArn?: string; 
  public get rdsDbClusterArn() {
    return this.getStringAttribute('rds_db_cluster_arn');
  }
  public set rdsDbClusterArn(value: string) {
    this._rdsDbClusterArn = value;
  }
  public resetRdsDbClusterArn() {
    this._rdsDbClusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsDbClusterArnInput() {
    return this._rdsDbClusterArn;
  }

  // rds_db_instance_arn - computed: true, optional: true, required: false
  private _rdsDbInstanceArn?: string; 
  public get rdsDbInstanceArn() {
    return this.getStringAttribute('rds_db_instance_arn');
  }
  public set rdsDbInstanceArn(value: string) {
    this._rdsDbInstanceArn = value;
  }
  public resetRdsDbInstanceArn() {
    this._rdsDbInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsDbInstanceArnInput() {
    return this._rdsDbInstanceArn;
  }

  // rds_db_proxy_arn - computed: true, optional: true, required: false
  private _rdsDbProxyArn?: string; 
  public get rdsDbProxyArn() {
    return this.getStringAttribute('rds_db_proxy_arn');
  }
  public set rdsDbProxyArn(value: string) {
    this._rdsDbProxyArn = value;
  }
  public resetRdsDbProxyArn() {
    this._rdsDbProxyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsDbProxyArnInput() {
    return this._rdsDbProxyArn;
  }

  // rds_endpoint - computed: true, optional: true, required: false
  private _rdsEndpoint?: string; 
  public get rdsEndpoint() {
    return this.getStringAttribute('rds_endpoint');
  }
  public set rdsEndpoint(value: string) {
    this._rdsEndpoint = value;
  }
  public resetRdsEndpoint() {
    this._rdsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsEndpointInput() {
    return this._rdsEndpoint;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface Ec2VerifiedAccessEndpointSseSpecification {
  /**
  * Whether to encrypt the policy with the provided key or disable encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#customer_managed_key_enabled Ec2VerifiedAccessEndpoint#customer_managed_key_enabled}
  */
  readonly customerManagedKeyEnabled?: boolean | cdktn.IResolvable;
  /**
  * KMS Key Arn used to encrypt the group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#kms_key_arn Ec2VerifiedAccessEndpoint#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function ec2VerifiedAccessEndpointSseSpecificationToTerraform(struct?: Ec2VerifiedAccessEndpointSseSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_managed_key_enabled: cdktn.booleanToTerraform(struct!.customerManagedKeyEnabled),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function ec2VerifiedAccessEndpointSseSpecificationToHclTerraform(struct?: Ec2VerifiedAccessEndpointSseSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_managed_key_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.customerManagedKeyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2VerifiedAccessEndpointSseSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VerifiedAccessEndpointSseSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerManagedKeyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedKeyEnabled = this._customerManagedKeyEnabled;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VerifiedAccessEndpointSseSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerManagedKeyEnabled = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerManagedKeyEnabled = value.customerManagedKeyEnabled;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // customer_managed_key_enabled - computed: true, optional: true, required: false
  private _customerManagedKeyEnabled?: boolean | cdktn.IResolvable; 
  public get customerManagedKeyEnabled() {
    return this.getBooleanAttribute('customer_managed_key_enabled');
  }
  public set customerManagedKeyEnabled(value: boolean | cdktn.IResolvable) {
    this._customerManagedKeyEnabled = value;
  }
  public resetCustomerManagedKeyEnabled() {
    this._customerManagedKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyEnabledInput() {
    return this._customerManagedKeyEnabled;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface Ec2VerifiedAccessEndpointTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#key Ec2VerifiedAccessEndpoint#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#value Ec2VerifiedAccessEndpoint#value}
  */
  readonly value?: string;
}

export function ec2VerifiedAccessEndpointTagsToTerraform(struct?: Ec2VerifiedAccessEndpointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2VerifiedAccessEndpointTagsToHclTerraform(struct?: Ec2VerifiedAccessEndpointTags | cdktn.IResolvable): any {
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

export class Ec2VerifiedAccessEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2VerifiedAccessEndpointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2VerifiedAccessEndpointTags | cdktn.IResolvable | undefined) {
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

export class Ec2VerifiedAccessEndpointTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2VerifiedAccessEndpointTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2VerifiedAccessEndpointTagsOutputReference {
    return new Ec2VerifiedAccessEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}
*/
export class Ec2VerifiedAccessEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_verified_access_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2VerifiedAccessEndpoint to import
  * @param importFromId The id of the existing Ec2VerifiedAccessEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2VerifiedAccessEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_verified_access_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2VerifiedAccessEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2VerifiedAccessEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_verified_access_endpoint',
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
    this._applicationDomain = config.applicationDomain;
    this._attachmentType = config.attachmentType;
    this._cidrOptions.internalValue = config.cidrOptions;
    this._description = config.description;
    this._domainCertificateArn = config.domainCertificateArn;
    this._endpointDomainPrefix = config.endpointDomainPrefix;
    this._endpointType = config.endpointType;
    this._loadBalancerOptions.internalValue = config.loadBalancerOptions;
    this._networkInterfaceOptions.internalValue = config.networkInterfaceOptions;
    this._policyDocument = config.policyDocument;
    this._policyEnabled = config.policyEnabled;
    this._rdsOptions.internalValue = config.rdsOptions;
    this._securityGroupIds = config.securityGroupIds;
    this._sseSpecification.internalValue = config.sseSpecification;
    this._tags.internalValue = config.tags;
    this._verifiedAccessGroupId = config.verifiedAccessGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_domain - computed: true, optional: true, required: false
  private _applicationDomain?: string; 
  public get applicationDomain() {
    return this.getStringAttribute('application_domain');
  }
  public set applicationDomain(value: string) {
    this._applicationDomain = value;
  }
  public resetApplicationDomain() {
    this._applicationDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDomainInput() {
    return this._applicationDomain;
  }

  // attachment_type - computed: false, optional: false, required: true
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
  }

  // cidr_options - computed: true, optional: true, required: false
  private _cidrOptions = new Ec2VerifiedAccessEndpointCidrOptionsOutputReference(this, "cidr_options");
  public get cidrOptions() {
    return this._cidrOptions;
  }
  public putCidrOptions(value: Ec2VerifiedAccessEndpointCidrOptions) {
    this._cidrOptions.internalValue = value;
  }
  public resetCidrOptions() {
    this._cidrOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrOptionsInput() {
    return this._cidrOptions.internalValue;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_validation_domain - computed: true, optional: false, required: false
  public get deviceValidationDomain() {
    return this.getStringAttribute('device_validation_domain');
  }

  // domain_certificate_arn - computed: true, optional: true, required: false
  private _domainCertificateArn?: string; 
  public get domainCertificateArn() {
    return this.getStringAttribute('domain_certificate_arn');
  }
  public set domainCertificateArn(value: string) {
    this._domainCertificateArn = value;
  }
  public resetDomainCertificateArn() {
    this._domainCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainCertificateArnInput() {
    return this._domainCertificateArn;
  }

  // endpoint_domain - computed: true, optional: false, required: false
  public get endpointDomain() {
    return this.getStringAttribute('endpoint_domain');
  }

  // endpoint_domain_prefix - computed: true, optional: true, required: false
  private _endpointDomainPrefix?: string; 
  public get endpointDomainPrefix() {
    return this.getStringAttribute('endpoint_domain_prefix');
  }
  public set endpointDomainPrefix(value: string) {
    this._endpointDomainPrefix = value;
  }
  public resetEndpointDomainPrefix() {
    this._endpointDomainPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDomainPrefixInput() {
    return this._endpointDomainPrefix;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // load_balancer_options - computed: true, optional: true, required: false
  private _loadBalancerOptions = new Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(this, "load_balancer_options");
  public get loadBalancerOptions() {
    return this._loadBalancerOptions;
  }
  public putLoadBalancerOptions(value: Ec2VerifiedAccessEndpointLoadBalancerOptions) {
    this._loadBalancerOptions.internalValue = value;
  }
  public resetLoadBalancerOptions() {
    this._loadBalancerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerOptionsInput() {
    return this._loadBalancerOptions.internalValue;
  }

  // network_interface_options - computed: true, optional: true, required: false
  private _networkInterfaceOptions = new Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(this, "network_interface_options");
  public get networkInterfaceOptions() {
    return this._networkInterfaceOptions;
  }
  public putNetworkInterfaceOptions(value: Ec2VerifiedAccessEndpointNetworkInterfaceOptions) {
    this._networkInterfaceOptions.internalValue = value;
  }
  public resetNetworkInterfaceOptions() {
    this._networkInterfaceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceOptionsInput() {
    return this._networkInterfaceOptions.internalValue;
  }

  // policy_document - computed: true, optional: true, required: false
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  public resetPolicyDocument() {
    this._policyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // policy_enabled - computed: true, optional: true, required: false
  private _policyEnabled?: boolean | cdktn.IResolvable; 
  public get policyEnabled() {
    return this.getBooleanAttribute('policy_enabled');
  }
  public set policyEnabled(value: boolean | cdktn.IResolvable) {
    this._policyEnabled = value;
  }
  public resetPolicyEnabled() {
    this._policyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnabledInput() {
    return this._policyEnabled;
  }

  // rds_options - computed: true, optional: true, required: false
  private _rdsOptions = new Ec2VerifiedAccessEndpointRdsOptionsOutputReference(this, "rds_options");
  public get rdsOptions() {
    return this._rdsOptions;
  }
  public putRdsOptions(value: Ec2VerifiedAccessEndpointRdsOptions) {
    this._rdsOptions.internalValue = value;
  }
  public resetRdsOptions() {
    this._rdsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsOptionsInput() {
    return this._rdsOptions.internalValue;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // sse_specification - computed: true, optional: true, required: false
  private _sseSpecification = new Ec2VerifiedAccessEndpointSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }
  public putSseSpecification(value: Ec2VerifiedAccessEndpointSseSpecification) {
    this._sseSpecification.internalValue = value;
  }
  public resetSseSpecification() {
    this._sseSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseSpecificationInput() {
    return this._sseSpecification.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2VerifiedAccessEndpointTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2VerifiedAccessEndpointTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // verified_access_endpoint_id - computed: true, optional: false, required: false
  public get verifiedAccessEndpointId() {
    return this.getStringAttribute('verified_access_endpoint_id');
  }

  // verified_access_group_id - computed: false, optional: false, required: true
  private _verifiedAccessGroupId?: string; 
  public get verifiedAccessGroupId() {
    return this.getStringAttribute('verified_access_group_id');
  }
  public set verifiedAccessGroupId(value: string) {
    this._verifiedAccessGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedAccessGroupIdInput() {
    return this._verifiedAccessGroupId;
  }

  // verified_access_instance_id - computed: true, optional: false, required: false
  public get verifiedAccessInstanceId() {
    return this.getStringAttribute('verified_access_instance_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_domain: cdktn.stringToTerraform(this._applicationDomain),
      attachment_type: cdktn.stringToTerraform(this._attachmentType),
      cidr_options: ec2VerifiedAccessEndpointCidrOptionsToTerraform(this._cidrOptions.internalValue),
      description: cdktn.stringToTerraform(this._description),
      domain_certificate_arn: cdktn.stringToTerraform(this._domainCertificateArn),
      endpoint_domain_prefix: cdktn.stringToTerraform(this._endpointDomainPrefix),
      endpoint_type: cdktn.stringToTerraform(this._endpointType),
      load_balancer_options: ec2VerifiedAccessEndpointLoadBalancerOptionsToTerraform(this._loadBalancerOptions.internalValue),
      network_interface_options: ec2VerifiedAccessEndpointNetworkInterfaceOptionsToTerraform(this._networkInterfaceOptions.internalValue),
      policy_document: cdktn.stringToTerraform(this._policyDocument),
      policy_enabled: cdktn.booleanToTerraform(this._policyEnabled),
      rds_options: ec2VerifiedAccessEndpointRdsOptionsToTerraform(this._rdsOptions.internalValue),
      security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
      sse_specification: ec2VerifiedAccessEndpointSseSpecificationToTerraform(this._sseSpecification.internalValue),
      tags: cdktn.listMapper(ec2VerifiedAccessEndpointTagsToTerraform, false)(this._tags.internalValue),
      verified_access_group_id: cdktn.stringToTerraform(this._verifiedAccessGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_domain: {
        value: cdktn.stringToHclTerraform(this._applicationDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment_type: {
        value: cdktn.stringToHclTerraform(this._attachmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_options: {
        value: ec2VerifiedAccessEndpointCidrOptionsToHclTerraform(this._cidrOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2VerifiedAccessEndpointCidrOptions",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_certificate_arn: {
        value: cdktn.stringToHclTerraform(this._domainCertificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_domain_prefix: {
        value: cdktn.stringToHclTerraform(this._endpointDomainPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktn.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_options: {
        value: ec2VerifiedAccessEndpointLoadBalancerOptionsToHclTerraform(this._loadBalancerOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2VerifiedAccessEndpointLoadBalancerOptions",
      },
      network_interface_options: {
        value: ec2VerifiedAccessEndpointNetworkInterfaceOptionsToHclTerraform(this._networkInterfaceOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2VerifiedAccessEndpointNetworkInterfaceOptions",
      },
      policy_document: {
        value: cdktn.stringToHclTerraform(this._policyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_enabled: {
        value: cdktn.booleanToHclTerraform(this._policyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rds_options: {
        value: ec2VerifiedAccessEndpointRdsOptionsToHclTerraform(this._rdsOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2VerifiedAccessEndpointRdsOptions",
      },
      security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sse_specification: {
        value: ec2VerifiedAccessEndpointSseSpecificationToHclTerraform(this._sseSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2VerifiedAccessEndpointSseSpecification",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2VerifiedAccessEndpointTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2VerifiedAccessEndpointTagsList",
      },
      verified_access_group_id: {
        value: cdktn.stringToHclTerraform(this._verifiedAccessGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
