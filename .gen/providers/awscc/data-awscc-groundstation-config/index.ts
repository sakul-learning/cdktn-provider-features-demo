// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/groundstation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGroundstationConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/groundstation_config#id DataAwsccGroundstationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  private _bandwidth = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }

  // center_frequency - computed: true, optional: false, required: false
  private _centerFrequency = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference(this, "center_frequency");
  public get centerFrequency() {
    return this._centerFrequency;
  }

  // polarization - computed: true, optional: false, required: false
  public get polarization() {
    return this.getStringAttribute('polarization');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // spectrum_config - computed: true, optional: false, required: false
  private _spectrumConfig = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference(this, "spectrum_config");
  public get spectrumConfig() {
    return this._spectrumConfig;
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unvalidated_json - computed: true, optional: false, required: false
  public get unvalidatedJson() {
    return this.getStringAttribute('unvalidated_json');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unvalidated_json - computed: true, optional: false, required: false
  public get unvalidatedJson() {
    return this.getStringAttribute('unvalidated_json');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  private _bandwidth = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }

  // center_frequency - computed: true, optional: false, required: false
  private _centerFrequency = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference(this, "center_frequency");
  public get centerFrequency() {
    return this._centerFrequency;
  }

  // polarization - computed: true, optional: false, required: false
  public get polarization() {
    return this.getStringAttribute('polarization');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig {
}

export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decode_config - computed: true, optional: false, required: false
  private _decodeConfig = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference(this, "decode_config");
  public get decodeConfig() {
    return this._decodeConfig;
  }

  // demodulation_config - computed: true, optional: false, required: false
  private _demodulationConfig = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference(this, "demodulation_config");
  public get demodulationConfig() {
    return this._demodulationConfig;
  }

  // spectrum_config - computed: true, optional: false, required: false
  private _spectrumConfig = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference(this, "spectrum_config");
  public get spectrumConfig() {
    return this._spectrumConfig;
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency {
}

export function dataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig {
}

export function dataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // center_frequency - computed: true, optional: false, required: false
  private _centerFrequency = new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference(this, "center_frequency");
  public get centerFrequency() {
    return this._centerFrequency;
  }

  // polarization - computed: true, optional: false, required: false
  public get polarization() {
    return this.getStringAttribute('polarization');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp {
}

export function dataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig {
}

export function dataAwsccGroundstationConfigConfigDataAntennaUplinkConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataAntennaUplinkConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // spectrum_config - computed: true, optional: false, required: false
  private _spectrumConfig = new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference(this, "spectrum_config");
  public get spectrumConfig() {
    return this._spectrumConfig;
  }

  // target_eirp - computed: true, optional: false, required: false
  private _targetEirp = new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference(this, "target_eirp");
  public get targetEirp() {
    return this._targetEirp;
  }

  // transmit_disabled - computed: true, optional: false, required: false
  public get transmitDisabled() {
    return this.getBooleanAttribute('transmit_disabled');
  }
}
export interface DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig {
}

export function dataAwsccGroundstationConfigConfigDataDataflowEndpointConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataDataflowEndpointConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataflow_endpoint_name - computed: true, optional: false, required: false
  public get dataflowEndpointName() {
    return this.getStringAttribute('dataflow_endpoint_name');
  }

  // dataflow_endpoint_region - computed: true, optional: false, required: false
  public get dataflowEndpointRegion() {
    return this.getStringAttribute('dataflow_endpoint_region');
  }
}
export interface DataAwsccGroundstationConfigConfigDataS3RecordingConfig {
}

export function dataAwsccGroundstationConfigConfigDataS3RecordingConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataS3RecordingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataS3RecordingConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataS3RecordingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataS3RecordingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataS3RecordingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData {
}

export function dataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataToTerraform(struct?: DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kinesis_data_stream_arn - computed: true, optional: false, required: false
  public get kinesisDataStreamArn() {
    return this.getStringAttribute('kinesis_data_stream_arn');
  }

  // kinesis_role_arn - computed: true, optional: false, required: false
  public get kinesisRoleArn() {
    return this.getStringAttribute('kinesis_role_arn');
  }
}
export interface DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData {
}

export function dataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataToTerraform(struct?: DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kinesis_data_stream_data - computed: true, optional: false, required: false
  private _kinesisDataStreamData = new DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference(this, "kinesis_data_stream_data");
  public get kinesisDataStreamData() {
    return this._kinesisDataStreamData;
  }
}
export interface DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig {
}

export function dataAwsccGroundstationConfigConfigDataTelemetrySinkConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataTelemetrySinkConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // telemetry_sink_data - computed: true, optional: false, required: false
  private _telemetrySinkData = new DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference(this, "telemetry_sink_data");
  public get telemetrySinkData() {
    return this._telemetrySinkData;
  }

  // telemetry_sink_type - computed: true, optional: false, required: false
  public get telemetrySinkType() {
    return this.getStringAttribute('telemetry_sink_type');
  }
}
export interface DataAwsccGroundstationConfigConfigDataTrackingConfig {
}

export function dataAwsccGroundstationConfigConfigDataTrackingConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataTrackingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataTrackingConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataTrackingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataTrackingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataTrackingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autotrack - computed: true, optional: false, required: false
  public get autotrack() {
    return this.getStringAttribute('autotrack');
  }
}
export interface DataAwsccGroundstationConfigConfigDataUplinkEchoConfig {
}

export function dataAwsccGroundstationConfigConfigDataUplinkEchoConfigToTerraform(struct?: DataAwsccGroundstationConfigConfigDataUplinkEchoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataUplinkEchoConfigToHclTerraform(struct?: DataAwsccGroundstationConfigConfigDataUplinkEchoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigDataUplinkEchoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigDataUplinkEchoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // antenna_uplink_config_arn - computed: true, optional: false, required: false
  public get antennaUplinkConfigArn() {
    return this.getStringAttribute('antenna_uplink_config_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccGroundstationConfigConfigData {
}

export function dataAwsccGroundstationConfigConfigDataToTerraform(struct?: DataAwsccGroundstationConfigConfigData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigConfigDataToHclTerraform(struct?: DataAwsccGroundstationConfigConfigData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigConfigDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationConfigConfigData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigConfigData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // antenna_downlink_config - computed: true, optional: false, required: false
  private _antennaDownlinkConfig = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference(this, "antenna_downlink_config");
  public get antennaDownlinkConfig() {
    return this._antennaDownlinkConfig;
  }

  // antenna_downlink_demod_decode_config - computed: true, optional: false, required: false
  private _antennaDownlinkDemodDecodeConfig = new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference(this, "antenna_downlink_demod_decode_config");
  public get antennaDownlinkDemodDecodeConfig() {
    return this._antennaDownlinkDemodDecodeConfig;
  }

  // antenna_uplink_config - computed: true, optional: false, required: false
  private _antennaUplinkConfig = new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference(this, "antenna_uplink_config");
  public get antennaUplinkConfig() {
    return this._antennaUplinkConfig;
  }

  // dataflow_endpoint_config - computed: true, optional: false, required: false
  private _dataflowEndpointConfig = new DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference(this, "dataflow_endpoint_config");
  public get dataflowEndpointConfig() {
    return this._dataflowEndpointConfig;
  }

  // s3_recording_config - computed: true, optional: false, required: false
  private _s3RecordingConfig = new DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference(this, "s3_recording_config");
  public get s3RecordingConfig() {
    return this._s3RecordingConfig;
  }

  // telemetry_sink_config - computed: true, optional: false, required: false
  private _telemetrySinkConfig = new DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference(this, "telemetry_sink_config");
  public get telemetrySinkConfig() {
    return this._telemetrySinkConfig;
  }

  // tracking_config - computed: true, optional: false, required: false
  private _trackingConfig = new DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference(this, "tracking_config");
  public get trackingConfig() {
    return this._trackingConfig;
  }

  // uplink_echo_config - computed: true, optional: false, required: false
  private _uplinkEchoConfig = new DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference(this, "uplink_echo_config");
  public get uplinkEchoConfig() {
    return this._uplinkEchoConfig;
  }
}
export interface DataAwsccGroundstationConfigTags {
}

export function dataAwsccGroundstationConfigTagsToTerraform(struct?: DataAwsccGroundstationConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationConfigTagsToHclTerraform(struct?: DataAwsccGroundstationConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGroundstationConfigTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationConfigTags | undefined) {
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

export class DataAwsccGroundstationConfigTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGroundstationConfigTagsOutputReference {
    return new DataAwsccGroundstationConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/groundstation_config awscc_groundstation_config}
*/
export class DataAwsccGroundstationConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_groundstation_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGroundstationConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGroundstationConfig to import
  * @param importFromId The id of the existing DataAwsccGroundstationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/groundstation_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGroundstationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/groundstation_config awscc_groundstation_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGroundstationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGroundstationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_config',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // config_data - computed: true, optional: false, required: false
  private _configData = new DataAwsccGroundstationConfigConfigDataOutputReference(this, "config_data");
  public get configData() {
    return this._configData;
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
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
  private _tags = new DataAwsccGroundstationConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
