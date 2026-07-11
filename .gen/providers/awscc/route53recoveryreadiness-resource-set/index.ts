// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Route53RecoveryreadinessResourceSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the resource set to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}
  */
  readonly resourceSetName?: string;
  /**
  * The resource type of the resources in the resource set. Enter one of the following values for resource type: 
  * 
  * AWS: :AutoScaling: :AutoScalingGroup, AWS: :CloudWatch: :Alarm, AWS: :EC2: :CustomerGateway, AWS: :DynamoDB: :Table, AWS: :EC2: :Volume, AWS: :ElasticLoadBalancing: :LoadBalancer, AWS: :ElasticLoadBalancingV2: :LoadBalancer, AWS: :MSK: :Cluster, AWS: :RDS: :DBCluster, AWS: :Route53: :HealthCheck, AWS: :SQS: :Queue, AWS: :SNS: :Topic, AWS: :SNS: :Subscription, AWS: :EC2: :VPC, AWS: :EC2: :VPNConnection, AWS: :EC2: :VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}
  */
  readonly resourceSetType: string;
  /**
  * A list of resource objects in the resource set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#resources Route53RecoveryreadinessResourceSet#resources}
  */
  readonly resources: Route53RecoveryreadinessResourceSetResources[] | cdktn.IResolvable;
  /**
  * A tag to associate with the parameters for a resource set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}
  */
  readonly tags?: Route53RecoveryreadinessResourceSetTags[] | cdktn.IResolvable;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource {
  /**
  * A Network Load Balancer resource Amazon Resource Name (ARN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#arn Route53RecoveryreadinessResourceSet#arn}
  */
  readonly arn?: string;
}

export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource {
  /**
  * The DNS target domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}
  */
  readonly domainName?: string;
  /**
  * The Resource Record set id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
  */
  readonly recordSetId?: string;
}

export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    record_set_id: cdktn.stringToTerraform(struct!.recordSetId),
  }
}


export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_set_id: {
      value: cdktn.stringToHclTerraform(struct!.recordSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._recordSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetId = this._recordSetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._recordSetId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._recordSetId = value.recordSetId;
    }
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // record_set_id - computed: true, optional: true, required: false
  private _recordSetId?: string; 
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }
  public set recordSetId(value: string) {
    this._recordSetId = value;
  }
  public resetRecordSetId() {
    this._recordSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdInput() {
    return this._recordSetId;
  }
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {
  /**
  * The Network Load Balancer resource that a DNS target resource points to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}
  */
  readonly nlbResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
  /**
  * The Route 53 resource that a DNS target resource record points to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}
  */
  readonly r53Resource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
}

export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    nlb_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct!.nlbResource),
    r53_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct!.r53Resource),
  }
}


export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    nlb_resource: {
      value: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToHclTerraform(struct!.nlbResource),
      isBlock: true,
      type: "struct",
      storageClassType: "Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource",
    },
    r53_resource: {
      value: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToHclTerraform(struct!.r53Resource),
      isBlock: true,
      type: "struct",
      storageClassType: "Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nlbResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nlbResource = this._nlbResource?.internalValue;
    }
    if (this._r53Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.r53Resource = this._r53Resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nlbResource.internalValue = undefined;
      this._r53Resource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nlbResource.internalValue = value.nlbResource;
      this._r53Resource.internalValue = value.r53Resource;
    }
  }

  // nlb_resource - computed: true, optional: true, required: false
  private _nlbResource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference(this, "nlb_resource");
  public get nlbResource() {
    return this._nlbResource;
  }
  public putNlbResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource) {
    this._nlbResource.internalValue = value;
  }
  public resetNlbResource() {
    this._nlbResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nlbResourceInput() {
    return this._nlbResource.internalValue;
  }

  // r53_resource - computed: true, optional: true, required: false
  private _r53Resource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference(this, "r53_resource");
  public get r53Resource() {
    return this._r53Resource;
  }
  public putR53Resource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource) {
    this._r53Resource.internalValue = value;
  }
  public resetR53Resource() {
    this._r53Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r53ResourceInput() {
    return this._r53Resource.internalValue;
  }
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResource {
  /**
  * The domain name that acts as an ingress point to a portion of the customer application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}
  */
  readonly domainName?: string;
  /**
  * The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}
  */
  readonly hostedZoneArn?: string;
  /**
  * The Route 53 record set ID that will uniquely identify a DNS record, given a name and a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
  */
  readonly recordSetId?: string;
  /**
  * The type of DNS record of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#record_type Route53RecoveryreadinessResourceSet#record_type}
  */
  readonly recordType?: string;
  /**
  * The target resource that the Route 53 record points to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#target_resource Route53RecoveryreadinessResourceSet#target_resource}
  */
  readonly targetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
}

export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    hosted_zone_arn: cdktn.stringToTerraform(struct!.hostedZoneArn),
    record_set_id: cdktn.stringToTerraform(struct!.recordSetId),
    record_type: cdktn.stringToTerraform(struct!.recordType),
    target_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct!.targetResource),
  }
}


