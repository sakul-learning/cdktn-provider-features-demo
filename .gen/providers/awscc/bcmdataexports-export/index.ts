// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BcmdataexportsExportConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}
  */
  readonly export: BcmdataexportsExportExport;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}
  */
  readonly tags?: BcmdataexportsExportTags[] | cdktn.IResolvable;
}
export interface BcmdataexportsExportExportDataQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}
  */
  readonly queryStatement: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}
  */
  readonly tableConfigurations?: { [key: string]: { [key: string]: string } } | cdktn.IResolvable;
}

export function bcmdataexportsExportExportDataQueryToTerraform(struct?: BcmdataexportsExportExportDataQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_statement: cdktn.stringToTerraform(struct!.queryStatement),
    table_configurations: cdktn.hashMapper(cdktn.hashMapper(cdktn.stringToTerraform))(struct!.tableConfigurations),
  }
}


export function bcmdataexportsExportExportDataQueryToHclTerraform(struct?: BcmdataexportsExportExportDataQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_statement: {
      value: cdktn.stringToHclTerraform(struct!.queryStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_configurations: {
      value: cdktn.hashMapperHcl(cdktn.hashMapperHcl(cdktn.stringToHclTerraform))(struct!.tableConfigurations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportDataQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BcmdataexportsExportExportDataQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStatement = this._queryStatement;
    }
    if (this._tableConfigurations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfigurations = this._tableConfigurations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportDataQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryStatement = undefined;
      this._tableConfigurations = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryStatement = value.queryStatement;
      this._tableConfigurations = value.tableConfigurations;
    }
  }

  // query_statement - computed: false, optional: false, required: true
  private _queryStatement?: string;
  public get queryStatement() {
    return this.getStringAttribute('query_statement');
  }
  public set queryStatement(value: string) {
    this._queryStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStatementInput() {
    return this._queryStatement;
  }

  // table_configurations - computed: true, optional: true, required: false
  private _tableConfigurations?: { [key: string]: { [key: string]: string } } | cdktn.IResolvable;
  public get tableConfigurations() {
    return this.interpolationForAttribute('table_configurations');
  }
  public set tableConfigurations(value: { [key: string]: { [key: string]: string } } | cdktn.IResolvable) {
    this._tableConfigurations = value;
  }
  public resetTableConfigurations() {
    this._tableConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigurationsInput() {
    return this._tableConfigurations;
  }
}
export interface BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}
  */
  readonly compression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}
  */
  readonly outputType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}
  */
  readonly overwrite: string;
}

export function bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    format: cdktn.stringToTerraform(struct!.format),
    output_type: cdktn.stringToTerraform(struct!.outputType),
    overwrite: cdktn.stringToTerraform(struct!.overwrite),
  }
}


export function bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToHclTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_type: {
      value: cdktn.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktn.stringToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._format = undefined;
      this._outputType = undefined;
      this._overwrite = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression = value.compression;
      this._format = value.format;
      this._outputType = value.outputType;
      this._overwrite = value.overwrite;
    }
  }

  // compression - computed: false, optional: false, required: true
  private _compression?: string;
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string;
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // output_type - computed: false, optional: false, required: true
  private _outputType?: string;
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // overwrite - computed: false, optional: false, required: true
  private _overwrite?: string;
  public get overwrite() {
    return this.getStringAttribute('overwrite');
  }
  public set overwrite(value: string) {
    this._overwrite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }
}
export interface BcmdataexportsExportExportDestinationConfigurationsS3Destination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#s3_bucket_owner BcmdataexportsExport#s3_bucket_owner}
  */
  readonly s3BucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#s3_output_configurations BcmdataexportsExport#s3_output_configurations}
  */
  readonly s3OutputConfigurations: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}
  */
  readonly s3Prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}
  */
  readonly s3Region: string;
}

export function bcmdataexportsExportExportDestinationConfigurationsS3DestinationToTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_bucket_owner: cdktn.stringToTerraform(struct!.s3BucketOwner),
    s3_output_configurations: bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToTerraform(struct!.s3OutputConfigurations),
    s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
    s3_region: cdktn.stringToTerraform(struct!.s3Region),
  }
}


