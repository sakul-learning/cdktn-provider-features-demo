// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2InstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * This property is reserved for internal use. If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#additional_info Ec2Instance#additional_info}
  */
  readonly additionalInfo?: string;
  /**
  * Indicates whether the instance is associated with a dedicated host. If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#affinity Ec2Instance#affinity}
  */
  readonly affinity?: string;
  /**
  * The Availability Zone of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#availability_zone Ec2Instance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The block device mapping entries that defines the block devices to attach to the instance at launch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#block_device_mappings Ec2Instance#block_device_mappings}
  */
  readonly blockDeviceMappings?: Ec2InstanceBlockDeviceMappings[] | cdktn.IResolvable;
  /**
  * The CPU options for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#cpu_options Ec2Instance#cpu_options}
  */
  readonly cpuOptions?: Ec2InstanceCpuOptions;
  /**
  * The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#credit_specification Ec2Instance#credit_specification}
  */
  readonly creditSpecification?: Ec2InstanceCreditSpecification;
  /**
  * If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#disable_api_termination Ec2Instance#disable_api_termination}
  */
  readonly disableApiTermination?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the instance is optimized for Amazon EBS I/O.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ebs_optimized Ec2Instance#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktn.IResolvable;
  /**
  * An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#elastic_gpu_specifications Ec2Instance#elastic_gpu_specifications}
  */
  readonly elasticGpuSpecifications?: Ec2InstanceElasticGpuSpecifications[] | cdktn.IResolvable;
  /**
  * An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#elastic_inference_accelerators Ec2Instance#elastic_inference_accelerators}
  */
  readonly elasticInferenceAccelerators?: Ec2InstanceElasticInferenceAccelerators[] | cdktn.IResolvable;
  /**
  * Indicates whether the instance is enabled for AWS Nitro Enclaves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#enclave_options Ec2Instance#enclave_options}
  */
  readonly enclaveOptions?: Ec2InstanceEnclaveOptions;
  /**
  * Indicates whether an instance is enabled for hibernation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#hibernation_options Ec2Instance#hibernation_options}
  */
  readonly hibernationOptions?: Ec2InstanceHibernationOptions;
  /**
  * If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#host_id Ec2Instance#host_id}
  */
  readonly hostId?: string;
  /**
  * The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#host_resource_group_arn Ec2Instance#host_resource_group_arn}
  */
  readonly hostResourceGroupArn?: string;
  /**
  * The IAM instance profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#iam_instance_profile Ec2Instance#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#image_id Ec2Instance#image_id}
  */
  readonly imageId?: string;
  /**
  * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#instance_initiated_shutdown_behavior Ec2Instance#instance_initiated_shutdown_behavior}
  */
  readonly instanceInitiatedShutdownBehavior?: string;
  /**
  * The instance type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#instance_type Ec2Instance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}
  */
  readonly ipv6Addresses?: Ec2InstanceIpv6Addresses[] | cdktn.IResolvable;
  /**
  * The ID of the kernel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#kernel_id Ec2Instance#kernel_id}
  */
  readonly kernelId?: string;
  /**
  * The name of the key pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#key_name Ec2Instance#key_name}
  */
  readonly keyName?: string;
  /**
  * The launch template to use to launch the instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#launch_template Ec2Instance#launch_template}
  */
  readonly launchTemplate?: Ec2InstanceLaunchTemplate;
  /**
  * The license configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#license_specifications Ec2Instance#license_specifications}
  */
  readonly licenseSpecifications?: Ec2InstanceLicenseSpecifications[] | cdktn.IResolvable;
  /**
  * The metadata options for the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#metadata_options Ec2Instance#metadata_options}
  */
  readonly metadataOptions?: Ec2InstanceMetadataOptions;
  /**
  * Specifies whether detailed monitoring is enabled for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#monitoring Ec2Instance#monitoring}
  */
  readonly monitoring?: boolean | cdktn.IResolvable;
  /**
  * The network interfaces to associate with the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#network_interfaces Ec2Instance#network_interfaces}
  */
  readonly networkInterfaces?: Ec2InstanceNetworkInterfaces[] | cdktn.IResolvable;
  /**
  * The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#placement_group_name Ec2Instance#placement_group_name}
  */
  readonly placementGroupName?: string;
  /**
  * The options for the instance hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#private_dns_name_options Ec2Instance#private_dns_name_options}
  */
  readonly privateDnsNameOptions?: Ec2InstancePrivateDnsNameOptions;
  /**
  * [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#propagate_tags_to_volume_on_creation Ec2Instance#propagate_tags_to_volume_on_creation}
  */
  readonly propagateTagsToVolumeOnCreation?: boolean | cdktn.IResolvable;
  /**
  * The ID of the RAM disk to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ramdisk_id Ec2Instance#ramdisk_id}
  */
  readonly ramdiskId?: string;
  /**
  * The IDs of the security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#security_group_ids Ec2Instance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * the names of the security groups. For a nondefault VPC, you must use security group IDs instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#security_groups Ec2Instance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Specifies whether to enable an instance launched in a VPC to perform NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#source_dest_check Ec2Instance#source_dest_check}
  */
  readonly sourceDestCheck?: boolean | cdktn.IResolvable;
  /**
  * The SSM document and parameter values in AWS Systems Manager to associate with this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ssm_associations Ec2Instance#ssm_associations}
  */
  readonly ssmAssociations?: Ec2InstanceSsmAssociations[] | cdktn.IResolvable;
  /**
  * [EC2-VPC] The ID of the subnet to launch the instance into.
  *
  *
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The tags to add to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#tags Ec2Instance#tags}
  */
  readonly tags?: Ec2InstanceTags[] | cdktn.IResolvable;
  /**
  * The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#tenancy Ec2Instance#tenancy}
  */
  readonly tenancy?: string;
  /**
  * The user data to make available to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#user_data Ec2Instance#user_data}
  */
  readonly userData?: string;
  /**
  * The volumes to attach to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#volumes Ec2Instance#volumes}
  */
  readonly volumes?: Ec2InstanceVolumes[] | cdktn.IResolvable;
}
export interface Ec2InstanceBlockDeviceMappingsEbs {
  /**
  * Indicates whether the EBS volume is deleted on instance termination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the volume should be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#encrypted Ec2Instance#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
  /**
  * The number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#iops Ec2Instance#iops}
  */
  readonly iops?: number;
  /**
  * The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption. If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#kms_key_id Ec2Instance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The ID of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#snapshot_id Ec2Instance#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#volume_size Ec2Instance#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * The volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#volume_type Ec2Instance#volume_type}
  */
  readonly volumeType?: string;
}

export function ec2InstanceBlockDeviceMappingsEbsToTerraform(struct?: Ec2InstanceBlockDeviceMappingsEbs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    iops: cdktn.numberToTerraform(struct!.iops),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
    volume_size: cdktn.numberToTerraform(struct!.volumeSize),
    volume_type: cdktn.stringToTerraform(struct!.volumeType),
  }
}


