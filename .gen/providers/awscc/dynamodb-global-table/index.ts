// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DynamodbGlobalTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#attribute_definitions DynamodbGlobalTable#attribute_definitions}
  */
  readonly attributeDefinitions?: DynamodbGlobalTableAttributeDefinitions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#billing_mode DynamodbGlobalTable#billing_mode}
  */
  readonly billingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#global_secondary_indexes DynamodbGlobalTable#global_secondary_indexes}
  */
  readonly globalSecondaryIndexes?: DynamodbGlobalTableGlobalSecondaryIndexes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#global_table_source_arn DynamodbGlobalTable#global_table_source_arn}
  */
  readonly globalTableSourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#global_table_witnesses DynamodbGlobalTable#global_table_witnesses}
  */
  readonly globalTableWitnesses?: DynamodbGlobalTableGlobalTableWitnesses[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#key_schema DynamodbGlobalTable#key_schema}
  */
  readonly keySchema?: DynamodbGlobalTableKeySchema[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#local_secondary_indexes DynamodbGlobalTable#local_secondary_indexes}
  */
  readonly localSecondaryIndexes?: DynamodbGlobalTableLocalSecondaryIndexes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#multi_region_consistency DynamodbGlobalTable#multi_region_consistency}
  */
  readonly multiRegionConsistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_on_demand_throughput_settings DynamodbGlobalTable#read_on_demand_throughput_settings}
  */
  readonly readOnDemandThroughputSettings?: DynamodbGlobalTableReadOnDemandThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_provisioned_throughput_settings DynamodbGlobalTable#read_provisioned_throughput_settings}
  */
  readonly readProvisionedThroughputSettings?: DynamodbGlobalTableReadProvisionedThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#replicas DynamodbGlobalTable#replicas}
  */
  readonly replicas: DynamodbGlobalTableReplicas[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#sse_specification DynamodbGlobalTable#sse_specification}
  */
  readonly sseSpecification?: DynamodbGlobalTableSseSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#stream_specification DynamodbGlobalTable#stream_specification}
  */
  readonly streamSpecification?: DynamodbGlobalTableStreamSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#table_name DynamodbGlobalTable#table_name}
  */
  readonly tableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#time_to_live_specification DynamodbGlobalTable#time_to_live_specification}
  */
  readonly timeToLiveSpecification?: DynamodbGlobalTableTimeToLiveSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#warm_throughput DynamodbGlobalTable#warm_throughput}
  */
  readonly warmThroughput?: DynamodbGlobalTableWarmThroughput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#write_on_demand_throughput_settings DynamodbGlobalTable#write_on_demand_throughput_settings}
  */
  readonly writeOnDemandThroughputSettings?: DynamodbGlobalTableWriteOnDemandThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#write_provisioned_throughput_settings DynamodbGlobalTable#write_provisioned_throughput_settings}
  */
  readonly writeProvisionedThroughputSettings?: DynamodbGlobalTableWriteProvisionedThroughputSettings;
}
export interface DynamodbGlobalTableAttributeDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#attribute_name DynamodbGlobalTable#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#attribute_type DynamodbGlobalTable#attribute_type}
  */
  readonly attributeType?: string;
}

export function dynamodbGlobalTableAttributeDefinitionsToTerraform(struct?: DynamodbGlobalTableAttributeDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
    attribute_type: cdktn.stringToTerraform(struct!.attributeType),
  }
}


export function dynamodbGlobalTableAttributeDefinitionsToHclTerraform(struct?: DynamodbGlobalTableAttributeDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_type: {
      value: cdktn.stringToHclTerraform(struct!.attributeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableAttributeDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableAttributeDefinitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableAttributeDefinitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeType = value.attributeType;
    }
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_type - computed: true, optional: true, required: false
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }
}

