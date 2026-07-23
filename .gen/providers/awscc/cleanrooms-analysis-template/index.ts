// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CleanroomsAnalysisTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * The member who can query can provide this placeholder for a literal data value in an analysis template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#analysis_parameters CleanroomsAnalysisTemplate#analysis_parameters}
  */
  readonly analysisParameters?: CleanroomsAnalysisTemplateAnalysisParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#description CleanroomsAnalysisTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#error_message_configuration CleanroomsAnalysisTemplate#error_message_configuration}
  */
  readonly errorMessageConfiguration?: CleanroomsAnalysisTemplateErrorMessageConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#format CleanroomsAnalysisTemplate#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#membership_identifier CleanroomsAnalysisTemplate#membership_identifier}
  */
  readonly membershipIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#schema CleanroomsAnalysisTemplate#schema}
  */
  readonly schema?: CleanroomsAnalysisTemplateSchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#source CleanroomsAnalysisTemplate#source}
  */
  readonly source: CleanroomsAnalysisTemplateSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#source_metadata CleanroomsAnalysisTemplate#source_metadata}
  */
  readonly sourceMetadata?: CleanroomsAnalysisTemplateSourceMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#synthetic_data_parameters CleanroomsAnalysisTemplate#synthetic_data_parameters}
  */
  readonly syntheticDataParameters?: CleanroomsAnalysisTemplateSyntheticDataParameters;
  /**
  * An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#tags CleanroomsAnalysisTemplate#tags}
  */
  readonly tags?: CleanroomsAnalysisTemplateTags[] | cdktn.IResolvable;
}
export interface CleanroomsAnalysisTemplateAnalysisParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#default_value CleanroomsAnalysisTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}
  */
  readonly type?: string;
}

export function cleanroomsAnalysisTemplateAnalysisParametersToTerraform(struct?: CleanroomsAnalysisTemplateAnalysisParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function cleanroomsAnalysisTemplateAnalysisParametersToHclTerraform(struct?: CleanroomsAnalysisTemplateAnalysisParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
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

export class CleanroomsAnalysisTemplateAnalysisParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsAnalysisTemplateAnalysisParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateAnalysisParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

export class CleanroomsAnalysisTemplateAnalysisParametersList extends cdktn.ComplexList {
  public internalValue? : CleanroomsAnalysisTemplateAnalysisParameters[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsAnalysisTemplateAnalysisParametersOutputReference {
    return new CleanroomsAnalysisTemplateAnalysisParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsAnalysisTemplateErrorMessageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}
  */
  readonly type?: string;
}

export function cleanroomsAnalysisTemplateErrorMessageConfigurationToTerraform(struct?: CleanroomsAnalysisTemplateErrorMessageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function cleanroomsAnalysisTemplateErrorMessageConfigurationToHclTerraform(struct?: CleanroomsAnalysisTemplateErrorMessageConfiguration | cdktn.IResolvable): any {
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

export class CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateErrorMessageConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsAnalysisTemplateErrorMessageConfiguration | cdktn.IResolvable | undefined) {
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
export interface CleanroomsAnalysisTemplateSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#referenced_tables CleanroomsAnalysisTemplate#referenced_tables}
  */
  readonly referencedTables?: string[];
}

export function cleanroomsAnalysisTemplateSchemaToTerraform(struct?: CleanroomsAnalysisTemplateSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    referenced_tables: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.referencedTables),
  }
}


export function cleanroomsAnalysisTemplateSchemaToHclTerraform(struct?: CleanroomsAnalysisTemplateSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    referenced_tables: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.referencedTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referencedTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedTables = this._referencedTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referencedTables = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referencedTables = value.referencedTables;
    }
  }

  // referenced_tables - computed: true, optional: true, required: false
  private _referencedTables?: string[]; 
  public get referencedTables() {
    return this.getListAttribute('referenced_tables');
  }
  public set referencedTables(value: string[]) {
    this._referencedTables = value;
  }
  public resetReferencedTables() {
    this._referencedTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedTablesInput() {
    return this._referencedTables;
  }
}
export interface CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}
  */
  readonly key?: string;
}

