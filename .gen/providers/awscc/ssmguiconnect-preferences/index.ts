// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsmguiconnectPreferencesConfig extends cdktn.TerraformMetaArguments {
  /**
  * The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. This includes details such as which S3 bucket recordings are stored in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences#connection_recording_preferences SsmguiconnectPreferences#connection_recording_preferences}
  */
  readonly connectionRecordingPreferences?: SsmguiconnectPreferencesConnectionRecordingPreferences;
}
export interface SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets {
  /**
  * The name of the S3 bucket where RDP connection recordings are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences#bucket_name SsmguiconnectPreferences#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * The AWS account number that owns the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences#bucket_owner SsmguiconnectPreferences#bucket_owner}
  */
  readonly bucketOwner?: string;
}

export function ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsToTerraform(struct?: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
  }
}


export function ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsToHclTerraform(struct?: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketOwner = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketOwner = value.bucketOwner;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
  }
}

export class SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList extends cdktn.ComplexList {
  public internalValue? : SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[] | cdktn.IResolvable

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
  public get(index: number): SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference {
    return new SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations {
  /**
  * The S3 bucket where RDP connection recordings are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences#s3_buckets SsmguiconnectPreferences#s3_buckets}
  */
  readonly s3Buckets?: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[] | cdktn.IResolvable;
}

export function ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsToTerraform(struct?: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_buckets: cdktn.listMapper(ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsToTerraform, false)(struct!.s3Buckets),
  }
}


export function ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsToHclTerraform(struct?: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_buckets: {
      value: cdktn.listMapperHcl(ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsToHclTerraform, false)(struct!.s3Buckets),
      isBlock: true,
      type: "list",
      storageClassType: "SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Buckets = this._s3Buckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Buckets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Buckets.internalValue = value.s3Buckets;
    }
  }

  // s3_buckets - computed: true, optional: true, required: false
  private _s3Buckets = new SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList(this, "s3_buckets", false);
  public get s3Buckets() {
    return this._s3Buckets;
  }
  public putS3Buckets(value: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets[] | cdktn.IResolvable) {
    this._s3Buckets.internalValue = value;
  }
  public resetS3Buckets() {
    this._s3Buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketsInput() {
    return this._s3Buckets.internalValue;
  }
}
export interface SsmguiconnectPreferencesConnectionRecordingPreferences {
  /**
  * The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service. This key must exist in the same AWS Region as the node you start an RDP connection to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences#kms_key_arn SsmguiconnectPreferences#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Determines where recordings of RDP connections are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences#recording_destinations SsmguiconnectPreferences#recording_destinations}
  */
  readonly recordingDestinations?: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations;
}

export function ssmguiconnectPreferencesConnectionRecordingPreferencesToTerraform(struct?: SsmguiconnectPreferencesConnectionRecordingPreferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    recording_destinations: ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsToTerraform(struct!.recordingDestinations),
  }
}


export function ssmguiconnectPreferencesConnectionRecordingPreferencesToHclTerraform(struct?: SsmguiconnectPreferencesConnectionRecordingPreferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recording_destinations: {
      value: ssmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsToHclTerraform(struct!.recordingDestinations),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmguiconnectPreferencesConnectionRecordingPreferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._recordingDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingDestinations = this._recordingDestinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmguiconnectPreferencesConnectionRecordingPreferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._recordingDestinations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._recordingDestinations.internalValue = value.recordingDestinations;
    }
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

  // recording_destinations - computed: true, optional: true, required: false
  private _recordingDestinations = new SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference(this, "recording_destinations");
  public get recordingDestinations() {
    return this._recordingDestinations;
  }
  public putRecordingDestinations(value: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations) {
    this._recordingDestinations.internalValue = value;
  }
  public resetRecordingDestinations() {
    this._recordingDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingDestinationsInput() {
    return this._recordingDestinations.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences awscc_ssmguiconnect_preferences}
*/
export class SsmguiconnectPreferences extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssmguiconnect_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsmguiconnectPreferences resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmguiconnectPreferences to import
  * @param importFromId The id of the existing SsmguiconnectPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmguiconnectPreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmguiconnect_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmguiconnect_preferences awscc_ssmguiconnect_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmguiconnectPreferencesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SsmguiconnectPreferencesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmguiconnect_preferences',
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
    this._connectionRecordingPreferences.internalValue = config.connectionRecordingPreferences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // connection_recording_preferences - computed: true, optional: true, required: false
  private _connectionRecordingPreferences = new SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference(this, "connection_recording_preferences");
  public get connectionRecordingPreferences() {
    return this._connectionRecordingPreferences;
  }
  public putConnectionRecordingPreferences(value: SsmguiconnectPreferencesConnectionRecordingPreferences) {
    this._connectionRecordingPreferences.internalValue = value;
  }
  public resetConnectionRecordingPreferences() {
    this._connectionRecordingPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRecordingPreferencesInput() {
    return this._connectionRecordingPreferences.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_recording_preferences: ssmguiconnectPreferencesConnectionRecordingPreferencesToTerraform(this._connectionRecordingPreferences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_recording_preferences: {
        value: ssmguiconnectPreferencesConnectionRecordingPreferencesToHclTerraform(this._connectionRecordingPreferences.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsmguiconnectPreferencesConnectionRecordingPreferences",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