export class DynamodbGlobalTableAttributeDefinitionsList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableAttributeDefinitions[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableAttributeDefinitionsOutputReference {
    return new DynamodbGlobalTableAttributeDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexesKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#attribute_name DynamodbGlobalTable#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#key_type DynamodbGlobalTable#key_type}
  */
  readonly keyType?: string;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
    key_type: cdktn.stringToTerraform(struct!.keyType),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
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

export class DynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexesKeySchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexesKeySchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._keyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._keyType = value.keyType;
    }
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
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

export class DynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableGlobalSecondaryIndexesKeySchema[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference {
    return new DynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexesProjection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#non_key_attributes DynamodbGlobalTable#non_key_attributes}
  */
  readonly nonKeyAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#projection_type DynamodbGlobalTable#projection_type}
  */
  readonly projectionType?: string;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesProjection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    non_key_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nonKeyAttributes),
    projection_type: cdktn.stringToTerraform(struct!.projectionType),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesProjectionToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesProjection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    non_key_attributes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nonKeyAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    projection_type: {
      value: cdktn.stringToHclTerraform(struct!.projectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexesProjection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonKeyAttributes = this._nonKeyAttributes;
    }
    if (this._projectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionType = this._projectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexesProjection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = undefined;
      this._projectionType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = value.nonKeyAttributes;
      this._projectionType = value.projectionType;
    }
  }

  // non_key_attributes - computed: true, optional: true, required: false
  private _nonKeyAttributes?: string[]; 
  public get nonKeyAttributes() {
    return cdktn.Fn.tolist(this.getListAttribute('non_key_attributes'));
  }
  public set nonKeyAttributes(value: string[]) {
    this._nonKeyAttributes = value;
  }
  public resetNonKeyAttributes() {
    this._nonKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonKeyAttributesInput() {
    return this._nonKeyAttributes;
  }

  // projection_type - computed: true, optional: true, required: false
  private _projectionType?: string; 
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  public resetProjectionType() {
    this._projectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType;
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_read_request_units DynamodbGlobalTable#max_read_request_units}
  */
  readonly maxReadRequestUnits?: number;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_read_request_units: {
      value: cdktn.numberToHclTerraform(struct!.maxReadRequestUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReadRequestUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = value.maxReadRequestUnits;
    }
  }

  // max_read_request_units - computed: true, optional: true, required: false
  private _maxReadRequestUnits?: number; 
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }
  public set maxReadRequestUnits(value: number) {
    this._maxReadRequestUnits = value;
  }
  public resetMaxReadRequestUnits() {
    this._maxReadRequestUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReadRequestUnitsInput() {
    return this._maxReadRequestUnits;
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_capacity_units DynamodbGlobalTable#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityUnits = value.readCapacityUnits;
    }
  }

  // read_capacity_units - computed: true, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_units_per_second DynamodbGlobalTable#read_units_per_second}
  */
  readonly readUnitsPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#write_units_per_second DynamodbGlobalTable#write_units_per_second}
  */
  readonly writeUnitsPerSecond?: number;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_units_per_second: cdktn.numberToTerraform(struct!.readUnitsPerSecond),
    write_units_per_second: cdktn.numberToTerraform(struct!.writeUnitsPerSecond),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_units_per_second: {
      value: cdktn.numberToHclTerraform(struct!.readUnitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_units_per_second: {
      value: cdktn.numberToHclTerraform(struct!.writeUnitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readUnitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.readUnitsPerSecond = this._readUnitsPerSecond;
    }
    if (this._writeUnitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeUnitsPerSecond = this._writeUnitsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readUnitsPerSecond = undefined;
      this._writeUnitsPerSecond = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readUnitsPerSecond = value.readUnitsPerSecond;
      this._writeUnitsPerSecond = value.writeUnitsPerSecond;
    }
  }

  // read_units_per_second - computed: true, optional: true, required: false
  private _readUnitsPerSecond?: number; 
  public get readUnitsPerSecond() {
    return this.getNumberAttribute('read_units_per_second');
  }
  public set readUnitsPerSecond(value: number) {
    this._readUnitsPerSecond = value;
  }
  public resetReadUnitsPerSecond() {
    this._readUnitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readUnitsPerSecondInput() {
    return this._readUnitsPerSecond;
  }

  // write_units_per_second - computed: true, optional: true, required: false
  private _writeUnitsPerSecond?: number; 
  public get writeUnitsPerSecond() {
    return this.getNumberAttribute('write_units_per_second');
  }
  public set writeUnitsPerSecond(value: number) {
    this._writeUnitsPerSecond = value;
  }
  public resetWriteUnitsPerSecond() {
    this._writeUnitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeUnitsPerSecondInput() {
    return this._writeUnitsPerSecond;
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_write_request_units DynamodbGlobalTable#max_write_request_units}
  */
  readonly maxWriteRequestUnits?: number;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_write_request_units: cdktn.numberToTerraform(struct!.maxWriteRequestUnits),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_write_request_units: {
      value: cdktn.numberToHclTerraform(struct!.maxWriteRequestUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWriteRequestUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWriteRequestUnits = this._maxWriteRequestUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxWriteRequestUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxWriteRequestUnits = value.maxWriteRequestUnits;
    }
  }

  // max_write_request_units - computed: true, optional: true, required: false
  private _maxWriteRequestUnits?: number; 
  public get maxWriteRequestUnits() {
    return this.getNumberAttribute('max_write_request_units');
  }
  public set maxWriteRequestUnits(value: number) {
    this._maxWriteRequestUnits = value;
  }
  public resetMaxWriteRequestUnits() {
    this._maxWriteRequestUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWriteRequestUnitsInput() {
    return this._maxWriteRequestUnits;
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#disable_scale_in DynamodbGlobalTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#scale_in_cooldown DynamodbGlobalTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#scale_out_cooldown DynamodbGlobalTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#target_value DynamodbGlobalTable#target_value}
  */
  readonly targetValue?: number;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_in_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableScaleIn = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableScaleIn = value.disableScaleIn;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
      this._targetValue = value.targetValue;
    }
  }

  // disable_scale_in - computed: true, optional: true, required: false
  private _disableScaleIn?: boolean | cdktn.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktn.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // scale_in_cooldown - computed: true, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: true, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_capacity DynamodbGlobalTable#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#min_capacity DynamodbGlobalTable#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#seed_capacity DynamodbGlobalTable#seed_capacity}
  */
  readonly seedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#target_tracking_scaling_policy_configuration DynamodbGlobalTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktn.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_capacity: {
      value: cdktn.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktn.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seed_capacity: {
      value: cdktn.numberToHclTerraform(struct!.seedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_tracking_scaling_policy_configuration: {
      value: dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._seedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedCapacity = this._seedCapacity;
    }
    if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._seedCapacity = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._seedCapacity = value.seedCapacity;
      this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
    }
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: true, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // seed_capacity - computed: true, optional: true, required: false
  private _seedCapacity?: number; 
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }
  public set seedCapacity(value: number) {
    this._seedCapacity = value;
  }
  public resetSeedCapacity() {
    this._seedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedCapacityInput() {
    return this._seedCapacity;
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration = new DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public putTargetTrackingScalingPolicyConfiguration(value: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration) {
    this._targetTrackingScalingPolicyConfiguration.internalValue = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration.internalValue;
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#write_capacity_auto_scaling_settings DynamodbGlobalTable#write_capacity_auto_scaling_settings}
  */
  readonly writeCapacityAutoScalingSettings?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    write_capacity_auto_scaling_settings: dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct!.writeCapacityAutoScalingSettings),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    write_capacity_auto_scaling_settings: {
      value: dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToHclTerraform(struct!.writeCapacityAutoScalingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writeCapacityAutoScalingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacityAutoScalingSettings = this._writeCapacityAutoScalingSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._writeCapacityAutoScalingSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._writeCapacityAutoScalingSettings.internalValue = value.writeCapacityAutoScalingSettings;
    }
  }

  // write_capacity_auto_scaling_settings - computed: true, optional: true, required: false
  private _writeCapacityAutoScalingSettings = new DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(this, "write_capacity_auto_scaling_settings");
  public get writeCapacityAutoScalingSettings() {
    return this._writeCapacityAutoScalingSettings;
  }
  public putWriteCapacityAutoScalingSettings(value: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings) {
    this._writeCapacityAutoScalingSettings.internalValue = value;
  }
  public resetWriteCapacityAutoScalingSettings() {
    this._writeCapacityAutoScalingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityAutoScalingSettingsInput() {
    return this._writeCapacityAutoScalingSettings.internalValue;
  }
}
export interface DynamodbGlobalTableGlobalSecondaryIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#index_name DynamodbGlobalTable#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#key_schema DynamodbGlobalTable#key_schema}
  */
  readonly keySchema?: DynamodbGlobalTableGlobalSecondaryIndexesKeySchema[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#projection DynamodbGlobalTable#projection}
  */
  readonly projection?: DynamodbGlobalTableGlobalSecondaryIndexesProjection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_on_demand_throughput_settings DynamodbGlobalTable#read_on_demand_throughput_settings}
  */
  readonly readOnDemandThroughputSettings?: DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_provisioned_throughput_settings DynamodbGlobalTable#read_provisioned_throughput_settings}
  */
  readonly readProvisionedThroughputSettings?: DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#warm_throughput DynamodbGlobalTable#warm_throughput}
  */
  readonly warmThroughput?: DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#write_on_demand_throughput_settings DynamodbGlobalTable#write_on_demand_throughput_settings}
  */
  readonly writeOnDemandThroughputSettings?: DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#write_provisioned_throughput_settings DynamodbGlobalTable#write_provisioned_throughput_settings}
  */
  readonly writeProvisionedThroughputSettings?: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings;
}

export function dynamodbGlobalTableGlobalSecondaryIndexesToTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index_name: cdktn.stringToTerraform(struct!.indexName),
    key_schema: cdktn.listMapper(dynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform, false)(struct!.keySchema),
    projection: dynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct!.projection),
    read_on_demand_throughput_settings: dynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsToTerraform(struct!.readOnDemandThroughputSettings),
    read_provisioned_throughput_settings: dynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct!.readProvisionedThroughputSettings),
    warm_throughput: dynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputToTerraform(struct!.warmThroughput),
    write_on_demand_throughput_settings: dynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsToTerraform(struct!.writeOnDemandThroughputSettings),
    write_provisioned_throughput_settings: dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct!.writeProvisionedThroughputSettings),
  }
}


export function dynamodbGlobalTableGlobalSecondaryIndexesToHclTerraform(struct?: DynamodbGlobalTableGlobalSecondaryIndexes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_schema: {
      value: cdktn.listMapperHcl(dynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToHclTerraform, false)(struct!.keySchema),
      isBlock: true,
      type: "list",
      storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList",
    },
    projection: {
      value: dynamodbGlobalTableGlobalSecondaryIndexesProjectionToHclTerraform(struct!.projection),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesProjection",
    },
    read_on_demand_throughput_settings: {
      value: dynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsToHclTerraform(struct!.readOnDemandThroughputSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings",
    },
    read_provisioned_throughput_settings: {
      value: dynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsToHclTerraform(struct!.readProvisionedThroughputSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings",
    },
    warm_throughput: {
      value: dynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputToHclTerraform(struct!.warmThroughput),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput",
    },
    write_on_demand_throughput_settings: {
      value: dynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsToHclTerraform(struct!.writeOnDemandThroughputSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings",
    },
    write_provisioned_throughput_settings: {
      value: dynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToHclTerraform(struct!.writeProvisionedThroughputSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalSecondaryIndexesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableGlobalSecondaryIndexes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._keySchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySchema = this._keySchema?.internalValue;
    }
    if (this._projection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projection = this._projection?.internalValue;
    }
    if (this._readOnDemandThroughputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnDemandThroughputSettings = this._readOnDemandThroughputSettings?.internalValue;
    }
    if (this._readProvisionedThroughputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readProvisionedThroughputSettings = this._readProvisionedThroughputSettings?.internalValue;
    }
    if (this._warmThroughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmThroughput = this._warmThroughput?.internalValue;
    }
    if (this._writeOnDemandThroughputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOnDemandThroughputSettings = this._writeOnDemandThroughputSettings?.internalValue;
    }
    if (this._writeProvisionedThroughputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeProvisionedThroughputSettings = this._writeProvisionedThroughputSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalSecondaryIndexes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
      this._keySchema.internalValue = undefined;
      this._projection.internalValue = undefined;
      this._readOnDemandThroughputSettings.internalValue = undefined;
      this._readProvisionedThroughputSettings.internalValue = undefined;
      this._warmThroughput.internalValue = undefined;
      this._writeOnDemandThroughputSettings.internalValue = undefined;
      this._writeProvisionedThroughputSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
      this._keySchema.internalValue = value.keySchema;
      this._projection.internalValue = value.projection;
      this._readOnDemandThroughputSettings.internalValue = value.readOnDemandThroughputSettings;
      this._readProvisionedThroughputSettings.internalValue = value.readProvisionedThroughputSettings;
      this._warmThroughput.internalValue = value.warmThroughput;
      this._writeOnDemandThroughputSettings.internalValue = value.writeOnDemandThroughputSettings;
      this._writeProvisionedThroughputSettings.internalValue = value.writeProvisionedThroughputSettings;
    }
  }

  // index_name - computed: true, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // key_schema - computed: true, optional: true, required: false
  private _keySchema = new DynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: DynamodbGlobalTableGlobalSecondaryIndexesKeySchema[] | cdktn.IResolvable) {
    this._keySchema.internalValue = value;
  }
  public resetKeySchema() {
    this._keySchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
  }

  // projection - computed: true, optional: true, required: false
  private _projection = new DynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }
  public putProjection(value: DynamodbGlobalTableGlobalSecondaryIndexesProjection) {
    this._projection.internalValue = value;
  }
  public resetProjection() {
    this._projection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionInput() {
    return this._projection.internalValue;
  }

  // read_on_demand_throughput_settings - computed: true, optional: true, required: false
  private _readOnDemandThroughputSettings = new DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(this, "read_on_demand_throughput_settings");
  public get readOnDemandThroughputSettings() {
    return this._readOnDemandThroughputSettings;
  }
  public putReadOnDemandThroughputSettings(value: DynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings) {
    this._readOnDemandThroughputSettings.internalValue = value;
  }
  public resetReadOnDemandThroughputSettings() {
    this._readOnDemandThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnDemandThroughputSettingsInput() {
    return this._readOnDemandThroughputSettings.internalValue;
  }

  // read_provisioned_throughput_settings - computed: true, optional: true, required: false
  private _readProvisionedThroughputSettings = new DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(this, "read_provisioned_throughput_settings");
  public get readProvisionedThroughputSettings() {
    return this._readProvisionedThroughputSettings;
  }
  public putReadProvisionedThroughputSettings(value: DynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings) {
    this._readProvisionedThroughputSettings.internalValue = value;
  }
  public resetReadProvisionedThroughputSettings() {
    this._readProvisionedThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readProvisionedThroughputSettingsInput() {
    return this._readProvisionedThroughputSettings.internalValue;
  }

  // warm_throughput - computed: true, optional: true, required: false
  private _warmThroughput = new DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference(this, "warm_throughput");
  public get warmThroughput() {
    return this._warmThroughput;
  }
  public putWarmThroughput(value: DynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput) {
    this._warmThroughput.internalValue = value;
  }
  public resetWarmThroughput() {
    this._warmThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmThroughputInput() {
    return this._warmThroughput.internalValue;
  }

  // write_on_demand_throughput_settings - computed: true, optional: true, required: false
  private _writeOnDemandThroughputSettings = new DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference(this, "write_on_demand_throughput_settings");
  public get writeOnDemandThroughputSettings() {
    return this._writeOnDemandThroughputSettings;
  }
  public putWriteOnDemandThroughputSettings(value: DynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings) {
    this._writeOnDemandThroughputSettings.internalValue = value;
  }
  public resetWriteOnDemandThroughputSettings() {
    this._writeOnDemandThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOnDemandThroughputSettingsInput() {
    return this._writeOnDemandThroughputSettings.internalValue;
  }

  // write_provisioned_throughput_settings - computed: true, optional: true, required: false
  private _writeProvisionedThroughputSettings = new DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference(this, "write_provisioned_throughput_settings");
  public get writeProvisionedThroughputSettings() {
    return this._writeProvisionedThroughputSettings;
  }
  public putWriteProvisionedThroughputSettings(value: DynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings) {
    this._writeProvisionedThroughputSettings.internalValue = value;
  }
  public resetWriteProvisionedThroughputSettings() {
    this._writeProvisionedThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeProvisionedThroughputSettingsInput() {
    return this._writeProvisionedThroughputSettings.internalValue;
  }
}

export class DynamodbGlobalTableGlobalSecondaryIndexesList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableGlobalSecondaryIndexes[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableGlobalSecondaryIndexesOutputReference {
    return new DynamodbGlobalTableGlobalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableGlobalTableWitnesses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#region DynamodbGlobalTable#region}
  */
  readonly region?: string;
}

export function dynamodbGlobalTableGlobalTableWitnessesToTerraform(struct?: DynamodbGlobalTableGlobalTableWitnesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function dynamodbGlobalTableGlobalTableWitnessesToHclTerraform(struct?: DynamodbGlobalTableGlobalTableWitnesses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableGlobalTableWitnessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableGlobalTableWitnesses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableGlobalTableWitnesses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
    }
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class DynamodbGlobalTableGlobalTableWitnessesList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableGlobalTableWitnesses[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableGlobalTableWitnessesOutputReference {
    return new DynamodbGlobalTableGlobalTableWitnessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#attribute_name DynamodbGlobalTable#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#key_type DynamodbGlobalTable#key_type}
  */
  readonly keyType?: string;
}

export function dynamodbGlobalTableKeySchemaToTerraform(struct?: DynamodbGlobalTableKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
    key_type: cdktn.stringToTerraform(struct!.keyType),
  }
}


export function dynamodbGlobalTableKeySchemaToHclTerraform(struct?: DynamodbGlobalTableKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
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

export class DynamodbGlobalTableKeySchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableKeySchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableKeySchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._keyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._keyType = value.keyType;
    }
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
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

export class DynamodbGlobalTableKeySchemaList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableKeySchema[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableKeySchemaOutputReference {
    return new DynamodbGlobalTableKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableLocalSecondaryIndexesKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#attribute_name DynamodbGlobalTable#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#key_type DynamodbGlobalTable#key_type}
  */
  readonly keyType?: string;
}

export function dynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexesKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
    key_type: cdktn.stringToTerraform(struct!.keyType),
  }
}


export function dynamodbGlobalTableLocalSecondaryIndexesKeySchemaToHclTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexesKeySchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
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

export class DynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableLocalSecondaryIndexesKeySchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableLocalSecondaryIndexesKeySchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._keyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._keyType = value.keyType;
    }
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
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

export class DynamodbGlobalTableLocalSecondaryIndexesKeySchemaList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableLocalSecondaryIndexesKeySchema[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference {
    return new DynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableLocalSecondaryIndexesProjection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#non_key_attributes DynamodbGlobalTable#non_key_attributes}
  */
  readonly nonKeyAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#projection_type DynamodbGlobalTable#projection_type}
  */
  readonly projectionType?: string;
}

export function dynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexesProjection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    non_key_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nonKeyAttributes),
    projection_type: cdktn.stringToTerraform(struct!.projectionType),
  }
}


export function dynamodbGlobalTableLocalSecondaryIndexesProjectionToHclTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexesProjection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    non_key_attributes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nonKeyAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    projection_type: {
      value: cdktn.stringToHclTerraform(struct!.projectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableLocalSecondaryIndexesProjection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonKeyAttributes = this._nonKeyAttributes;
    }
    if (this._projectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionType = this._projectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableLocalSecondaryIndexesProjection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = undefined;
      this._projectionType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = value.nonKeyAttributes;
      this._projectionType = value.projectionType;
    }
  }

  // non_key_attributes - computed: true, optional: true, required: false
  private _nonKeyAttributes?: string[]; 
  public get nonKeyAttributes() {
    return cdktn.Fn.tolist(this.getListAttribute('non_key_attributes'));
  }
  public set nonKeyAttributes(value: string[]) {
    this._nonKeyAttributes = value;
  }
  public resetNonKeyAttributes() {
    this._nonKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonKeyAttributesInput() {
    return this._nonKeyAttributes;
  }

  // projection_type - computed: true, optional: true, required: false
  private _projectionType?: string; 
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  public resetProjectionType() {
    this._projectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType;
  }
}
export interface DynamodbGlobalTableLocalSecondaryIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#index_name DynamodbGlobalTable#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#key_schema DynamodbGlobalTable#key_schema}
  */
  readonly keySchema?: DynamodbGlobalTableLocalSecondaryIndexesKeySchema[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#projection DynamodbGlobalTable#projection}
  */
  readonly projection?: DynamodbGlobalTableLocalSecondaryIndexesProjection;
}

export function dynamodbGlobalTableLocalSecondaryIndexesToTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index_name: cdktn.stringToTerraform(struct!.indexName),
    key_schema: cdktn.listMapper(dynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform, false)(struct!.keySchema),
    projection: dynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct!.projection),
  }
}


export function dynamodbGlobalTableLocalSecondaryIndexesToHclTerraform(struct?: DynamodbGlobalTableLocalSecondaryIndexes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_schema: {
      value: cdktn.listMapperHcl(dynamodbGlobalTableLocalSecondaryIndexesKeySchemaToHclTerraform, false)(struct!.keySchema),
      isBlock: true,
      type: "list",
      storageClassType: "DynamodbGlobalTableLocalSecondaryIndexesKeySchemaList",
    },
    projection: {
      value: dynamodbGlobalTableLocalSecondaryIndexesProjectionToHclTerraform(struct!.projection),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableLocalSecondaryIndexesProjection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableLocalSecondaryIndexesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableLocalSecondaryIndexes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._keySchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySchema = this._keySchema?.internalValue;
    }
    if (this._projection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projection = this._projection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableLocalSecondaryIndexes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
      this._keySchema.internalValue = undefined;
      this._projection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
      this._keySchema.internalValue = value.keySchema;
      this._projection.internalValue = value.projection;
    }
  }

  // index_name - computed: true, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // key_schema - computed: true, optional: true, required: false
  private _keySchema = new DynamodbGlobalTableLocalSecondaryIndexesKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: DynamodbGlobalTableLocalSecondaryIndexesKeySchema[] | cdktn.IResolvable) {
    this._keySchema.internalValue = value;
  }
  public resetKeySchema() {
    this._keySchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
  }

  // projection - computed: true, optional: true, required: false
  private _projection = new DynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }
  public putProjection(value: DynamodbGlobalTableLocalSecondaryIndexesProjection) {
    this._projection.internalValue = value;
  }
  public resetProjection() {
    this._projection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionInput() {
    return this._projection.internalValue;
  }
}

export class DynamodbGlobalTableLocalSecondaryIndexesList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableLocalSecondaryIndexes[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableLocalSecondaryIndexesOutputReference {
    return new DynamodbGlobalTableLocalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableReadOnDemandThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_read_request_units DynamodbGlobalTable#max_read_request_units}
  */
  readonly maxReadRequestUnits?: number;
}

export function dynamodbGlobalTableReadOnDemandThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReadOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
  }
}


export function dynamodbGlobalTableReadOnDemandThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableReadOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_read_request_units: {
      value: cdktn.numberToHclTerraform(struct!.maxReadRequestUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReadOnDemandThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReadRequestUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReadOnDemandThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = value.maxReadRequestUnits;
    }
  }

  // max_read_request_units - computed: true, optional: true, required: false
  private _maxReadRequestUnits?: number; 
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }
  public set maxReadRequestUnits(value: number) {
    this._maxReadRequestUnits = value;
  }
  public resetMaxReadRequestUnits() {
    this._maxReadRequestUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReadRequestUnitsInput() {
    return this._maxReadRequestUnits;
  }
}
export interface DynamodbGlobalTableReadProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_capacity_units DynamodbGlobalTable#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
}

export function dynamodbGlobalTableReadProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReadProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
  }
}


export function dynamodbGlobalTableReadProvisionedThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableReadProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReadProvisionedThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReadProvisionedThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityUnits = value.readCapacityUnits;
    }
  }

  // read_capacity_units - computed: true, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }
}
export interface DynamodbGlobalTableReplicasContributorInsightsSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#enabled DynamodbGlobalTable#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#mode DynamodbGlobalTable#mode}
  */
  readonly mode?: string;
}

export function dynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasContributorInsightsSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function dynamodbGlobalTableReplicasContributorInsightsSpecificationToHclTerraform(struct?: DynamodbGlobalTableReplicasContributorInsightsSpecification | cdktn.IResolvable): any {
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
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasContributorInsightsSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasContributorInsightsSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._mode = value.mode;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#enabled DynamodbGlobalTable#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#mode DynamodbGlobalTable#mode}
  */
  readonly mode?: string;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToHclTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification | cdktn.IResolvable): any {
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
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._mode = value.mode;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_read_request_units DynamodbGlobalTable#max_read_request_units}
  */
  readonly maxReadRequestUnits?: number;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
  }
}


export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_read_request_units: {
      value: cdktn.numberToHclTerraform(struct!.maxReadRequestUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReadRequestUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = value.maxReadRequestUnits;
    }
  }

  // max_read_request_units - computed: true, optional: true, required: false
  private _maxReadRequestUnits?: number; 
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }
  public set maxReadRequestUnits(value: number) {
    this._maxReadRequestUnits = value;
  }
  public resetMaxReadRequestUnits() {
    this._maxReadRequestUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReadRequestUnitsInput() {
    return this._maxReadRequestUnits;
  }
}
export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#disable_scale_in DynamodbGlobalTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#scale_in_cooldown DynamodbGlobalTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#scale_out_cooldown DynamodbGlobalTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#target_value DynamodbGlobalTable#target_value}
  */
  readonly targetValue?: number;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_in_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableScaleIn = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableScaleIn = value.disableScaleIn;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
      this._targetValue = value.targetValue;
    }
  }

  // disable_scale_in - computed: true, optional: true, required: false
  private _disableScaleIn?: boolean | cdktn.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktn.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // scale_in_cooldown - computed: true, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: true, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_capacity DynamodbGlobalTable#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#min_capacity DynamodbGlobalTable#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#seed_capacity DynamodbGlobalTable#seed_capacity}
  */
  readonly seedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#target_tracking_scaling_policy_configuration DynamodbGlobalTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktn.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}


export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToHclTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_capacity: {
      value: cdktn.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktn.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seed_capacity: {
      value: cdktn.numberToHclTerraform(struct!.seedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_tracking_scaling_policy_configuration: {
      value: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._seedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedCapacity = this._seedCapacity;
    }
    if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._seedCapacity = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._seedCapacity = value.seedCapacity;
      this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
    }
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: true, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // seed_capacity - computed: true, optional: true, required: false
  private _seedCapacity?: number; 
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }
  public set seedCapacity(value: number) {
    this._seedCapacity = value;
  }
  public resetSeedCapacity() {
    this._seedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedCapacityInput() {
    return this._seedCapacity;
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration = new DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public putTargetTrackingScalingPolicyConfiguration(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration) {
    this._targetTrackingScalingPolicyConfiguration.internalValue = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration.internalValue;
  }
}
export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_capacity_auto_scaling_settings DynamodbGlobalTable#read_capacity_auto_scaling_settings}
  */
  readonly readCapacityAutoScalingSettings?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_capacity_units DynamodbGlobalTable#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_capacity_auto_scaling_settings: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct!.readCapacityAutoScalingSettings),
    read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
  }
}


export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_capacity_auto_scaling_settings: {
      value: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToHclTerraform(struct!.readCapacityAutoScalingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings",
    },
    read_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityAutoScalingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityAutoScalingSettings = this._readCapacityAutoScalingSettings?.internalValue;
    }
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityAutoScalingSettings.internalValue = undefined;
      this._readCapacityUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityAutoScalingSettings.internalValue = value.readCapacityAutoScalingSettings;
      this._readCapacityUnits = value.readCapacityUnits;
    }
  }

  // read_capacity_auto_scaling_settings - computed: true, optional: true, required: false
  private _readCapacityAutoScalingSettings = new DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(this, "read_capacity_auto_scaling_settings");
  public get readCapacityAutoScalingSettings() {
    return this._readCapacityAutoScalingSettings;
  }
  public putReadCapacityAutoScalingSettings(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings) {
    this._readCapacityAutoScalingSettings.internalValue = value;
  }
  public resetReadCapacityAutoScalingSettings() {
    this._readCapacityAutoScalingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityAutoScalingSettingsInput() {
    return this._readCapacityAutoScalingSettings.internalValue;
  }

  // read_capacity_units - computed: true, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }
}
export interface DynamodbGlobalTableReplicasGlobalSecondaryIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#contributor_insights_specification DynamodbGlobalTable#contributor_insights_specification}
  */
  readonly contributorInsightsSpecification?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#index_name DynamodbGlobalTable#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_on_demand_throughput_settings DynamodbGlobalTable#read_on_demand_throughput_settings}
  */
  readonly readOnDemandThroughputSettings?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_provisioned_throughput_settings DynamodbGlobalTable#read_provisioned_throughput_settings}
  */
  readonly readProvisionedThroughputSettings?: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings;
}

export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contributor_insights_specification: dynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct!.contributorInsightsSpecification),
    index_name: cdktn.stringToTerraform(struct!.indexName),
    read_on_demand_throughput_settings: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsToTerraform(struct!.readOnDemandThroughputSettings),
    read_provisioned_throughput_settings: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct!.readProvisionedThroughputSettings),
  }
}