export function cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationToTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationToHclTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}
export interface CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}
  */
  readonly location?: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation;
}

export function cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsToTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationToTerraform(struct!.location),
  }
}


export function cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsToHclTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location.internalValue = value.location;
    }
  }

  // location - computed: true, optional: true, required: false
  private _location = new CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}

export class CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList extends cdktn.ComplexList {
  public internalValue? : CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference {
    return new CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}
  */
  readonly key?: string;
}

export function cleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationToTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function cleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationToHclTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}
export interface CleanroomsAnalysisTemplateSourceArtifactsEntryPoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}
  */
  readonly location?: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation;
}

export function cleanroomsAnalysisTemplateSourceArtifactsEntryPointToTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationToTerraform(struct!.location),
  }
}


export function cleanroomsAnalysisTemplateSourceArtifactsEntryPointToHclTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: cleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSourceArtifactsEntryPoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location.internalValue = value.location;
    }
  }

  // location - computed: true, optional: true, required: false
  private _location = new CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface CleanroomsAnalysisTemplateSourceArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#additional_artifacts CleanroomsAnalysisTemplate#additional_artifacts}
  */
  readonly additionalArtifacts?: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#entry_point CleanroomsAnalysisTemplate#entry_point}
  */
  readonly entryPoint?: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#role_arn CleanroomsAnalysisTemplate#role_arn}
  */
  readonly roleArn?: string;
}

export function cleanroomsAnalysisTemplateSourceArtifactsToTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_artifacts: cdktn.listMapper(cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsToTerraform, false)(struct!.additionalArtifacts),
    entry_point: cleanroomsAnalysisTemplateSourceArtifactsEntryPointToTerraform(struct!.entryPoint),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function cleanroomsAnalysisTemplateSourceArtifactsToHclTerraform(struct?: CleanroomsAnalysisTemplateSourceArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_artifacts: {
      value: cdktn.listMapperHcl(cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsToHclTerraform, false)(struct!.additionalArtifacts),
      isBlock: true,
      type: "list",
      storageClassType: "CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList",
    },
    entry_point: {
      value: cleanroomsAnalysisTemplateSourceArtifactsEntryPointToHclTerraform(struct!.entryPoint),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsAnalysisTemplateSourceArtifactsEntryPoint",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSourceArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalArtifacts = this._additionalArtifacts?.internalValue;
    }
    if (this._entryPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSourceArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalArtifacts.internalValue = undefined;
      this._entryPoint.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalArtifacts.internalValue = value.additionalArtifacts;
      this._entryPoint.internalValue = value.entryPoint;
      this._roleArn = value.roleArn;
    }
  }

  // additional_artifacts - computed: true, optional: true, required: false
  private _additionalArtifacts = new CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList(this, "additional_artifacts", false);
  public get additionalArtifacts() {
    return this._additionalArtifacts;
  }
  public putAdditionalArtifacts(value: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts[] | cdktn.IResolvable) {
    this._additionalArtifacts.internalValue = value;
  }
  public resetAdditionalArtifacts() {
    this._additionalArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalArtifactsInput() {
    return this._additionalArtifacts.internalValue;
  }

  // entry_point - computed: true, optional: true, required: false
  private _entryPoint = new CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference(this, "entry_point");
  public get entryPoint() {
    return this._entryPoint;
  }
  public putEntryPoint(value: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint) {
    this._entryPoint.internalValue = value;
  }
  public resetEntryPoint() {
    this._entryPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface CleanroomsAnalysisTemplateSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}
  */
  readonly artifacts?: CleanroomsAnalysisTemplateSourceArtifacts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#text CleanroomsAnalysisTemplate#text}
  */
  readonly text?: string;
}

