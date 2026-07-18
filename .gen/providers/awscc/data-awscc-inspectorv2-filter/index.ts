// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/inspectorv2_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccInspectorv2FilterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/inspectorv2_filter#id DataAwsccInspectorv2Filter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccInspectorv2FilterFilterCriteriaAwsAccountId {
}

export function dataAwsccInspectorv2FilterFilterCriteriaAwsAccountIdToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaAwsAccountId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaAwsAccountIdToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaAwsAccountId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaAwsAccountIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaAwsAccountId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaAwsAccountId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaAwsAccountIdList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaAwsAccountIdOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaAwsAccountIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName {
}

export function dataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags {
}

export function dataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath {
}

export function dataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaComponentId {
}

export function dataAwsccInspectorv2FilterFilterCriteriaComponentIdToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaComponentId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaComponentIdToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaComponentId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaComponentIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaComponentId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaComponentId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaComponentIdList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaComponentIdOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaComponentIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaComponentType {
}

export function dataAwsccInspectorv2FilterFilterCriteriaComponentTypeToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaComponentType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaComponentTypeToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaComponentType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaComponentTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaComponentType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaComponentType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaComponentTypeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaComponentTypeOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaComponentTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageId {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageIdToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageIdToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageIdList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageIdOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetId {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetIdToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetIdToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetIdList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcId {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcIdToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcIdToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcIdList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcIdOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitecture {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitectureToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitecture): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitectureToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitecture): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitectureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitecture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitecture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitectureList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitectureOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitectureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEcrImageHash {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageHashToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageHashToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageHashOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEcrImageHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEcrImageHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageHashList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEcrImageHashOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEcrImageHashOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAt {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAtToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAtToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_inclusive - computed: true, optional: false, required: false
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }

  // start_inclusive - computed: true, optional: false, required: false
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAtList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAtOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistry {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistryToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistryToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistryList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistryOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryName {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryNameToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryNameToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryNameList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryNameOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEcrImageTags {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageTagsToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEcrImageTagsToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEcrImageTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEcrImageTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEcrImageTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEcrImageTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEcrImageTagsOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEcrImageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaEpssScore {
}

export function dataAwsccInspectorv2FilterFilterCriteriaEpssScoreToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEpssScore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaEpssScoreToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaEpssScore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaEpssScoreOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaEpssScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaEpssScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lower_inclusive - computed: true, optional: false, required: false
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }

  // upper_inclusive - computed: true, optional: false, required: false
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaEpssScoreList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaEpssScoreOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaEpssScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaExploitAvailable {
}

export function dataAwsccInspectorv2FilterFilterCriteriaExploitAvailableToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaExploitAvailable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaExploitAvailableToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaExploitAvailable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaExploitAvailableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaExploitAvailable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaExploitAvailable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaExploitAvailableList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaExploitAvailableOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaExploitAvailableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaFindingArn {
}

export function dataAwsccInspectorv2FilterFilterCriteriaFindingArnToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFindingArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaFindingArnToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFindingArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaFindingArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaFindingArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaFindingArn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaFindingArnList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaFindingArnOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaFindingArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaFindingStatus {
}

export function dataAwsccInspectorv2FilterFilterCriteriaFindingStatusToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFindingStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaFindingStatusToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFindingStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaFindingStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaFindingStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaFindingStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaFindingStatusList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaFindingStatusOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaFindingStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaFindingType {
}

export function dataAwsccInspectorv2FilterFilterCriteriaFindingTypeToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFindingType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaFindingTypeToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFindingType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaFindingTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaFindingType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaFindingType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaFindingTypeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaFindingTypeOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaFindingTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAt {
}

export function dataAwsccInspectorv2FilterFilterCriteriaFirstObservedAtToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaFirstObservedAtToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_inclusive - computed: true, optional: false, required: false
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }

  // start_inclusive - computed: true, optional: false, required: false
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAtList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAtOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaFixAvailable {
}

export function dataAwsccInspectorv2FilterFilterCriteriaFixAvailableToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFixAvailable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaFixAvailableToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaFixAvailable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaFixAvailableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaFixAvailable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaFixAvailable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaFixAvailableList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaFixAvailableOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaFixAvailableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaInspectorScore {
}

export function dataAwsccInspectorv2FilterFilterCriteriaInspectorScoreToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaInspectorScore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaInspectorScoreToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaInspectorScore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaInspectorScoreOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaInspectorScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaInspectorScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lower_inclusive - computed: true, optional: false, required: false
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }

  // upper_inclusive - computed: true, optional: false, required: false
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaInspectorScoreList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaInspectorScoreOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaInspectorScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn {
}

export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt {
}

export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_inclusive - computed: true, optional: false, required: false
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }

  // start_inclusive - computed: true, optional: false, required: false
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayers {
}

export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayersToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayersToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayersOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionName {
}

export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionNameToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionNameToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionNameList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionNameOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntime {
}

export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntimeToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntimeToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntimeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaLastObservedAt {
}

export function dataAwsccInspectorv2FilterFilterCriteriaLastObservedAtToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLastObservedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaLastObservedAtToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaLastObservedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaLastObservedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaLastObservedAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaLastObservedAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_inclusive - computed: true, optional: false, required: false
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }

  // start_inclusive - computed: true, optional: false, required: false
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaLastObservedAtList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaLastObservedAtOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaLastObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocol {
}

export function dataAwsccInspectorv2FilterFilterCriteriaNetworkProtocolToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocol): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaNetworkProtocolToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocol): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocolList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocolOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaPortRange {
}