export function bcmdataexportsExportExportDestinationConfigurationsS3DestinationToHclTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_configurations: {
      value: bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToHclTerraform(struct!.s3OutputConfigurations),
      isBlock: true,
      type: "struct",
      storageClassType: "BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations",
    },
    s3_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktn.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3BucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketOwner = this._s3BucketOwner;
    }
    if (this._s3OutputConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputConfigurations = this._s3OutputConfigurations?.internalValue;
    }
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Bucket = undefined;
      this._s3BucketOwner = undefined;
      this._s3OutputConfigurations.internalValue = undefined;
      this._s3Prefix = undefined;
      this._s3Region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Bucket = value.s3Bucket;
      this._s3BucketOwner = value.s3BucketOwner;
      this._s3OutputConfigurations.internalValue = value.s3OutputConfigurations;
      this._s3Prefix = value.s3Prefix;
      this._s3Region = value.s3Region;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string;
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_bucket_owner - computed: true, optional: true, required: false
  private _s3BucketOwner?: string;
  public get s3BucketOwner() {
    return this.getStringAttribute('s3_bucket_owner');
  }
  public set s3BucketOwner(value: string) {
    this._s3BucketOwner = value;
  }
  public resetS3BucketOwner() {
    this._s3BucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketOwnerInput() {
    return this._s3BucketOwner;
  }

  // s3_output_configurations - computed: false, optional: false, required: true
  private _s3OutputConfigurations = new BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference(this, "s3_output_configurations");
  public get s3OutputConfigurations() {
    return this._s3OutputConfigurations;
  }
  public putS3OutputConfigurations(value: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations) {
    this._s3OutputConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputConfigurationsInput() {
    return this._s3OutputConfigurations.internalValue;
  }

  // s3_prefix - computed: false, optional: false, required: true
  private _s3Prefix?: string;
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string;
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }
}
export interface BcmdataexportsExportExportDestinationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#s3_destination BcmdataexportsExport#s3_destination}
  */
  readonly s3Destination: BcmdataexportsExportExportDestinationConfigurationsS3Destination;
}

export function bcmdataexportsExportExportDestinationConfigurationsToTerraform(struct?: BcmdataexportsExportExportDestinationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_destination: bcmdataexportsExportExportDestinationConfigurationsS3DestinationToTerraform(struct!.s3Destination),
  }
}


export function bcmdataexportsExportExportDestinationConfigurationsToHclTerraform(struct?: BcmdataexportsExportExportDestinationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_destination: {
      value: bcmdataexportsExportExportDestinationConfigurationsS3DestinationToHclTerraform(struct!.s3Destination),
      isBlock: true,
      type: "struct",
      storageClassType: "BcmdataexportsExportExportDestinationConfigurationsS3Destination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportDestinationConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BcmdataexportsExportExportDestinationConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Destination = this._s3Destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportDestinationConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Destination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Destination.internalValue = value.s3Destination;
    }
  }

  // s3_destination - computed: false, optional: false, required: true
  private _s3Destination = new BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: BcmdataexportsExportExportDestinationConfigurationsS3Destination) {
    this._s3Destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }
}
export interface BcmdataexportsExportExportRefreshCadence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}
  */
  readonly frequency: string;
}

export function bcmdataexportsExportExportRefreshCadenceToTerraform(struct?: BcmdataexportsExportExportRefreshCadence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
  }
}


export function bcmdataexportsExportExportRefreshCadenceToHclTerraform(struct?: BcmdataexportsExportExportRefreshCadence | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportRefreshCadenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BcmdataexportsExportExportRefreshCadence | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExportRefreshCadence | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string;
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BcmdataexportsExportExport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#data_query BcmdataexportsExport#data_query}
  */
  readonly dataQuery: BcmdataexportsExportExportDataQuery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#destination_configurations BcmdataexportsExport#destination_configurations}
  */
  readonly destinationConfigurations: BcmdataexportsExportExportDestinationConfigurations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#refresh_cadence BcmdataexportsExport#refresh_cadence}
  */
  readonly refreshCadence: BcmdataexportsExportExportRefreshCadence;
}

export function bcmdataexportsExportExportToTerraform(struct?: BcmdataexportsExportExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_query: bcmdataexportsExportExportDataQueryToTerraform(struct!.dataQuery),
    description: cdktn.stringToTerraform(struct!.description),
    destination_configurations: bcmdataexportsExportExportDestinationConfigurationsToTerraform(struct!.destinationConfigurations),
    name: cdktn.stringToTerraform(struct!.name),
    refresh_cadence: bcmdataexportsExportExportRefreshCadenceToTerraform(struct!.refreshCadence),
  }
}