export function cleanroomsAnalysisTemplateSourceToTerraform(struct?: CleanroomsAnalysisTemplateSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifacts: cleanroomsAnalysisTemplateSourceArtifactsToTerraform(struct!.artifacts),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function cleanroomsAnalysisTemplateSourceToHclTerraform(struct?: CleanroomsAnalysisTemplateSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifacts: {
      value: cleanroomsAnalysisTemplateSourceArtifactsToHclTerraform(struct!.artifacts),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsAnalysisTemplateSourceArtifacts",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifacts = this._artifacts?.internalValue;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifacts.internalValue = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifacts.internalValue = value.artifacts;
      this._text = value.text;
    }
  }

  // artifacts - computed: true, optional: true, required: false
  private _artifacts = new CleanroomsAnalysisTemplateSourceArtifactsOutputReference(this, "artifacts");
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: CleanroomsAnalysisTemplateSourceArtifacts) {
    this._artifacts.internalValue = value;
  }
  public resetArtifacts() {
    this._artifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}
  */
  readonly sha256?: string;
}

export function cleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesToTerraform(struct?: CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sha_256: cdktn.stringToTerraform(struct!.sha256),
  }
}


export function cleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesToHclTerraform(struct?: CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sha_256: {
      value: cdktn.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sha256 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sha256 = value.sha256;
    }
  }

  // sha_256 - computed: true, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha_256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }
}

export class CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList extends cdktn.ComplexList {
  public internalValue? : CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference {
    return new CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}
  */
  readonly sha256?: string;
}

export function cleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashToTerraform(struct?: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sha_256: cdktn.stringToTerraform(struct!.sha256),
  }
}


export function cleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashToHclTerraform(struct?: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sha_256: {
      value: cdktn.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sha256 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sha256 = value.sha256;
    }
  }

  // sha_256 - computed: true, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha_256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }
}
export interface CleanroomsAnalysisTemplateSourceMetadataArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#additional_artifact_hashes CleanroomsAnalysisTemplate#additional_artifact_hashes}
  */
  readonly additionalArtifactHashes?: CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#entry_point_hash CleanroomsAnalysisTemplate#entry_point_hash}
  */
  readonly entryPointHash?: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash;
}

export function cleanroomsAnalysisTemplateSourceMetadataArtifactsToTerraform(struct?: CleanroomsAnalysisTemplateSourceMetadataArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_artifact_hashes: cdktn.listMapper(cleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesToTerraform, false)(struct!.additionalArtifactHashes),
    entry_point_hash: cleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashToTerraform(struct!.entryPointHash),
  }
}


export function cleanroomsAnalysisTemplateSourceMetadataArtifactsToHclTerraform(struct?: CleanroomsAnalysisTemplateSourceMetadataArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_artifact_hashes: {
      value: cdktn.listMapperHcl(cleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesToHclTerraform, false)(struct!.additionalArtifactHashes),
      isBlock: true,
      type: "list",
      storageClassType: "CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList",
    },
    entry_point_hash: {
      value: cleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashToHclTerraform(struct!.entryPointHash),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSourceMetadataArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalArtifactHashes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalArtifactHashes = this._additionalArtifactHashes?.internalValue;
    }
    if (this._entryPointHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPointHash = this._entryPointHash?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSourceMetadataArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalArtifactHashes.internalValue = undefined;
      this._entryPointHash.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalArtifactHashes.internalValue = value.additionalArtifactHashes;
      this._entryPointHash.internalValue = value.entryPointHash;
    }
  }

  // additional_artifact_hashes - computed: true, optional: true, required: false
  private _additionalArtifactHashes = new CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList(this, "additional_artifact_hashes", false);
  public get additionalArtifactHashes() {
    return this._additionalArtifactHashes;
  }
  public putAdditionalArtifactHashes(value: CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes[] | cdktn.IResolvable) {
    this._additionalArtifactHashes.internalValue = value;
  }
  public resetAdditionalArtifactHashes() {
    this._additionalArtifactHashes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalArtifactHashesInput() {
    return this._additionalArtifactHashes.internalValue;
  }

  // entry_point_hash - computed: true, optional: true, required: false
  private _entryPointHash = new CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference(this, "entry_point_hash");
  public get entryPointHash() {
    return this._entryPointHash;
  }
  public putEntryPointHash(value: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash) {
    this._entryPointHash.internalValue = value;
  }
  public resetEntryPointHash() {
    this._entryPointHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointHashInput() {
    return this._entryPointHash.internalValue;
  }
}
export interface CleanroomsAnalysisTemplateSourceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}
  */
  readonly artifacts?: CleanroomsAnalysisTemplateSourceMetadataArtifacts;
}