export function dynamodbGlobalTableReplicasGlobalSecondaryIndexesToHclTerraform(struct?: DynamodbGlobalTableReplicasGlobalSecondaryIndexes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contributor_insights_specification: {
      value: dynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToHclTerraform(struct!.contributorInsightsSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification",
    },
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_on_demand_throughput_settings: {
      value: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsToHclTerraform(struct!.readOnDemandThroughputSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings",
    },
    read_provisioned_throughput_settings: {
      value: dynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToHclTerraform(struct!.readProvisionedThroughputSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableReplicasGlobalSecondaryIndexes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contributorInsightsSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contributorInsightsSpecification = this._contributorInsightsSpecification?.internalValue;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._readOnDemandThroughputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnDemandThroughputSettings = this._readOnDemandThroughputSettings?.internalValue;
    }
    if (this._readProvisionedThroughputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readProvisionedThroughputSettings = this._readProvisionedThroughputSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contributorInsightsSpecification.internalValue = undefined;
      this._indexName = undefined;
      this._readOnDemandThroughputSettings.internalValue = undefined;
      this._readProvisionedThroughputSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contributorInsightsSpecification.internalValue = value.contributorInsightsSpecification;
      this._indexName = value.indexName;
      this._readOnDemandThroughputSettings.internalValue = value.readOnDemandThroughputSettings;
      this._readProvisionedThroughputSettings.internalValue = value.readProvisionedThroughputSettings;
    }
  }

  // contributor_insights_specification - computed: true, optional: true, required: false
  private _contributorInsightsSpecification = new DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(this, "contributor_insights_specification");
  public get contributorInsightsSpecification() {
    return this._contributorInsightsSpecification;
  }
  public putContributorInsightsSpecification(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification) {
    this._contributorInsightsSpecification.internalValue = value;
  }
  public resetContributorInsightsSpecification() {
    this._contributorInsightsSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contributorInsightsSpecificationInput() {
    return this._contributorInsightsSpecification.internalValue;
  }

  // index_name - computed: true, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // read_on_demand_throughput_settings - computed: true, optional: true, required: false
  private _readOnDemandThroughputSettings = new DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(this, "read_on_demand_throughput_settings");
  public get readOnDemandThroughputSettings() {
    return this._readOnDemandThroughputSettings;
  }
  public putReadOnDemandThroughputSettings(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings) {
    this._readOnDemandThroughputSettings.internalValue = value;
  }
  public resetReadOnDemandThroughputSettings() {
    this._readOnDemandThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnDemandThroughputSettingsInput() {
    return this._readOnDemandThroughputSettings.internalValue;
  }

  // read_provisioned_throughput_settings - computed: true, optional: true, required: false
  private _readProvisionedThroughputSettings = new DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(this, "read_provisioned_throughput_settings");
  public get readProvisionedThroughputSettings() {
    return this._readProvisionedThroughputSettings;
  }
  public putReadProvisionedThroughputSettings(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings) {
    this._readProvisionedThroughputSettings.internalValue = value;
  }
  public resetReadProvisionedThroughputSettings() {
    this._readProvisionedThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readProvisionedThroughputSettingsInput() {
    return this._readProvisionedThroughputSettings.internalValue;
  }
}

export class DynamodbGlobalTableReplicasGlobalSecondaryIndexesList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableReplicasGlobalSecondaryIndexes[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference {
    return new DynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableReplicasKinesisStreamSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#approximate_creation_date_time_precision DynamodbGlobalTable#approximate_creation_date_time_precision}
  */
  readonly approximateCreationDateTimePrecision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#stream_arn DynamodbGlobalTable#stream_arn}
  */
  readonly streamArn?: string;
}

export function dynamodbGlobalTableReplicasKinesisStreamSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasKinesisStreamSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approximate_creation_date_time_precision: cdktn.stringToTerraform(struct!.approximateCreationDateTimePrecision),
    stream_arn: cdktn.stringToTerraform(struct!.streamArn),
  }
}


export function dynamodbGlobalTableReplicasKinesisStreamSpecificationToHclTerraform(struct?: DynamodbGlobalTableReplicasKinesisStreamSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approximate_creation_date_time_precision: {
      value: cdktn.stringToHclTerraform(struct!.approximateCreationDateTimePrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasKinesisStreamSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approximateCreationDateTimePrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.approximateCreationDateTimePrecision = this._approximateCreationDateTimePrecision;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasKinesisStreamSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approximateCreationDateTimePrecision = undefined;
      this._streamArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approximateCreationDateTimePrecision = value.approximateCreationDateTimePrecision;
      this._streamArn = value.streamArn;
    }
  }

  // approximate_creation_date_time_precision - computed: true, optional: true, required: false
  private _approximateCreationDateTimePrecision?: string; 
  public get approximateCreationDateTimePrecision() {
    return this.getStringAttribute('approximate_creation_date_time_precision');
  }
  public set approximateCreationDateTimePrecision(value: string) {
    this._approximateCreationDateTimePrecision = value;
  }
  public resetApproximateCreationDateTimePrecision() {
    this._approximateCreationDateTimePrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approximateCreationDateTimePrecisionInput() {
    return this._approximateCreationDateTimePrecision;
  }

  // stream_arn - computed: true, optional: true, required: false
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  public resetStreamArn() {
    this._streamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface DynamodbGlobalTableReplicasPointInTimeRecoverySpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#point_in_time_recovery_enabled DynamodbGlobalTable#point_in_time_recovery_enabled}
  */
  readonly pointInTimeRecoveryEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#recovery_period_in_days DynamodbGlobalTable#recovery_period_in_days}
  */
  readonly recoveryPeriodInDays?: number;
}

export function dynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct?: DynamodbGlobalTableReplicasPointInTimeRecoverySpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    point_in_time_recovery_enabled: cdktn.booleanToTerraform(struct!.pointInTimeRecoveryEnabled),
    recovery_period_in_days: cdktn.numberToTerraform(struct!.recoveryPeriodInDays),
  }
}


export function dynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToHclTerraform(struct?: DynamodbGlobalTableReplicasPointInTimeRecoverySpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    point_in_time_recovery_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.pointInTimeRecoveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recovery_period_in_days: {
      value: cdktn.numberToHclTerraform(struct!.recoveryPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasPointInTimeRecoverySpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pointInTimeRecoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeRecoveryEnabled = this._pointInTimeRecoveryEnabled;
    }
    if (this._recoveryPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPeriodInDays = this._recoveryPeriodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasPointInTimeRecoverySpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pointInTimeRecoveryEnabled = undefined;
      this._recoveryPeriodInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pointInTimeRecoveryEnabled = value.pointInTimeRecoveryEnabled;
      this._recoveryPeriodInDays = value.recoveryPeriodInDays;
    }
  }

  // point_in_time_recovery_enabled - computed: true, optional: true, required: false
  private _pointInTimeRecoveryEnabled?: boolean | cdktn.IResolvable; 
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }
  public set pointInTimeRecoveryEnabled(value: boolean | cdktn.IResolvable) {
    this._pointInTimeRecoveryEnabled = value;
  }
  public resetPointInTimeRecoveryEnabled() {
    this._pointInTimeRecoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryEnabledInput() {
    return this._pointInTimeRecoveryEnabled;
  }

  // recovery_period_in_days - computed: true, optional: true, required: false
  private _recoveryPeriodInDays?: number; 
  public get recoveryPeriodInDays() {
    return this.getNumberAttribute('recovery_period_in_days');
  }
  public set recoveryPeriodInDays(value: number) {
    this._recoveryPeriodInDays = value;
  }
  public resetRecoveryPeriodInDays() {
    this._recoveryPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPeriodInDaysInput() {
    return this._recoveryPeriodInDays;
  }
}
export interface DynamodbGlobalTableReplicasReadOnDemandThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_read_request_units DynamodbGlobalTable#max_read_request_units}
  */
  readonly maxReadRequestUnits?: number;
}

export function dynamodbGlobalTableReplicasReadOnDemandThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReplicasReadOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
  }
}


export function dynamodbGlobalTableReplicasReadOnDemandThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableReplicasReadOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_read_request_units: {
      value: cdktn.numberToHclTerraform(struct!.maxReadRequestUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasReadOnDemandThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReadRequestUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasReadOnDemandThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = value.maxReadRequestUnits;
    }
  }

  // max_read_request_units - computed: true, optional: true, required: false
  private _maxReadRequestUnits?: number; 
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }
  public set maxReadRequestUnits(value: number) {
    this._maxReadRequestUnits = value;
  }
  public resetMaxReadRequestUnits() {
    this._maxReadRequestUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReadRequestUnitsInput() {
    return this._maxReadRequestUnits;
  }
}
export interface DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#disable_scale_in DynamodbGlobalTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#scale_in_cooldown DynamodbGlobalTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#scale_out_cooldown DynamodbGlobalTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#target_value DynamodbGlobalTable#target_value}
  */
  readonly targetValue?: number;
}

export function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_in_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableScaleIn = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableScaleIn = value.disableScaleIn;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
      this._targetValue = value.targetValue;
    }
  }

  // disable_scale_in - computed: true, optional: true, required: false
  private _disableScaleIn?: boolean | cdktn.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktn.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // scale_in_cooldown - computed: true, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: true, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_capacity DynamodbGlobalTable#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#min_capacity DynamodbGlobalTable#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#seed_capacity DynamodbGlobalTable#seed_capacity}
  */
  readonly seedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#target_tracking_scaling_policy_configuration DynamodbGlobalTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
}

export function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktn.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}


export function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToHclTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_capacity: {
      value: cdktn.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktn.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seed_capacity: {
      value: cdktn.numberToHclTerraform(struct!.seedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_tracking_scaling_policy_configuration: {
      value: dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._seedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedCapacity = this._seedCapacity;
    }
    if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._seedCapacity = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._seedCapacity = value.seedCapacity;
      this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
    }
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: true, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // seed_capacity - computed: true, optional: true, required: false
  private _seedCapacity?: number; 
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }
  public set seedCapacity(value: number) {
    this._seedCapacity = value;
  }
  public resetSeedCapacity() {
    this._seedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedCapacityInput() {
    return this._seedCapacity;
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration = new DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public putTargetTrackingScalingPolicyConfiguration(value: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration) {
    this._targetTrackingScalingPolicyConfiguration.internalValue = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration.internalValue;
  }
}
export interface DynamodbGlobalTableReplicasReadProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_capacity_auto_scaling_settings DynamodbGlobalTable#read_capacity_auto_scaling_settings}
  */
  readonly readCapacityAutoScalingSettings?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_capacity_units DynamodbGlobalTable#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
}

export function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_capacity_auto_scaling_settings: dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct!.readCapacityAutoScalingSettings),
    read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
  }
}


export function dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_capacity_auto_scaling_settings: {
      value: dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToHclTerraform(struct!.readCapacityAutoScalingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings",
    },
    read_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasReadProvisionedThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityAutoScalingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityAutoScalingSettings = this._readCapacityAutoScalingSettings?.internalValue;
    }
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasReadProvisionedThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityAutoScalingSettings.internalValue = undefined;
      this._readCapacityUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityAutoScalingSettings.internalValue = value.readCapacityAutoScalingSettings;
      this._readCapacityUnits = value.readCapacityUnits;
    }
  }

  // read_capacity_auto_scaling_settings - computed: true, optional: true, required: false
  private _readCapacityAutoScalingSettings = new DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(this, "read_capacity_auto_scaling_settings");
  public get readCapacityAutoScalingSettings() {
    return this._readCapacityAutoScalingSettings;
  }
  public putReadCapacityAutoScalingSettings(value: DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings) {
    this._readCapacityAutoScalingSettings.internalValue = value;
  }
  public resetReadCapacityAutoScalingSettings() {
    this._readCapacityAutoScalingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityAutoScalingSettingsInput() {
    return this._readCapacityAutoScalingSettings.internalValue;
  }

  // read_capacity_units - computed: true, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }
}
export interface DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#policy_document DynamodbGlobalTable#policy_document}
  */
  readonly policyDocument?: string;
}