export function dataAwsccInspectorv2FilterFilterCriteriaPortRangeToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaPortRangeToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaPortRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin_inclusive - computed: true, optional: false, required: false
  public get beginInclusive() {
    return this.getNumberAttribute('begin_inclusive');
  }

  // end_inclusive - computed: true, optional: false, required: false
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaPortRangeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaPortRangeOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilities {
}

export function dataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilitiesToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilitiesToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilitiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaResourceId {
}

export function dataAwsccInspectorv2FilterFilterCriteriaResourceIdToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaResourceId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaResourceIdToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaResourceId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaResourceIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaResourceId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaResourceId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaResourceIdList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaResourceIdOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaResourceIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaResourceTags {
}

export function dataAwsccInspectorv2FilterFilterCriteriaResourceTagsToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaResourceTagsToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaResourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaResourceTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
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

export class DataAwsccInspectorv2FilterFilterCriteriaResourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaResourceTagsOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaResourceType {
}

export function dataAwsccInspectorv2FilterFilterCriteriaResourceTypeToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaResourceType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaResourceTypeToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaResourceType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaResourceTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaResourceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaResourceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaResourceTypeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaResourceTypeOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaSeverity {
}

export function dataAwsccInspectorv2FilterFilterCriteriaSeverityToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaSeverity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaSeverityToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaSeverity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaSeverityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaSeverityList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaSeverityOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaTitle {
}

export function dataAwsccInspectorv2FilterFilterCriteriaTitleToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaTitle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaTitleToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaTitle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaTitleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaTitleList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaTitleOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaUpdatedAt {
}