export function cleanroomsAnalysisTemplateSourceMetadataToTerraform(struct?: CleanroomsAnalysisTemplateSourceMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifacts: cleanroomsAnalysisTemplateSourceMetadataArtifactsToTerraform(struct!.artifacts),
  }
}


export function cleanroomsAnalysisTemplateSourceMetadataToHclTerraform(struct?: CleanroomsAnalysisTemplateSourceMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifacts: {
      value: cleanroomsAnalysisTemplateSourceMetadataArtifactsToHclTerraform(struct!.artifacts),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsAnalysisTemplateSourceMetadataArtifacts",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSourceMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSourceMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifacts = this._artifacts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSourceMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifacts.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifacts.internalValue = value.artifacts;
    }
  }

  // artifacts - computed: true, optional: true, required: false
  private _artifacts = new CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference(this, "artifacts");
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: CleanroomsAnalysisTemplateSourceMetadataArtifacts) {
    this._artifacts.internalValue = value;
  }
  public resetArtifacts() {
    this._artifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }
}
export interface CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#column_name CleanroomsAnalysisTemplate#column_name}
  */
  readonly columnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#column_type CleanroomsAnalysisTemplate#column_type}
  */
  readonly columnType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#is_predictive_value CleanroomsAnalysisTemplate#is_predictive_value}
  */
  readonly isPredictiveValue?: boolean | cdktn.IResolvable;
}

export function cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingToTerraform(struct?: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_name: cdktn.stringToTerraform(struct!.columnName),
    column_type: cdktn.stringToTerraform(struct!.columnType),
    is_predictive_value: cdktn.booleanToTerraform(struct!.isPredictiveValue),
  }
}


