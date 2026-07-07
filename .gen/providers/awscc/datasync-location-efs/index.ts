// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatasyncLocationEfsConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) for the Amazon EFS Access point that DataSync uses when accessing the EFS file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}
  */
  readonly accessPointArn?: string;
  /**
  * The subnet and security group that DataSync uses to access target EFS file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#ec_2_config DatasyncLocationEfs#ec_2_config}
  */
  readonly ec2Config: DatasyncLocationEfsEc2Config;
  /**
  * The Amazon Resource Name (ARN) for the Amazon EFS file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#efs_filesystem_arn DatasyncLocationEfs#efs_filesystem_arn}
  */
  readonly efsFilesystemArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the AWS IAM role that the DataSync will assume when mounting the EFS file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}
  */
  readonly fileSystemAccessRoleArn?: string;
  /**
  * Protocol that is used for encrypting the traffic exchanged between the DataSync Agent and the EFS file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}
  */
  readonly inTransitEncryption?: string;
  /**
  * A subdirectory in the location's path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#tags DatasyncLocationEfs#tags}
  */
  readonly tags?: DatasyncLocationEfsTags[] | cdktn.IResolvable;
}
export interface DatasyncLocationEfsEc2Config {
  /**
  * The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * The ARN of the subnet that DataSync uses to access the target EFS file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}
  */
  readonly subnetArn: string;
}

export function datasyncLocationEfsEc2ConfigToTerraform(struct?: DatasyncLocationEfsEc2Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupArns),
    subnet_arn: cdktn.stringToTerraform(struct!.subnetArn),
  }
}


export function datasyncLocationEfsEc2ConfigToHclTerraform(struct?: DatasyncLocationEfsEc2Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_arn: {
      value: cdktn.stringToHclTerraform(struct!.subnetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationEfsEc2ConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncLocationEfsEc2Config | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupArns = this._securityGroupArns;
    }
    if (this._subnetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetArn = this._subnetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationEfsEc2Config | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupArns = undefined;
      this._subnetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupArns = value.securityGroupArns;
      this._subnetArn = value.subnetArn;
    }
  }

  // security_group_arns - computed: false, optional: false, required: true
  private _securityGroupArns?: string[]; 
  public get securityGroupArns() {
    return this.getListAttribute('security_group_arns');
  }
  public set securityGroupArns(value: string[]) {
    this._securityGroupArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupArnsInput() {
    return this._securityGroupArns;
  }

  // subnet_arn - computed: false, optional: false, required: true
  private _subnetArn?: string; 
  public get subnetArn() {
    return this.getStringAttribute('subnet_arn');
  }
  public set subnetArn(value: string) {
    this._subnetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetArnInput() {
    return this._subnetArn;
  }
}
export interface DatasyncLocationEfsTags {
  /**
  * The key for an AWS resource tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#key DatasyncLocationEfs#key}
  */
  readonly key?: string;
  /**
  * The value for an AWS resource tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#value DatasyncLocationEfs#value}
  */
  readonly value?: string;
}

export function datasyncLocationEfsTagsToTerraform(struct?: DatasyncLocationEfsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function datasyncLocationEfsTagsToHclTerraform(struct?: DatasyncLocationEfsTags | cdktn.IResolvable): any {
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

export class DatasyncLocationEfsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatasyncLocationEfsTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatasyncLocationEfsTags | cdktn.IResolvable | undefined) {
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

export class DatasyncLocationEfsTagsList extends cdktn.ComplexList {
  public internalValue? : DatasyncLocationEfsTags[] | cdktn.IResolvable

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
  public get(index: number): DatasyncLocationEfsTagsOutputReference {
    return new DatasyncLocationEfsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs awscc_datasync_location_efs}
*/
export class DatasyncLocationEfs extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datasync_location_efs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatasyncLocationEfs resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationEfs to import
  * @param importFromId The id of the existing DatasyncLocationEfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationEfs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_efs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datasync_location_efs awscc_datasync_location_efs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationEfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_efs',
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
    this._accessPointArn = config.accessPointArn;
    this._ec2Config.internalValue = config.ec2Config;
    this._efsFilesystemArn = config.efsFilesystemArn;
    this._fileSystemAccessRoleArn = config.fileSystemAccessRoleArn;
    this._inTransitEncryption = config.inTransitEncryption;
    this._subdirectory = config.subdirectory;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_arn - computed: true, optional: true, required: false
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  public resetAccessPointArn() {
    this._accessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // ec_2_config - computed: false, optional: false, required: true
  private _ec2Config = new DatasyncLocationEfsEc2ConfigOutputReference(this, "ec_2_config");
  public get ec2Config() {
    return this._ec2Config;
  }
  public putEc2Config(value: DatasyncLocationEfsEc2Config) {
    this._ec2Config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ConfigInput() {
    return this._ec2Config.internalValue;
  }

  // efs_filesystem_arn - computed: true, optional: true, required: false
  private _efsFilesystemArn?: string; 
  public get efsFilesystemArn() {
    return this.getStringAttribute('efs_filesystem_arn');
  }
  public set efsFilesystemArn(value: string) {
    this._efsFilesystemArn = value;
  }
  public resetEfsFilesystemArn() {
    this._efsFilesystemArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFilesystemArnInput() {
    return this._efsFilesystemArn;
  }

  // file_system_access_role_arn - computed: true, optional: true, required: false
  private _fileSystemAccessRoleArn?: string; 
  public get fileSystemAccessRoleArn() {
    return this.getStringAttribute('file_system_access_role_arn');
  }
  public set fileSystemAccessRoleArn(value: string) {
    this._fileSystemAccessRoleArn = value;
  }
  public resetFileSystemAccessRoleArn() {
    this._fileSystemAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessRoleArnInput() {
    return this._fileSystemAccessRoleArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_transit_encryption - computed: true, optional: true, required: false
  private _inTransitEncryption?: string; 
  public get inTransitEncryption() {
    return this.getStringAttribute('in_transit_encryption');
  }
  public set inTransitEncryption(value: string) {
    this._inTransitEncryption = value;
  }
  public resetInTransitEncryption() {
    this._inTransitEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTransitEncryptionInput() {
    return this._inTransitEncryption;
  }

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }

  // subdirectory - computed: true, optional: true, required: false
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DatasyncLocationEfsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DatasyncLocationEfsTags[] | cdktn.IResolvable) {
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
      access_point_arn: cdktn.stringToTerraform(this._accessPointArn),
      ec_2_config: datasyncLocationEfsEc2ConfigToTerraform(this._ec2Config.internalValue),
      efs_filesystem_arn: cdktn.stringToTerraform(this._efsFilesystemArn),
      file_system_access_role_arn: cdktn.stringToTerraform(this._fileSystemAccessRoleArn),
      in_transit_encryption: cdktn.stringToTerraform(this._inTransitEncryption),
      subdirectory: cdktn.stringToTerraform(this._subdirectory),
      tags: cdktn.listMapper(datasyncLocationEfsTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_point_arn: {
        value: cdktn.stringToHclTerraform(this._accessPointArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec_2_config: {
        value: datasyncLocationEfsEc2ConfigToHclTerraform(this._ec2Config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasyncLocationEfsEc2Config",
      },
      efs_filesystem_arn: {
        value: cdktn.stringToHclTerraform(this._efsFilesystemArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_access_role_arn: {
        value: cdktn.stringToHclTerraform(this._fileSystemAccessRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_transit_encryption: {
        value: cdktn.stringToHclTerraform(this._inTransitEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdirectory: {
        value: cdktn.stringToHclTerraform(this._subdirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(datasyncLocationEfsTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatasyncLocationEfsTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