export function dynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyToTerraform(struct?: DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_document: cdktn.stringToTerraform(struct!.policyDocument),
  }
}


export function dynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyToHclTerraform(struct?: DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_document: {
      value: cdktn.stringToHclTerraform(struct!.policyDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDocument = this._policyDocument;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyDocument = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyDocument = value.policyDocument;
    }
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
}
export interface DynamodbGlobalTableReplicasReplicaStreamSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#resource_policy DynamodbGlobalTable#resource_policy}
  */
  readonly resourcePolicy?: DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy;
}

export function dynamodbGlobalTableReplicasReplicaStreamSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasReplicaStreamSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_policy: dynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyToTerraform(struct!.resourcePolicy),
  }
}


export function dynamodbGlobalTableReplicasReplicaStreamSpecificationToHclTerraform(struct?: DynamodbGlobalTableReplicasReplicaStreamSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_policy: {
      value: dynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyToHclTerraform(struct!.resourcePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasReplicaStreamSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourcePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePolicy = this._resourcePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasReplicaStreamSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourcePolicy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourcePolicy.internalValue = value.resourcePolicy;
    }
  }

  // resource_policy - computed: true, optional: true, required: false
  private _resourcePolicy = new DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }
  public putResourcePolicy(value: DynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy) {
    this._resourcePolicy.internalValue = value;
  }
  public resetResourcePolicy() {
    this._resourcePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePolicyInput() {
    return this._resourcePolicy.internalValue;
  }
}
export interface DynamodbGlobalTableReplicasResourcePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#policy_document DynamodbGlobalTable#policy_document}
  */
  readonly policyDocument?: string;
}

export function dynamodbGlobalTableReplicasResourcePolicyToTerraform(struct?: DynamodbGlobalTableReplicasResourcePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_document: cdktn.stringToTerraform(struct!.policyDocument),
  }
}


export function dynamodbGlobalTableReplicasResourcePolicyToHclTerraform(struct?: DynamodbGlobalTableReplicasResourcePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_document: {
      value: cdktn.stringToHclTerraform(struct!.policyDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasResourcePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasResourcePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDocument = this._policyDocument;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasResourcePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyDocument = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyDocument = value.policyDocument;
    }
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
}
export interface DynamodbGlobalTableReplicasSseSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#kms_master_key_id DynamodbGlobalTable#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
}

export function dynamodbGlobalTableReplicasSseSpecificationToTerraform(struct?: DynamodbGlobalTableReplicasSseSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_master_key_id: cdktn.stringToTerraform(struct!.kmsMasterKeyId),
  }
}


export function dynamodbGlobalTableReplicasSseSpecificationToHclTerraform(struct?: DynamodbGlobalTableReplicasSseSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_master_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsMasterKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasSseSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableReplicasSseSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicasSseSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsMasterKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsMasterKeyId = value.kmsMasterKeyId;
    }
  }

  // kms_master_key_id - computed: true, optional: true, required: false
  private _kmsMasterKeyId?: string; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
  }
}
export interface DynamodbGlobalTableReplicasTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#key DynamodbGlobalTable#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#value DynamodbGlobalTable#value}
  */
  readonly value?: string;
}

export function dynamodbGlobalTableReplicasTagsToTerraform(struct?: DynamodbGlobalTableReplicasTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dynamodbGlobalTableReplicasTagsToHclTerraform(struct?: DynamodbGlobalTableReplicasTags | cdktn.IResolvable): any {
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

export class DynamodbGlobalTableReplicasTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableReplicasTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DynamodbGlobalTableReplicasTags | cdktn.IResolvable | undefined) {
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

export class DynamodbGlobalTableReplicasTagsList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableReplicasTags[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableReplicasTagsOutputReference {
    return new DynamodbGlobalTableReplicasTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#contributor_insights_specification DynamodbGlobalTable#contributor_insights_specification}
  */
  readonly contributorInsightsSpecification?: DynamodbGlobalTableReplicasContributorInsightsSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#deletion_protection_enabled DynamodbGlobalTable#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#global_secondary_indexes DynamodbGlobalTable#global_secondary_indexes}
  */
  readonly globalSecondaryIndexes?: DynamodbGlobalTableReplicasGlobalSecondaryIndexes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#global_table_settings_replication_mode DynamodbGlobalTable#global_table_settings_replication_mode}
  */
  readonly globalTableSettingsReplicationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#kinesis_stream_specification DynamodbGlobalTable#kinesis_stream_specification}
  */
  readonly kinesisStreamSpecification?: DynamodbGlobalTableReplicasKinesisStreamSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#point_in_time_recovery_specification DynamodbGlobalTable#point_in_time_recovery_specification}
  */
  readonly pointInTimeRecoverySpecification?: DynamodbGlobalTableReplicasPointInTimeRecoverySpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_on_demand_throughput_settings DynamodbGlobalTable#read_on_demand_throughput_settings}
  */
  readonly readOnDemandThroughputSettings?: DynamodbGlobalTableReplicasReadOnDemandThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_provisioned_throughput_settings DynamodbGlobalTable#read_provisioned_throughput_settings}
  */
  readonly readProvisionedThroughputSettings?: DynamodbGlobalTableReplicasReadProvisionedThroughputSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#region DynamodbGlobalTable#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#replica_stream_specification DynamodbGlobalTable#replica_stream_specification}
  */
  readonly replicaStreamSpecification?: DynamodbGlobalTableReplicasReplicaStreamSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#resource_policy DynamodbGlobalTable#resource_policy}
  */
  readonly resourcePolicy?: DynamodbGlobalTableReplicasResourcePolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#sse_specification DynamodbGlobalTable#sse_specification}
  */
  readonly sseSpecification?: DynamodbGlobalTableReplicasSseSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#table_class DynamodbGlobalTable#table_class}
  */
  readonly tableClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#tags DynamodbGlobalTable#tags}
  */
  readonly tags?: DynamodbGlobalTableReplicasTags[] | cdktn.IResolvable;
}

export function dynamodbGlobalTableReplicasToTerraform(struct?: DynamodbGlobalTableReplicas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contributor_insights_specification: dynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct!.contributorInsightsSpecification),
    deletion_protection_enabled: cdktn.booleanToTerraform(struct!.deletionProtectionEnabled),
    global_secondary_indexes: cdktn.listMapper(dynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform, false)(struct!.globalSecondaryIndexes),
    global_table_settings_replication_mode: cdktn.stringToTerraform(struct!.globalTableSettingsReplicationMode),
    kinesis_stream_specification: dynamodbGlobalTableReplicasKinesisStreamSpecificationToTerraform(struct!.kinesisStreamSpecification),
    point_in_time_recovery_specification: dynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct!.pointInTimeRecoverySpecification),
    read_on_demand_throughput_settings: dynamodbGlobalTableReplicasReadOnDemandThroughputSettingsToTerraform(struct!.readOnDemandThroughputSettings),
    read_provisioned_throughput_settings: dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct!.readProvisionedThroughputSettings),
    region: cdktn.stringToTerraform(struct!.region),
    replica_stream_specification: dynamodbGlobalTableReplicasReplicaStreamSpecificationToTerraform(struct!.replicaStreamSpecification),
    resource_policy: dynamodbGlobalTableReplicasResourcePolicyToTerraform(struct!.resourcePolicy),
    sse_specification: dynamodbGlobalTableReplicasSseSpecificationToTerraform(struct!.sseSpecification),
    table_class: cdktn.stringToTerraform(struct!.tableClass),
    tags: cdktn.listMapper(dynamodbGlobalTableReplicasTagsToTerraform, false)(struct!.tags),
  }
}