export function bcmdataexportsExportExportToHclTerraform(struct?: BcmdataexportsExportExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_query: {
      value: bcmdataexportsExportExportDataQueryToHclTerraform(struct!.dataQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "BcmdataexportsExportExportDataQuery",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_configurations: {
      value: bcmdataexportsExportExportDestinationConfigurationsToHclTerraform(struct!.destinationConfigurations),
      isBlock: true,
      type: "struct",
      storageClassType: "BcmdataexportsExportExportDestinationConfigurations",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_cadence: {
      value: bcmdataexportsExportExportRefreshCadenceToHclTerraform(struct!.refreshCadence),
      isBlock: true,
      type: "struct",
      storageClassType: "BcmdataexportsExportExportRefreshCadence",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BcmdataexportsExportExportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BcmdataexportsExportExport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataQuery = this._dataQuery?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConfigurations = this._destinationConfigurations?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._refreshCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshCadence = this._refreshCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BcmdataexportsExportExport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataQuery.internalValue = undefined;
      this._description = undefined;
      this._destinationConfigurations.internalValue = undefined;
      this._name = undefined;
      this._refreshCadence.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataQuery.internalValue = value.dataQuery;
      this._description = value.description;
      this._destinationConfigurations.internalValue = value.destinationConfigurations;
      this._name = value.name;
      this._refreshCadence.internalValue = value.refreshCadence;
    }
  }

  // data_query - computed: false, optional: false, required: true
  private _dataQuery = new BcmdataexportsExportExportDataQueryOutputReference(this, "data_query");
  public get dataQuery() {
    return this._dataQuery;
  }
  public putDataQuery(value: BcmdataexportsExportExportDataQuery) {
    this._dataQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQueryInput() {
    return this._dataQuery.internalValue;
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

  // destination_configurations - computed: false, optional: false, required: true
  private _destinationConfigurations = new BcmdataexportsExportExportDestinationConfigurationsOutputReference(this, "destination_configurations");
  public get destinationConfigurations() {
    return this._destinationConfigurations;
  }
  public putDestinationConfigurations(value: BcmdataexportsExportExportDestinationConfigurations) {
    this._destinationConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigurationsInput() {
    return this._destinationConfigurations.internalValue;
  }

  // export_arn - computed: true, optional: false, required: false
  public get exportArn() {
    return this.getStringAttribute('export_arn');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // refresh_cadence - computed: false, optional: false, required: true
  private _refreshCadence = new BcmdataexportsExportExportRefreshCadenceOutputReference(this, "refresh_cadence");
  public get refreshCadence() {
    return this._refreshCadence;
  }
  public putRefreshCadence(value: BcmdataexportsExportExportRefreshCadence) {
    this._refreshCadence.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshCadenceInput() {
    return this._refreshCadence.internalValue;
  }
}
export interface BcmdataexportsExportTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#key BcmdataexportsExport#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#value BcmdataexportsExport#value}
  */
  readonly value?: string;
}

export function bcmdataexportsExportTagsToTerraform(struct?: BcmdataexportsExportTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bcmdataexportsExportTagsToHclTerraform(struct?: BcmdataexportsExportTags | cdktn.IResolvable): any {
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

export class BcmdataexportsExportTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BcmdataexportsExportTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BcmdataexportsExportTags | cdktn.IResolvable | undefined) {
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

export class BcmdataexportsExportTagsList extends cdktn.ComplexList {
  public internalValue? : BcmdataexportsExportTags[] | cdktn.IResolvable

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
  public get(index: number): BcmdataexportsExportTagsOutputReference {
    return new BcmdataexportsExportTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export awscc_bcmdataexports_export}
*/
export class BcmdataexportsExport extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bcmdataexports_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BcmdataexportsExport resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BcmdataexportsExport to import
  * @param importFromId The id of the existing BcmdataexportsExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BcmdataexportsExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bcmdataexports_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bcmdataexports_export awscc_bcmdataexports_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BcmdataexportsExportConfig
  */
  public constructor(scope: Construct, id: string, config: BcmdataexportsExportConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bcmdataexports_export',
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
    this._export.internalValue = config.export;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export - computed: false, optional: false, required: true
  private _export = new BcmdataexportsExportExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }
  public putExport(value: BcmdataexportsExportExport) {
    this._export.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export.internalValue;
  }

  // export_arn - computed: true, optional: false, required: false
  public get exportArn() {
    return this.getStringAttribute('export_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BcmdataexportsExportTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BcmdataexportsExportTags[] | cdktn.IResolvable) {
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
      export: bcmdataexportsExportExportToTerraform(this._export.internalValue),
      tags: cdktn.listMapper(bcmdataexportsExportTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export: {
        value: bcmdataexportsExportExportToHclTerraform(this._export.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BcmdataexportsExportExport",
      },
      tags: {
        value: cdktn.listMapperHcl(bcmdataexportsExportTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BcmdataexportsExportTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
