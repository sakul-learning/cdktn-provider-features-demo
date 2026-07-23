// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Kinesisanalyticsv2ApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Use this parameter to configure the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_configuration Kinesisanalyticsv2Application#application_configuration}
  */
  readonly applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration;
  /**
  * The description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_description Kinesisanalyticsv2Application#application_description}
  */
  readonly applicationDescription?: string;
  /**
  * Used to configure start of maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_maintenance_configuration Kinesisanalyticsv2Application#application_maintenance_configuration}
  */
  readonly applicationMaintenanceConfiguration?: Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration;
  /**
  * To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_mode Kinesisanalyticsv2Application#application_mode}
  */
  readonly applicationMode?: string;
  /**
  * The name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_name Kinesisanalyticsv2Application#application_name}
  */
  readonly applicationName?: string;
  /**
  * Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#run_configuration Kinesisanalyticsv2Application#run_configuration}
  */
  readonly runConfiguration?: Kinesisanalyticsv2ApplicationRunConfiguration;
  /**
  * The runtime environment for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#runtime_environment Kinesisanalyticsv2Application#runtime_environment}
  */
  readonly runtimeEnvironment: string;
  /**
  * Specifies the IAM role that the application uses to access external resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#service_execution_role Kinesisanalyticsv2Application#service_execution_role}
  */
  readonly serviceExecutionRole: string;
  /**
  * A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#tags Kinesisanalyticsv2Application#tags}
  */
  readonly tags?: Kinesisanalyticsv2ApplicationTags[] | cdktn.IResolvable;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
  /**
  * The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#bucket_arn Kinesisanalyticsv2Application#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * The file key for the object containing the application code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#file_key Kinesisanalyticsv2Application#file_key}
  */
  readonly fileKey?: string;
  /**
  * The version of the object containing the application code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#object_version Kinesisanalyticsv2Application#object_version}
  */
  readonly objectVersion?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    file_key: cdktn.stringToTerraform(struct!.fileKey),
    object_version: cdktn.stringToTerraform(struct!.objectVersion),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_key: {
      value: cdktn.stringToHclTerraform(struct!.fileKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_version: {
      value: cdktn.stringToHclTerraform(struct!.objectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._fileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileKey = this._fileKey;
    }
    if (this._objectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectVersion = this._objectVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._fileKey = undefined;
      this._objectVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._fileKey = value.fileKey;
      this._objectVersion = value.objectVersion;
    }
  }

  // bucket_arn - computed: true, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // file_key - computed: true, optional: true, required: false
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  public resetFileKey() {
    this._fileKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
  }

  // object_version - computed: true, optional: true, required: false
  private _objectVersion?: string; 
  public get objectVersion() {
    return this.getStringAttribute('object_version');
  }
  public set objectVersion(value: string) {
    this._objectVersion = value;
  }
  public resetObjectVersion() {
    this._objectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersionInput() {
    return this._objectVersion;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {
  /**
  * Information about the Amazon S3 bucket that contains the application code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#s3_content_location Kinesisanalyticsv2Application#s3_content_location}
  */
  readonly s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation;
  /**
  * The text-format code for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#text_content Kinesisanalyticsv2Application#text_content}
  */
  readonly textContent?: string;
  /**
  * The zip-format code for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#zip_file_content Kinesisanalyticsv2Application#zip_file_content}
  */
  readonly zipFileContent?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_content_location: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct!.s3ContentLocation),
    text_content: cdktn.stringToTerraform(struct!.textContent),
    zip_file_content: cdktn.stringToTerraform(struct!.zipFileContent),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_content_location: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToHclTerraform(struct!.s3ContentLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation",
    },
    text_content: {
      value: cdktn.stringToHclTerraform(struct!.textContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_file_content: {
      value: cdktn.stringToHclTerraform(struct!.zipFileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3ContentLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ContentLocation = this._s3ContentLocation?.internalValue;
    }
    if (this._textContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.textContent = this._textContent;
    }
    if (this._zipFileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipFileContent = this._zipFileContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3ContentLocation.internalValue = undefined;
      this._textContent = undefined;
      this._zipFileContent = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3ContentLocation.internalValue = value.s3ContentLocation;
      this._textContent = value.textContent;
      this._zipFileContent = value.zipFileContent;
    }
  }

  // s3_content_location - computed: true, optional: true, required: false
  private _s3ContentLocation = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference(this, "s3_content_location");
  public get s3ContentLocation() {
    return this._s3ContentLocation;
  }
  public putS3ContentLocation(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation) {
    this._s3ContentLocation.internalValue = value;
  }
  public resetS3ContentLocation() {
    this._s3ContentLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ContentLocationInput() {
    return this._s3ContentLocation.internalValue;
  }

  // text_content - computed: true, optional: true, required: false
  private _textContent?: string; 
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
  public set textContent(value: string) {
    this._textContent = value;
  }
  public resetTextContent() {
    this._textContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textContentInput() {
    return this._textContent;
  }

  // zip_file_content - computed: true, optional: true, required: false
  private _zipFileContent?: string; 
  public get zipFileContent() {
    return this.getStringAttribute('zip_file_content');
  }
  public set zipFileContent(value: string) {
    this._zipFileContent = value;
  }
  public resetZipFileContent() {
    this._zipFileContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileContentInput() {
    return this._zipFileContent;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration {
  /**
  * The location and type of the application code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#code_content Kinesisanalyticsv2Application#code_content}
  */
  readonly codeContent?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent;
  /**
  * Specifies whether the code content is in text or zip format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#code_content_type Kinesisanalyticsv2Application#code_content_type}
  */
  readonly codeContentType?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_content: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct!.codeContent),
    code_content_type: cdktn.stringToTerraform(struct!.codeContentType),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_content: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToHclTerraform(struct!.codeContent),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent",
    },
    code_content_type: {
      value: cdktn.stringToHclTerraform(struct!.codeContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeContent = this._codeContent?.internalValue;
    }
    if (this._codeContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeContentType = this._codeContentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeContent.internalValue = undefined;
      this._codeContentType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeContent.internalValue = value.codeContent;
      this._codeContentType = value.codeContentType;
    }
  }

  // code_content - computed: true, optional: true, required: false
  private _codeContent = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference(this, "code_content");
  public get codeContent() {
    return this._codeContent;
  }
  public putCodeContent(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent) {
    this._codeContent.internalValue = value;
  }
  public resetCodeContent() {
    this._codeContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeContentInput() {
    return this._codeContent.internalValue;
  }

  // code_content_type - computed: true, optional: true, required: false
  private _codeContentType?: string; 
  public get codeContentType() {
    return this.getStringAttribute('code_content_type');
  }
  public set codeContentType(value: string) {
    this._codeContentType = value;
  }
  public resetCodeContentType() {
    this._codeContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeContentTypeInput() {
    return this._codeContentType;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration {
  /**
  * KMS KeyId. Can be either key uuid or full key arn or key alias arn or short key alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#key_id Kinesisanalyticsv2Application#key_id}
  */
  readonly keyId?: string;
  /**
  * Specifies whether application data is encrypted using service key: AWS_OWNED_KEY or customer key: CUSTOMER_MANAGED_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#key_type Kinesisanalyticsv2Application#key_type}
  */
  readonly keyType?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
    key_type: cdktn.stringToTerraform(struct!.keyType),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktn.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
    }
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {
  /**
  * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#snapshots_enabled Kinesisanalyticsv2Application#snapshots_enabled}
  */
  readonly snapshotsEnabled?: boolean | cdktn.IResolvable;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    snapshots_enabled: cdktn.booleanToTerraform(struct!.snapshotsEnabled),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    snapshots_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.snapshotsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsEnabled = this._snapshotsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snapshotsEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snapshotsEnabled = value.snapshotsEnabled;
    }
  }

  // snapshots_enabled - computed: true, optional: true, required: false
  private _snapshotsEnabled?: boolean | cdktn.IResolvable; 
  public get snapshotsEnabled() {
    return this.getBooleanAttribute('snapshots_enabled');
  }
  public set snapshotsEnabled(value: boolean | cdktn.IResolvable) {
    this._snapshotsEnabled = value;
  }
  public resetSnapshotsEnabled() {
    this._snapshotsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsEnabledInput() {
    return this._snapshotsEnabled;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration {
  /**
  * Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#rollback_enabled Kinesisanalyticsv2Application#rollback_enabled}
  */
  readonly rollbackEnabled?: boolean | cdktn.IResolvable;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rollback_enabled: cdktn.booleanToTerraform(struct!.rollbackEnabled),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rollback_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.rollbackEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollbackEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackEnabled = this._rollbackEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollbackEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollbackEnabled = value.rollbackEnabled;
    }
  }

  // rollback_enabled - computed: true, optional: true, required: false
  private _rollbackEnabled?: boolean | cdktn.IResolvable; 
  public get rollbackEnabled() {
    return this.getBooleanAttribute('rollback_enabled');
  }
  public set rollbackEnabled(value: boolean | cdktn.IResolvable) {
    this._rollbackEnabled = value;
  }
  public resetRollbackEnabled() {
    this._rollbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackEnabledInput() {
    return this._rollbackEnabled;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups {
  /**
  * Describes the key of an application execution property key-value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#property_group_id Kinesisanalyticsv2Application#property_group_id}
  */
  readonly propertyGroupId?: string;
  /**
  * Describes the value of an application execution property key-value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#property_map Kinesisanalyticsv2Application#property_map}
  */
  readonly propertyMap?: { [key: string]: string };
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_group_id: cdktn.stringToTerraform(struct!.propertyGroupId),
    property_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.propertyMap),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_group_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.propertyMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGroupId = this._propertyGroupId;
    }
    if (this._propertyMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyMap = this._propertyMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._propertyGroupId = undefined;
      this._propertyMap = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._propertyGroupId = value.propertyGroupId;
      this._propertyMap = value.propertyMap;
    }
  }

  // property_group_id - computed: true, optional: true, required: false
  private _propertyGroupId?: string; 
  public get propertyGroupId() {
    return this.getStringAttribute('property_group_id');
  }
  public set propertyGroupId(value: string) {
    this._propertyGroupId = value;
  }
  public resetPropertyGroupId() {
    this._propertyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGroupIdInput() {
    return this._propertyGroupId;
  }

  // property_map - computed: true, optional: true, required: false
  private _propertyMap?: { [key: string]: string }; 
  public get propertyMap() {
    return this.getStringMapAttribute('property_map');
  }
  public set propertyMap(value: { [key: string]: string }) {
    this._propertyMap = value;
  }
  public resetPropertyMap() {
    this._propertyMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMapInput() {
    return this._propertyMap;
  }
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList extends cdktn.ComplexList {
  public internalValue? : Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups[] | cdktn.IResolvable

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
  public get(index: number): Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference {
    return new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {
  /**
  * Describes the execution property groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#property_groups Kinesisanalyticsv2Application#property_groups}
  */
  readonly propertyGroups?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups[] | cdktn.IResolvable;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_groups: cdktn.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsToTerraform, false)(struct!.propertyGroups),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_groups: {
      value: cdktn.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsToHclTerraform, false)(struct!.propertyGroups),
      isBlock: true,
      type: "list",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGroups = this._propertyGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._propertyGroups.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._propertyGroups.internalValue = value.propertyGroups;
    }
  }

  // property_groups - computed: true, optional: true, required: false
  private _propertyGroups = new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList(this, "property_groups", false);
  public get propertyGroups() {
    return this._propertyGroups;
  }
  public putPropertyGroups(value: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups[] | cdktn.IResolvable) {
    this._propertyGroups.internalValue = value;
  }
  public resetPropertyGroups() {
    this._propertyGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGroupsInput() {
    return this._propertyGroups.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
  /**
  * Describes the interval in milliseconds between checkpoint operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#checkpoint_interval Kinesisanalyticsv2Application#checkpoint_interval}
  */
  readonly checkpointInterval?: number;
  /**
  * Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#checkpointing_enabled Kinesisanalyticsv2Application#checkpointing_enabled}
  */
  readonly checkpointingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled`, `CheckpointInterval`, or `MinPauseBetweenCheckpoints` parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#configuration_type Kinesisanalyticsv2Application#configuration_type}
  */
  readonly configurationType?: string;
  /**
  * Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the CheckpointInterval, the application otherwise performs continual checkpoint operations. For more information, see Tuning Checkpointing in the Apache Flink Documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#min_pause_between_checkpoints Kinesisanalyticsv2Application#min_pause_between_checkpoints}
  */
  readonly minPauseBetweenCheckpoints?: number;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    checkpoint_interval: cdktn.numberToTerraform(struct!.checkpointInterval),
    checkpointing_enabled: cdktn.booleanToTerraform(struct!.checkpointingEnabled),
    configuration_type: cdktn.stringToTerraform(struct!.configurationType),
    min_pause_between_checkpoints: cdktn.numberToTerraform(struct!.minPauseBetweenCheckpoints),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    checkpoint_interval: {
      value: cdktn.numberToHclTerraform(struct!.checkpointInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    checkpointing_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.checkpointingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration_type: {
      value: cdktn.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_pause_between_checkpoints: {
      value: cdktn.numberToHclTerraform(struct!.minPauseBetweenCheckpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointInterval = this._checkpointInterval;
    }
    if (this._checkpointingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointingEnabled = this._checkpointingEnabled;
    }
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    if (this._minPauseBetweenCheckpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPauseBetweenCheckpoints = this._minPauseBetweenCheckpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkpointInterval = undefined;
      this._checkpointingEnabled = undefined;
      this._configurationType = undefined;
      this._minPauseBetweenCheckpoints = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkpointInterval = value.checkpointInterval;
      this._checkpointingEnabled = value.checkpointingEnabled;
      this._configurationType = value.configurationType;
      this._minPauseBetweenCheckpoints = value.minPauseBetweenCheckpoints;
    }
  }

  // checkpoint_interval - computed: true, optional: true, required: false
  private _checkpointInterval?: number; 
  public get checkpointInterval() {
    return this.getNumberAttribute('checkpoint_interval');
  }
  public set checkpointInterval(value: number) {
    this._checkpointInterval = value;
  }
  public resetCheckpointInterval() {
    this._checkpointInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointIntervalInput() {
    return this._checkpointInterval;
  }

  // checkpointing_enabled - computed: true, optional: true, required: false
  private _checkpointingEnabled?: boolean | cdktn.IResolvable; 
  public get checkpointingEnabled() {
    return this.getBooleanAttribute('checkpointing_enabled');
  }
  public set checkpointingEnabled(value: boolean | cdktn.IResolvable) {
    this._checkpointingEnabled = value;
  }
  public resetCheckpointingEnabled() {
    this._checkpointingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointingEnabledInput() {
    return this._checkpointingEnabled;
  }

  // configuration_type - computed: true, optional: true, required: false
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  public resetConfigurationType() {
    this._configurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // min_pause_between_checkpoints - computed: true, optional: true, required: false
  private _minPauseBetweenCheckpoints?: number; 
  public get minPauseBetweenCheckpoints() {
    return this.getNumberAttribute('min_pause_between_checkpoints');
  }
  public set minPauseBetweenCheckpoints(value: number) {
    this._minPauseBetweenCheckpoints = value;
  }
  public resetMinPauseBetweenCheckpoints() {
    this._minPauseBetweenCheckpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPauseBetweenCheckpointsInput() {
    return this._minPauseBetweenCheckpoints;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {
  /**
  * Describes whether to use the default CloudWatch logging configuration for an application. You must set this property to CUSTOM in order to set the LogLevel or MetricsLevel parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#configuration_type Kinesisanalyticsv2Application#configuration_type}
  */
  readonly configurationType?: string;
  /**
  * Describes the verbosity of the CloudWatch Logs for an application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#log_level Kinesisanalyticsv2Application#log_level}
  */
  readonly logLevel?: string;
  /**
  * Describes the granularity of the CloudWatch Logs for an application. The Parallelism level is not recommended for applications with a Parallelism over 64 due to excessive costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#metrics_level Kinesisanalyticsv2Application#metrics_level}
  */
  readonly metricsLevel?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_type: cdktn.stringToTerraform(struct!.configurationType),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
    metrics_level: cdktn.stringToTerraform(struct!.metricsLevel),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_type: {
      value: cdktn.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_level: {
      value: cdktn.stringToHclTerraform(struct!.metricsLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._metricsLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsLevel = this._metricsLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationType = undefined;
      this._logLevel = undefined;
      this._metricsLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationType = value.configurationType;
      this._logLevel = value.logLevel;
      this._metricsLevel = value.metricsLevel;
    }
  }

  // configuration_type - computed: true, optional: true, required: false
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  public resetConfigurationType() {
    this._configurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // metrics_level - computed: true, optional: true, required: false
  private _metricsLevel?: string; 
  public get metricsLevel() {
    return this.getStringAttribute('metrics_level');
  }
  public set metricsLevel(value: string) {
    this._metricsLevel = value;
  }
  public resetMetricsLevel() {
    this._metricsLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsLevelInput() {
    return this._metricsLevel;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {
  /**
  * Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#auto_scaling_enabled Kinesisanalyticsv2Application#auto_scaling_enabled}
  */
  readonly autoScalingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled`, `Parallelism`, or `ParallelismPerKPU` properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#configuration_type Kinesisanalyticsv2Application#configuration_type}
  */
  readonly configurationType?: string;
  /**
  * Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. The Kinesis Data Analytics service can increase this number automatically if ParallelismConfiguration:AutoScalingEnabled is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#parallelism Kinesisanalyticsv2Application#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see Amazon Kinesis Data Analytics Pricing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#parallelism_per_kpu Kinesisanalyticsv2Application#parallelism_per_kpu}
  */
  readonly parallelismPerKpu?: number;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_scaling_enabled: cdktn.booleanToTerraform(struct!.autoScalingEnabled),
    configuration_type: cdktn.stringToTerraform(struct!.configurationType),
    parallelism: cdktn.numberToTerraform(struct!.parallelism),
    parallelism_per_kpu: cdktn.numberToTerraform(struct!.parallelismPerKpu),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_scaling_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration_type: {
      value: cdktn.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelism: {
      value: cdktn.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallelism_per_kpu: {
      value: cdktn.numberToHclTerraform(struct!.parallelismPerKpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingEnabled = this._autoScalingEnabled;
    }
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._parallelismPerKpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelismPerKpu = this._parallelismPerKpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScalingEnabled = undefined;
      this._configurationType = undefined;
      this._parallelism = undefined;
      this._parallelismPerKpu = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScalingEnabled = value.autoScalingEnabled;
      this._configurationType = value.configurationType;
      this._parallelism = value.parallelism;
      this._parallelismPerKpu = value.parallelismPerKpu;
    }
  }

  // auto_scaling_enabled - computed: true, optional: true, required: false
  private _autoScalingEnabled?: boolean | cdktn.IResolvable; 
  public get autoScalingEnabled() {
    return this.getBooleanAttribute('auto_scaling_enabled');
  }
  public set autoScalingEnabled(value: boolean | cdktn.IResolvable) {
    this._autoScalingEnabled = value;
  }
  public resetAutoScalingEnabled() {
    this._autoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingEnabledInput() {
    return this._autoScalingEnabled;
  }

  // configuration_type - computed: true, optional: true, required: false
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  public resetConfigurationType() {
    this._configurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // parallelism - computed: true, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // parallelism_per_kpu - computed: true, optional: true, required: false
  private _parallelismPerKpu?: number; 
  public get parallelismPerKpu() {
    return this.getNumberAttribute('parallelism_per_kpu');
  }
  public set parallelismPerKpu(value: number) {
    this._parallelismPerKpu = value;
  }
  public resetParallelismPerKpu() {
    this._parallelismPerKpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismPerKpuInput() {
    return this._parallelismPerKpu;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {
  /**
  * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see Checkpoints for Fault Tolerance in the Apache Flink Documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#checkpoint_configuration Kinesisanalyticsv2Application#checkpoint_configuration}
  */
  readonly checkpointConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration;
  /**
  * Describes configuration parameters for Amazon CloudWatch logging for an application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#monitoring_configuration Kinesisanalyticsv2Application#monitoring_configuration}
  */
  readonly monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration;
  /**
  * Describes parameters for how an application executes multiple tasks simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#parallelism_configuration Kinesisanalyticsv2Application#parallelism_configuration}
  */
  readonly parallelismConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    checkpoint_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct!.checkpointConfiguration),
    monitoring_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct!.monitoringConfiguration),
    parallelism_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct!.parallelismConfiguration),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    checkpoint_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToHclTerraform(struct!.checkpointConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration",
    },
    monitoring_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToHclTerraform(struct!.monitoringConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration",
    },
    parallelism_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToHclTerraform(struct!.parallelismConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointConfiguration = this._checkpointConfiguration?.internalValue;
    }
    if (this._monitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
    }
    if (this._parallelismConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelismConfiguration = this._parallelismConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkpointConfiguration.internalValue = undefined;
      this._monitoringConfiguration.internalValue = undefined;
      this._parallelismConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkpointConfiguration.internalValue = value.checkpointConfiguration;
      this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
      this._parallelismConfiguration.internalValue = value.parallelismConfiguration;
    }
  }

  // checkpoint_configuration - computed: true, optional: true, required: false
  private _checkpointConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference(this, "checkpoint_configuration");
  public get checkpointConfiguration() {
    return this._checkpointConfiguration;
  }
  public putCheckpointConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration) {
    this._checkpointConfiguration.internalValue = value;
  }
  public resetCheckpointConfiguration() {
    this._checkpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigurationInput() {
    return this._checkpointConfiguration.internalValue;
  }

  // monitoring_configuration - computed: true, optional: true, required: false
  private _monitoringConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
  public putMonitoringConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration) {
    this._monitoringConfiguration.internalValue = value;
  }
  public resetMonitoringConfiguration() {
    this._monitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigurationInput() {
    return this._monitoringConfiguration.internalValue;
  }

  // parallelism_configuration - computed: true, optional: true, required: false
  private _parallelismConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference(this, "parallelism_configuration");
  public get parallelismConfiguration() {
    return this._parallelismConfiguration;
  }
  public putParallelismConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration) {
    this._parallelismConfiguration.internalValue = value;
  }
  public resetParallelismConfiguration() {
    this._parallelismConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismConfigurationInput() {
    return this._parallelismConfiguration.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism {
  /**
  * The number of in-application streams to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#count Kinesisanalyticsv2Application#count}
  */
  readonly count?: number;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
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
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor {
  /**
  * The ARN of the Amazon Lambda function that operates on records in the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#resource_arn Kinesisanalyticsv2Application#resource_arn}
  */
  readonly resourceArn?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArn = value.resourceArn;
    }
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
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration {
  /**
  * The InputLambdaProcessor that is used to preprocess the records in the stream before being processed by your application code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#input_lambda_processor Kinesisanalyticsv2Application#input_lambda_processor}
  */
  readonly inputLambdaProcessor?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_lambda_processor: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorToTerraform(struct!.inputLambdaProcessor),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_lambda_processor: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorToHclTerraform(struct!.inputLambdaProcessor),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputLambdaProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLambdaProcessor = this._inputLambdaProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputLambdaProcessor.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputLambdaProcessor.internalValue = value.inputLambdaProcessor;
    }
  }

  // input_lambda_processor - computed: true, optional: true, required: false
  private _inputLambdaProcessor = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference(this, "input_lambda_processor");
  public get inputLambdaProcessor() {
    return this._inputLambdaProcessor;
  }
  public putInputLambdaProcessor(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor) {
    this._inputLambdaProcessor.internalValue = value;
  }
  public resetInputLambdaProcessor() {
    this._inputLambdaProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLambdaProcessorInput() {
    return this._inputLambdaProcessor.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns {
  /**
  * A reference to the data element in the streaming input or the reference data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#mapping Kinesisanalyticsv2Application#mapping}
  */
  readonly mapping?: string;
  /**
  * The name of the column that is created in the in-application input stream or reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#name Kinesisanalyticsv2Application#name}
  */
  readonly name?: string;
  /**
  * The type of column created in the in-application input stream or reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#sql_type Kinesisanalyticsv2Application#sql_type}
  */
  readonly sqlType?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mapping: cdktn.stringToTerraform(struct!.mapping),
    name: cdktn.stringToTerraform(struct!.name),
    sql_type: cdktn.stringToTerraform(struct!.sqlType),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mapping: {
      value: cdktn.stringToHclTerraform(struct!.mapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_type: {
      value: cdktn.stringToHclTerraform(struct!.sqlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapping = undefined;
      this._name = undefined;
      this._sqlType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapping = value.mapping;
      this._name = value.name;
      this._sqlType = value.sqlType;
    }
  }

  // mapping - computed: true, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
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

  // sql_type - computed: true, optional: true, required: false
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  public resetSqlType() {
    this._sqlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList extends cdktn.ComplexList {
  public internalValue? : Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns[] | cdktn.IResolvable

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
  public get(index: number): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference {
    return new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters {
  /**
  * The column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#record_column_delimiter Kinesisanalyticsv2Application#record_column_delimiter}
  */
  readonly recordColumnDelimiter?: string;
  /**
  * The row delimiter. For example, in a CSV format, '\n' is the typical row delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#record_row_delimiter Kinesisanalyticsv2Application#record_row_delimiter}
  */
  readonly recordRowDelimiter?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_column_delimiter: cdktn.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktn.stringToTerraform(struct!.recordRowDelimiter),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_column_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordColumnDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_row_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordRowDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordColumnDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
    }
    if (this._recordRowDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordColumnDelimiter = undefined;
      this._recordRowDelimiter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordColumnDelimiter = value.recordColumnDelimiter;
      this._recordRowDelimiter = value.recordRowDelimiter;
    }
  }

  // record_column_delimiter - computed: true, optional: true, required: false
  private _recordColumnDelimiter?: string; 
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }
  public set recordColumnDelimiter(value: string) {
    this._recordColumnDelimiter = value;
  }
  public resetRecordColumnDelimiter() {
    this._recordColumnDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnDelimiterInput() {
    return this._recordColumnDelimiter;
  }

  // record_row_delimiter - computed: true, optional: true, required: false
  private _recordRowDelimiter?: string; 
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
  public set recordRowDelimiter(value: string) {
    this._recordRowDelimiter = value;
  }
  public resetRecordRowDelimiter() {
    this._recordRowDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowDelimiterInput() {
    return this._recordRowDelimiter;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters {
  /**
  * The path to the top-level parent that contains the records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#record_row_path Kinesisanalyticsv2Application#record_row_path}
  */
  readonly recordRowPath?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_row_path: cdktn.stringToTerraform(struct!.recordRowPath),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_row_path: {
      value: cdktn.stringToHclTerraform(struct!.recordRowPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordRowPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowPath = this._recordRowPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordRowPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordRowPath = value.recordRowPath;
    }
  }

  // record_row_path - computed: true, optional: true, required: false
  private _recordRowPath?: string; 
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
  public set recordRowPath(value: string) {
    this._recordRowPath = value;
  }
  public resetRecordRowPath() {
    this._recordRowPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowPathInput() {
    return this._recordRowPath;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters {
  /**
  * Provides additional mapping information when the record format uses delimiters (for example, CSV).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
  */
  readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters;
  /**
  * Provides additional mapping information when JSON is the record format on the streaming source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
  */
  readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct!.csvMappingParameters),
    json_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct!.jsonMappingParameters),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv_mapping_parameters: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform(struct!.csvMappingParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters",
    },
    json_mapping_parameters: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform(struct!.jsonMappingParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvMappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvMappingParameters = this._csvMappingParameters?.internalValue;
    }
    if (this._jsonMappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonMappingParameters = this._jsonMappingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csvMappingParameters.internalValue = undefined;
      this._jsonMappingParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csvMappingParameters.internalValue = value.csvMappingParameters;
      this._jsonMappingParameters.internalValue = value.jsonMappingParameters;
    }
  }

  // csv_mapping_parameters - computed: true, optional: true, required: false
  private _csvMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference(this, "csv_mapping_parameters");
  public get csvMappingParameters() {
    return this._csvMappingParameters;
  }
  public putCsvMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters) {
    this._csvMappingParameters.internalValue = value;
  }
  public resetCsvMappingParameters() {
    this._csvMappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvMappingParametersInput() {
    return this._csvMappingParameters.internalValue;
  }

  // json_mapping_parameters - computed: true, optional: true, required: false
  private _jsonMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference(this, "json_mapping_parameters");
  public get jsonMappingParameters() {
    return this._jsonMappingParameters;
  }
  public putJsonMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters) {
    this._jsonMappingParameters.internalValue = value;
  }
  public resetJsonMappingParameters() {
    this._jsonMappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonMappingParametersInput() {
    return this._jsonMappingParameters.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat {
  /**
  * When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#mapping_parameters Kinesisanalyticsv2Application#mapping_parameters}
  */
  readonly mappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters;
  /**
  * The type of record format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#record_format_type Kinesisanalyticsv2Application#record_format_type}
  */
  readonly recordFormatType?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersToTerraform(struct!.mappingParameters),
    record_format_type: cdktn.stringToTerraform(struct!.recordFormatType),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mapping_parameters: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersToHclTerraform(struct!.mappingParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters",
    },
    record_format_type: {
      value: cdktn.stringToHclTerraform(struct!.recordFormatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingParameters = this._mappingParameters?.internalValue;
    }
    if (this._recordFormatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormatType = this._recordFormatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappingParameters.internalValue = undefined;
      this._recordFormatType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappingParameters.internalValue = value.mappingParameters;
      this._recordFormatType = value.recordFormatType;
    }
  }

  // mapping_parameters - computed: true, optional: true, required: false
  private _mappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters");
  public get mappingParameters() {
    return this._mappingParameters;
  }
  public putMappingParameters(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters) {
    this._mappingParameters.internalValue = value;
  }
  public resetMappingParameters() {
    this._mappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingParametersInput() {
    return this._mappingParameters.internalValue;
  }

  // record_format_type - computed: true, optional: true, required: false
  private _recordFormatType?: string; 
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }
  public set recordFormatType(value: string) {
    this._recordFormatType = value;
  }
  public resetRecordFormatType() {
    this._recordFormatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatTypeInput() {
    return this._recordFormatType;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema {
  /**
  * A list of `RecordColumn` objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#record_columns Kinesisanalyticsv2Application#record_columns}
  */
  readonly recordColumns?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns[] | cdktn.IResolvable;
  /**
  * Specifies the encoding of the records in the streaming source. For example, UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#record_encoding Kinesisanalyticsv2Application#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * Specifies the format of the records on the streaming source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#record_format Kinesisanalyticsv2Application#record_format}
  */
  readonly recordFormat?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_columns: cdktn.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsToTerraform, false)(struct!.recordColumns),
    record_encoding: cdktn.stringToTerraform(struct!.recordEncoding),
    record_format: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatToTerraform(struct!.recordFormat),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_columns: {
      value: cdktn.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsToHclTerraform, false)(struct!.recordColumns),
      isBlock: true,
      type: "list",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList",
    },
    record_encoding: {
      value: cdktn.stringToHclTerraform(struct!.recordEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_format: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatToHclTerraform(struct!.recordFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumns = this._recordColumns?.internalValue;
    }
    if (this._recordEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordEncoding = this._recordEncoding;
    }
    if (this._recordFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormat = this._recordFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordColumns.internalValue = undefined;
      this._recordEncoding = undefined;
      this._recordFormat.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordColumns.internalValue = value.recordColumns;
      this._recordEncoding = value.recordEncoding;
      this._recordFormat.internalValue = value.recordFormat;
    }
  }

  // record_columns - computed: true, optional: true, required: false
  private _recordColumns = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList(this, "record_columns", false);
  public get recordColumns() {
    return this._recordColumns;
  }
  public putRecordColumns(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns[] | cdktn.IResolvable) {
    this._recordColumns.internalValue = value;
  }
  public resetRecordColumns() {
    this._recordColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnsInput() {
    return this._recordColumns.internalValue;
  }

  // record_encoding - computed: true, optional: true, required: false
  private _recordEncoding?: string; 
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }
  public set recordEncoding(value: string) {
    this._recordEncoding = value;
  }
  public resetRecordEncoding() {
    this._recordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEncodingInput() {
    return this._recordEncoding;
  }

  // record_format - computed: true, optional: true, required: false
  private _recordFormat = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference(this, "record_format");
  public get recordFormat() {
    return this._recordFormat;
  }
  public putRecordFormat(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat) {
    this._recordFormat.internalValue = value;
  }
  public resetRecordFormat() {
    this._recordFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatInput() {
    return this._recordFormat.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput {
  /**
  * The Amazon Resource Name (ARN) of the delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#resource_arn Kinesisanalyticsv2Application#resource_arn}
  */
  readonly resourceArn?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArn = value.resourceArn;
    }
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
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput {
  /**
  * The ARN of the input Kinesis data stream to read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#resource_arn Kinesisanalyticsv2Application#resource_arn}
  */
  readonly resourceArn?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArn = value.resourceArn;
    }
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
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs {
  /**
  * Describes the number of in-application streams to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#input_parallelism Kinesisanalyticsv2Application#input_parallelism}
  */
  readonly inputParallelism?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism;
  /**
  * The InputProcessingConfiguration for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is InputLambdaProcessor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#input_processing_configuration Kinesisanalyticsv2Application#input_processing_configuration}
  */
  readonly inputProcessingConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration;
  /**
  * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#input_schema Kinesisanalyticsv2Application#input_schema}
  */
  readonly inputSchema?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema;
  /**
  * If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#kinesis_firehose_input Kinesisanalyticsv2Application#kinesis_firehose_input}
  */
  readonly kinesisFirehoseInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput;
  /**
  * If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#kinesis_streams_input Kinesisanalyticsv2Application#kinesis_streams_input}
  */
  readonly kinesisStreamsInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput;
  /**
  * The name prefix to use when creating an in-application stream. Suppose that you specify a prefix `"MyInApplicationStream"`. Kinesis Data Analytics then creates one or more (as per the InputParallelism count you specified) in-application streams with the names `"MyInApplicationStream_001"`, `"MyInApplicationStream_002"`, and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#name_prefix Kinesisanalyticsv2Application#name_prefix}
  */
  readonly namePrefix?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_parallelism: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismToTerraform(struct!.inputParallelism),
    input_processing_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationToTerraform(struct!.inputProcessingConfiguration),
    input_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaToTerraform(struct!.inputSchema),
    kinesis_firehose_input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputToTerraform(struct!.kinesisFirehoseInput),
    kinesis_streams_input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputToTerraform(struct!.kinesisStreamsInput),
    name_prefix: cdktn.stringToTerraform(struct!.namePrefix),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_parallelism: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismToHclTerraform(struct!.inputParallelism),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism",
    },
    input_processing_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationToHclTerraform(struct!.inputProcessingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration",
    },
    input_schema: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaToHclTerraform(struct!.inputSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema",
    },
    kinesis_firehose_input: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputToHclTerraform(struct!.kinesisFirehoseInput),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput",
    },
    kinesis_streams_input: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputToHclTerraform(struct!.kinesisStreamsInput),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput",
    },
    name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputParallelism?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputParallelism = this._inputParallelism?.internalValue;
    }
    if (this._inputProcessingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputProcessingConfiguration = this._inputProcessingConfiguration?.internalValue;
    }
    if (this._inputSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema?.internalValue;
    }
    if (this._kinesisFirehoseInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehoseInput = this._kinesisFirehoseInput?.internalValue;
    }
    if (this._kinesisStreamsInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamsInput = this._kinesisStreamsInput?.internalValue;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputParallelism.internalValue = undefined;
      this._inputProcessingConfiguration.internalValue = undefined;
      this._inputSchema.internalValue = undefined;
      this._kinesisFirehoseInput.internalValue = undefined;
      this._kinesisStreamsInput.internalValue = undefined;
      this._namePrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputParallelism.internalValue = value.inputParallelism;
      this._inputProcessingConfiguration.internalValue = value.inputProcessingConfiguration;
      this._inputSchema.internalValue = value.inputSchema;
      this._kinesisFirehoseInput.internalValue = value.kinesisFirehoseInput;
      this._kinesisStreamsInput.internalValue = value.kinesisStreamsInput;
      this._namePrefix = value.namePrefix;
    }
  }

  // input_parallelism - computed: true, optional: true, required: false
  private _inputParallelism = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference(this, "input_parallelism");
  public get inputParallelism() {
    return this._inputParallelism;
  }
  public putInputParallelism(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism) {
    this._inputParallelism.internalValue = value;
  }
  public resetInputParallelism() {
    this._inputParallelism.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParallelismInput() {
    return this._inputParallelism.internalValue;
  }

  // input_processing_configuration - computed: true, optional: true, required: false
  private _inputProcessingConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference(this, "input_processing_configuration");
  public get inputProcessingConfiguration() {
    return this._inputProcessingConfiguration;
  }
  public putInputProcessingConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration) {
    this._inputProcessingConfiguration.internalValue = value;
  }
  public resetInputProcessingConfiguration() {
    this._inputProcessingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputProcessingConfigurationInput() {
    return this._inputProcessingConfiguration.internalValue;
  }

  // input_schema - computed: true, optional: true, required: false
  private _inputSchema = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference(this, "input_schema");
  public get inputSchema() {
    return this._inputSchema;
  }
  public putInputSchema(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema) {
    this._inputSchema.internalValue = value;
  }
  public resetInputSchema() {
    this._inputSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema.internalValue;
  }

  // kinesis_firehose_input - computed: true, optional: true, required: false
  private _kinesisFirehoseInput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference(this, "kinesis_firehose_input");
  public get kinesisFirehoseInput() {
    return this._kinesisFirehoseInput;
  }
  public putKinesisFirehoseInput(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput) {
    this._kinesisFirehoseInput.internalValue = value;
  }
  public resetKinesisFirehoseInput() {
    this._kinesisFirehoseInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseInputInput() {
    return this._kinesisFirehoseInput.internalValue;
  }

  // kinesis_streams_input - computed: true, optional: true, required: false
  private _kinesisStreamsInput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference(this, "kinesis_streams_input");
  public get kinesisStreamsInput() {
    return this._kinesisStreamsInput;
  }
  public putKinesisStreamsInput(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput) {
    this._kinesisStreamsInput.internalValue = value;
  }
  public resetKinesisStreamsInput() {
    this._kinesisStreamsInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamsInputInput() {
    return this._kinesisStreamsInput.internalValue;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList extends cdktn.ComplexList {
  public internalValue? : Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs[] | cdktn.IResolvable

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
  public get(index: number): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference {
    return new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration {
  /**
  * The array of Input objects describing the input streams used by the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#inputs Kinesisanalyticsv2Application#inputs}
  */
  readonly inputs?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs[] | cdktn.IResolvable;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inputs: cdktn.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsToTerraform, false)(struct!.inputs),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inputs: {
      value: cdktn.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsToHclTerraform, false)(struct!.inputs),
      isBlock: true,
      type: "list",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputs.internalValue = value.inputs;
    }
  }

  // inputs - computed: true, optional: true, required: false
  private _inputs = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs[] | cdktn.IResolvable) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations {
  /**
  * The array of SecurityGroup IDs used by the VPC configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#security_group_ids Kinesisanalyticsv2Application#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The array of Subnet IDs used by the VPC configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#subnet_ids Kinesisanalyticsv2Application#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
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

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
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

export class Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList extends cdktn.ComplexList {
  public internalValue? : Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations[] | cdktn.IResolvable

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
  public get(index: number): Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference {
    return new Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration {
  /**
  * The Amazon Resource Name (ARN) of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#database_arn Kinesisanalyticsv2Application#database_arn}
  */
  readonly databaseArn?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_arn: cdktn.stringToTerraform(struct!.databaseArn),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_arn: {
      value: cdktn.stringToHclTerraform(struct!.databaseArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseArn = this._databaseArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseArn = value.databaseArn;
    }
  }

  // database_arn - computed: true, optional: true, required: false
  private _databaseArn?: string; 
  public get databaseArn() {
    return this.getStringAttribute('database_arn');
  }
  public set databaseArn(value: string) {
    this._databaseArn = value;
  }
  public resetDatabaseArn() {
    this._databaseArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseArnInput() {
    return this._databaseArn;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration {
  /**
  * The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#glue_data_catalog_configuration Kinesisanalyticsv2Application#glue_data_catalog_configuration}
  */
  readonly glueDataCatalogConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    glue_data_catalog_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationToTerraform(struct!.glueDataCatalogConfiguration),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    glue_data_catalog_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationToHclTerraform(struct!.glueDataCatalogConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glueDataCatalogConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueDataCatalogConfiguration = this._glueDataCatalogConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._glueDataCatalogConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._glueDataCatalogConfiguration.internalValue = value.glueDataCatalogConfiguration;
    }
  }

  // glue_data_catalog_configuration - computed: true, optional: true, required: false
  private _glueDataCatalogConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference(this, "glue_data_catalog_configuration");
  public get glueDataCatalogConfiguration() {
    return this._glueDataCatalogConfiguration;
  }
  public putGlueDataCatalogConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration) {
    this._glueDataCatalogConfiguration.internalValue = value;
  }
  public resetGlueDataCatalogConfiguration() {
    this._glueDataCatalogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueDataCatalogConfigurationInput() {
    return this._glueDataCatalogConfiguration.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference {
  /**
  * The artifact ID of the Maven reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#artifact_id Kinesisanalyticsv2Application#artifact_id}
  */
  readonly artifactId?: string;
  /**
  * The group ID of the Maven reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#group_id Kinesisanalyticsv2Application#group_id}
  */
  readonly groupId?: string;
  /**
  * The version of the Maven reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#version Kinesisanalyticsv2Application#version}
  */
  readonly version?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_id: cdktn.stringToTerraform(struct!.artifactId),
    group_id: cdktn.stringToTerraform(struct!.groupId),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_id: {
      value: cdktn.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktn.stringToHclTerraform(struct!.groupId),
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

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._groupId = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._groupId = value.groupId;
      this._version = value.version;
    }
  }

  // artifact_id - computed: true, optional: true, required: false
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  public resetArtifactId() {
    this._artifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation {
  /**
  * The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#bucket_arn Kinesisanalyticsv2Application#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * The file key for the object containing the application code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#file_key Kinesisanalyticsv2Application#file_key}
  */
  readonly fileKey?: string;
  /**
  * The version of the object containing the application code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#object_version Kinesisanalyticsv2Application#object_version}
  */
  readonly objectVersion?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    file_key: cdktn.stringToTerraform(struct!.fileKey),
    object_version: cdktn.stringToTerraform(struct!.objectVersion),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_key: {
      value: cdktn.stringToHclTerraform(struct!.fileKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_version: {
      value: cdktn.stringToHclTerraform(struct!.objectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._fileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileKey = this._fileKey;
    }
    if (this._objectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectVersion = this._objectVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._fileKey = undefined;
      this._objectVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._fileKey = value.fileKey;
      this._objectVersion = value.objectVersion;
    }
  }

  // bucket_arn - computed: true, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // file_key - computed: true, optional: true, required: false
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  public resetFileKey() {
    this._fileKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
  }

  // object_version - computed: true, optional: true, required: false
  private _objectVersion?: string; 
  public get objectVersion() {
    return this.getStringAttribute('object_version');
  }
  public set objectVersion(value: string) {
    this._objectVersion = value;
  }
  public resetObjectVersion() {
    this._objectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersionInput() {
    return this._objectVersion;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration {
  /**
  * Set this to either `UDF` or `DEPENDENCY_JAR`. `UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#artifact_type Kinesisanalyticsv2Application#artifact_type}
  */
  readonly artifactType?: string;
  /**
  * The parameters required to fully specify a Maven reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#maven_reference Kinesisanalyticsv2Application#maven_reference}
  */
  readonly mavenReference?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference;
  /**
  * The location of the custom artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#s3_content_location Kinesisanalyticsv2Application#s3_content_location}
  */
  readonly s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_type: cdktn.stringToTerraform(struct!.artifactType),
    maven_reference: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceToTerraform(struct!.mavenReference),
    s3_content_location: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationToTerraform(struct!.s3ContentLocation),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_type: {
      value: cdktn.stringToHclTerraform(struct!.artifactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maven_reference: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceToHclTerraform(struct!.mavenReference),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference",
    },
    s3_content_location: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationToHclTerraform(struct!.s3ContentLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactType = this._artifactType;
    }
    if (this._mavenReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mavenReference = this._mavenReference?.internalValue;
    }
    if (this._s3ContentLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ContentLocation = this._s3ContentLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactType = undefined;
      this._mavenReference.internalValue = undefined;
      this._s3ContentLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactType = value.artifactType;
      this._mavenReference.internalValue = value.mavenReference;
      this._s3ContentLocation.internalValue = value.s3ContentLocation;
    }
  }

  // artifact_type - computed: true, optional: true, required: false
  private _artifactType?: string; 
  public get artifactType() {
    return this.getStringAttribute('artifact_type');
  }
  public set artifactType(value: string) {
    this._artifactType = value;
  }
  public resetArtifactType() {
    this._artifactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactTypeInput() {
    return this._artifactType;
  }

  // maven_reference - computed: true, optional: true, required: false
  private _mavenReference = new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference(this, "maven_reference");
  public get mavenReference() {
    return this._mavenReference;
  }
  public putMavenReference(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference) {
    this._mavenReference.internalValue = value;
  }
  public resetMavenReference() {
    this._mavenReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenReferenceInput() {
    return this._mavenReference.internalValue;
  }

  // s3_content_location - computed: true, optional: true, required: false
  private _s3ContentLocation = new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference(this, "s3_content_location");
  public get s3ContentLocation() {
    return this._s3ContentLocation;
  }
  public putS3ContentLocation(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation) {
    this._s3ContentLocation.internalValue = value;
  }
  public resetS3ContentLocation() {
    this._s3ContentLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ContentLocationInput() {
    return this._s3ContentLocation.internalValue;
  }
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList extends cdktn.ComplexList {
  public internalValue? : Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration[] | cdktn.IResolvable

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
  public get(index: number): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference {
    return new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation {
  /**
  * The base path for the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#base_path Kinesisanalyticsv2Application#base_path}
  */
  readonly basePath?: string;
  /**
  * The Amazon Resource Name (ARN) of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#bucket_arn Kinesisanalyticsv2Application#bucket_arn}
  */
  readonly bucketArn?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_path: cdktn.stringToTerraform(struct!.basePath),
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_path: {
      value: cdktn.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basePath = undefined;
      this._bucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basePath = value.basePath;
      this._bucketArn = value.bucketArn;
    }
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // bucket_arn - computed: true, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration {
  /**
  * The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#s3_content_location Kinesisanalyticsv2Application#s3_content_location}
  */
  readonly s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_content_location: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationToTerraform(struct!.s3ContentLocation),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_content_location: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationToHclTerraform(struct!.s3ContentLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3ContentLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ContentLocation = this._s3ContentLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3ContentLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3ContentLocation.internalValue = value.s3ContentLocation;
    }
  }

  // s3_content_location - computed: true, optional: true, required: false
  private _s3ContentLocation = new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference(this, "s3_content_location");
  public get s3ContentLocation() {
    return this._s3ContentLocation;
  }
  public putS3ContentLocation(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation) {
    this._s3ContentLocation.internalValue = value;
  }
  public resetS3ContentLocation() {
    this._s3ContentLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ContentLocationInput() {
    return this._s3ContentLocation.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration {
  /**
  * The verbosity of the CloudWatch Logs for an application. You can set it to `INFO`, `WARN`, `ERROR`, or `DEBUG`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#log_level Kinesisanalyticsv2Application#log_level}
  */
  readonly logLevel?: string;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_level: cdktn.stringToTerraform(struct!.logLevel),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logLevel = value.logLevel;
    }
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration {
  /**
  * The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#catalog_configuration Kinesisanalyticsv2Application#catalog_configuration}
  */
  readonly catalogConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration;
  /**
  * A list of CustomArtifactConfiguration objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#custom_artifacts_configuration Kinesisanalyticsv2Application#custom_artifacts_configuration}
  */
  readonly customArtifactsConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration[] | cdktn.IResolvable;
  /**
  * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#deploy_as_application_configuration Kinesisanalyticsv2Application#deploy_as_application_configuration}
  */
  readonly deployAsApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration;
  /**
  * The monitoring configuration of a Kinesis Data Analytics Studio notebook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#monitoring_configuration Kinesisanalyticsv2Application#monitoring_configuration}
  */
  readonly monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationToTerraform(struct!.catalogConfiguration),
    custom_artifacts_configuration: cdktn.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationToTerraform, false)(struct!.customArtifactsConfiguration),
    deploy_as_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationToTerraform(struct!.deployAsApplicationConfiguration),
    monitoring_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationToTerraform(struct!.monitoringConfiguration),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationToHclTerraform(struct!.catalogConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration",
    },
    custom_artifacts_configuration: {
      value: cdktn.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationToHclTerraform, false)(struct!.customArtifactsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList",
    },
    deploy_as_application_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationToHclTerraform(struct!.deployAsApplicationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration",
    },
    monitoring_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationToHclTerraform(struct!.monitoringConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogConfiguration = this._catalogConfiguration?.internalValue;
    }
    if (this._customArtifactsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customArtifactsConfiguration = this._customArtifactsConfiguration?.internalValue;
    }
    if (this._deployAsApplicationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployAsApplicationConfiguration = this._deployAsApplicationConfiguration?.internalValue;
    }
    if (this._monitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogConfiguration.internalValue = undefined;
      this._customArtifactsConfiguration.internalValue = undefined;
      this._deployAsApplicationConfiguration.internalValue = undefined;
      this._monitoringConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogConfiguration.internalValue = value.catalogConfiguration;
      this._customArtifactsConfiguration.internalValue = value.customArtifactsConfiguration;
      this._deployAsApplicationConfiguration.internalValue = value.deployAsApplicationConfiguration;
      this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
    }
  }

  // catalog_configuration - computed: true, optional: true, required: false
  private _catalogConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference(this, "catalog_configuration");
  public get catalogConfiguration() {
    return this._catalogConfiguration;
  }
  public putCatalogConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration) {
    this._catalogConfiguration.internalValue = value;
  }
  public resetCatalogConfiguration() {
    this._catalogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogConfigurationInput() {
    return this._catalogConfiguration.internalValue;
  }

  // custom_artifacts_configuration - computed: true, optional: true, required: false
  private _customArtifactsConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList(this, "custom_artifacts_configuration", false);
  public get customArtifactsConfiguration() {
    return this._customArtifactsConfiguration;
  }
  public putCustomArtifactsConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration[] | cdktn.IResolvable) {
    this._customArtifactsConfiguration.internalValue = value;
  }
  public resetCustomArtifactsConfiguration() {
    this._customArtifactsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customArtifactsConfigurationInput() {
    return this._customArtifactsConfiguration.internalValue;
  }

  // deploy_as_application_configuration - computed: true, optional: true, required: false
  private _deployAsApplicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference(this, "deploy_as_application_configuration");
  public get deployAsApplicationConfiguration() {
    return this._deployAsApplicationConfiguration;
  }
  public putDeployAsApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration) {
    this._deployAsApplicationConfiguration.internalValue = value;
  }
  public resetDeployAsApplicationConfiguration() {
    this._deployAsApplicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployAsApplicationConfigurationInput() {
    return this._deployAsApplicationConfiguration.internalValue;
  }

  // monitoring_configuration - computed: true, optional: true, required: false
  private _monitoringConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
  public putMonitoringConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration) {
    this._monitoringConfiguration.internalValue = value;
  }
  public resetMonitoringConfiguration() {
    this._monitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigurationInput() {
    return this._monitoringConfiguration.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationConfiguration {
  /**
  * The code location and type parameters for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_code_configuration Kinesisanalyticsv2Application#application_code_configuration}
  */
  readonly applicationCodeConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration;
  /**
  * Describes whether customer managed key is enabled and key details for customer data encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_encryption_configuration Kinesisanalyticsv2Application#application_encryption_configuration}
  */
  readonly applicationEncryptionConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration;
  /**
  * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_snapshot_configuration Kinesisanalyticsv2Application#application_snapshot_configuration}
  */
  readonly applicationSnapshotConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration;
  /**
  * Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_system_rollback_configuration Kinesisanalyticsv2Application#application_system_rollback_configuration}
  */
  readonly applicationSystemRollbackConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration;
  /**
  * Describes execution properties for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#environment_properties Kinesisanalyticsv2Application#environment_properties}
  */
  readonly environmentProperties?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties;
  /**
  * The creation and update parameters for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#flink_application_configuration Kinesisanalyticsv2Application#flink_application_configuration}
  */
  readonly flinkApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration;
  /**
  * The creation and update parameters for a SQL-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#sql_application_configuration Kinesisanalyticsv2Application#sql_application_configuration}
  */
  readonly sqlApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration;
  /**
  * The array of descriptions of VPC configurations available to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#vpc_configurations Kinesisanalyticsv2Application#vpc_configurations}
  */
  readonly vpcConfigurations?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations[] | cdktn.IResolvable;
  /**
  * The configuration parameters for a Kinesis Data Analytics Studio notebook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#zeppelin_application_configuration Kinesisanalyticsv2Application#zeppelin_application_configuration}
  */
  readonly zeppelinApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration;
}

export function kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_code_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct!.applicationCodeConfiguration),
    application_encryption_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationToTerraform(struct!.applicationEncryptionConfiguration),
    application_snapshot_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct!.applicationSnapshotConfiguration),
    application_system_rollback_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationToTerraform(struct!.applicationSystemRollbackConfiguration),
    environment_properties: kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct!.environmentProperties),
    flink_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct!.flinkApplicationConfiguration),
    sql_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct!.sqlApplicationConfiguration),
    vpc_configurations: cdktn.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsToTerraform, false)(struct!.vpcConfigurations),
    zeppelin_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationToTerraform(struct!.zeppelinApplicationConfiguration),
  }
}


export function kinesisanalyticsv2ApplicationApplicationConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_code_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToHclTerraform(struct!.applicationCodeConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration",
    },
    application_encryption_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationToHclTerraform(struct!.applicationEncryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration",
    },
    application_snapshot_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToHclTerraform(struct!.applicationSnapshotConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration",
    },
    application_system_rollback_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationToHclTerraform(struct!.applicationSystemRollbackConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration",
    },
    environment_properties: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToHclTerraform(struct!.environmentProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties",
    },
    flink_application_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToHclTerraform(struct!.flinkApplicationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration",
    },
    sql_application_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToHclTerraform(struct!.sqlApplicationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration",
    },
    vpc_configurations: {
      value: cdktn.listMapperHcl(kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsToHclTerraform, false)(struct!.vpcConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList",
    },
    zeppelin_application_configuration: {
      value: kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationToHclTerraform(struct!.zeppelinApplicationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationCodeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCodeConfiguration = this._applicationCodeConfiguration?.internalValue;
    }
    if (this._applicationEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationEncryptionConfiguration = this._applicationEncryptionConfiguration?.internalValue;
    }
    if (this._applicationSnapshotConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSnapshotConfiguration = this._applicationSnapshotConfiguration?.internalValue;
    }
    if (this._applicationSystemRollbackConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSystemRollbackConfiguration = this._applicationSystemRollbackConfiguration?.internalValue;
    }
    if (this._environmentProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentProperties = this._environmentProperties?.internalValue;
    }
    if (this._flinkApplicationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flinkApplicationConfiguration = this._flinkApplicationConfiguration?.internalValue;
    }
    if (this._sqlApplicationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlApplicationConfiguration = this._sqlApplicationConfiguration?.internalValue;
    }
    if (this._vpcConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfigurations = this._vpcConfigurations?.internalValue;
    }
    if (this._zeppelinApplicationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeppelinApplicationConfiguration = this._zeppelinApplicationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationCodeConfiguration.internalValue = undefined;
      this._applicationEncryptionConfiguration.internalValue = undefined;
      this._applicationSnapshotConfiguration.internalValue = undefined;
      this._applicationSystemRollbackConfiguration.internalValue = undefined;
      this._environmentProperties.internalValue = undefined;
      this._flinkApplicationConfiguration.internalValue = undefined;
      this._sqlApplicationConfiguration.internalValue = undefined;
      this._vpcConfigurations.internalValue = undefined;
      this._zeppelinApplicationConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationCodeConfiguration.internalValue = value.applicationCodeConfiguration;
      this._applicationEncryptionConfiguration.internalValue = value.applicationEncryptionConfiguration;
      this._applicationSnapshotConfiguration.internalValue = value.applicationSnapshotConfiguration;
      this._applicationSystemRollbackConfiguration.internalValue = value.applicationSystemRollbackConfiguration;
      this._environmentProperties.internalValue = value.environmentProperties;
      this._flinkApplicationConfiguration.internalValue = value.flinkApplicationConfiguration;
      this._sqlApplicationConfiguration.internalValue = value.sqlApplicationConfiguration;
      this._vpcConfigurations.internalValue = value.vpcConfigurations;
      this._zeppelinApplicationConfiguration.internalValue = value.zeppelinApplicationConfiguration;
    }
  }

  // application_code_configuration - computed: true, optional: true, required: false
  private _applicationCodeConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference(this, "application_code_configuration");
  public get applicationCodeConfiguration() {
    return this._applicationCodeConfiguration;
  }
  public putApplicationCodeConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration) {
    this._applicationCodeConfiguration.internalValue = value;
  }
  public resetApplicationCodeConfiguration() {
    this._applicationCodeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCodeConfigurationInput() {
    return this._applicationCodeConfiguration.internalValue;
  }

  // application_encryption_configuration - computed: true, optional: true, required: false
  private _applicationEncryptionConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference(this, "application_encryption_configuration");
  public get applicationEncryptionConfiguration() {
    return this._applicationEncryptionConfiguration;
  }
  public putApplicationEncryptionConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration) {
    this._applicationEncryptionConfiguration.internalValue = value;
  }
  public resetApplicationEncryptionConfiguration() {
    this._applicationEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEncryptionConfigurationInput() {
    return this._applicationEncryptionConfiguration.internalValue;
  }

  // application_snapshot_configuration - computed: true, optional: true, required: false
  private _applicationSnapshotConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference(this, "application_snapshot_configuration");
  public get applicationSnapshotConfiguration() {
    return this._applicationSnapshotConfiguration;
  }
  public putApplicationSnapshotConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration) {
    this._applicationSnapshotConfiguration.internalValue = value;
  }
  public resetApplicationSnapshotConfiguration() {
    this._applicationSnapshotConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSnapshotConfigurationInput() {
    return this._applicationSnapshotConfiguration.internalValue;
  }

  // application_system_rollback_configuration - computed: true, optional: true, required: false
  private _applicationSystemRollbackConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference(this, "application_system_rollback_configuration");
  public get applicationSystemRollbackConfiguration() {
    return this._applicationSystemRollbackConfiguration;
  }
  public putApplicationSystemRollbackConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration) {
    this._applicationSystemRollbackConfiguration.internalValue = value;
  }
  public resetApplicationSystemRollbackConfiguration() {
    this._applicationSystemRollbackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSystemRollbackConfigurationInput() {
    return this._applicationSystemRollbackConfiguration.internalValue;
  }

  // environment_properties - computed: true, optional: true, required: false
  private _environmentProperties = new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference(this, "environment_properties");
  public get environmentProperties() {
    return this._environmentProperties;
  }
  public putEnvironmentProperties(value: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties) {
    this._environmentProperties.internalValue = value;
  }
  public resetEnvironmentProperties() {
    this._environmentProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentPropertiesInput() {
    return this._environmentProperties.internalValue;
  }

  // flink_application_configuration - computed: true, optional: true, required: false
  private _flinkApplicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference(this, "flink_application_configuration");
  public get flinkApplicationConfiguration() {
    return this._flinkApplicationConfiguration;
  }
  public putFlinkApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration) {
    this._flinkApplicationConfiguration.internalValue = value;
  }
  public resetFlinkApplicationConfiguration() {
    this._flinkApplicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkApplicationConfigurationInput() {
    return this._flinkApplicationConfiguration.internalValue;
  }

  // sql_application_configuration - computed: true, optional: true, required: false
  private _sqlApplicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference(this, "sql_application_configuration");
  public get sqlApplicationConfiguration() {
    return this._sqlApplicationConfiguration;
  }
  public putSqlApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration) {
    this._sqlApplicationConfiguration.internalValue = value;
  }
  public resetSqlApplicationConfiguration() {
    this._sqlApplicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlApplicationConfigurationInput() {
    return this._sqlApplicationConfiguration.internalValue;
  }

  // vpc_configurations - computed: true, optional: true, required: false
  private _vpcConfigurations = new Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList(this, "vpc_configurations", false);
  public get vpcConfigurations() {
    return this._vpcConfigurations;
  }
  public putVpcConfigurations(value: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations[] | cdktn.IResolvable) {
    this._vpcConfigurations.internalValue = value;
  }
  public resetVpcConfigurations() {
    this._vpcConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationsInput() {
    return this._vpcConfigurations.internalValue;
  }

  // zeppelin_application_configuration - computed: true, optional: true, required: false
  private _zeppelinApplicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference(this, "zeppelin_application_configuration");
  public get zeppelinApplicationConfiguration() {
    return this._zeppelinApplicationConfiguration;
  }
  public putZeppelinApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration) {
    this._zeppelinApplicationConfiguration.internalValue = value;
  }
  public resetZeppelinApplicationConfiguration() {
    this._zeppelinApplicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeppelinApplicationConfigurationInput() {
    return this._zeppelinApplicationConfiguration.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration {
  /**
  * The start time for the maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_maintenance_window_start_time Kinesisanalyticsv2Application#application_maintenance_window_start_time}
  */
  readonly applicationMaintenanceWindowStartTime?: string;
}

export function kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_maintenance_window_start_time: cdktn.stringToTerraform(struct!.applicationMaintenanceWindowStartTime),
  }
}


export function kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_maintenance_window_start_time: {
      value: cdktn.stringToHclTerraform(struct!.applicationMaintenanceWindowStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationMaintenanceWindowStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationMaintenanceWindowStartTime = this._applicationMaintenanceWindowStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationMaintenanceWindowStartTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationMaintenanceWindowStartTime = value.applicationMaintenanceWindowStartTime;
    }
  }

  // application_maintenance_window_start_time - computed: true, optional: true, required: false
  private _applicationMaintenanceWindowStartTime?: string; 
  public get applicationMaintenanceWindowStartTime() {
    return this.getStringAttribute('application_maintenance_window_start_time');
  }
  public set applicationMaintenanceWindowStartTime(value: string) {
    this._applicationMaintenanceWindowStartTime = value;
  }
  public resetApplicationMaintenanceWindowStartTime() {
    this._applicationMaintenanceWindowStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationMaintenanceWindowStartTimeInput() {
    return this._applicationMaintenanceWindowStartTime;
  }
}
export interface Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration {
  /**
  * Specifies how the application should be restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_restore_type Kinesisanalyticsv2Application#application_restore_type}
  */
  readonly applicationRestoreType?: string;
  /**
  * The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if RESTORE_FROM_CUSTOM_SNAPSHOT is specified for the ApplicationRestoreType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#snapshot_name Kinesisanalyticsv2Application#snapshot_name}
  */
  readonly snapshotName?: string;
}

export function kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_restore_type: cdktn.stringToTerraform(struct!.applicationRestoreType),
    snapshot_name: cdktn.stringToTerraform(struct!.snapshotName),
  }
}


export function kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_restore_type: {
      value: cdktn.stringToHclTerraform(struct!.applicationRestoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_name: {
      value: cdktn.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationRestoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRestoreType = this._applicationRestoreType;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationRestoreType = undefined;
      this._snapshotName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationRestoreType = value.applicationRestoreType;
      this._snapshotName = value.snapshotName;
    }
  }

  // application_restore_type - computed: true, optional: true, required: false
  private _applicationRestoreType?: string; 
  public get applicationRestoreType() {
    return this.getStringAttribute('application_restore_type');
  }
  public set applicationRestoreType(value: string) {
    this._applicationRestoreType = value;
  }
  public resetApplicationRestoreType() {
    this._applicationRestoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRestoreTypeInput() {
    return this._applicationRestoreType;
  }

  // snapshot_name - computed: true, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }
}
export interface Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration {
  /**
  * When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. Defaults to false. If you update your application without specifying this parameter, AllowNonRestoredState will be set to false, even if it was previously set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#allow_non_restored_state Kinesisanalyticsv2Application#allow_non_restored_state}
  */
  readonly allowNonRestoredState?: boolean | cdktn.IResolvable;
}

export function kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_non_restored_state: cdktn.booleanToTerraform(struct!.allowNonRestoredState),
  }
}


export function kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_non_restored_state: {
      value: cdktn.booleanToHclTerraform(struct!.allowNonRestoredState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNonRestoredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNonRestoredState = this._allowNonRestoredState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNonRestoredState = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNonRestoredState = value.allowNonRestoredState;
    }
  }

  // allow_non_restored_state - computed: true, optional: true, required: false
  private _allowNonRestoredState?: boolean | cdktn.IResolvable; 
  public get allowNonRestoredState() {
    return this.getBooleanAttribute('allow_non_restored_state');
  }
  public set allowNonRestoredState(value: boolean | cdktn.IResolvable) {
    this._allowNonRestoredState = value;
  }
  public resetAllowNonRestoredState() {
    this._allowNonRestoredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonRestoredStateInput() {
    return this._allowNonRestoredState;
  }
}
export interface Kinesisanalyticsv2ApplicationRunConfiguration {
  /**
  * Describes the restore behavior of a restarting application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#application_restore_configuration Kinesisanalyticsv2Application#application_restore_configuration}
  */
  readonly applicationRestoreConfiguration?: Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration;
  /**
  * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#flink_run_configuration Kinesisanalyticsv2Application#flink_run_configuration}
  */
  readonly flinkRunConfiguration?: Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration;
}

export function kinesisanalyticsv2ApplicationRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationRunConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_restore_configuration: kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationToTerraform(struct!.applicationRestoreConfiguration),
    flink_run_configuration: kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationToTerraform(struct!.flinkRunConfiguration),
  }
}


export function kinesisanalyticsv2ApplicationRunConfigurationToHclTerraform(struct?: Kinesisanalyticsv2ApplicationRunConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_restore_configuration: {
      value: kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationToHclTerraform(struct!.applicationRestoreConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration",
    },
    flink_run_configuration: {
      value: kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationToHclTerraform(struct!.flinkRunConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2ApplicationRunConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2ApplicationRunConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationRestoreConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRestoreConfiguration = this._applicationRestoreConfiguration?.internalValue;
    }
    if (this._flinkRunConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flinkRunConfiguration = this._flinkRunConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2ApplicationRunConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationRestoreConfiguration.internalValue = undefined;
      this._flinkRunConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationRestoreConfiguration.internalValue = value.applicationRestoreConfiguration;
      this._flinkRunConfiguration.internalValue = value.flinkRunConfiguration;
    }
  }

  // application_restore_configuration - computed: true, optional: true, required: false
  private _applicationRestoreConfiguration = new Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference(this, "application_restore_configuration");
  public get applicationRestoreConfiguration() {
    return this._applicationRestoreConfiguration;
  }
  public putApplicationRestoreConfiguration(value: Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration) {
    this._applicationRestoreConfiguration.internalValue = value;
  }
  public resetApplicationRestoreConfiguration() {
    this._applicationRestoreConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRestoreConfigurationInput() {
    return this._applicationRestoreConfiguration.internalValue;
  }

  // flink_run_configuration - computed: true, optional: true, required: false
  private _flinkRunConfiguration = new Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference(this, "flink_run_configuration");
  public get flinkRunConfiguration() {
    return this._flinkRunConfiguration;
  }
  public putFlinkRunConfiguration(value: Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration) {
    this._flinkRunConfiguration.internalValue = value;
  }
  public resetFlinkRunConfiguration() {
    this._flinkRunConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkRunConfigurationInput() {
    return this._flinkRunConfiguration.internalValue;
  }
}
export interface Kinesisanalyticsv2ApplicationTags {
  /**
  * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#key Kinesisanalyticsv2Application#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that's 0 to 256 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#value Kinesisanalyticsv2Application#value}
  */
  readonly value?: string;
}

export function kinesisanalyticsv2ApplicationTagsToTerraform(struct?: Kinesisanalyticsv2ApplicationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function kinesisanalyticsv2ApplicationTagsToHclTerraform(struct?: Kinesisanalyticsv2ApplicationTags | cdktn.IResolvable): any {
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

export class Kinesisanalyticsv2ApplicationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Kinesisanalyticsv2ApplicationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Kinesisanalyticsv2ApplicationTags | cdktn.IResolvable | undefined) {
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

export class Kinesisanalyticsv2ApplicationTagsList extends cdktn.ComplexList {
  public internalValue? : Kinesisanalyticsv2ApplicationTags[] | cdktn.IResolvable

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
  public get(index: number): Kinesisanalyticsv2ApplicationTagsOutputReference {
    return new Kinesisanalyticsv2ApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application awscc_kinesisanalyticsv2_application}
*/
export class Kinesisanalyticsv2Application extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kinesisanalyticsv2_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Kinesisanalyticsv2Application resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Kinesisanalyticsv2Application to import
  * @param importFromId The id of the existing Kinesisanalyticsv2Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Kinesisanalyticsv2Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kinesisanalyticsv2_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/kinesisanalyticsv2_application awscc_kinesisanalyticsv2_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Kinesisanalyticsv2ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kinesisanalyticsv2_application',
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
    this._applicationConfiguration.internalValue = config.applicationConfiguration;
    this._applicationDescription = config.applicationDescription;
    this._applicationMaintenanceConfiguration.internalValue = config.applicationMaintenanceConfiguration;
    this._applicationMode = config.applicationMode;
    this._applicationName = config.applicationName;
    this._runConfiguration.internalValue = config.runConfiguration;
    this._runtimeEnvironment = config.runtimeEnvironment;
    this._serviceExecutionRole = config.serviceExecutionRole;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_configuration - computed: true, optional: true, required: false
  private _applicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference(this, "application_configuration");
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public putApplicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfiguration) {
    this._applicationConfiguration.internalValue = value;
  }
  public resetApplicationConfiguration() {
    this._applicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigurationInput() {
    return this._applicationConfiguration.internalValue;
  }

  // application_description - computed: true, optional: true, required: false
  private _applicationDescription?: string; 
  public get applicationDescription() {
    return this.getStringAttribute('application_description');
  }
  public set applicationDescription(value: string) {
    this._applicationDescription = value;
  }
  public resetApplicationDescription() {
    this._applicationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDescriptionInput() {
    return this._applicationDescription;
  }

  // application_maintenance_configuration - computed: true, optional: true, required: false
  private _applicationMaintenanceConfiguration = new Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference(this, "application_maintenance_configuration");
  public get applicationMaintenanceConfiguration() {
    return this._applicationMaintenanceConfiguration;
  }
  public putApplicationMaintenanceConfiguration(value: Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration) {
    this._applicationMaintenanceConfiguration.internalValue = value;
  }
  public resetApplicationMaintenanceConfiguration() {
    this._applicationMaintenanceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationMaintenanceConfigurationInput() {
    return this._applicationMaintenanceConfiguration.internalValue;
  }

  // application_mode - computed: true, optional: true, required: false
  private _applicationMode?: string; 
  public get applicationMode() {
    return this.getStringAttribute('application_mode');
  }
  public set applicationMode(value: string) {
    this._applicationMode = value;
  }
  public resetApplicationMode() {
    this._applicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationModeInput() {
    return this._applicationMode;
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // run_configuration - computed: true, optional: true, required: false
  private _runConfiguration = new Kinesisanalyticsv2ApplicationRunConfigurationOutputReference(this, "run_configuration");
  public get runConfiguration() {
    return this._runConfiguration;
  }
  public putRunConfiguration(value: Kinesisanalyticsv2ApplicationRunConfiguration) {
    this._runConfiguration.internalValue = value;
  }
  public resetRunConfiguration() {
    this._runConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runConfigurationInput() {
    return this._runConfiguration.internalValue;
  }

  // runtime_environment - computed: false, optional: false, required: true
  private _runtimeEnvironment?: string; 
  public get runtimeEnvironment() {
    return this.getStringAttribute('runtime_environment');
  }
  public set runtimeEnvironment(value: string) {
    this._runtimeEnvironment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentInput() {
    return this._runtimeEnvironment;
  }

  // service_execution_role - computed: false, optional: false, required: true
  private _serviceExecutionRole?: string; 
  public get serviceExecutionRole() {
    return this.getStringAttribute('service_execution_role');
  }
  public set serviceExecutionRole(value: string) {
    this._serviceExecutionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExecutionRoleInput() {
    return this._serviceExecutionRole;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Kinesisanalyticsv2ApplicationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Kinesisanalyticsv2ApplicationTags[] | cdktn.IResolvable) {
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
      application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(this._applicationConfiguration.internalValue),
      application_description: cdktn.stringToTerraform(this._applicationDescription),
      application_maintenance_configuration: kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationToTerraform(this._applicationMaintenanceConfiguration.internalValue),
      application_mode: cdktn.stringToTerraform(this._applicationMode),
      application_name: cdktn.stringToTerraform(this._applicationName),
      run_configuration: kinesisanalyticsv2ApplicationRunConfigurationToTerraform(this._runConfiguration.internalValue),
      runtime_environment: cdktn.stringToTerraform(this._runtimeEnvironment),
      service_execution_role: cdktn.stringToTerraform(this._serviceExecutionRole),
      tags: cdktn.listMapper(kinesisanalyticsv2ApplicationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_configuration: {
        value: kinesisanalyticsv2ApplicationApplicationConfigurationToHclTerraform(this._applicationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Kinesisanalyticsv2ApplicationApplicationConfiguration",
      },
      application_description: {
        value: cdktn.stringToHclTerraform(this._applicationDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_maintenance_configuration: {
        value: kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationToHclTerraform(this._applicationMaintenanceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration",
      },
      application_mode: {
        value: cdktn.stringToHclTerraform(this._applicationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktn.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_configuration: {
        value: kinesisanalyticsv2ApplicationRunConfigurationToHclTerraform(this._runConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Kinesisanalyticsv2ApplicationRunConfiguration",
      },
      runtime_environment: {
        value: cdktn.stringToHclTerraform(this._runtimeEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_execution_role: {
        value: cdktn.stringToHclTerraform(this._serviceExecutionRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(kinesisanalyticsv2ApplicationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Kinesisanalyticsv2ApplicationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