export function dynamodbGlobalTableReplicasToHclTerraform(struct?: DynamodbGlobalTableReplicas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contributor_insights_specification: {
      value: dynamodbGlobalTableReplicasContributorInsightsSpecificationToHclTerraform(struct!.contributorInsightsSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasContributorInsightsSpecification",
    },
    deletion_protection_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.deletionProtectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_secondary_indexes: {
      value: cdktn.listMapperHcl(dynamodbGlobalTableReplicasGlobalSecondaryIndexesToHclTerraform, false)(struct!.globalSecondaryIndexes),
      isBlock: true,
      type: "set",
      storageClassType: "DynamodbGlobalTableReplicasGlobalSecondaryIndexesList",
    },
    global_table_settings_replication_mode: {
      value: cdktn.stringToHclTerraform(struct!.globalTableSettingsReplicationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis_stream_specification: {
      value: dynamodbGlobalTableReplicasKinesisStreamSpecificationToHclTerraform(struct!.kinesisStreamSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasKinesisStreamSpecification",
    },
    point_in_time_recovery_specification: {
      value: dynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToHclTerraform(struct!.pointInTimeRecoverySpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasPointInTimeRecoverySpecification",
    },
    read_on_demand_throughput_settings: {
      value: dynamodbGlobalTableReplicasReadOnDemandThroughputSettingsToHclTerraform(struct!.readOnDemandThroughputSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasReadOnDemandThroughputSettings",
    },
    read_provisioned_throughput_settings: {
      value: dynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToHclTerraform(struct!.readProvisionedThroughputSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasReadProvisionedThroughputSettings",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_stream_specification: {
      value: dynamodbGlobalTableReplicasReplicaStreamSpecificationToHclTerraform(struct!.replicaStreamSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasReplicaStreamSpecification",
    },
    resource_policy: {
      value: dynamodbGlobalTableReplicasResourcePolicyToHclTerraform(struct!.resourcePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasResourcePolicy",
    },
    sse_specification: {
      value: dynamodbGlobalTableReplicasSseSpecificationToHclTerraform(struct!.sseSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableReplicasSseSpecification",
    },
    table_class: {
      value: cdktn.stringToHclTerraform(struct!.tableClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(dynamodbGlobalTableReplicasTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "DynamodbGlobalTableReplicasTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableReplicasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DynamodbGlobalTableReplicas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contributorInsightsSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contributorInsightsSpecification = this._contributorInsightsSpecification?.internalValue;
    }
    if (this._deletionProtectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtectionEnabled = this._deletionProtectionEnabled;
    }
    if (this._globalSecondaryIndexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalSecondaryIndexes = this._globalSecondaryIndexes?.internalValue;
    }
    if (this._globalTableSettingsReplicationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalTableSettingsReplicationMode = this._globalTableSettingsReplicationMode;
    }
    if (this._kinesisStreamSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamSpecification = this._kinesisStreamSpecification?.internalValue;
    }
    if (this._pointInTimeRecoverySpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeRecoverySpecification = this._pointInTimeRecoverySpecification?.internalValue;
    }
    if (this._readOnDemandThroughputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnDemandThroughputSettings = this._readOnDemandThroughputSettings?.internalValue;
    }
    if (this._readProvisionedThroughputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readProvisionedThroughputSettings = this._readProvisionedThroughputSettings?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._replicaStreamSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaStreamSpecification = this._replicaStreamSpecification?.internalValue;
    }
    if (this._resourcePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePolicy = this._resourcePolicy?.internalValue;
    }
    if (this._sseSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseSpecification = this._sseSpecification?.internalValue;
    }
    if (this._tableClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableClass = this._tableClass;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableReplicas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contributorInsightsSpecification.internalValue = undefined;
      this._deletionProtectionEnabled = undefined;
      this._globalSecondaryIndexes.internalValue = undefined;
      this._globalTableSettingsReplicationMode = undefined;
      this._kinesisStreamSpecification.internalValue = undefined;
      this._pointInTimeRecoverySpecification.internalValue = undefined;
      this._readOnDemandThroughputSettings.internalValue = undefined;
      this._readProvisionedThroughputSettings.internalValue = undefined;
      this._region = undefined;
      this._replicaStreamSpecification.internalValue = undefined;
      this._resourcePolicy.internalValue = undefined;
      this._sseSpecification.internalValue = undefined;
      this._tableClass = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contributorInsightsSpecification.internalValue = value.contributorInsightsSpecification;
      this._deletionProtectionEnabled = value.deletionProtectionEnabled;
      this._globalSecondaryIndexes.internalValue = value.globalSecondaryIndexes;
      this._globalTableSettingsReplicationMode = value.globalTableSettingsReplicationMode;
      this._kinesisStreamSpecification.internalValue = value.kinesisStreamSpecification;
      this._pointInTimeRecoverySpecification.internalValue = value.pointInTimeRecoverySpecification;
      this._readOnDemandThroughputSettings.internalValue = value.readOnDemandThroughputSettings;
      this._readProvisionedThroughputSettings.internalValue = value.readProvisionedThroughputSettings;
      this._region = value.region;
      this._replicaStreamSpecification.internalValue = value.replicaStreamSpecification;
      this._resourcePolicy.internalValue = value.resourcePolicy;
      this._sseSpecification.internalValue = value.sseSpecification;
      this._tableClass = value.tableClass;
      this._tags.internalValue = value.tags;
    }
  }

  // contributor_insights_specification - computed: true, optional: true, required: false
  private _contributorInsightsSpecification = new DynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference(this, "contributor_insights_specification");
  public get contributorInsightsSpecification() {
    return this._contributorInsightsSpecification;
  }
  public putContributorInsightsSpecification(value: DynamodbGlobalTableReplicasContributorInsightsSpecification) {
    this._contributorInsightsSpecification.internalValue = value;
  }
  public resetContributorInsightsSpecification() {
    this._contributorInsightsSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contributorInsightsSpecificationInput() {
    return this._contributorInsightsSpecification.internalValue;
  }

  // deletion_protection_enabled - computed: true, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktn.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktn.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // global_secondary_indexes - computed: true, optional: true, required: false
  private _globalSecondaryIndexes = new DynamodbGlobalTableReplicasGlobalSecondaryIndexesList(this, "global_secondary_indexes", true);
  public get globalSecondaryIndexes() {
    return this._globalSecondaryIndexes;
  }
  public putGlobalSecondaryIndexes(value: DynamodbGlobalTableReplicasGlobalSecondaryIndexes[] | cdktn.IResolvable) {
    this._globalSecondaryIndexes.internalValue = value;
  }
  public resetGlobalSecondaryIndexes() {
    this._globalSecondaryIndexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSecondaryIndexesInput() {
    return this._globalSecondaryIndexes.internalValue;
  }

  // global_table_settings_replication_mode - computed: true, optional: true, required: false
  private _globalTableSettingsReplicationMode?: string; 
  public get globalTableSettingsReplicationMode() {
    return this.getStringAttribute('global_table_settings_replication_mode');
  }
  public set globalTableSettingsReplicationMode(value: string) {
    this._globalTableSettingsReplicationMode = value;
  }
  public resetGlobalTableSettingsReplicationMode() {
    this._globalTableSettingsReplicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTableSettingsReplicationModeInput() {
    return this._globalTableSettingsReplicationMode;
  }

  // kinesis_stream_specification - computed: true, optional: true, required: false
  private _kinesisStreamSpecification = new DynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference(this, "kinesis_stream_specification");
  public get kinesisStreamSpecification() {
    return this._kinesisStreamSpecification;
  }
  public putKinesisStreamSpecification(value: DynamodbGlobalTableReplicasKinesisStreamSpecification) {
    this._kinesisStreamSpecification.internalValue = value;
  }
  public resetKinesisStreamSpecification() {
    this._kinesisStreamSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamSpecificationInput() {
    return this._kinesisStreamSpecification.internalValue;
  }

  // point_in_time_recovery_specification - computed: true, optional: true, required: false
  private _pointInTimeRecoverySpecification = new DynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference(this, "point_in_time_recovery_specification");
  public get pointInTimeRecoverySpecification() {
    return this._pointInTimeRecoverySpecification;
  }
  public putPointInTimeRecoverySpecification(value: DynamodbGlobalTableReplicasPointInTimeRecoverySpecification) {
    this._pointInTimeRecoverySpecification.internalValue = value;
  }
  public resetPointInTimeRecoverySpecification() {
    this._pointInTimeRecoverySpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoverySpecificationInput() {
    return this._pointInTimeRecoverySpecification.internalValue;
  }

  // read_on_demand_throughput_settings - computed: true, optional: true, required: false
  private _readOnDemandThroughputSettings = new DynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference(this, "read_on_demand_throughput_settings");
  public get readOnDemandThroughputSettings() {
    return this._readOnDemandThroughputSettings;
  }
  public putReadOnDemandThroughputSettings(value: DynamodbGlobalTableReplicasReadOnDemandThroughputSettings) {
    this._readOnDemandThroughputSettings.internalValue = value;
  }
  public resetReadOnDemandThroughputSettings() {
    this._readOnDemandThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnDemandThroughputSettingsInput() {
    return this._readOnDemandThroughputSettings.internalValue;
  }

  // read_provisioned_throughput_settings - computed: true, optional: true, required: false
  private _readProvisionedThroughputSettings = new DynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference(this, "read_provisioned_throughput_settings");
  public get readProvisionedThroughputSettings() {
    return this._readProvisionedThroughputSettings;
  }
  public putReadProvisionedThroughputSettings(value: DynamodbGlobalTableReplicasReadProvisionedThroughputSettings) {
    this._readProvisionedThroughputSettings.internalValue = value;
  }
  public resetReadProvisionedThroughputSettings() {
    this._readProvisionedThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readProvisionedThroughputSettingsInput() {
    return this._readProvisionedThroughputSettings.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replica_stream_specification - computed: true, optional: true, required: false
  private _replicaStreamSpecification = new DynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference(this, "replica_stream_specification");
  public get replicaStreamSpecification() {
    return this._replicaStreamSpecification;
  }
  public putReplicaStreamSpecification(value: DynamodbGlobalTableReplicasReplicaStreamSpecification) {
    this._replicaStreamSpecification.internalValue = value;
  }
  public resetReplicaStreamSpecification() {
    this._replicaStreamSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaStreamSpecificationInput() {
    return this._replicaStreamSpecification.internalValue;
  }

  // resource_policy - computed: true, optional: true, required: false
  private _resourcePolicy = new DynamodbGlobalTableReplicasResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }
  public putResourcePolicy(value: DynamodbGlobalTableReplicasResourcePolicy) {
    this._resourcePolicy.internalValue = value;
  }
  public resetResourcePolicy() {
    this._resourcePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePolicyInput() {
    return this._resourcePolicy.internalValue;
  }

  // sse_specification - computed: true, optional: true, required: false
  private _sseSpecification = new DynamodbGlobalTableReplicasSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }
  public putSseSpecification(value: DynamodbGlobalTableReplicasSseSpecification) {
    this._sseSpecification.internalValue = value;
  }
  public resetSseSpecification() {
    this._sseSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseSpecificationInput() {
    return this._sseSpecification.internalValue;
  }

  // table_class - computed: true, optional: true, required: false
  private _tableClass?: string; 
  public get tableClass() {
    return this.getStringAttribute('table_class');
  }
  public set tableClass(value: string) {
    this._tableClass = value;
  }
  public resetTableClass() {
    this._tableClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableClassInput() {
    return this._tableClass;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DynamodbGlobalTableReplicasTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DynamodbGlobalTableReplicasTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class DynamodbGlobalTableReplicasList extends cdktn.ComplexList {
  public internalValue? : DynamodbGlobalTableReplicas[] | cdktn.IResolvable

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
  public get(index: number): DynamodbGlobalTableReplicasOutputReference {
    return new DynamodbGlobalTableReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalTableSseSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#sse_enabled DynamodbGlobalTable#sse_enabled}
  */
  readonly sseEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#sse_type DynamodbGlobalTable#sse_type}
  */
  readonly sseType?: string;
}

export function dynamodbGlobalTableSseSpecificationToTerraform(struct?: DynamodbGlobalTableSseSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sse_enabled: cdktn.booleanToTerraform(struct!.sseEnabled),
    sse_type: cdktn.stringToTerraform(struct!.sseType),
  }
}


export function dynamodbGlobalTableSseSpecificationToHclTerraform(struct?: DynamodbGlobalTableSseSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sse_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.sseEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sse_type: {
      value: cdktn.stringToHclTerraform(struct!.sseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableSseSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableSseSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseEnabled = this._sseEnabled;
    }
    if (this._sseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseType = this._sseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableSseSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sseEnabled = undefined;
      this._sseType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sseEnabled = value.sseEnabled;
      this._sseType = value.sseType;
    }
  }

  // sse_enabled - computed: true, optional: true, required: false
  private _sseEnabled?: boolean | cdktn.IResolvable; 
  public get sseEnabled() {
    return this.getBooleanAttribute('sse_enabled');
  }
  public set sseEnabled(value: boolean | cdktn.IResolvable) {
    this._sseEnabled = value;
  }
  public resetSseEnabled() {
    this._sseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseEnabledInput() {
    return this._sseEnabled;
  }

  // sse_type - computed: true, optional: true, required: false
  private _sseType?: string; 
  public get sseType() {
    return this.getStringAttribute('sse_type');
  }
  public set sseType(value: string) {
    this._sseType = value;
  }
  public resetSseType() {
    this._sseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseTypeInput() {
    return this._sseType;
  }
}
export interface DynamodbGlobalTableStreamSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#stream_view_type DynamodbGlobalTable#stream_view_type}
  */
  readonly streamViewType?: string;
}

export function dynamodbGlobalTableStreamSpecificationToTerraform(struct?: DynamodbGlobalTableStreamSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stream_view_type: cdktn.stringToTerraform(struct!.streamViewType),
  }
}


export function dynamodbGlobalTableStreamSpecificationToHclTerraform(struct?: DynamodbGlobalTableStreamSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stream_view_type: {
      value: cdktn.stringToHclTerraform(struct!.streamViewType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableStreamSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableStreamSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamViewType !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamViewType = this._streamViewType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableStreamSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamViewType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamViewType = value.streamViewType;
    }
  }

  // stream_view_type - computed: true, optional: true, required: false
  private _streamViewType?: string; 
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
  }
  public set streamViewType(value: string) {
    this._streamViewType = value;
  }
  public resetStreamViewType() {
    this._streamViewType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamViewTypeInput() {
    return this._streamViewType;
  }
}
export interface DynamodbGlobalTableTimeToLiveSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#attribute_name DynamodbGlobalTable#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#enabled DynamodbGlobalTable#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function dynamodbGlobalTableTimeToLiveSpecificationToTerraform(struct?: DynamodbGlobalTableTimeToLiveSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function dynamodbGlobalTableTimeToLiveSpecificationToHclTerraform(struct?: DynamodbGlobalTableTimeToLiveSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DynamodbGlobalTableTimeToLiveSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableTimeToLiveSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableTimeToLiveSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._enabled = value.enabled;
    }
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
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
export interface DynamodbGlobalTableWarmThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#read_units_per_second DynamodbGlobalTable#read_units_per_second}
  */
  readonly readUnitsPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#write_units_per_second DynamodbGlobalTable#write_units_per_second}
  */
  readonly writeUnitsPerSecond?: number;
}

export function dynamodbGlobalTableWarmThroughputToTerraform(struct?: DynamodbGlobalTableWarmThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_units_per_second: cdktn.numberToTerraform(struct!.readUnitsPerSecond),
    write_units_per_second: cdktn.numberToTerraform(struct!.writeUnitsPerSecond),
  }
}


export function dynamodbGlobalTableWarmThroughputToHclTerraform(struct?: DynamodbGlobalTableWarmThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_units_per_second: {
      value: cdktn.numberToHclTerraform(struct!.readUnitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_units_per_second: {
      value: cdktn.numberToHclTerraform(struct!.writeUnitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableWarmThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableWarmThroughput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readUnitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.readUnitsPerSecond = this._readUnitsPerSecond;
    }
    if (this._writeUnitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeUnitsPerSecond = this._writeUnitsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableWarmThroughput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readUnitsPerSecond = undefined;
      this._writeUnitsPerSecond = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readUnitsPerSecond = value.readUnitsPerSecond;
      this._writeUnitsPerSecond = value.writeUnitsPerSecond;
    }
  }

  // read_units_per_second - computed: true, optional: true, required: false
  private _readUnitsPerSecond?: number; 
  public get readUnitsPerSecond() {
    return this.getNumberAttribute('read_units_per_second');
  }
  public set readUnitsPerSecond(value: number) {
    this._readUnitsPerSecond = value;
  }
  public resetReadUnitsPerSecond() {
    this._readUnitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readUnitsPerSecondInput() {
    return this._readUnitsPerSecond;
  }

  // write_units_per_second - computed: true, optional: true, required: false
  private _writeUnitsPerSecond?: number; 
  public get writeUnitsPerSecond() {
    return this.getNumberAttribute('write_units_per_second');
  }
  public set writeUnitsPerSecond(value: number) {
    this._writeUnitsPerSecond = value;
  }
  public resetWriteUnitsPerSecond() {
    this._writeUnitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeUnitsPerSecondInput() {
    return this._writeUnitsPerSecond;
  }
}
export interface DynamodbGlobalTableWriteOnDemandThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_write_request_units DynamodbGlobalTable#max_write_request_units}
  */
  readonly maxWriteRequestUnits?: number;
}

export function dynamodbGlobalTableWriteOnDemandThroughputSettingsToTerraform(struct?: DynamodbGlobalTableWriteOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_write_request_units: cdktn.numberToTerraform(struct!.maxWriteRequestUnits),
  }
}


export function dynamodbGlobalTableWriteOnDemandThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableWriteOnDemandThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_write_request_units: {
      value: cdktn.numberToHclTerraform(struct!.maxWriteRequestUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableWriteOnDemandThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWriteRequestUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWriteRequestUnits = this._maxWriteRequestUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableWriteOnDemandThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxWriteRequestUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxWriteRequestUnits = value.maxWriteRequestUnits;
    }
  }

  // max_write_request_units - computed: true, optional: true, required: false
  private _maxWriteRequestUnits?: number; 
  public get maxWriteRequestUnits() {
    return this.getNumberAttribute('max_write_request_units');
  }
  public set maxWriteRequestUnits(value: number) {
    this._maxWriteRequestUnits = value;
  }
  public resetMaxWriteRequestUnits() {
    this._maxWriteRequestUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWriteRequestUnitsInput() {
    return this._maxWriteRequestUnits;
  }
}
export interface DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#disable_scale_in DynamodbGlobalTable#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#scale_in_cooldown DynamodbGlobalTable#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#scale_out_cooldown DynamodbGlobalTable#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#target_value DynamodbGlobalTable#target_value}
  */
  readonly targetValue?: number;
}

export function dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
    scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_in_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableScaleIn = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableScaleIn = value.disableScaleIn;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
      this._targetValue = value.targetValue;
    }
  }

  // disable_scale_in - computed: true, optional: true, required: false
  private _disableScaleIn?: boolean | cdktn.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktn.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // scale_in_cooldown - computed: true, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: true, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#max_capacity DynamodbGlobalTable#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#min_capacity DynamodbGlobalTable#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#seed_capacity DynamodbGlobalTable#seed_capacity}
  */
  readonly seedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#target_tracking_scaling_policy_configuration DynamodbGlobalTable#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;
}

export function dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
    seed_capacity: cdktn.numberToTerraform(struct!.seedCapacity),
    target_tracking_scaling_policy_configuration: dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}


export function dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToHclTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_capacity: {
      value: cdktn.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktn.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seed_capacity: {
      value: cdktn.numberToHclTerraform(struct!.seedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_tracking_scaling_policy_configuration: {
      value: dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._seedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedCapacity = this._seedCapacity;
    }
    if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._seedCapacity = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._seedCapacity = value.seedCapacity;
      this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
    }
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: true, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // seed_capacity - computed: true, optional: true, required: false
  private _seedCapacity?: number; 
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }
  public set seedCapacity(value: number) {
    this._seedCapacity = value;
  }
  public resetSeedCapacity() {
    this._seedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedCapacityInput() {
    return this._seedCapacity;
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration = new DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public putTargetTrackingScalingPolicyConfiguration(value: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration) {
    this._targetTrackingScalingPolicyConfiguration.internalValue = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration.internalValue;
  }
}
export interface DynamodbGlobalTableWriteProvisionedThroughputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#write_capacity_auto_scaling_settings DynamodbGlobalTable#write_capacity_auto_scaling_settings}
  */
  readonly writeCapacityAutoScalingSettings?: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;
}

export function dynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    write_capacity_auto_scaling_settings: dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct!.writeCapacityAutoScalingSettings),
  }
}


export function dynamodbGlobalTableWriteProvisionedThroughputSettingsToHclTerraform(struct?: DynamodbGlobalTableWriteProvisionedThroughputSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    write_capacity_auto_scaling_settings: {
      value: dynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToHclTerraform(struct!.writeCapacityAutoScalingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalTableWriteProvisionedThroughputSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writeCapacityAutoScalingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacityAutoScalingSettings = this._writeCapacityAutoScalingSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalTableWriteProvisionedThroughputSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._writeCapacityAutoScalingSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._writeCapacityAutoScalingSettings.internalValue = value.writeCapacityAutoScalingSettings;
    }
  }

  // write_capacity_auto_scaling_settings - computed: true, optional: true, required: false
  private _writeCapacityAutoScalingSettings = new DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(this, "write_capacity_auto_scaling_settings");
  public get writeCapacityAutoScalingSettings() {
    return this._writeCapacityAutoScalingSettings;
  }
  public putWriteCapacityAutoScalingSettings(value: DynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings) {
    this._writeCapacityAutoScalingSettings.internalValue = value;
  }
  public resetWriteCapacityAutoScalingSettings() {
    this._writeCapacityAutoScalingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityAutoScalingSettingsInput() {
    return this._writeCapacityAutoScalingSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table awscc_dynamodb_global_table}
*/
export class DynamodbGlobalTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dynamodb_global_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DynamodbGlobalTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamodbGlobalTable to import
  * @param importFromId The id of the existing DynamodbGlobalTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamodbGlobalTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dynamodb_global_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/dynamodb_global_table awscc_dynamodb_global_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamodbGlobalTableConfig
  */
  public constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dynamodb_global_table',
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
    this._attributeDefinitions.internalValue = config.attributeDefinitions;
    this._billingMode = config.billingMode;
    this._globalSecondaryIndexes.internalValue = config.globalSecondaryIndexes;
    this._globalTableSourceArn = config.globalTableSourceArn;
    this._globalTableWitnesses.internalValue = config.globalTableWitnesses;
    this._keySchema.internalValue = config.keySchema;
    this._localSecondaryIndexes.internalValue = config.localSecondaryIndexes;
    this._multiRegionConsistency = config.multiRegionConsistency;
    this._readOnDemandThroughputSettings.internalValue = config.readOnDemandThroughputSettings;
    this._readProvisionedThroughputSettings.internalValue = config.readProvisionedThroughputSettings;
    this._replicas.internalValue = config.replicas;
    this._sseSpecification.internalValue = config.sseSpecification;
    this._streamSpecification.internalValue = config.streamSpecification;
    this._tableName = config.tableName;
    this._timeToLiveSpecification.internalValue = config.timeToLiveSpecification;
    this._warmThroughput.internalValue = config.warmThroughput;
    this._writeOnDemandThroughputSettings.internalValue = config.writeOnDemandThroughputSettings;
    this._writeProvisionedThroughputSettings.internalValue = config.writeProvisionedThroughputSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute_definitions - computed: true, optional: true, required: false
  private _attributeDefinitions = new DynamodbGlobalTableAttributeDefinitionsList(this, "attribute_definitions", true);
  public get attributeDefinitions() {
    return this._attributeDefinitions;
  }
  public putAttributeDefinitions(value: DynamodbGlobalTableAttributeDefinitions[] | cdktn.IResolvable) {
    this._attributeDefinitions.internalValue = value;
  }
  public resetAttributeDefinitions() {
    this._attributeDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDefinitionsInput() {
    return this._attributeDefinitions.internalValue;
  }

  // billing_mode - computed: true, optional: true, required: false
  private _billingMode?: string; 
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }
  public set billingMode(value: string) {
    this._billingMode = value;
  }
  public resetBillingMode() {
    this._billingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode;
  }

  // global_secondary_indexes - computed: true, optional: true, required: false
  private _globalSecondaryIndexes = new DynamodbGlobalTableGlobalSecondaryIndexesList(this, "global_secondary_indexes", true);
  public get globalSecondaryIndexes() {
    return this._globalSecondaryIndexes;
  }
  public putGlobalSecondaryIndexes(value: DynamodbGlobalTableGlobalSecondaryIndexes[] | cdktn.IResolvable) {
    this._globalSecondaryIndexes.internalValue = value;
  }
  public resetGlobalSecondaryIndexes() {
    this._globalSecondaryIndexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSecondaryIndexesInput() {
    return this._globalSecondaryIndexes.internalValue;
  }

  // global_table_source_arn - computed: true, optional: true, required: false
  private _globalTableSourceArn?: string; 
  public get globalTableSourceArn() {
    return this.getStringAttribute('global_table_source_arn');
  }
  public set globalTableSourceArn(value: string) {
    this._globalTableSourceArn = value;
  }
  public resetGlobalTableSourceArn() {
    this._globalTableSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTableSourceArnInput() {
    return this._globalTableSourceArn;
  }

  // global_table_witnesses - computed: true, optional: true, required: false
  private _globalTableWitnesses = new DynamodbGlobalTableGlobalTableWitnessesList(this, "global_table_witnesses", true);
  public get globalTableWitnesses() {
    return this._globalTableWitnesses;
  }
  public putGlobalTableWitnesses(value: DynamodbGlobalTableGlobalTableWitnesses[] | cdktn.IResolvable) {
    this._globalTableWitnesses.internalValue = value;
  }
  public resetGlobalTableWitnesses() {
    this._globalTableWitnesses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTableWitnessesInput() {
    return this._globalTableWitnesses.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_schema - computed: true, optional: true, required: false
  private _keySchema = new DynamodbGlobalTableKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: DynamodbGlobalTableKeySchema[] | cdktn.IResolvable) {
    this._keySchema.internalValue = value;
  }
  public resetKeySchema() {
    this._keySchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
  }

  // local_secondary_indexes - computed: true, optional: true, required: false
  private _localSecondaryIndexes = new DynamodbGlobalTableLocalSecondaryIndexesList(this, "local_secondary_indexes", true);
  public get localSecondaryIndexes() {
    return this._localSecondaryIndexes;
  }
  public putLocalSecondaryIndexes(value: DynamodbGlobalTableLocalSecondaryIndexes[] | cdktn.IResolvable) {
    this._localSecondaryIndexes.internalValue = value;
  }
  public resetLocalSecondaryIndexes() {
    this._localSecondaryIndexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSecondaryIndexesInput() {
    return this._localSecondaryIndexes.internalValue;
  }

  // multi_region_consistency - computed: true, optional: true, required: false
  private _multiRegionConsistency?: string; 
  public get multiRegionConsistency() {
    return this.getStringAttribute('multi_region_consistency');
  }
  public set multiRegionConsistency(value: string) {
    this._multiRegionConsistency = value;
  }
  public resetMultiRegionConsistency() {
    this._multiRegionConsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiRegionConsistencyInput() {
    return this._multiRegionConsistency;
  }

  // read_on_demand_throughput_settings - computed: true, optional: true, required: false
  private _readOnDemandThroughputSettings = new DynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference(this, "read_on_demand_throughput_settings");
  public get readOnDemandThroughputSettings() {
    return this._readOnDemandThroughputSettings;
  }
  public putReadOnDemandThroughputSettings(value: DynamodbGlobalTableReadOnDemandThroughputSettings) {
    this._readOnDemandThroughputSettings.internalValue = value;
  }
  public resetReadOnDemandThroughputSettings() {
    this._readOnDemandThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnDemandThroughputSettingsInput() {
    return this._readOnDemandThroughputSettings.internalValue;
  }

  // read_provisioned_throughput_settings - computed: true, optional: true, required: false
  private _readProvisionedThroughputSettings = new DynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference(this, "read_provisioned_throughput_settings");
  public get readProvisionedThroughputSettings() {
    return this._readProvisionedThroughputSettings;
  }
  public putReadProvisionedThroughputSettings(value: DynamodbGlobalTableReadProvisionedThroughputSettings) {
    this._readProvisionedThroughputSettings.internalValue = value;
  }
  public resetReadProvisionedThroughputSettings() {
    this._readProvisionedThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readProvisionedThroughputSettingsInput() {
    return this._readProvisionedThroughputSettings.internalValue;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas = new DynamodbGlobalTableReplicasList(this, "replicas", true);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: DynamodbGlobalTableReplicas[] | cdktn.IResolvable) {
    this._replicas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }

  // sse_specification - computed: true, optional: true, required: false
  private _sseSpecification = new DynamodbGlobalTableSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }
  public putSseSpecification(value: DynamodbGlobalTableSseSpecification) {
    this._sseSpecification.internalValue = value;
  }
  public resetSseSpecification() {
    this._sseSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseSpecificationInput() {
    return this._sseSpecification.internalValue;
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_specification - computed: true, optional: true, required: false
  private _streamSpecification = new DynamodbGlobalTableStreamSpecificationOutputReference(this, "stream_specification");
  public get streamSpecification() {
    return this._streamSpecification;
  }
  public putStreamSpecification(value: DynamodbGlobalTableStreamSpecification) {
    this._streamSpecification.internalValue = value;
  }
  public resetStreamSpecification() {
    this._streamSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSpecificationInput() {
    return this._streamSpecification.internalValue;
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // time_to_live_specification - computed: true, optional: true, required: false
  private _timeToLiveSpecification = new DynamodbGlobalTableTimeToLiveSpecificationOutputReference(this, "time_to_live_specification");
  public get timeToLiveSpecification() {
    return this._timeToLiveSpecification;
  }
  public putTimeToLiveSpecification(value: DynamodbGlobalTableTimeToLiveSpecification) {
    this._timeToLiveSpecification.internalValue = value;
  }
  public resetTimeToLiveSpecification() {
    this._timeToLiveSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveSpecificationInput() {
    return this._timeToLiveSpecification.internalValue;
  }

  // warm_throughput - computed: true, optional: true, required: false
  private _warmThroughput = new DynamodbGlobalTableWarmThroughputOutputReference(this, "warm_throughput");
  public get warmThroughput() {
    return this._warmThroughput;
  }
  public putWarmThroughput(value: DynamodbGlobalTableWarmThroughput) {
    this._warmThroughput.internalValue = value;
  }
  public resetWarmThroughput() {
    this._warmThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmThroughputInput() {
    return this._warmThroughput.internalValue;
  }

  // write_on_demand_throughput_settings - computed: true, optional: true, required: false
  private _writeOnDemandThroughputSettings = new DynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference(this, "write_on_demand_throughput_settings");
  public get writeOnDemandThroughputSettings() {
    return this._writeOnDemandThroughputSettings;
  }
  public putWriteOnDemandThroughputSettings(value: DynamodbGlobalTableWriteOnDemandThroughputSettings) {
    this._writeOnDemandThroughputSettings.internalValue = value;
  }
  public resetWriteOnDemandThroughputSettings() {
    this._writeOnDemandThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOnDemandThroughputSettingsInput() {
    return this._writeOnDemandThroughputSettings.internalValue;
  }

  // write_provisioned_throughput_settings - computed: true, optional: true, required: false
  private _writeProvisionedThroughputSettings = new DynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference(this, "write_provisioned_throughput_settings");
  public get writeProvisionedThroughputSettings() {
    return this._writeProvisionedThroughputSettings;
  }
  public putWriteProvisionedThroughputSettings(value: DynamodbGlobalTableWriteProvisionedThroughputSettings) {
    this._writeProvisionedThroughputSettings.internalValue = value;
  }
  public resetWriteProvisionedThroughputSettings() {
    this._writeProvisionedThroughputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeProvisionedThroughputSettingsInput() {
    return this._writeProvisionedThroughputSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_definitions: cdktn.listMapper(dynamodbGlobalTableAttributeDefinitionsToTerraform, false)(this._attributeDefinitions.internalValue),
      billing_mode: cdktn.stringToTerraform(this._billingMode),
      global_secondary_indexes: cdktn.listMapper(dynamodbGlobalTableGlobalSecondaryIndexesToTerraform, false)(this._globalSecondaryIndexes.internalValue),
      global_table_source_arn: cdktn.stringToTerraform(this._globalTableSourceArn),
      global_table_witnesses: cdktn.listMapper(dynamodbGlobalTableGlobalTableWitnessesToTerraform, false)(this._globalTableWitnesses.internalValue),
      key_schema: cdktn.listMapper(dynamodbGlobalTableKeySchemaToTerraform, false)(this._keySchema.internalValue),
      local_secondary_indexes: cdktn.listMapper(dynamodbGlobalTableLocalSecondaryIndexesToTerraform, false)(this._localSecondaryIndexes.internalValue),
      multi_region_consistency: cdktn.stringToTerraform(this._multiRegionConsistency),
      read_on_demand_throughput_settings: dynamodbGlobalTableReadOnDemandThroughputSettingsToTerraform(this._readOnDemandThroughputSettings.internalValue),
      read_provisioned_throughput_settings: dynamodbGlobalTableReadProvisionedThroughputSettingsToTerraform(this._readProvisionedThroughputSettings.internalValue),
      replicas: cdktn.listMapper(dynamodbGlobalTableReplicasToTerraform, false)(this._replicas.internalValue),
      sse_specification: dynamodbGlobalTableSseSpecificationToTerraform(this._sseSpecification.internalValue),
      stream_specification: dynamodbGlobalTableStreamSpecificationToTerraform(this._streamSpecification.internalValue),
      table_name: cdktn.stringToTerraform(this._tableName),
      time_to_live_specification: dynamodbGlobalTableTimeToLiveSpecificationToTerraform(this._timeToLiveSpecification.internalValue),
      warm_throughput: dynamodbGlobalTableWarmThroughputToTerraform(this._warmThroughput.internalValue),
      write_on_demand_throughput_settings: dynamodbGlobalTableWriteOnDemandThroughputSettingsToTerraform(this._writeOnDemandThroughputSettings.internalValue),
      write_provisioned_throughput_settings: dynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform(this._writeProvisionedThroughputSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_definitions: {
        value: cdktn.listMapperHcl(dynamodbGlobalTableAttributeDefinitionsToHclTerraform, false)(this._attributeDefinitions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbGlobalTableAttributeDefinitionsList",
      },
      billing_mode: {
        value: cdktn.stringToHclTerraform(this._billingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_secondary_indexes: {
        value: cdktn.listMapperHcl(dynamodbGlobalTableGlobalSecondaryIndexesToHclTerraform, false)(this._globalSecondaryIndexes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbGlobalTableGlobalSecondaryIndexesList",
      },
      global_table_source_arn: {
        value: cdktn.stringToHclTerraform(this._globalTableSourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_table_witnesses: {
        value: cdktn.listMapperHcl(dynamodbGlobalTableGlobalTableWitnessesToHclTerraform, false)(this._globalTableWitnesses.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbGlobalTableGlobalTableWitnessesList",
      },
      key_schema: {
        value: cdktn.listMapperHcl(dynamodbGlobalTableKeySchemaToHclTerraform, false)(this._keySchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamodbGlobalTableKeySchemaList",
      },
      local_secondary_indexes: {
        value: cdktn.listMapperHcl(dynamodbGlobalTableLocalSecondaryIndexesToHclTerraform, false)(this._localSecondaryIndexes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbGlobalTableLocalSecondaryIndexesList",
      },
      multi_region_consistency: {
        value: cdktn.stringToHclTerraform(this._multiRegionConsistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_on_demand_throughput_settings: {
        value: dynamodbGlobalTableReadOnDemandThroughputSettingsToHclTerraform(this._readOnDemandThroughputSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalTableReadOnDemandThroughputSettings",
      },
      read_provisioned_throughput_settings: {
        value: dynamodbGlobalTableReadProvisionedThroughputSettingsToHclTerraform(this._readProvisionedThroughputSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalTableReadProvisionedThroughputSettings",
      },
      replicas: {
        value: cdktn.listMapperHcl(dynamodbGlobalTableReplicasToHclTerraform, false)(this._replicas.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbGlobalTableReplicasList",
      },
      sse_specification: {
        value: dynamodbGlobalTableSseSpecificationToHclTerraform(this._sseSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalTableSseSpecification",
      },
      stream_specification: {
        value: dynamodbGlobalTableStreamSpecificationToHclTerraform(this._streamSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalTableStreamSpecification",
      },
      table_name: {
        value: cdktn.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to_live_specification: {
        value: dynamodbGlobalTableTimeToLiveSpecificationToHclTerraform(this._timeToLiveSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalTableTimeToLiveSpecification",
      },
      warm_throughput: {
        value: dynamodbGlobalTableWarmThroughputToHclTerraform(this._warmThroughput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalTableWarmThroughput",
      },
      write_on_demand_throughput_settings: {
        value: dynamodbGlobalTableWriteOnDemandThroughputSettingsToHclTerraform(this._writeOnDemandThroughputSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalTableWriteOnDemandThroughputSettings",
      },
      write_provisioned_throughput_settings: {
        value: dynamodbGlobalTableWriteProvisionedThroughputSettingsToHclTerraform(this._writeProvisionedThroughputSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalTableWriteProvisionedThroughputSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