export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_arn: {
      value: cdktn.stringToHclTerraform(struct!.hostedZoneArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_set_id: {
      value: cdktn.stringToHclTerraform(struct!.recordSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_type: {
      value: cdktn.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource: {
      value: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToHclTerraform(struct!.targetResource),
      isBlock: true,
      type: "struct",
      storageClassType: "Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._hostedZoneArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneArn = this._hostedZoneArn;
    }
    if (this._recordSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetId = this._recordSetId;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._targetResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResource = this._targetResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._hostedZoneArn = undefined;
      this._recordSetId = undefined;
      this._recordType = undefined;
      this._targetResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._hostedZoneArn = value.hostedZoneArn;
      this._recordSetId = value.recordSetId;
      this._recordType = value.recordType;
      this._targetResource.internalValue = value.targetResource;
    }
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // hosted_zone_arn - computed: true, optional: true, required: false
  private _hostedZoneArn?: string; 
  public get hostedZoneArn() {
    return this.getStringAttribute('hosted_zone_arn');
  }
  public set hostedZoneArn(value: string) {
    this._hostedZoneArn = value;
  }
  public resetHostedZoneArn() {
    this._hostedZoneArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneArnInput() {
    return this._hostedZoneArn;
  }

  // record_set_id - computed: true, optional: true, required: false
  private _recordSetId?: string; 
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }
  public set recordSetId(value: string) {
    this._recordSetId = value;
  }
  public resetRecordSetId() {
    this._recordSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdInput() {
    return this._recordSetId;
  }

  // record_type - computed: true, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // target_resource - computed: true, optional: true, required: false
  private _targetResource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference(this, "target_resource");
  public get targetResource() {
    return this._targetResource;
  }
  public putTargetResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource) {
    this._targetResource.internalValue = value;
  }
  public resetTargetResource() {
    this._targetResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceInput() {
    return this._targetResource.internalValue;
  }
}
export interface Route53RecoveryreadinessResourceSetResources {
  /**
  * The component identifier of the resource, generated when DNS target resource is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#component_id Route53RecoveryreadinessResourceSet#component_id}
  */
  readonly componentId?: string;
  /**
  * A component for DNS/routing control readiness checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#dns_target_resource Route53RecoveryreadinessResourceSet#dns_target_resource}
  */
  readonly dnsTargetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource;
  /**
  * A list of recovery group Amazon Resource Names (ARNs) and cell ARNs that this resource is contained within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}
  */
  readonly readinessScopes?: string[];
  /**
  * The Amazon Resource Name (ARN) of the AWS resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}
  */
  readonly resourceArn?: string;
}

export function route53RecoveryreadinessResourceSetResourcesToTerraform(struct?: Route53RecoveryreadinessResourceSetResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    component_id: cdktn.stringToTerraform(struct!.componentId),
    dns_target_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct!.dnsTargetResource),
    readiness_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.readinessScopes),
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function route53RecoveryreadinessResourceSetResourcesToHclTerraform(struct?: Route53RecoveryreadinessResourceSetResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    component_id: {
      value: cdktn.stringToHclTerraform(struct!.componentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_target_resource: {
      value: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToHclTerraform(struct!.dnsTargetResource),
      isBlock: true,
      type: "struct",
      storageClassType: "Route53RecoveryreadinessResourceSetResourcesDnsTargetResource",
    },
    readiness_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.readinessScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53RecoveryreadinessResourceSetResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Route53RecoveryreadinessResourceSetResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentId = this._componentId;
    }
    if (this._dnsTargetResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTargetResource = this._dnsTargetResource?.internalValue;
    }
    if (this._readinessScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessScopes = this._readinessScopes;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentId = undefined;
      this._dnsTargetResource.internalValue = undefined;
      this._readinessScopes = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentId = value.componentId;
      this._dnsTargetResource.internalValue = value.dnsTargetResource;
      this._readinessScopes = value.readinessScopes;
      this._resourceArn = value.resourceArn;
    }
  }

  // component_id - computed: true, optional: true, required: false
  private _componentId?: string; 
  public get componentId() {
    return this.getStringAttribute('component_id');
  }
  public set componentId(value: string) {
    this._componentId = value;
  }
  public resetComponentId() {
    this._componentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId;
  }

  // dns_target_resource - computed: true, optional: true, required: false
  private _dnsTargetResource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference(this, "dns_target_resource");
  public get dnsTargetResource() {
    return this._dnsTargetResource;
  }
  public putDnsTargetResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource) {
    this._dnsTargetResource.internalValue = value;
  }
  public resetDnsTargetResource() {
    this._dnsTargetResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTargetResourceInput() {
    return this._dnsTargetResource.internalValue;
  }

  // readiness_scopes - computed: true, optional: true, required: false
  private _readinessScopes?: string[]; 
  public get readinessScopes() {
    return this.getListAttribute('readiness_scopes');
  }
  public set readinessScopes(value: string[]) {
    this._readinessScopes = value;
  }
  public resetReadinessScopes() {
    this._readinessScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessScopesInput() {
    return this._readinessScopes;
  }

  // resource_arn - computed: true, optional: true, required: false
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  public resetResourceArn() {
    this._resourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class Route53RecoveryreadinessResourceSetResourcesList extends cdktn.ComplexList {
  public internalValue? : Route53RecoveryreadinessResourceSetResources[] | cdktn.IResolvable

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
  public get(index: number): Route53RecoveryreadinessResourceSetResourcesOutputReference {
    return new Route53RecoveryreadinessResourceSetResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53RecoveryreadinessResourceSetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#key Route53RecoveryreadinessResourceSet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#value Route53RecoveryreadinessResourceSet#value}
  */
  readonly value?: string;
}

export function route53RecoveryreadinessResourceSetTagsToTerraform(struct?: Route53RecoveryreadinessResourceSetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function route53RecoveryreadinessResourceSetTagsToHclTerraform(struct?: Route53RecoveryreadinessResourceSetTags | cdktn.IResolvable): any {
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

export class Route53RecoveryreadinessResourceSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Route53RecoveryreadinessResourceSetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Route53RecoveryreadinessResourceSetTags | cdktn.IResolvable | undefined) {
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

export class Route53RecoveryreadinessResourceSetTagsList extends cdktn.ComplexList {
  public internalValue? : Route53RecoveryreadinessResourceSetTags[] | cdktn.IResolvable

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
  public get(index: number): Route53RecoveryreadinessResourceSetTagsOutputReference {
    return new Route53RecoveryreadinessResourceSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set awscc_route53recoveryreadiness_resource_set}
*/
export class Route53RecoveryreadinessResourceSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53recoveryreadiness_resource_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Route53RecoveryreadinessResourceSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53RecoveryreadinessResourceSet to import
  * @param importFromId The id of the existing Route53RecoveryreadinessResourceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53RecoveryreadinessResourceSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53recoveryreadiness_resource_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/route53recoveryreadiness_resource_set awscc_route53recoveryreadiness_resource_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoveryreadinessResourceSetConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessResourceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoveryreadiness_resource_set',
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
    this._resourceSetName = config.resourceSetName;
    this._resourceSetType = config.resourceSetType;
    this._resources.internalValue = config.resources;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_set_arn - computed: true, optional: false, required: false
  public get resourceSetArn() {
    return this.getStringAttribute('resource_set_arn');
  }

  // resource_set_name - computed: true, optional: true, required: false
  private _resourceSetName?: string; 
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
  }
  public set resourceSetName(value: string) {
    this._resourceSetName = value;
  }
  public resetResourceSetName() {
    this._resourceSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetNameInput() {
    return this._resourceSetName;
  }

  // resource_set_type - computed: false, optional: false, required: true
  private _resourceSetType?: string; 
  public get resourceSetType() {
    return this.getStringAttribute('resource_set_type');
  }
  public set resourceSetType(value: string) {
    this._resourceSetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetTypeInput() {
    return this._resourceSetType;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new Route53RecoveryreadinessResourceSetResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: Route53RecoveryreadinessResourceSetResources[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Route53RecoveryreadinessResourceSetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Route53RecoveryreadinessResourceSetTags[] | cdktn.IResolvable) {
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
      resource_set_name: cdktn.stringToTerraform(this._resourceSetName),
      resource_set_type: cdktn.stringToTerraform(this._resourceSetType),
      resources: cdktn.listMapper(route53RecoveryreadinessResourceSetResourcesToTerraform, false)(this._resources.internalValue),
      tags: cdktn.listMapper(route53RecoveryreadinessResourceSetTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resource_set_name: {
        value: cdktn.stringToHclTerraform(this._resourceSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_set_type: {
        value: cdktn.stringToHclTerraform(this._resourceSetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktn.listMapperHcl(route53RecoveryreadinessResourceSetResourcesToHclTerraform, false)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecoveryreadinessResourceSetResourcesList",
      },
      tags: {
        value: cdktn.listMapperHcl(route53RecoveryreadinessResourceSetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecoveryreadinessResourceSetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