export function cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingToHclTerraform(struct?: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_name: {
      value: cdktn.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_type: {
      value: cdktn.stringToHclTerraform(struct!.columnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_predictive_value: {
      value: cdktn.booleanToHclTerraform(struct!.isPredictiveValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._columnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnType = this._columnType;
    }
    if (this._isPredictiveValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPredictiveValue = this._isPredictiveValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._columnType = undefined;
      this._isPredictiveValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._columnType = value.columnType;
      this._isPredictiveValue = value.isPredictiveValue;
    }
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // column_type - computed: true, optional: true, required: false
  private _columnType?: string; 
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
  public set columnType(value: string) {
    this._columnType = value;
  }
  public resetColumnType() {
    this._columnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTypeInput() {
    return this._columnType;
  }

  // is_predictive_value - computed: true, optional: true, required: false
  private _isPredictiveValue?: boolean | cdktn.IResolvable; 
  public get isPredictiveValue() {
    return this.getBooleanAttribute('is_predictive_value');
  }
  public set isPredictiveValue(value: boolean | cdktn.IResolvable) {
    this._isPredictiveValue = value;
  }
  public resetIsPredictiveValue() {
    this._isPredictiveValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPredictiveValueInput() {
    return this._isPredictiveValue;
  }
}

export class CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList extends cdktn.ComplexList {
  public internalValue? : CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference {
    return new CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#column_mapping CleanroomsAnalysisTemplate#column_mapping}
  */
  readonly columnMapping?: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping[] | cdktn.IResolvable;
}

export function cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationToTerraform(struct?: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_mapping: cdktn.listMapper(cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingToTerraform, false)(struct!.columnMapping),
  }
}


export function cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationToHclTerraform(struct?: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_mapping: {
      value: cdktn.listMapperHcl(cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingToHclTerraform, false)(struct!.columnMapping),
      isBlock: true,
      type: "list",
      storageClassType: "CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnMapping = this._columnMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnMapping.internalValue = value.columnMapping;
    }
  }

  // column_mapping - computed: true, optional: true, required: false
  private _columnMapping = new CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList(this, "column_mapping", false);
  public get columnMapping() {
    return this._columnMapping;
  }
  public putColumnMapping(value: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping[] | cdktn.IResolvable) {
    this._columnMapping.internalValue = value;
  }
  public resetColumnMapping() {
    this._columnMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnMappingInput() {
    return this._columnMapping.internalValue;
  }
}
export interface CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#column_classification CleanroomsAnalysisTemplate#column_classification}
  */
  readonly columnClassification?: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#epsilon CleanroomsAnalysisTemplate#epsilon}
  */
  readonly epsilon?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#max_membership_inference_attack_score CleanroomsAnalysisTemplate#max_membership_inference_attack_score}
  */
  readonly maxMembershipInferenceAttackScore?: number;
}

export function cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersToTerraform(struct?: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_classification: cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationToTerraform(struct!.columnClassification),
    epsilon: cdktn.numberToTerraform(struct!.epsilon),
    max_membership_inference_attack_score: cdktn.numberToTerraform(struct!.maxMembershipInferenceAttackScore),
  }
}


export function cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersToHclTerraform(struct?: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_classification: {
      value: cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationToHclTerraform(struct!.columnClassification),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification",
    },
    epsilon: {
      value: cdktn.numberToHclTerraform(struct!.epsilon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_membership_inference_attack_score: {
      value: cdktn.numberToHclTerraform(struct!.maxMembershipInferenceAttackScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnClassification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnClassification = this._columnClassification?.internalValue;
    }
    if (this._epsilon !== undefined) {
      hasAnyValues = true;
      internalValueResult.epsilon = this._epsilon;
    }
    if (this._maxMembershipInferenceAttackScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMembershipInferenceAttackScore = this._maxMembershipInferenceAttackScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnClassification.internalValue = undefined;
      this._epsilon = undefined;
      this._maxMembershipInferenceAttackScore = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnClassification.internalValue = value.columnClassification;
      this._epsilon = value.epsilon;
      this._maxMembershipInferenceAttackScore = value.maxMembershipInferenceAttackScore;
    }
  }

  // column_classification - computed: true, optional: true, required: false
  private _columnClassification = new CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference(this, "column_classification");
  public get columnClassification() {
    return this._columnClassification;
  }
  public putColumnClassification(value: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification) {
    this._columnClassification.internalValue = value;
  }
  public resetColumnClassification() {
    this._columnClassification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnClassificationInput() {
    return this._columnClassification.internalValue;
  }

  // epsilon - computed: true, optional: true, required: false
  private _epsilon?: number; 
  public get epsilon() {
    return this.getNumberAttribute('epsilon');
  }
  public set epsilon(value: number) {
    this._epsilon = value;
  }
  public resetEpsilon() {
    this._epsilon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epsilonInput() {
    return this._epsilon;
  }

  // max_membership_inference_attack_score - computed: true, optional: true, required: false
  private _maxMembershipInferenceAttackScore?: number; 
  public get maxMembershipInferenceAttackScore() {
    return this.getNumberAttribute('max_membership_inference_attack_score');
  }
  public set maxMembershipInferenceAttackScore(value: number) {
    this._maxMembershipInferenceAttackScore = value;
  }
  public resetMaxMembershipInferenceAttackScore() {
    this._maxMembershipInferenceAttackScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMembershipInferenceAttackScoreInput() {
    return this._maxMembershipInferenceAttackScore;
  }
}
export interface CleanroomsAnalysisTemplateSyntheticDataParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#ml_synthetic_data_parameters CleanroomsAnalysisTemplate#ml_synthetic_data_parameters}
  */
  readonly mlSyntheticDataParameters?: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters;
}

export function cleanroomsAnalysisTemplateSyntheticDataParametersToTerraform(struct?: CleanroomsAnalysisTemplateSyntheticDataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ml_synthetic_data_parameters: cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersToTerraform(struct!.mlSyntheticDataParameters),
  }
}


export function cleanroomsAnalysisTemplateSyntheticDataParametersToHclTerraform(struct?: CleanroomsAnalysisTemplateSyntheticDataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ml_synthetic_data_parameters: {
      value: cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersToHclTerraform(struct!.mlSyntheticDataParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsAnalysisTemplateSyntheticDataParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mlSyntheticDataParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlSyntheticDataParameters = this._mlSyntheticDataParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsAnalysisTemplateSyntheticDataParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mlSyntheticDataParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mlSyntheticDataParameters.internalValue = value.mlSyntheticDataParameters;
    }
  }

  // ml_synthetic_data_parameters - computed: true, optional: true, required: false
  private _mlSyntheticDataParameters = new CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference(this, "ml_synthetic_data_parameters");
  public get mlSyntheticDataParameters() {
    return this._mlSyntheticDataParameters;
  }
  public putMlSyntheticDataParameters(value: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters) {
    this._mlSyntheticDataParameters.internalValue = value;
  }
  public resetMlSyntheticDataParameters() {
    this._mlSyntheticDataParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlSyntheticDataParametersInput() {
    return this._mlSyntheticDataParameters.internalValue;
  }
}
export interface CleanroomsAnalysisTemplateTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#value CleanroomsAnalysisTemplate#value}
  */
  readonly value?: string;
}

export function cleanroomsAnalysisTemplateTagsToTerraform(struct?: CleanroomsAnalysisTemplateTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cleanroomsAnalysisTemplateTagsToHclTerraform(struct?: CleanroomsAnalysisTemplateTags | cdktn.IResolvable): any {
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

export class CleanroomsAnalysisTemplateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsAnalysisTemplateTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsAnalysisTemplateTags | cdktn.IResolvable | undefined) {
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

export class CleanroomsAnalysisTemplateTagsList extends cdktn.ComplexList {
  public internalValue? : CleanroomsAnalysisTemplateTags[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsAnalysisTemplateTagsOutputReference {
    return new CleanroomsAnalysisTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template awscc_cleanrooms_analysis_template}
*/
export class CleanroomsAnalysisTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cleanrooms_analysis_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CleanroomsAnalysisTemplate to import
  * @param importFromId The id of the existing CleanroomsAnalysisTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CleanroomsAnalysisTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_analysis_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_analysis_template awscc_cleanrooms_analysis_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CleanroomsAnalysisTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CleanroomsAnalysisTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cleanrooms_analysis_template',
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
    this._analysisParameters.internalValue = config.analysisParameters;
    this._description = config.description;
    this._errorMessageConfiguration.internalValue = config.errorMessageConfiguration;
    this._format = config.format;
    this._membershipIdentifier = config.membershipIdentifier;
    this._name = config.name;
    this._schema.internalValue = config.schema;
    this._source.internalValue = config.source;
    this._sourceMetadata.internalValue = config.sourceMetadata;
    this._syntheticDataParameters.internalValue = config.syntheticDataParameters;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analysis_parameters - computed: true, optional: true, required: false
  private _analysisParameters = new CleanroomsAnalysisTemplateAnalysisParametersList(this, "analysis_parameters", false);
  public get analysisParameters() {
    return this._analysisParameters;
  }
  public putAnalysisParameters(value: CleanroomsAnalysisTemplateAnalysisParameters[] | cdktn.IResolvable) {
    this._analysisParameters.internalValue = value;
  }
  public resetAnalysisParameters() {
    this._analysisParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisParametersInput() {
    return this._analysisParameters.internalValue;
  }

  // analysis_template_identifier - computed: true, optional: false, required: false
  public get analysisTemplateIdentifier() {
    return this.getStringAttribute('analysis_template_identifier');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // collaboration_arn - computed: true, optional: false, required: false
  public get collaborationArn() {
    return this.getStringAttribute('collaboration_arn');
  }

  // collaboration_identifier - computed: true, optional: false, required: false
  public get collaborationIdentifier() {
    return this.getStringAttribute('collaboration_identifier');
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

  // error_message_configuration - computed: true, optional: true, required: false
  private _errorMessageConfiguration = new CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference(this, "error_message_configuration");
  public get errorMessageConfiguration() {
    return this._errorMessageConfiguration;
  }
  public putErrorMessageConfiguration(value: CleanroomsAnalysisTemplateErrorMessageConfiguration) {
    this._errorMessageConfiguration.internalValue = value;
  }
  public resetErrorMessageConfiguration() {
    this._errorMessageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageConfigurationInput() {
    return this._errorMessageConfiguration.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // membership_arn - computed: true, optional: false, required: false
  public get membershipArn() {
    return this.getStringAttribute('membership_arn');
  }

  // membership_identifier - computed: false, optional: false, required: true
  private _membershipIdentifier?: string; 
  public get membershipIdentifier() {
    return this.getStringAttribute('membership_identifier');
  }
  public set membershipIdentifier(value: string) {
    this._membershipIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIdentifierInput() {
    return this._membershipIdentifier;
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

  // schema - computed: true, optional: true, required: false
  private _schema = new CleanroomsAnalysisTemplateSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: CleanroomsAnalysisTemplateSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new CleanroomsAnalysisTemplateSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: CleanroomsAnalysisTemplateSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // source_metadata - computed: true, optional: true, required: false
  private _sourceMetadata = new CleanroomsAnalysisTemplateSourceMetadataOutputReference(this, "source_metadata");
  public get sourceMetadata() {
    return this._sourceMetadata;
  }
  public putSourceMetadata(value: CleanroomsAnalysisTemplateSourceMetadata) {
    this._sourceMetadata.internalValue = value;
  }
  public resetSourceMetadata() {
    this._sourceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMetadataInput() {
    return this._sourceMetadata.internalValue;
  }

  // synthetic_data_parameters - computed: true, optional: true, required: false
  private _syntheticDataParameters = new CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference(this, "synthetic_data_parameters");
  public get syntheticDataParameters() {
    return this._syntheticDataParameters;
  }
  public putSyntheticDataParameters(value: CleanroomsAnalysisTemplateSyntheticDataParameters) {
    this._syntheticDataParameters.internalValue = value;
  }
  public resetSyntheticDataParameters() {
    this._syntheticDataParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticDataParametersInput() {
    return this._syntheticDataParameters.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CleanroomsAnalysisTemplateTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CleanroomsAnalysisTemplateTags[] | cdktn.IResolvable) {
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
      analysis_parameters: cdktn.listMapper(cleanroomsAnalysisTemplateAnalysisParametersToTerraform, false)(this._analysisParameters.internalValue),
      description: cdktn.stringToTerraform(this._description),
      error_message_configuration: cleanroomsAnalysisTemplateErrorMessageConfigurationToTerraform(this._errorMessageConfiguration.internalValue),
      format: cdktn.stringToTerraform(this._format),
      membership_identifier: cdktn.stringToTerraform(this._membershipIdentifier),
      name: cdktn.stringToTerraform(this._name),
      schema: cleanroomsAnalysisTemplateSchemaToTerraform(this._schema.internalValue),
      source: cleanroomsAnalysisTemplateSourceToTerraform(this._source.internalValue),
      source_metadata: cleanroomsAnalysisTemplateSourceMetadataToTerraform(this._sourceMetadata.internalValue),
      synthetic_data_parameters: cleanroomsAnalysisTemplateSyntheticDataParametersToTerraform(this._syntheticDataParameters.internalValue),
      tags: cdktn.listMapper(cleanroomsAnalysisTemplateTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analysis_parameters: {
        value: cdktn.listMapperHcl(cleanroomsAnalysisTemplateAnalysisParametersToHclTerraform, false)(this._analysisParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CleanroomsAnalysisTemplateAnalysisParametersList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_message_configuration: {
        value: cleanroomsAnalysisTemplateErrorMessageConfigurationToHclTerraform(this._errorMessageConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsAnalysisTemplateErrorMessageConfiguration",
      },
      format: {
        value: cdktn.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_identifier: {
        value: cdktn.stringToHclTerraform(this._membershipIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cleanroomsAnalysisTemplateSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsAnalysisTemplateSchema",
      },
      source: {
        value: cleanroomsAnalysisTemplateSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsAnalysisTemplateSource",
      },
      source_metadata: {
        value: cleanroomsAnalysisTemplateSourceMetadataToHclTerraform(this._sourceMetadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsAnalysisTemplateSourceMetadata",
      },
      synthetic_data_parameters: {
        value: cleanroomsAnalysisTemplateSyntheticDataParametersToHclTerraform(this._syntheticDataParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsAnalysisTemplateSyntheticDataParameters",
      },
      tags: {
        value: cdktn.listMapperHcl(cleanroomsAnalysisTemplateTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CleanroomsAnalysisTemplateTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
