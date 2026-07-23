// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cleanrooms_analysis_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCleanroomsAnalysisTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cleanrooms_analysis_template#id DataAwsccCleanroomsAnalysisTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCleanroomsAnalysisTemplateAnalysisParameters {
}

export function dataAwsccCleanroomsAnalysisTemplateAnalysisParametersToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateAnalysisParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateAnalysisParametersToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateAnalysisParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateAnalysisParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateAnalysisParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference {
    return new DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration {
}

export function dataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSchema {
}

export function dataAwsccCleanroomsAnalysisTemplateSchemaToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSchemaToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // referenced_tables - computed: true, optional: false, required: false
  public get referencedTables() {
    return this.getListAttribute('referenced_tables');
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
}

export class DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference {
    return new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSourceArtifacts {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceArtifactsToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSourceArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSourceArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_artifacts - computed: true, optional: false, required: false
  private _additionalArtifacts = new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList(this, "additional_artifacts", false);
  public get additionalArtifacts() {
    return this._additionalArtifacts;
  }

  // entry_point - computed: true, optional: false, required: false
  private _entryPoint = new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference(this, "entry_point");
  public get entryPoint() {
    return this._entryPoint;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSource {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifacts - computed: true, optional: false, required: false
  private _artifacts = new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference(this, "artifacts");
  public get artifacts() {
    return this._artifacts;
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sha_256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha_256');
  }
}

export class DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference {
    return new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sha_256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha_256');
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_artifact_hashes - computed: true, optional: false, required: false
  private _additionalArtifactHashes = new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList(this, "additional_artifact_hashes", false);
  public get additionalArtifactHashes() {
    return this._additionalArtifactHashes;
  }

  // entry_point_hash - computed: true, optional: false, required: false
  private _entryPointHash = new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference(this, "entry_point_hash");
  public get entryPointHash() {
    return this._entryPointHash;
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSourceMetadata {
}

export function dataAwsccCleanroomsAnalysisTemplateSourceMetadataToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSourceMetadataToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSourceMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSourceMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSourceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifacts - computed: true, optional: false, required: false
  private _artifacts = new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference(this, "artifacts");
  public get artifacts() {
    return this._artifacts;
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping {
}

export function dataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_type - computed: true, optional: false, required: false
  public get columnType() {
    return this.getStringAttribute('column_type');
  }

  // is_predictive_value - computed: true, optional: false, required: false
  public get isPredictiveValue() {
    return this.getBooleanAttribute('is_predictive_value');
  }
}

export class DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference {
    return new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification {
}

export function dataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_mapping - computed: true, optional: false, required: false
  private _columnMapping = new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList(this, "column_mapping", false);
  public get columnMapping() {
    return this._columnMapping;
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters {
}

export function dataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_classification - computed: true, optional: false, required: false
  private _columnClassification = new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference(this, "column_classification");
  public get columnClassification() {
    return this._columnClassification;
  }

  // epsilon - computed: true, optional: false, required: false
  public get epsilon() {
    return this.getNumberAttribute('epsilon');
  }

  // max_membership_inference_attack_score - computed: true, optional: false, required: false
  public get maxMembershipInferenceAttackScore() {
    return this.getNumberAttribute('max_membership_inference_attack_score');
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters {
}

export function dataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ml_synthetic_data_parameters - computed: true, optional: false, required: false
  private _mlSyntheticDataParameters = new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference(this, "ml_synthetic_data_parameters");
  public get mlSyntheticDataParameters() {
    return this._mlSyntheticDataParameters;
  }
}
export interface DataAwsccCleanroomsAnalysisTemplateTags {
}

export function dataAwsccCleanroomsAnalysisTemplateTagsToTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsAnalysisTemplateTagsToHclTerraform(struct?: DataAwsccCleanroomsAnalysisTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsAnalysisTemplateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsAnalysisTemplateTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsAnalysisTemplateTags | undefined) {
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

export class DataAwsccCleanroomsAnalysisTemplateTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsAnalysisTemplateTagsOutputReference {
    return new DataAwsccCleanroomsAnalysisTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cleanrooms_analysis_template awscc_cleanrooms_analysis_template}
*/
export class DataAwsccCleanroomsAnalysisTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cleanrooms_analysis_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCleanroomsAnalysisTemplate to import
  * @param importFromId The id of the existing DataAwsccCleanroomsAnalysisTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cleanrooms_analysis_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCleanroomsAnalysisTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_analysis_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cleanrooms_analysis_template awscc_cleanrooms_analysis_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCleanroomsAnalysisTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCleanroomsAnalysisTemplateConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analysis_parameters - computed: true, optional: false, required: false
  private _analysisParameters = new DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList(this, "analysis_parameters", false);
  public get analysisParameters() {
    return this._analysisParameters;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // error_message_configuration - computed: true, optional: false, required: false
  private _errorMessageConfiguration = new DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference(this, "error_message_configuration");
  public get errorMessageConfiguration() {
    return this._errorMessageConfiguration;
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
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

  // membership_arn - computed: true, optional: false, required: false
  public get membershipArn() {
    return this.getStringAttribute('membership_arn');
  }

  // membership_identifier - computed: true, optional: false, required: false
  public get membershipIdentifier() {
    return this.getStringAttribute('membership_identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccCleanroomsAnalysisTemplateSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // source_metadata - computed: true, optional: false, required: false
  private _sourceMetadata = new DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference(this, "source_metadata");
  public get sourceMetadata() {
    return this._sourceMetadata;
  }

  // synthetic_data_parameters - computed: true, optional: false, required: false
  private _syntheticDataParameters = new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference(this, "synthetic_data_parameters");
  public get syntheticDataParameters() {
    return this._syntheticDataParameters;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCleanroomsAnalysisTemplateTagsList(this, "tags", false);
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