export function dataAwsccInspectorv2FilterFilterCriteriaUpdatedAtToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaUpdatedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaUpdatedAtToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaUpdatedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaUpdatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaUpdatedAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaUpdatedAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_inclusive - computed: true, optional: false, required: false
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }

  // start_inclusive - computed: true, optional: false, required: false
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaUpdatedAtList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaUpdatedAtOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaUpdatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVendorSeverity {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVendorSeverityToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVendorSeverity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVendorSeverityToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVendorSeverity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVendorSeverityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVendorSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVendorSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaVendorSeverityList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaVendorSeverityOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaVendorSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityId {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerabilityIdToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerabilityIdToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityIdList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityIdOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySource {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySourceToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySourceToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySourceList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySourceOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesEpoch {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesEpochToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesEpoch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesEpochToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesEpoch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesEpochOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesEpoch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesEpoch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lower_inclusive - computed: true, optional: false, required: false
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }

  // upper_inclusive - computed: true, optional: false, required: false
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesFilePath {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesFilePathToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesFilePath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesFilePathToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesFilePath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesFilePathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesFilePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesFilePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesName {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesNameToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesNameToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesRelease {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesReleaseToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesRelease): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesReleaseToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesRelease): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesReleaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesRelease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesRelease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesVersion {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesVersionToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesVersionToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison - computed: true, optional: false, required: false
  public get comparison() {
    return this.getStringAttribute('comparison');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackages {
}

export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  private _architecture = new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureOutputReference(this, "architecture");
  public get architecture() {
    return this._architecture;
  }

  // epoch - computed: true, optional: false, required: false
  private _epoch = new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesEpochOutputReference(this, "epoch");
  public get epoch() {
    return this._epoch;
  }

  // file_path - computed: true, optional: false, required: false
  private _filePath = new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesFilePathOutputReference(this, "file_path");
  public get filePath() {
    return this._filePath;
  }

  // name - computed: true, optional: false, required: false
  private _name = new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }

  // release - computed: true, optional: false, required: false
  private _release = new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesReleaseOutputReference(this, "release");
  public get release() {
    return this._release;
  }

  // source_lambda_layer_arn - computed: true, optional: false, required: false
  private _sourceLambdaLayerArn = new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnOutputReference(this, "source_lambda_layer_arn");
  public get sourceLambdaLayerArn() {
    return this._sourceLambdaLayerArn;
  }

  // source_layer_hash - computed: true, optional: false, required: false
  private _sourceLayerHash = new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashOutputReference(this, "source_layer_hash");
  public get sourceLayerHash() {
    return this._sourceLayerHash;
  }

  // version - computed: true, optional: false, required: false
  private _version = new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }
}

export class DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesOutputReference {
    return new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInspectorv2FilterFilterCriteria {
}

export function dataAwsccInspectorv2FilterFilterCriteriaToTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2FilterFilterCriteriaToHclTerraform(struct?: DataAwsccInspectorv2FilterFilterCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2FilterFilterCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2FilterFilterCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2FilterFilterCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_account_id - computed: true, optional: false, required: false
  private _awsAccountId = new DataAwsccInspectorv2FilterFilterCriteriaAwsAccountIdList(this, "aws_account_id", false);
  public get awsAccountId() {
    return this._awsAccountId;
  }

  // code_vulnerability_detector_name - computed: true, optional: false, required: false
  private _codeVulnerabilityDetectorName = new DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameList(this, "code_vulnerability_detector_name", false);
  public get codeVulnerabilityDetectorName() {
    return this._codeVulnerabilityDetectorName;
  }

  // code_vulnerability_detector_tags - computed: true, optional: false, required: false
  private _codeVulnerabilityDetectorTags = new DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList(this, "code_vulnerability_detector_tags", false);
  public get codeVulnerabilityDetectorTags() {
    return this._codeVulnerabilityDetectorTags;
  }

  // code_vulnerability_file_path - computed: true, optional: false, required: false
  private _codeVulnerabilityFilePath = new DataAwsccInspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathList(this, "code_vulnerability_file_path", false);
  public get codeVulnerabilityFilePath() {
    return this._codeVulnerabilityFilePath;
  }

  // component_id - computed: true, optional: false, required: false
  private _componentId = new DataAwsccInspectorv2FilterFilterCriteriaComponentIdList(this, "component_id", false);
  public get componentId() {
    return this._componentId;
  }

  // component_type - computed: true, optional: false, required: false
  private _componentType = new DataAwsccInspectorv2FilterFilterCriteriaComponentTypeList(this, "component_type", false);
  public get componentType() {
    return this._componentType;
  }

  // ec_2_instance_image_id - computed: true, optional: false, required: false
  private _ec2InstanceImageId = new DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceImageIdList(this, "ec_2_instance_image_id", false);
  public get ec2InstanceImageId() {
    return this._ec2InstanceImageId;
  }

  // ec_2_instance_subnet_id - computed: true, optional: false, required: false
  private _ec2InstanceSubnetId = new DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceSubnetIdList(this, "ec_2_instance_subnet_id", false);
  public get ec2InstanceSubnetId() {
    return this._ec2InstanceSubnetId;
  }

  // ec_2_instance_vpc_id - computed: true, optional: false, required: false
  private _ec2InstanceVpcId = new DataAwsccInspectorv2FilterFilterCriteriaEc2InstanceVpcIdList(this, "ec_2_instance_vpc_id", false);
  public get ec2InstanceVpcId() {
    return this._ec2InstanceVpcId;
  }

  // ecr_image_architecture - computed: true, optional: false, required: false
  private _ecrImageArchitecture = new DataAwsccInspectorv2FilterFilterCriteriaEcrImageArchitectureList(this, "ecr_image_architecture", false);
  public get ecrImageArchitecture() {
    return this._ecrImageArchitecture;
  }

  // ecr_image_hash - computed: true, optional: false, required: false
  private _ecrImageHash = new DataAwsccInspectorv2FilterFilterCriteriaEcrImageHashList(this, "ecr_image_hash", false);
  public get ecrImageHash() {
    return this._ecrImageHash;
  }

  // ecr_image_pushed_at - computed: true, optional: false, required: false
  private _ecrImagePushedAt = new DataAwsccInspectorv2FilterFilterCriteriaEcrImagePushedAtList(this, "ecr_image_pushed_at", false);
  public get ecrImagePushedAt() {
    return this._ecrImagePushedAt;
  }

  // ecr_image_registry - computed: true, optional: false, required: false
  private _ecrImageRegistry = new DataAwsccInspectorv2FilterFilterCriteriaEcrImageRegistryList(this, "ecr_image_registry", false);
  public get ecrImageRegistry() {
    return this._ecrImageRegistry;
  }

  // ecr_image_repository_name - computed: true, optional: false, required: false
  private _ecrImageRepositoryName = new DataAwsccInspectorv2FilterFilterCriteriaEcrImageRepositoryNameList(this, "ecr_image_repository_name", false);
  public get ecrImageRepositoryName() {
    return this._ecrImageRepositoryName;
  }

  // ecr_image_tags - computed: true, optional: false, required: false
  private _ecrImageTags = new DataAwsccInspectorv2FilterFilterCriteriaEcrImageTagsList(this, "ecr_image_tags", false);
  public get ecrImageTags() {
    return this._ecrImageTags;
  }

  // epss_score - computed: true, optional: false, required: false
  private _epssScore = new DataAwsccInspectorv2FilterFilterCriteriaEpssScoreList(this, "epss_score", false);
  public get epssScore() {
    return this._epssScore;
  }

  // exploit_available - computed: true, optional: false, required: false
  private _exploitAvailable = new DataAwsccInspectorv2FilterFilterCriteriaExploitAvailableList(this, "exploit_available", false);
  public get exploitAvailable() {
    return this._exploitAvailable;
  }

  // finding_arn - computed: true, optional: false, required: false
  private _findingArn = new DataAwsccInspectorv2FilterFilterCriteriaFindingArnList(this, "finding_arn", false);
  public get findingArn() {
    return this._findingArn;
  }

  // finding_status - computed: true, optional: false, required: false
  private _findingStatus = new DataAwsccInspectorv2FilterFilterCriteriaFindingStatusList(this, "finding_status", false);
  public get findingStatus() {
    return this._findingStatus;
  }

  // finding_type - computed: true, optional: false, required: false
  private _findingType = new DataAwsccInspectorv2FilterFilterCriteriaFindingTypeList(this, "finding_type", false);
  public get findingType() {
    return this._findingType;
  }

  // first_observed_at - computed: true, optional: false, required: false
  private _firstObservedAt = new DataAwsccInspectorv2FilterFilterCriteriaFirstObservedAtList(this, "first_observed_at", false);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }

  // fix_available - computed: true, optional: false, required: false
  private _fixAvailable = new DataAwsccInspectorv2FilterFilterCriteriaFixAvailableList(this, "fix_available", false);
  public get fixAvailable() {
    return this._fixAvailable;
  }

  // inspector_score - computed: true, optional: false, required: false
  private _inspectorScore = new DataAwsccInspectorv2FilterFilterCriteriaInspectorScoreList(this, "inspector_score", false);
  public get inspectorScore() {
    return this._inspectorScore;
  }

  // lambda_function_execution_role_arn - computed: true, optional: false, required: false
  private _lambdaFunctionExecutionRoleArn = new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList(this, "lambda_function_execution_role_arn", false);
  public get lambdaFunctionExecutionRoleArn() {
    return this._lambdaFunctionExecutionRoleArn;
  }

  // lambda_function_last_modified_at - computed: true, optional: false, required: false
  private _lambdaFunctionLastModifiedAt = new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtList(this, "lambda_function_last_modified_at", false);
  public get lambdaFunctionLastModifiedAt() {
    return this._lambdaFunctionLastModifiedAt;
  }

  // lambda_function_layers - computed: true, optional: false, required: false
  private _lambdaFunctionLayers = new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionLayersList(this, "lambda_function_layers", false);
  public get lambdaFunctionLayers() {
    return this._lambdaFunctionLayers;
  }

  // lambda_function_name - computed: true, optional: false, required: false
  private _lambdaFunctionName = new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionNameList(this, "lambda_function_name", false);
  public get lambdaFunctionName() {
    return this._lambdaFunctionName;
  }

  // lambda_function_runtime - computed: true, optional: false, required: false
  private _lambdaFunctionRuntime = new DataAwsccInspectorv2FilterFilterCriteriaLambdaFunctionRuntimeList(this, "lambda_function_runtime", false);
  public get lambdaFunctionRuntime() {
    return this._lambdaFunctionRuntime;
  }

  // last_observed_at - computed: true, optional: false, required: false
  private _lastObservedAt = new DataAwsccInspectorv2FilterFilterCriteriaLastObservedAtList(this, "last_observed_at", false);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }

  // network_protocol - computed: true, optional: false, required: false
  private _networkProtocol = new DataAwsccInspectorv2FilterFilterCriteriaNetworkProtocolList(this, "network_protocol", false);
  public get networkProtocol() {
    return this._networkProtocol;
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataAwsccInspectorv2FilterFilterCriteriaPortRangeList(this, "port_range", false);
  public get portRange() {
    return this._portRange;
  }

  // related_vulnerabilities - computed: true, optional: false, required: false
  private _relatedVulnerabilities = new DataAwsccInspectorv2FilterFilterCriteriaRelatedVulnerabilitiesList(this, "related_vulnerabilities", false);
  public get relatedVulnerabilities() {
    return this._relatedVulnerabilities;
  }

  // resource_id - computed: true, optional: false, required: false
  private _resourceId = new DataAwsccInspectorv2FilterFilterCriteriaResourceIdList(this, "resource_id", false);
  public get resourceId() {
    return this._resourceId;
  }

  // resource_tags - computed: true, optional: false, required: false
  private _resourceTags = new DataAwsccInspectorv2FilterFilterCriteriaResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }

  // resource_type - computed: true, optional: false, required: false
  private _resourceType = new DataAwsccInspectorv2FilterFilterCriteriaResourceTypeList(this, "resource_type", false);
  public get resourceType() {
    return this._resourceType;
  }

  // severity - computed: true, optional: false, required: false
  private _severity = new DataAwsccInspectorv2FilterFilterCriteriaSeverityList(this, "severity", false);
  public get severity() {
    return this._severity;
  }

  // title - computed: true, optional: false, required: false
  private _title = new DataAwsccInspectorv2FilterFilterCriteriaTitleList(this, "title", false);
  public get title() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  private _updatedAt = new DataAwsccInspectorv2FilterFilterCriteriaUpdatedAtList(this, "updated_at", false);
  public get updatedAt() {
    return this._updatedAt;
  }

  // vendor_severity - computed: true, optional: false, required: false
  private _vendorSeverity = new DataAwsccInspectorv2FilterFilterCriteriaVendorSeverityList(this, "vendor_severity", false);
  public get vendorSeverity() {
    return this._vendorSeverity;
  }

  // vulnerability_id - computed: true, optional: false, required: false
  private _vulnerabilityId = new DataAwsccInspectorv2FilterFilterCriteriaVulnerabilityIdList(this, "vulnerability_id", false);
  public get vulnerabilityId() {
    return this._vulnerabilityId;
  }

  // vulnerability_source - computed: true, optional: false, required: false
  private _vulnerabilitySource = new DataAwsccInspectorv2FilterFilterCriteriaVulnerabilitySourceList(this, "vulnerability_source", false);
  public get vulnerabilitySource() {
    return this._vulnerabilitySource;
  }

  // vulnerable_packages - computed: true, optional: false, required: false
  private _vulnerablePackages = new DataAwsccInspectorv2FilterFilterCriteriaVulnerablePackagesList(this, "vulnerable_packages", false);
  public get vulnerablePackages() {
    return this._vulnerablePackages;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/inspectorv2_filter awscc_inspectorv2_filter}
*/
export class DataAwsccInspectorv2Filter extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_inspectorv2_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccInspectorv2Filter resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccInspectorv2Filter to import
  * @param importFromId The id of the existing DataAwsccInspectorv2Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/inspectorv2_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccInspectorv2Filter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/inspectorv2_filter awscc_inspectorv2_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccInspectorv2FilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccInspectorv2FilterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_inspectorv2_filter',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter_action - computed: true, optional: false, required: false
  public get filterAction() {
    return this.getStringAttribute('filter_action');
  }

  // filter_criteria - computed: true, optional: false, required: false
  private _filterCriteria = new DataAwsccInspectorv2FilterFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
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