export function ec2InstanceBlockDeviceMappingsEbsToHclTerraform(struct?: Ec2InstanceBlockDeviceMappingsEbs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_on_termination: {
      value: cdktn.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktn.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size: {
      value: cdktn.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktn.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceBlockDeviceMappingsEbsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceBlockDeviceMappingsEbs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceBlockDeviceMappingsEbs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteOnTermination = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteOnTermination = value.deleteOnTermination;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktn.IResolvable;
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktn.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktn.IResolvable;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktn.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number;
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string;
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number;
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string;
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface Ec2InstanceBlockDeviceMappings {
  /**
  * The device name (for example, /dev/sdh or xvdh).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#device_name Ec2Instance#device_name}
  */
  readonly deviceName?: string;
  /**
  * Parameters used to automatically set up EBS volumes when the instance is launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ebs Ec2Instance#ebs}
  */
  readonly ebs?: Ec2InstanceBlockDeviceMappingsEbs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#no_device Ec2Instance#no_device}
  */
  readonly noDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#virtual_name Ec2Instance#virtual_name}
  */
  readonly virtualName?: string;
}

export function ec2InstanceBlockDeviceMappingsToTerraform(struct?: Ec2InstanceBlockDeviceMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    device_name: cdktn.stringToTerraform(struct!.deviceName),
    ebs: ec2InstanceBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    no_device: cdktn.stringToTerraform(struct!.noDevice),
    virtual_name: cdktn.stringToTerraform(struct!.virtualName),
  }
}


export function ec2InstanceBlockDeviceMappingsToHclTerraform(struct?: Ec2InstanceBlockDeviceMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    device_name: {
      value: cdktn.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs: {
      value: ec2InstanceBlockDeviceMappingsEbsToHclTerraform(struct!.ebs),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2InstanceBlockDeviceMappingsEbs",
    },
    no_device: {
      value: cdktn.stringToHclTerraform(struct!.noDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_name: {
      value: cdktn.stringToHclTerraform(struct!.virtualName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceBlockDeviceMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceBlockDeviceMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._ebs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs?.internalValue;
    }
    if (this._noDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDevice = this._noDevice;
    }
    if (this._virtualName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualName = this._virtualName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceBlockDeviceMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._ebs.internalValue = undefined;
      this._noDevice = undefined;
      this._virtualName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._ebs.internalValue = value.ebs;
      this._noDevice = value.noDevice;
      this._virtualName = value.virtualName;
    }
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string;
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // ebs - computed: true, optional: true, required: false
  private _ebs = new Ec2InstanceBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: Ec2InstanceBlockDeviceMappingsEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }

  // no_device - computed: true, optional: true, required: false
  private _noDevice?: string;
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }
  public set noDevice(value: string) {
    this._noDevice = value;
  }
  public resetNoDevice() {
    this._noDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDeviceInput() {
    return this._noDevice;
  }

  // virtual_name - computed: true, optional: true, required: false
  private _virtualName?: string;
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
  public set virtualName(value: string) {
    this._virtualName = value;
  }
  public resetVirtualName() {
    this._virtualName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNameInput() {
    return this._virtualName;
  }
}

export class Ec2InstanceBlockDeviceMappingsList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceBlockDeviceMappings[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceBlockDeviceMappingsOutputReference {
    return new Ec2InstanceBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceCpuOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}
  */
  readonly coreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}
  */
  readonly threadsPerCore?: number;
}

export function ec2InstanceCpuOptionsToTerraform(struct?: Ec2InstanceCpuOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    core_count: cdktn.numberToTerraform(struct!.coreCount),
    threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
  }
}


export function ec2InstanceCpuOptionsToHclTerraform(struct?: Ec2InstanceCpuOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    core_count: {
      value: cdktn.numberToHclTerraform(struct!.coreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threads_per_core: {
      value: cdktn.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceCpuOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceCpuOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreCount = this._coreCount;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceCpuOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreCount = undefined;
      this._threadsPerCore = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreCount = value.coreCount;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // core_count - computed: true, optional: true, required: false
  private _coreCount?: number;
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // threads_per_core - computed: true, optional: true, required: false
  private _threadsPerCore?: number;
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  public resetThreadsPerCore() {
    this._threadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface Ec2InstanceCreditSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}
  */
  readonly cpuCredits?: string;
}

export function ec2InstanceCreditSpecificationToTerraform(struct?: Ec2InstanceCreditSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu_credits: cdktn.stringToTerraform(struct!.cpuCredits),
  }
}


export function ec2InstanceCreditSpecificationToHclTerraform(struct?: Ec2InstanceCreditSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu_credits: {
      value: cdktn.stringToHclTerraform(struct!.cpuCredits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceCreditSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceCreditSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCredits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCredits = this._cpuCredits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceCreditSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuCredits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuCredits = value.cpuCredits;
    }
  }

  // cpu_credits - computed: true, optional: true, required: false
  private _cpuCredits?: string;
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
  public set cpuCredits(value: string) {
    this._cpuCredits = value;
  }
  public resetCpuCredits() {
    this._cpuCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCreditsInput() {
    return this._cpuCredits;
  }
}
export interface Ec2InstanceElasticGpuSpecifications {
  /**
  * The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#type Ec2Instance#type}
  */
  readonly type?: string;
}

export function ec2InstanceElasticGpuSpecificationsToTerraform(struct?: Ec2InstanceElasticGpuSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ec2InstanceElasticGpuSpecificationsToHclTerraform(struct?: Ec2InstanceElasticGpuSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceElasticGpuSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceElasticGpuSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceElasticGpuSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Ec2InstanceElasticGpuSpecificationsList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceElasticGpuSpecifications[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceElasticGpuSpecificationsOutputReference {
    return new Ec2InstanceElasticGpuSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceElasticInferenceAccelerators {
  /**
  * The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#count Ec2Instance#count}
  */
  readonly count?: number;
  /**
  * The type of elastic inference accelerator. Amazon Elastic Inference is no longer available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#type Ec2Instance#type}
  */
  readonly type?: string;
}

export function ec2InstanceElasticInferenceAcceleratorsToTerraform(struct?: Ec2InstanceElasticInferenceAccelerators | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ec2InstanceElasticInferenceAcceleratorsToHclTerraform(struct?: Ec2InstanceElasticInferenceAccelerators | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceElasticInferenceAcceleratorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceElasticInferenceAccelerators | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceElasticInferenceAccelerators | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number;
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Ec2InstanceElasticInferenceAcceleratorsList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceElasticInferenceAccelerators[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceElasticInferenceAcceleratorsOutputReference {
    return new Ec2InstanceElasticInferenceAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceEnclaveOptions {
  /**
  * If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#enabled Ec2Instance#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function ec2InstanceEnclaveOptionsToTerraform(struct?: Ec2InstanceEnclaveOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function ec2InstanceEnclaveOptionsToHclTerraform(struct?: Ec2InstanceEnclaveOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceEnclaveOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceEnclaveOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceEnclaveOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface Ec2InstanceHibernationOptions {
  /**
  * If you set this parameter to true, your instance is enabled for hibernation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#configured Ec2Instance#configured}
  */
  readonly configured?: boolean | cdktn.IResolvable;
}

export function ec2InstanceHibernationOptionsToTerraform(struct?: Ec2InstanceHibernationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configured: cdktn.booleanToTerraform(struct!.configured),
  }
}


export function ec2InstanceHibernationOptionsToHclTerraform(struct?: Ec2InstanceHibernationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configured: {
      value: cdktn.booleanToHclTerraform(struct!.configured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceHibernationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceHibernationOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configured !== undefined) {
      hasAnyValues = true;
      internalValueResult.configured = this._configured;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceHibernationOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configured = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configured = value.configured;
    }
  }

  // configured - computed: true, optional: true, required: false
  private _configured?: boolean | cdktn.IResolvable;
  public get configured() {
    return this.getBooleanAttribute('configured');
  }
  public set configured(value: boolean | cdktn.IResolvable) {
    this._configured = value;
  }
  public resetConfigured() {
    this._configured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredInput() {
    return this._configured;
  }
}
export interface Ec2InstanceIpv6Addresses {
  /**
  * The IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}
  */
  readonly ipv6Address?: string;
}

export function ec2InstanceIpv6AddressesToTerraform(struct?: Ec2InstanceIpv6Addresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ipv_6_address: cdktn.stringToTerraform(struct!.ipv6Address),
  }
}


export function ec2InstanceIpv6AddressesToHclTerraform(struct?: Ec2InstanceIpv6Addresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ipv_6_address: {
      value: cdktn.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceIpv6AddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceIpv6Addresses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceIpv6Addresses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
    }
  }

  // ipv_6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string;
  public get ipv6Address() {
    return this.getStringAttribute('ipv_6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }
}

export class Ec2InstanceIpv6AddressesList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceIpv6Addresses[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceIpv6AddressesOutputReference {
    return new Ec2InstanceIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceLaunchTemplate {
  /**
  * The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#launch_template_id Ec2Instance#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#launch_template_name Ec2Instance#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * The version number of the launch template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#version Ec2Instance#version}
  */
  readonly version?: string;
}

export function ec2InstanceLaunchTemplateToTerraform(struct?: Ec2InstanceLaunchTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function ec2InstanceLaunchTemplateToHclTerraform(struct?: Ec2InstanceLaunchTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_id: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceLaunchTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceLaunchTemplate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceLaunchTemplate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._version = value.version;
    }
  }

  // launch_template_id - computed: true, optional: true, required: false
  private _launchTemplateId?: string;
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: true, optional: true, required: false
  private _launchTemplateName?: string;
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface Ec2InstanceLicenseSpecifications {
  /**
  * The Amazon Resource Name (ARN) of the license configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#license_configuration_arn Ec2Instance#license_configuration_arn}
  */
  readonly licenseConfigurationArn?: string;
}

export function ec2InstanceLicenseSpecificationsToTerraform(struct?: Ec2InstanceLicenseSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    license_configuration_arn: cdktn.stringToTerraform(struct!.licenseConfigurationArn),
  }
}


export function ec2InstanceLicenseSpecificationsToHclTerraform(struct?: Ec2InstanceLicenseSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    license_configuration_arn: {
      value: cdktn.stringToHclTerraform(struct!.licenseConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceLicenseSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceLicenseSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseConfigurationArn = this._licenseConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceLicenseSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseConfigurationArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseConfigurationArn = value.licenseConfigurationArn;
    }
  }

  // license_configuration_arn - computed: true, optional: true, required: false
  private _licenseConfigurationArn?: string;
  public get licenseConfigurationArn() {
    return this.getStringAttribute('license_configuration_arn');
  }
  public set licenseConfigurationArn(value: string) {
    this._licenseConfigurationArn = value;
  }
  public resetLicenseConfigurationArn() {
    this._licenseConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConfigurationArnInput() {
    return this._licenseConfigurationArn;
  }
}

export class Ec2InstanceLicenseSpecificationsList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceLicenseSpecifications[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceLicenseSpecificationsOutputReference {
    return new Ec2InstanceLicenseSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceMetadataOptions {
  /**
  * Enables or disables the HTTP metadata endpoint on your instances. If you specify a value of disabled, you cannot access your instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#http_endpoint Ec2Instance#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Enables or disables the IPv6 endpoint for the instance metadata service. To use this option, the instance must be a Nitro-based instance launched in a subnet that supports IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#http_protocol_ipv_6 Ec2Instance#http_protocol_ipv_6}
  */
  readonly httpProtocolIpv6?: string;
  /**
  * The number of network hops that the metadata token can travel. Maximum is 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#http_put_response_hop_limit Ec2Instance#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Indicates whether IMDSv2 is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#http_tokens Ec2Instance#http_tokens}
  */
  readonly httpTokens?: string;
  /**
  * Indicates whether tags from the instance are propagated to the EBS volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#instance_metadata_tags Ec2Instance#instance_metadata_tags}
  */
  readonly instanceMetadataTags?: string;
}

export function ec2InstanceMetadataOptionsToTerraform(struct?: Ec2InstanceMetadataOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_endpoint: cdktn.stringToTerraform(struct!.httpEndpoint),
    http_protocol_ipv_6: cdktn.stringToTerraform(struct!.httpProtocolIpv6),
    http_put_response_hop_limit: cdktn.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktn.stringToTerraform(struct!.httpTokens),
    instance_metadata_tags: cdktn.stringToTerraform(struct!.instanceMetadataTags),
  }
}


export function ec2InstanceMetadataOptionsToHclTerraform(struct?: Ec2InstanceMetadataOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.httpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_protocol_ipv_6: {
      value: cdktn.stringToHclTerraform(struct!.httpProtocolIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_put_response_hop_limit: {
      value: cdktn.numberToHclTerraform(struct!.httpPutResponseHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_tokens: {
      value: cdktn.stringToHclTerraform(struct!.httpTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_metadata_tags: {
      value: cdktn.stringToHclTerraform(struct!.instanceMetadataTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceMetadataOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceMetadataOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpoint = this._httpEndpoint;
    }
    if (this._httpProtocolIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocolIpv6 = this._httpProtocolIpv6;
    }
    if (this._httpPutResponseHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
    }
    if (this._httpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTokens = this._httpTokens;
    }
    if (this._instanceMetadataTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceMetadataTags = this._instanceMetadataTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceMetadataOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpEndpoint = undefined;
      this._httpProtocolIpv6 = undefined;
      this._httpPutResponseHopLimit = undefined;
      this._httpTokens = undefined;
      this._instanceMetadataTags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpEndpoint = value.httpEndpoint;
      this._httpProtocolIpv6 = value.httpProtocolIpv6;
      this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
      this._httpTokens = value.httpTokens;
      this._instanceMetadataTags = value.instanceMetadataTags;
    }
  }

  // http_endpoint - computed: true, optional: true, required: false
  private _httpEndpoint?: string;
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }
  public set httpEndpoint(value: string) {
    this._httpEndpoint = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint;
  }

  // http_protocol_ipv_6 - computed: true, optional: true, required: false
  private _httpProtocolIpv6?: string;
  public get httpProtocolIpv6() {
    return this.getStringAttribute('http_protocol_ipv_6');
  }
  public set httpProtocolIpv6(value: string) {
    this._httpProtocolIpv6 = value;
  }
  public resetHttpProtocolIpv6() {
    this._httpProtocolIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolIpv6Input() {
    return this._httpProtocolIpv6;
  }

  // http_put_response_hop_limit - computed: true, optional: true, required: false
  private _httpPutResponseHopLimit?: number;
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }
  public set httpPutResponseHopLimit(value: number) {
    this._httpPutResponseHopLimit = value;
  }
  public resetHttpPutResponseHopLimit() {
    this._httpPutResponseHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutResponseHopLimitInput() {
    return this._httpPutResponseHopLimit;
  }

  // http_tokens - computed: true, optional: true, required: false
  private _httpTokens?: string;
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  public resetHttpTokens() {
    this._httpTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
  }

  // instance_metadata_tags - computed: true, optional: true, required: false
  private _instanceMetadataTags?: string;
  public get instanceMetadataTags() {
    return this.getStringAttribute('instance_metadata_tags');
  }
  public set instanceMetadataTags(value: string) {
    this._instanceMetadataTags = value;
  }
  public resetInstanceMetadataTags() {
    this._instanceMetadataTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMetadataTagsInput() {
    return this._instanceMetadataTags;
  }
}
export interface Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification {
  /**
  * Indicates whether UDP traffic uses ENA Express for your instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ena_srd_udp_enabled Ec2Instance#ena_srd_udp_enabled}
  */
  readonly enaSrdUdpEnabled?: boolean | cdktn.IResolvable;
}

export function ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationToTerraform(struct?: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ena_srd_udp_enabled: cdktn.booleanToTerraform(struct!.enaSrdUdpEnabled),
  }
}


export function ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationToHclTerraform(struct?: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ena_srd_udp_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enaSrdUdpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enaSrdUdpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enaSrdUdpEnabled = this._enaSrdUdpEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enaSrdUdpEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enaSrdUdpEnabled = value.enaSrdUdpEnabled;
    }
  }

  // ena_srd_udp_enabled - computed: true, optional: true, required: false
  private _enaSrdUdpEnabled?: boolean | cdktn.IResolvable;
  public get enaSrdUdpEnabled() {
    return this.getBooleanAttribute('ena_srd_udp_enabled');
  }
  public set enaSrdUdpEnabled(value: boolean | cdktn.IResolvable) {
    this._enaSrdUdpEnabled = value;
  }
  public resetEnaSrdUdpEnabled() {
    this._enaSrdUdpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSrdUdpEnabledInput() {
    return this._enaSrdUdpEnabled;
  }
}
export interface Ec2InstanceNetworkInterfacesEnaSrdSpecification {
  /**
  * Specifies whether ENA Express is enabled for the network interface when you launch an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ena_srd_enabled Ec2Instance#ena_srd_enabled}
  */
  readonly enaSrdEnabled?: boolean | cdktn.IResolvable;
  /**
  * Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ena_srd_udp_specification Ec2Instance#ena_srd_udp_specification}
  */
  readonly enaSrdUdpSpecification?: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification;
}

export function ec2InstanceNetworkInterfacesEnaSrdSpecificationToTerraform(struct?: Ec2InstanceNetworkInterfacesEnaSrdSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ena_srd_enabled: cdktn.booleanToTerraform(struct!.enaSrdEnabled),
    ena_srd_udp_specification: ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationToTerraform(struct!.enaSrdUdpSpecification),
  }
}


export function ec2InstanceNetworkInterfacesEnaSrdSpecificationToHclTerraform(struct?: Ec2InstanceNetworkInterfacesEnaSrdSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ena_srd_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enaSrdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ena_srd_udp_specification: {
      value: ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationToHclTerraform(struct!.enaSrdUdpSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceNetworkInterfacesEnaSrdSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enaSrdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enaSrdEnabled = this._enaSrdEnabled;
    }
    if (this._enaSrdUdpSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enaSrdUdpSpecification = this._enaSrdUdpSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceNetworkInterfacesEnaSrdSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enaSrdEnabled = undefined;
      this._enaSrdUdpSpecification.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enaSrdEnabled = value.enaSrdEnabled;
      this._enaSrdUdpSpecification.internalValue = value.enaSrdUdpSpecification;
    }
  }

  // ena_srd_enabled - computed: true, optional: true, required: false
  private _enaSrdEnabled?: boolean | cdktn.IResolvable;
  public get enaSrdEnabled() {
    return this.getBooleanAttribute('ena_srd_enabled');
  }
  public set enaSrdEnabled(value: boolean | cdktn.IResolvable) {
    this._enaSrdEnabled = value;
  }
  public resetEnaSrdEnabled() {
    this._enaSrdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSrdEnabledInput() {
    return this._enaSrdEnabled;
  }

  // ena_srd_udp_specification - computed: true, optional: true, required: false
  private _enaSrdUdpSpecification = new Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(this, "ena_srd_udp_specification");
  public get enaSrdUdpSpecification() {
    return this._enaSrdUdpSpecification;
  }
  public putEnaSrdUdpSpecification(value: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification) {
    this._enaSrdUdpSpecification.internalValue = value;
  }
  public resetEnaSrdUdpSpecification() {
    this._enaSrdUdpSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSrdUdpSpecificationInput() {
    return this._enaSrdUdpSpecification.internalValue;
  }
}
export interface Ec2InstanceNetworkInterfacesIpv6Addresses {
  /**
  * The IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}
  */
  readonly ipv6Address?: string;
}

export function ec2InstanceNetworkInterfacesIpv6AddressesToTerraform(struct?: Ec2InstanceNetworkInterfacesIpv6Addresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ipv_6_address: cdktn.stringToTerraform(struct!.ipv6Address),
  }
}


export function ec2InstanceNetworkInterfacesIpv6AddressesToHclTerraform(struct?: Ec2InstanceNetworkInterfacesIpv6Addresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ipv_6_address: {
      value: cdktn.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceNetworkInterfacesIpv6Addresses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceNetworkInterfacesIpv6Addresses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
    }
  }

  // ipv_6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string;
  public get ipv6Address() {
    return this.getStringAttribute('ipv_6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }
}

export class Ec2InstanceNetworkInterfacesIpv6AddressesList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceNetworkInterfacesIpv6Addresses[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference {
    return new Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceNetworkInterfacesPrivateIpAddresses {
  /**
  * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#primary Ec2Instance#primary}
  */
  readonly primary?: boolean | cdktn.IResolvable;
  /**
  * The private IPv4 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}
  */
  readonly privateIpAddress?: string;
}

export function ec2InstanceNetworkInterfacesPrivateIpAddressesToTerraform(struct?: Ec2InstanceNetworkInterfacesPrivateIpAddresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary: cdktn.booleanToTerraform(struct!.primary),
    private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
  }
}


export function ec2InstanceNetworkInterfacesPrivateIpAddressesToHclTerraform(struct?: Ec2InstanceNetworkInterfacesPrivateIpAddresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    primary: {
      value: cdktn.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_ip_address: {
      value: cdktn.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceNetworkInterfacesPrivateIpAddresses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceNetworkInterfacesPrivateIpAddresses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
      this._privateIpAddress = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
      this._privateIpAddress = value.privateIpAddress;
    }
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: boolean | cdktn.IResolvable;
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktn.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string;
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }
}

export class Ec2InstanceNetworkInterfacesPrivateIpAddressesList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceNetworkInterfacesPrivateIpAddresses[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference {
    return new Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceNetworkInterfaces {
  /**
  * Not currently supported by AWS CloudFormation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#associate_carrier_ip_address Ec2Instance#associate_carrier_ip_address}
  */
  readonly associateCarrierIpAddress?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#associate_public_ip_address Ec2Instance#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktn.IResolvable;
  /**
  * If set to true, the interface is deleted when the instance is terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktn.IResolvable;
  /**
  * The description of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#description Ec2Instance#description}
  */
  readonly description?: string;
  /**
  * The position of the network interface in the attachment order. A primary network interface has a device index of 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#device_index Ec2Instance#device_index}
  */
  readonly deviceIndex?: string;
  /**
  * Specifies the ENA Express settings for the network interface that's attached to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ena_srd_specification Ec2Instance#ena_srd_specification}
  */
  readonly enaSrdSpecification?: Ec2InstanceNetworkInterfacesEnaSrdSpecification;
  /**
  * The IDs of the security groups for the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#group_set Ec2Instance#group_set}
  */
  readonly groupSet?: string[];
  /**
  * A number of IPv6 addresses to assign to the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * The IPv6 addresses associated with the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}
  */
  readonly ipv6Addresses?: Ec2InstanceNetworkInterfacesIpv6Addresses[] | cdktn.IResolvable;
  /**
  * The ID of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#network_interface_id Ec2Instance#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * The private IPv4 address of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * One or more private IPv4 addresses to assign to the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#private_ip_addresses Ec2Instance#private_ip_addresses}
  */
  readonly privateIpAddresses?: Ec2InstanceNetworkInterfacesPrivateIpAddresses[] | cdktn.IResolvable;
  /**
  * The number of secondary private IPv4 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#secondary_private_ip_address_count Ec2Instance#secondary_private_ip_address_count}
  */
  readonly secondaryPrivateIpAddressCount?: number;
  /**
  * The ID of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}
  */
  readonly subnetId?: string;
}

export function ec2InstanceNetworkInterfacesToTerraform(struct?: Ec2InstanceNetworkInterfaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    associate_carrier_ip_address: cdktn.booleanToTerraform(struct!.associateCarrierIpAddress),
    associate_public_ip_address: cdktn.booleanToTerraform(struct!.associatePublicIpAddress),
    delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
    description: cdktn.stringToTerraform(struct!.description),
    device_index: cdktn.stringToTerraform(struct!.deviceIndex),
    ena_srd_specification: ec2InstanceNetworkInterfacesEnaSrdSpecificationToTerraform(struct!.enaSrdSpecification),
    group_set: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupSet),
    ipv_6_address_count: cdktn.numberToTerraform(struct!.ipv6AddressCount),
    ipv_6_addresses: cdktn.listMapper(ec2InstanceNetworkInterfacesIpv6AddressesToTerraform, false)(struct!.ipv6Addresses),
    network_interface_id: cdktn.stringToTerraform(struct!.networkInterfaceId),
    private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
    private_ip_addresses: cdktn.listMapper(ec2InstanceNetworkInterfacesPrivateIpAddressesToTerraform, false)(struct!.privateIpAddresses),
    secondary_private_ip_address_count: cdktn.numberToTerraform(struct!.secondaryPrivateIpAddressCount),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function ec2InstanceNetworkInterfacesToHclTerraform(struct?: Ec2InstanceNetworkInterfaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    associate_carrier_ip_address: {
      value: cdktn.booleanToHclTerraform(struct!.associateCarrierIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    associate_public_ip_address: {
      value: cdktn.booleanToHclTerraform(struct!.associatePublicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_on_termination: {
      value: cdktn.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_index: {
      value: cdktn.stringToHclTerraform(struct!.deviceIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ena_srd_specification: {
      value: ec2InstanceNetworkInterfacesEnaSrdSpecificationToHclTerraform(struct!.enaSrdSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2InstanceNetworkInterfacesEnaSrdSpecification",
    },
    group_set: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupSet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv_6_address_count: {
      value: cdktn.numberToHclTerraform(struct!.ipv6AddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv_6_addresses: {
      value: cdktn.listMapperHcl(ec2InstanceNetworkInterfacesIpv6AddressesToHclTerraform, false)(struct!.ipv6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2InstanceNetworkInterfacesIpv6AddressesList",
    },
    network_interface_id: {
      value: cdktn.stringToHclTerraform(struct!.networkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address: {
      value: cdktn.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_addresses: {
      value: cdktn.listMapperHcl(ec2InstanceNetworkInterfacesPrivateIpAddressesToHclTerraform, false)(struct!.privateIpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2InstanceNetworkInterfacesPrivateIpAddressesList",
    },
    secondary_private_ip_address_count: {
      value: cdktn.numberToHclTerraform(struct!.secondaryPrivateIpAddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceNetworkInterfacesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceNetworkInterfaces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associateCarrierIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associateCarrierIpAddress = this._associateCarrierIpAddress;
    }
    if (this._associatePublicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
    }
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIndex = this._deviceIndex;
    }
    if (this._enaSrdSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enaSrdSpecification = this._enaSrdSpecification?.internalValue;
    }
    if (this._groupSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSet = this._groupSet;
    }
    if (this._ipv6AddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
    }
    if (this._ipv6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addresses = this._ipv6Addresses?.internalValue;
    }
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._privateIpAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddresses = this._privateIpAddresses?.internalValue;
    }
    if (this._secondaryPrivateIpAddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPrivateIpAddressCount = this._secondaryPrivateIpAddressCount;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceNetworkInterfaces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associateCarrierIpAddress = undefined;
      this._associatePublicIpAddress = undefined;
      this._deleteOnTermination = undefined;
      this._description = undefined;
      this._deviceIndex = undefined;
      this._enaSrdSpecification.internalValue = undefined;
      this._groupSet = undefined;
      this._ipv6AddressCount = undefined;
      this._ipv6Addresses.internalValue = undefined;
      this._networkInterfaceId = undefined;
      this._privateIpAddress = undefined;
      this._privateIpAddresses.internalValue = undefined;
      this._secondaryPrivateIpAddressCount = undefined;
      this._subnetId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associateCarrierIpAddress = value.associateCarrierIpAddress;
      this._associatePublicIpAddress = value.associatePublicIpAddress;
      this._deleteOnTermination = value.deleteOnTermination;
      this._description = value.description;
      this._deviceIndex = value.deviceIndex;
      this._enaSrdSpecification.internalValue = value.enaSrdSpecification;
      this._groupSet = value.groupSet;
      this._ipv6AddressCount = value.ipv6AddressCount;
      this._ipv6Addresses.internalValue = value.ipv6Addresses;
      this._networkInterfaceId = value.networkInterfaceId;
      this._privateIpAddress = value.privateIpAddress;
      this._privateIpAddresses.internalValue = value.privateIpAddresses;
      this._secondaryPrivateIpAddressCount = value.secondaryPrivateIpAddressCount;
      this._subnetId = value.subnetId;
    }
  }

  // associate_carrier_ip_address - computed: true, optional: true, required: false
  private _associateCarrierIpAddress?: boolean | cdktn.IResolvable;
  public get associateCarrierIpAddress() {
    return this.getBooleanAttribute('associate_carrier_ip_address');
  }
  public set associateCarrierIpAddress(value: boolean | cdktn.IResolvable) {
    this._associateCarrierIpAddress = value;
  }
  public resetAssociateCarrierIpAddress() {
    this._associateCarrierIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateCarrierIpAddressInput() {
    return this._associateCarrierIpAddress;
  }

  // associate_public_ip_address - computed: true, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktn.IResolvable;
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktn.IResolvable) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktn.IResolvable;
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktn.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
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

  // device_index - computed: true, optional: true, required: false
  private _deviceIndex?: string;
  public get deviceIndex() {
    return this.getStringAttribute('device_index');
  }
  public set deviceIndex(value: string) {
    this._deviceIndex = value;
  }
  public resetDeviceIndex() {
    this._deviceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIndexInput() {
    return this._deviceIndex;
  }

  // ena_srd_specification - computed: true, optional: true, required: false
  private _enaSrdSpecification = new Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference(this, "ena_srd_specification");
  public get enaSrdSpecification() {
    return this._enaSrdSpecification;
  }
  public putEnaSrdSpecification(value: Ec2InstanceNetworkInterfacesEnaSrdSpecification) {
    this._enaSrdSpecification.internalValue = value;
  }
  public resetEnaSrdSpecification() {
    this._enaSrdSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSrdSpecificationInput() {
    return this._enaSrdSpecification.internalValue;
  }

  // group_set - computed: true, optional: true, required: false
  private _groupSet?: string[];
  public get groupSet() {
    return this.getListAttribute('group_set');
  }
  public set groupSet(value: string[]) {
    this._groupSet = value;
  }
  public resetGroupSet() {
    this._groupSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSetInput() {
    return this._groupSet;
  }

  // ipv_6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number;
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv_6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // ipv_6_addresses - computed: true, optional: true, required: false
  private _ipv6Addresses = new Ec2InstanceNetworkInterfacesIpv6AddressesList(this, "ipv_6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: Ec2InstanceNetworkInterfacesIpv6Addresses[] | cdktn.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
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

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string;
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_ip_addresses - computed: true, optional: true, required: false
  private _privateIpAddresses = new Ec2InstanceNetworkInterfacesPrivateIpAddressesList(this, "private_ip_addresses", false);
  public get privateIpAddresses() {
    return this._privateIpAddresses;
  }
  public putPrivateIpAddresses(value: Ec2InstanceNetworkInterfacesPrivateIpAddresses[] | cdktn.IResolvable) {
    this._privateIpAddresses.internalValue = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses.internalValue;
  }

  // secondary_private_ip_address_count - computed: true, optional: true, required: false
  private _secondaryPrivateIpAddressCount?: number;
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }
  public set secondaryPrivateIpAddressCount(value: number) {
    this._secondaryPrivateIpAddressCount = value;
  }
  public resetSecondaryPrivateIpAddressCount() {
    this._secondaryPrivateIpAddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpAddressCountInput() {
    return this._secondaryPrivateIpAddressCount;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class Ec2InstanceNetworkInterfacesList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceNetworkInterfaces[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceNetworkInterfacesOutputReference {
    return new Ec2InstanceNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstancePrivateDnsNameOptions {
  /**
  * Indicates whether to respond to DNS queries for instance hostnames with DNS A records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#enable_resource_name_dns_a_record Ec2Instance#enable_resource_name_dns_a_record}
  */
  readonly enableResourceNameDnsARecord?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#enable_resource_name_dns_aaaa_record Ec2Instance#enable_resource_name_dns_aaaa_record}
  */
  readonly enableResourceNameDnsAaaaRecord?: boolean | cdktn.IResolvable;
  /**
  * The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#hostname_type Ec2Instance#hostname_type}
  */
  readonly hostnameType?: string;
}

export function ec2InstancePrivateDnsNameOptionsToTerraform(struct?: Ec2InstancePrivateDnsNameOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_resource_name_dns_a_record: cdktn.booleanToTerraform(struct!.enableResourceNameDnsARecord),
    enable_resource_name_dns_aaaa_record: cdktn.booleanToTerraform(struct!.enableResourceNameDnsAaaaRecord),
    hostname_type: cdktn.stringToTerraform(struct!.hostnameType),
  }
}


export function ec2InstancePrivateDnsNameOptionsToHclTerraform(struct?: Ec2InstancePrivateDnsNameOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_resource_name_dns_a_record: {
      value: cdktn.booleanToHclTerraform(struct!.enableResourceNameDnsARecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_resource_name_dns_aaaa_record: {
      value: cdktn.booleanToHclTerraform(struct!.enableResourceNameDnsAaaaRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname_type: {
      value: cdktn.stringToHclTerraform(struct!.hostnameType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstancePrivateDnsNameOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstancePrivateDnsNameOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableResourceNameDnsARecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceNameDnsARecord = this._enableResourceNameDnsARecord;
    }
    if (this._enableResourceNameDnsAaaaRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceNameDnsAaaaRecord = this._enableResourceNameDnsAaaaRecord;
    }
    if (this._hostnameType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameType = this._hostnameType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstancePrivateDnsNameOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableResourceNameDnsARecord = undefined;
      this._enableResourceNameDnsAaaaRecord = undefined;
      this._hostnameType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableResourceNameDnsARecord = value.enableResourceNameDnsARecord;
      this._enableResourceNameDnsAaaaRecord = value.enableResourceNameDnsAaaaRecord;
      this._hostnameType = value.hostnameType;
    }
  }

  // enable_resource_name_dns_a_record - computed: true, optional: true, required: false
  private _enableResourceNameDnsARecord?: boolean | cdktn.IResolvable;
  public get enableResourceNameDnsARecord() {
    return this.getBooleanAttribute('enable_resource_name_dns_a_record');
  }
  public set enableResourceNameDnsARecord(value: boolean | cdktn.IResolvable) {
    this._enableResourceNameDnsARecord = value;
  }
  public resetEnableResourceNameDnsARecord() {
    this._enableResourceNameDnsARecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceNameDnsARecordInput() {
    return this._enableResourceNameDnsARecord;
  }

  // enable_resource_name_dns_aaaa_record - computed: true, optional: true, required: false
  private _enableResourceNameDnsAaaaRecord?: boolean | cdktn.IResolvable;
  public get enableResourceNameDnsAaaaRecord() {
    return this.getBooleanAttribute('enable_resource_name_dns_aaaa_record');
  }
  public set enableResourceNameDnsAaaaRecord(value: boolean | cdktn.IResolvable) {
    this._enableResourceNameDnsAaaaRecord = value;
  }
  public resetEnableResourceNameDnsAaaaRecord() {
    this._enableResourceNameDnsAaaaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceNameDnsAaaaRecordInput() {
    return this._enableResourceNameDnsAaaaRecord;
  }

  // hostname_type - computed: true, optional: true, required: false
  private _hostnameType?: string;
  public get hostnameType() {
    return this.getStringAttribute('hostname_type');
  }
  public set hostnameType(value: string) {
    this._hostnameType = value;
  }
  public resetHostnameType() {
    this._hostnameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameTypeInput() {
    return this._hostnameType;
  }
}
export interface Ec2InstanceSsmAssociationsAssociationParameters {
  /**
  * The name of an input parameter that is in the associated SSM document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#key Ec2Instance#key}
  */
  readonly key?: string;
  /**
  * The value of an input parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#value Ec2Instance#value}
  */
  readonly value?: string[];
}

export function ec2InstanceSsmAssociationsAssociationParametersToTerraform(struct?: Ec2InstanceSsmAssociationsAssociationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
  }
}


export function ec2InstanceSsmAssociationsAssociationParametersToHclTerraform(struct?: Ec2InstanceSsmAssociationsAssociationParameters | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceSsmAssociationsAssociationParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceSsmAssociationsAssociationParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2InstanceSsmAssociationsAssociationParameters | cdktn.IResolvable | undefined) {
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
  private _value?: string[];
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class Ec2InstanceSsmAssociationsAssociationParametersList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceSsmAssociationsAssociationParameters[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceSsmAssociationsAssociationParametersOutputReference {
    return new Ec2InstanceSsmAssociationsAssociationParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceSsmAssociations {
  /**
  * The input parameter values to use with the associated SSM document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#association_parameters Ec2Instance#association_parameters}
  */
  readonly associationParameters?: Ec2InstanceSsmAssociationsAssociationParameters[] | cdktn.IResolvable;
  /**
  * The name of an SSM document to associate with the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#document_name Ec2Instance#document_name}
  */
  readonly documentName?: string;
}

export function ec2InstanceSsmAssociationsToTerraform(struct?: Ec2InstanceSsmAssociations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    association_parameters: cdktn.listMapper(ec2InstanceSsmAssociationsAssociationParametersToTerraform, false)(struct!.associationParameters),
    document_name: cdktn.stringToTerraform(struct!.documentName),
  }
}


export function ec2InstanceSsmAssociationsToHclTerraform(struct?: Ec2InstanceSsmAssociations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    association_parameters: {
      value: cdktn.listMapperHcl(ec2InstanceSsmAssociationsAssociationParametersToHclTerraform, false)(struct!.associationParameters),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2InstanceSsmAssociationsAssociationParametersList",
    },
    document_name: {
      value: cdktn.stringToHclTerraform(struct!.documentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceSsmAssociationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceSsmAssociations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationParameters = this._associationParameters?.internalValue;
    }
    if (this._documentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentName = this._documentName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceSsmAssociations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associationParameters.internalValue = undefined;
      this._documentName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associationParameters.internalValue = value.associationParameters;
      this._documentName = value.documentName;
    }
  }

  // association_parameters - computed: true, optional: true, required: false
  private _associationParameters = new Ec2InstanceSsmAssociationsAssociationParametersList(this, "association_parameters", false);
  public get associationParameters() {
    return this._associationParameters;
  }
  public putAssociationParameters(value: Ec2InstanceSsmAssociationsAssociationParameters[] | cdktn.IResolvable) {
    this._associationParameters.internalValue = value;
  }
  public resetAssociationParameters() {
    this._associationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationParametersInput() {
    return this._associationParameters.internalValue;
  }

  // document_name - computed: true, optional: true, required: false
  private _documentName?: string;
  public get documentName() {
    return this.getStringAttribute('document_name');
  }
  public set documentName(value: string) {
    this._documentName = value;
  }
  public resetDocumentName() {
    this._documentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentNameInput() {
    return this._documentName;
  }
}

export class Ec2InstanceSsmAssociationsList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceSsmAssociations[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceSsmAssociationsOutputReference {
    return new Ec2InstanceSsmAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceState {
}

export function ec2InstanceStateToTerraform(struct?: Ec2InstanceState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2InstanceStateToHclTerraform(struct?: Ec2InstanceState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2InstanceStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2InstanceState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface Ec2InstanceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#key Ec2Instance#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#value Ec2Instance#value}
  */
  readonly value?: string;
}

export function ec2InstanceTagsToTerraform(struct?: Ec2InstanceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2InstanceTagsToHclTerraform(struct?: Ec2InstanceTags | cdktn.IResolvable): any {
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

export class Ec2InstanceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2InstanceTags | cdktn.IResolvable | undefined) {
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

export class Ec2InstanceTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceTagsOutputReference {
    return new Ec2InstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceVolumes {
  /**
  * The device name (for example, /dev/sdh or xvdh).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#device Ec2Instance#device}
  */
  readonly device?: string;
  /**
  * The ID of the EBS volume. The volume and instance must be within the same Availability Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#volume_id Ec2Instance#volume_id}
  */
  readonly volumeId?: string;
}

export function ec2InstanceVolumesToTerraform(struct?: Ec2InstanceVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    device: cdktn.stringToTerraform(struct!.device),
    volume_id: cdktn.stringToTerraform(struct!.volumeId),
  }
}


export function ec2InstanceVolumesToHclTerraform(struct?: Ec2InstanceVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    device: {
      value: cdktn.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._volumeId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._volumeId = value.volumeId;
    }
  }

  // device - computed: true, optional: true, required: false
  private _device?: string;
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string;
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}

export class Ec2InstanceVolumesList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceVolumes[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceVolumesOutputReference {
    return new Ec2InstanceVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance awscc_ec2_instance}
*/
export class Ec2Instance extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2Instance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2Instance to import
  * @param importFromId The id of the existing Ec2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_instance awscc_ec2_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2InstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2InstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_instance',
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
    this._additionalInfo = config.additionalInfo;
    this._affinity = config.affinity;
    this._availabilityZone = config.availabilityZone;
    this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
    this._cpuOptions.internalValue = config.cpuOptions;
    this._creditSpecification.internalValue = config.creditSpecification;
    this._disableApiTermination = config.disableApiTermination;
    this._ebsOptimized = config.ebsOptimized;
    this._elasticGpuSpecifications.internalValue = config.elasticGpuSpecifications;
    this._elasticInferenceAccelerators.internalValue = config.elasticInferenceAccelerators;
    this._enclaveOptions.internalValue = config.enclaveOptions;
    this._hibernationOptions.internalValue = config.hibernationOptions;
    this._hostId = config.hostId;
    this._hostResourceGroupArn = config.hostResourceGroupArn;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._imageId = config.imageId;
    this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
    this._instanceType = config.instanceType;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._ipv6Addresses.internalValue = config.ipv6Addresses;
    this._kernelId = config.kernelId;
    this._keyName = config.keyName;
    this._launchTemplate.internalValue = config.launchTemplate;
    this._licenseSpecifications.internalValue = config.licenseSpecifications;
    this._metadataOptions.internalValue = config.metadataOptions;
    this._monitoring = config.monitoring;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._placementGroupName = config.placementGroupName;
    this._privateDnsNameOptions.internalValue = config.privateDnsNameOptions;
    this._privateIpAddress = config.privateIpAddress;
    this._propagateTagsToVolumeOnCreation = config.propagateTagsToVolumeOnCreation;
    this._ramdiskId = config.ramdiskId;
    this._securityGroupIds = config.securityGroupIds;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._ssmAssociations.internalValue = config.ssmAssociations;
    this._subnetId = config.subnetId;
    this._tags.internalValue = config.tags;
    this._tenancy = config.tenancy;
    this._userData = config.userData;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_info - computed: true, optional: true, required: false
  private _additionalInfo?: string;
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }
  public set additionalInfo(value: string) {
    this._additionalInfo = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo;
  }

  // affinity - computed: true, optional: true, required: false
  private _affinity?: string;
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // block_device_mappings - computed: true, optional: true, required: false
  private _blockDeviceMappings = new Ec2InstanceBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }
  public putBlockDeviceMappings(value: Ec2InstanceBlockDeviceMappings[] | cdktn.IResolvable) {
    this._blockDeviceMappings.internalValue = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings.internalValue;
  }

  // cpu_options - computed: true, optional: true, required: false
  private _cpuOptions = new Ec2InstanceCpuOptionsOutputReference(this, "cpu_options");
  public get cpuOptions() {
    return this._cpuOptions;
  }
  public putCpuOptions(value: Ec2InstanceCpuOptions) {
    this._cpuOptions.internalValue = value;
  }
  public resetCpuOptions() {
    this._cpuOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOptionsInput() {
    return this._cpuOptions.internalValue;
  }

  // credit_specification - computed: true, optional: true, required: false
  private _creditSpecification = new Ec2InstanceCreditSpecificationOutputReference(this, "credit_specification");
  public get creditSpecification() {
    return this._creditSpecification;
  }
  public putCreditSpecification(value: Ec2InstanceCreditSpecification) {
    this._creditSpecification.internalValue = value;
  }
  public resetCreditSpecification() {
    this._creditSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditSpecificationInput() {
    return this._creditSpecification.internalValue;
  }

  // disable_api_termination - computed: true, optional: true, required: false
  private _disableApiTermination?: boolean | cdktn.IResolvable;
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean | cdktn.IResolvable) {
    this._disableApiTermination = value;
  }
  public resetDisableApiTermination() {
    this._disableApiTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiTerminationInput() {
    return this._disableApiTermination;
  }

  // ebs_optimized - computed: true, optional: true, required: false
  private _ebsOptimized?: boolean | cdktn.IResolvable;
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktn.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // elastic_gpu_specifications - computed: true, optional: true, required: false
  private _elasticGpuSpecifications = new Ec2InstanceElasticGpuSpecificationsList(this, "elastic_gpu_specifications", false);
  public get elasticGpuSpecifications() {
    return this._elasticGpuSpecifications;
  }
  public putElasticGpuSpecifications(value: Ec2InstanceElasticGpuSpecifications[] | cdktn.IResolvable) {
    this._elasticGpuSpecifications.internalValue = value;
  }
  public resetElasticGpuSpecifications() {
    this._elasticGpuSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticGpuSpecificationsInput() {
    return this._elasticGpuSpecifications.internalValue;
  }

  // elastic_inference_accelerators - computed: true, optional: true, required: false
  private _elasticInferenceAccelerators = new Ec2InstanceElasticInferenceAcceleratorsList(this, "elastic_inference_accelerators", false);
  public get elasticInferenceAccelerators() {
    return this._elasticInferenceAccelerators;
  }
  public putElasticInferenceAccelerators(value: Ec2InstanceElasticInferenceAccelerators[] | cdktn.IResolvable) {
    this._elasticInferenceAccelerators.internalValue = value;
  }
  public resetElasticInferenceAccelerators() {
    this._elasticInferenceAccelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticInferenceAcceleratorsInput() {
    return this._elasticInferenceAccelerators.internalValue;
  }

  // enclave_options - computed: true, optional: true, required: false
  private _enclaveOptions = new Ec2InstanceEnclaveOptionsOutputReference(this, "enclave_options");
  public get enclaveOptions() {
    return this._enclaveOptions;
  }
  public putEnclaveOptions(value: Ec2InstanceEnclaveOptions) {
    this._enclaveOptions.internalValue = value;
  }
  public resetEnclaveOptions() {
    this._enclaveOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enclaveOptionsInput() {
    return this._enclaveOptions.internalValue;
  }

  // hibernation_options - computed: true, optional: true, required: false
  private _hibernationOptions = new Ec2InstanceHibernationOptionsOutputReference(this, "hibernation_options");
  public get hibernationOptions() {
    return this._hibernationOptions;
  }
  public putHibernationOptions(value: Ec2InstanceHibernationOptions) {
    this._hibernationOptions.internalValue = value;
  }
  public resetHibernationOptions() {
    this._hibernationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationOptionsInput() {
    return this._hibernationOptions.internalValue;
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string;
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // host_resource_group_arn - computed: true, optional: true, required: false
  private _hostResourceGroupArn?: string;
  public get hostResourceGroupArn() {
    return this.getStringAttribute('host_resource_group_arn');
  }
  public set hostResourceGroupArn(value: string) {
    this._hostResourceGroupArn = value;
  }
  public resetHostResourceGroupArn() {
    this._hostResourceGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostResourceGroupArnInput() {
    return this._hostResourceGroupArn;
  }

  // iam_instance_profile - computed: true, optional: true, required: false
  private _iamInstanceProfile?: string;
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string;
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_initiated_shutdown_behavior - computed: true, optional: true, required: false
  private _instanceInitiatedShutdownBehavior?: string;
  public get instanceInitiatedShutdownBehavior() {
    return this.getStringAttribute('instance_initiated_shutdown_behavior');
  }
  public set instanceInitiatedShutdownBehavior(value: string) {
    this._instanceInitiatedShutdownBehavior = value;
  }
  public resetInstanceInitiatedShutdownBehavior() {
    this._instanceInitiatedShutdownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInitiatedShutdownBehaviorInput() {
    return this._instanceInitiatedShutdownBehavior;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // ipv_6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number;
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv_6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // ipv_6_addresses - computed: true, optional: true, required: false
  private _ipv6Addresses = new Ec2InstanceIpv6AddressesList(this, "ipv_6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: Ec2InstanceIpv6Addresses[] | cdktn.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // kernel_id - computed: true, optional: true, required: false
  private _kernelId?: string;
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }
  public set kernelId(value: string) {
    this._kernelId = value;
  }
  public resetKernelId() {
    this._kernelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelIdInput() {
    return this._kernelId;
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string;
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // launch_template - computed: true, optional: true, required: false
  private _launchTemplate = new Ec2InstanceLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: Ec2InstanceLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // license_specifications - computed: true, optional: true, required: false
  private _licenseSpecifications = new Ec2InstanceLicenseSpecificationsList(this, "license_specifications", false);
  public get licenseSpecifications() {
    return this._licenseSpecifications;
  }
  public putLicenseSpecifications(value: Ec2InstanceLicenseSpecifications[] | cdktn.IResolvable) {
    this._licenseSpecifications.internalValue = value;
  }
  public resetLicenseSpecifications() {
    this._licenseSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseSpecificationsInput() {
    return this._licenseSpecifications.internalValue;
  }

  // metadata_options - computed: true, optional: true, required: false
  private _metadataOptions = new Ec2InstanceMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: Ec2InstanceMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // monitoring - computed: true, optional: true, required: false
  private _monitoring?: boolean | cdktn.IResolvable;
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktn.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
  }

  // network_interfaces - computed: true, optional: true, required: false
  private _networkInterfaces = new Ec2InstanceNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: Ec2InstanceNetworkInterfaces[] | cdktn.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // placement_group_name - computed: true, optional: true, required: false
  private _placementGroupName?: string;
  public get placementGroupName() {
    return this.getStringAttribute('placement_group_name');
  }
  public set placementGroupName(value: string) {
    this._placementGroupName = value;
  }
  public resetPlacementGroupName() {
    this._placementGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupNameInput() {
    return this._placementGroupName;
  }

  // private_dns_name - computed: true, optional: false, required: false
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }

  // private_dns_name_options - computed: true, optional: true, required: false
  private _privateDnsNameOptions = new Ec2InstancePrivateDnsNameOptionsOutputReference(this, "private_dns_name_options");
  public get privateDnsNameOptions() {
    return this._privateDnsNameOptions;
  }
  public putPrivateDnsNameOptions(value: Ec2InstancePrivateDnsNameOptions) {
    this._privateDnsNameOptions.internalValue = value;
  }
  public resetPrivateDnsNameOptions() {
    this._privateDnsNameOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsNameOptionsInput() {
    return this._privateDnsNameOptions.internalValue;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string;
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // propagate_tags_to_volume_on_creation - computed: true, optional: true, required: false
  private _propagateTagsToVolumeOnCreation?: boolean | cdktn.IResolvable;
  public get propagateTagsToVolumeOnCreation() {
    return this.getBooleanAttribute('propagate_tags_to_volume_on_creation');
  }
  public set propagateTagsToVolumeOnCreation(value: boolean | cdktn.IResolvable) {
    this._propagateTagsToVolumeOnCreation = value;
  }
  public resetPropagateTagsToVolumeOnCreation() {
    this._propagateTagsToVolumeOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsToVolumeOnCreationInput() {
    return this._propagateTagsToVolumeOnCreation;
  }

  // public_dns_name - computed: true, optional: false, required: false
  public get publicDnsName() {
    return this.getStringAttribute('public_dns_name');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // ramdisk_id - computed: true, optional: true, required: false
  private _ramdiskId?: string;
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }
  public set ramdiskId(value: string) {
    this._ramdiskId = value;
  }
  public resetRamdiskId() {
    this._ramdiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramdiskIdInput() {
    return this._ramdiskId;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
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

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // source_dest_check - computed: true, optional: true, required: false
  private _sourceDestCheck?: boolean | cdktn.IResolvable;
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }
  public set sourceDestCheck(value: boolean | cdktn.IResolvable) {
    this._sourceDestCheck = value;
  }
  public resetSourceDestCheck() {
    this._sourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDestCheckInput() {
    return this._sourceDestCheck;
  }

  // ssm_associations - computed: true, optional: true, required: false
  private _ssmAssociations = new Ec2InstanceSsmAssociationsList(this, "ssm_associations", false);
  public get ssmAssociations() {
    return this._ssmAssociations;
  }
  public putSsmAssociations(value: Ec2InstanceSsmAssociations[] | cdktn.IResolvable) {
    this._ssmAssociations.internalValue = value;
  }
  public resetSsmAssociations() {
    this._ssmAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmAssociationsInput() {
    return this._ssmAssociations.internalValue;
  }

  // state - computed: true, optional: false, required: false
  private _state = new Ec2InstanceStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2InstanceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2InstanceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string;
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }

  // user_data - computed: true, optional: true, required: false
  private _userData?: string;
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new Ec2InstanceVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: Ec2InstanceVolumes[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktn.stringToTerraform(this._additionalInfo),
      affinity: cdktn.stringToTerraform(this._affinity),
      availability_zone: cdktn.stringToTerraform(this._availabilityZone),
      block_device_mappings: cdktn.listMapper(ec2InstanceBlockDeviceMappingsToTerraform, false)(this._blockDeviceMappings.internalValue),
      cpu_options: ec2InstanceCpuOptionsToTerraform(this._cpuOptions.internalValue),
      credit_specification: ec2InstanceCreditSpecificationToTerraform(this._creditSpecification.internalValue),
      disable_api_termination: cdktn.booleanToTerraform(this._disableApiTermination),
      ebs_optimized: cdktn.booleanToTerraform(this._ebsOptimized),
      elastic_gpu_specifications: cdktn.listMapper(ec2InstanceElasticGpuSpecificationsToTerraform, false)(this._elasticGpuSpecifications.internalValue),
      elastic_inference_accelerators: cdktn.listMapper(ec2InstanceElasticInferenceAcceleratorsToTerraform, false)(this._elasticInferenceAccelerators.internalValue),
      enclave_options: ec2InstanceEnclaveOptionsToTerraform(this._enclaveOptions.internalValue),
      hibernation_options: ec2InstanceHibernationOptionsToTerraform(this._hibernationOptions.internalValue),
      host_id: cdktn.stringToTerraform(this._hostId),
      host_resource_group_arn: cdktn.stringToTerraform(this._hostResourceGroupArn),
      iam_instance_profile: cdktn.stringToTerraform(this._iamInstanceProfile),
      image_id: cdktn.stringToTerraform(this._imageId),
      instance_initiated_shutdown_behavior: cdktn.stringToTerraform(this._instanceInitiatedShutdownBehavior),
      instance_type: cdktn.stringToTerraform(this._instanceType),
      ipv_6_address_count: cdktn.numberToTerraform(this._ipv6AddressCount),
      ipv_6_addresses: cdktn.listMapper(ec2InstanceIpv6AddressesToTerraform, false)(this._ipv6Addresses.internalValue),
      kernel_id: cdktn.stringToTerraform(this._kernelId),
      key_name: cdktn.stringToTerraform(this._keyName),
      launch_template: ec2InstanceLaunchTemplateToTerraform(this._launchTemplate.internalValue),
      license_specifications: cdktn.listMapper(ec2InstanceLicenseSpecificationsToTerraform, false)(this._licenseSpecifications.internalValue),
      metadata_options: ec2InstanceMetadataOptionsToTerraform(this._metadataOptions.internalValue),
      monitoring: cdktn.booleanToTerraform(this._monitoring),
      network_interfaces: cdktn.listMapper(ec2InstanceNetworkInterfacesToTerraform, false)(this._networkInterfaces.internalValue),
      placement_group_name: cdktn.stringToTerraform(this._placementGroupName),
      private_dns_name_options: ec2InstancePrivateDnsNameOptionsToTerraform(this._privateDnsNameOptions.internalValue),
      private_ip_address: cdktn.stringToTerraform(this._privateIpAddress),
      propagate_tags_to_volume_on_creation: cdktn.booleanToTerraform(this._propagateTagsToVolumeOnCreation),
      ramdisk_id: cdktn.stringToTerraform(this._ramdiskId),
      security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
      security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroups),
      source_dest_check: cdktn.booleanToTerraform(this._sourceDestCheck),
      ssm_associations: cdktn.listMapper(ec2InstanceSsmAssociationsToTerraform, false)(this._ssmAssociations.internalValue),
      subnet_id: cdktn.stringToTerraform(this._subnetId),
      tags: cdktn.listMapper(ec2InstanceTagsToTerraform, false)(this._tags.internalValue),
      tenancy: cdktn.stringToTerraform(this._tenancy),
      user_data: cdktn.stringToTerraform(this._userData),
      volumes: cdktn.listMapper(ec2InstanceVolumesToTerraform, false)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_info: {
        value: cdktn.stringToHclTerraform(this._additionalInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      affinity: {
        value: cdktn.stringToHclTerraform(this._affinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktn.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_device_mappings: {
        value: cdktn.listMapperHcl(ec2InstanceBlockDeviceMappingsToHclTerraform, false)(this._blockDeviceMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceBlockDeviceMappingsList",
      },
      cpu_options: {
        value: ec2InstanceCpuOptionsToHclTerraform(this._cpuOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2InstanceCpuOptions",
      },
      credit_specification: {
        value: ec2InstanceCreditSpecificationToHclTerraform(this._creditSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2InstanceCreditSpecification",
      },
      disable_api_termination: {
        value: cdktn.booleanToHclTerraform(this._disableApiTermination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ebs_optimized: {
        value: cdktn.booleanToHclTerraform(this._ebsOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      elastic_gpu_specifications: {
        value: cdktn.listMapperHcl(ec2InstanceElasticGpuSpecificationsToHclTerraform, false)(this._elasticGpuSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceElasticGpuSpecificationsList",
      },
      elastic_inference_accelerators: {
        value: cdktn.listMapperHcl(ec2InstanceElasticInferenceAcceleratorsToHclTerraform, false)(this._elasticInferenceAccelerators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceElasticInferenceAcceleratorsList",
      },
      enclave_options: {
        value: ec2InstanceEnclaveOptionsToHclTerraform(this._enclaveOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2InstanceEnclaveOptions",
      },
      hibernation_options: {
        value: ec2InstanceHibernationOptionsToHclTerraform(this._hibernationOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2InstanceHibernationOptions",
      },
      host_id: {
        value: cdktn.stringToHclTerraform(this._hostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_resource_group_arn: {
        value: cdktn.stringToHclTerraform(this._hostResourceGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_instance_profile: {
        value: cdktn.stringToHclTerraform(this._iamInstanceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktn.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_initiated_shutdown_behavior: {
        value: cdktn.stringToHclTerraform(this._instanceInitiatedShutdownBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktn.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv_6_address_count: {
        value: cdktn.numberToHclTerraform(this._ipv6AddressCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv_6_addresses: {
        value: cdktn.listMapperHcl(ec2InstanceIpv6AddressesToHclTerraform, false)(this._ipv6Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceIpv6AddressesList",
      },
      kernel_id: {
        value: cdktn.stringToHclTerraform(this._kernelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_name: {
        value: cdktn.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template: {
        value: ec2InstanceLaunchTemplateToHclTerraform(this._launchTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2InstanceLaunchTemplate",
      },
      license_specifications: {
        value: cdktn.listMapperHcl(ec2InstanceLicenseSpecificationsToHclTerraform, false)(this._licenseSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceLicenseSpecificationsList",
      },
      metadata_options: {
        value: ec2InstanceMetadataOptionsToHclTerraform(this._metadataOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2InstanceMetadataOptions",
      },
      monitoring: {
        value: cdktn.booleanToHclTerraform(this._monitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_interfaces: {
        value: cdktn.listMapperHcl(ec2InstanceNetworkInterfacesToHclTerraform, false)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceNetworkInterfacesList",
      },
      placement_group_name: {
        value: cdktn.stringToHclTerraform(this._placementGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_dns_name_options: {
        value: ec2InstancePrivateDnsNameOptionsToHclTerraform(this._privateDnsNameOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2InstancePrivateDnsNameOptions",
      },
      private_ip_address: {
        value: cdktn.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_tags_to_volume_on_creation: {
        value: cdktn.booleanToHclTerraform(this._propagateTagsToVolumeOnCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ramdisk_id: {
        value: cdktn.stringToHclTerraform(this._ramdiskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      security_groups: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_dest_check: {
        value: cdktn.booleanToHclTerraform(this._sourceDestCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssm_associations: {
        value: cdktn.listMapperHcl(ec2InstanceSsmAssociationsToHclTerraform, false)(this._ssmAssociations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceSsmAssociationsList",
      },
      subnet_id: {
        value: cdktn.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2InstanceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceTagsList",
      },
      tenancy: {
        value: cdktn.stringToHclTerraform(this._tenancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktn.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volumes: {
        value: cdktn.listMapperHcl(ec2InstanceVolumesToHclTerraform, false)(this._volumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
