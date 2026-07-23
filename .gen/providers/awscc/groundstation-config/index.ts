// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GroundstationConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#config_data GroundstationConfig#config_data}
  */
  readonly configData: GroundstationConfigConfigData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#name GroundstationConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#tags GroundstationConfig#tags}
  */
  readonly tags?: GroundstationConfigTags[] | cdktn.IResolvable;
}
export interface GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#units GroundstationConfig#units}
  */
  readonly units?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#value GroundstationConfig#value}
  */
  readonly value?: number;
}

export function groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    units: cdktn.stringToTerraform(struct!.units),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    units: {
      value: cdktn.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._units = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._units = value.units;
      this._value = value.value;
    }
  }

  // units - computed: true, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#units GroundstationConfig#units}
  */
  readonly units?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#value GroundstationConfig#value}
  */
  readonly value?: number;
}

export function groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    units: cdktn.stringToTerraform(struct!.units),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    units: {
      value: cdktn.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._units = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._units = value.units;
      this._value = value.value;
    }
  }

  // units - computed: true, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}
  */
  readonly bandwidth?: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}
  */
  readonly centerFrequency?: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}
  */
  readonly polarization?: string;
}

export function groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bandwidth: groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthToTerraform(struct!.bandwidth),
    center_frequency: groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyToTerraform(struct!.centerFrequency),
    polarization: cdktn.stringToTerraform(struct!.polarization),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bandwidth: {
      value: groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthToHclTerraform(struct!.bandwidth),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth",
    },
    center_frequency: {
      value: groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyToHclTerraform(struct!.centerFrequency),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency",
    },
    polarization: {
      value: cdktn.stringToHclTerraform(struct!.polarization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth?.internalValue;
    }
    if (this._centerFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.centerFrequency = this._centerFrequency?.internalValue;
    }
    if (this._polarization !== undefined) {
      hasAnyValues = true;
      internalValueResult.polarization = this._polarization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth.internalValue = undefined;
      this._centerFrequency.internalValue = undefined;
      this._polarization = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth.internalValue = value.bandwidth;
      this._centerFrequency.internalValue = value.centerFrequency;
      this._polarization = value.polarization;
    }
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth = new GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth) {
    this._bandwidth.internalValue = value;
  }
  public resetBandwidth() {
    this._bandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth.internalValue;
  }

  // center_frequency - computed: true, optional: true, required: false
  private _centerFrequency = new GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference(this, "center_frequency");
  public get centerFrequency() {
    return this._centerFrequency;
  }
  public putCenterFrequency(value: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency) {
    this._centerFrequency.internalValue = value;
  }
  public resetCenterFrequency() {
    this._centerFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centerFrequencyInput() {
    return this._centerFrequency.internalValue;
  }

  // polarization - computed: true, optional: true, required: false
  private _polarization?: string; 
  public get polarization() {
    return this.getStringAttribute('polarization');
  }
  public set polarization(value: string) {
    this._polarization = value;
  }
  public resetPolarization() {
    this._polarization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polarizationInput() {
    return this._polarization;
  }
}
export interface GroundstationConfigConfigDataAntennaDownlinkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}
  */
  readonly spectrumConfig?: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig;
}

export function groundstationConfigConfigDataAntennaDownlinkConfigToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    spectrum_config: groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigToTerraform(struct!.spectrumConfig),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkConfigToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    spectrum_config: {
      value: groundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigToHclTerraform(struct!.spectrumConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spectrumConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumConfig = this._spectrumConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spectrumConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spectrumConfig.internalValue = value.spectrumConfig;
    }
  }

  // spectrum_config - computed: true, optional: true, required: false
  private _spectrumConfig = new GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference(this, "spectrum_config");
  public get spectrumConfig() {
    return this._spectrumConfig;
  }
  public putSpectrumConfig(value: GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig) {
    this._spectrumConfig.internalValue = value;
  }
  public resetSpectrumConfig() {
    this._spectrumConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumConfigInput() {
    return this._spectrumConfig.internalValue;
  }
}
export interface GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}
  */
  readonly unvalidatedJson?: string;
}

export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unvalidated_json: cdktn.stringToTerraform(struct!.unvalidatedJson),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unvalidated_json: {
      value: cdktn.stringToHclTerraform(struct!.unvalidatedJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unvalidatedJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.unvalidatedJson = this._unvalidatedJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unvalidatedJson = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unvalidatedJson = value.unvalidatedJson;
    }
  }

  // unvalidated_json - computed: true, optional: true, required: false
  private _unvalidatedJson?: string; 
  public get unvalidatedJson() {
    return this.getStringAttribute('unvalidated_json');
  }
  public set unvalidatedJson(value: string) {
    this._unvalidatedJson = value;
  }
  public resetUnvalidatedJson() {
    this._unvalidatedJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unvalidatedJsonInput() {
    return this._unvalidatedJson;
  }
}
export interface GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}
  */
  readonly unvalidatedJson?: string;
}

export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unvalidated_json: cdktn.stringToTerraform(struct!.unvalidatedJson),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unvalidated_json: {
      value: cdktn.stringToHclTerraform(struct!.unvalidatedJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unvalidatedJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.unvalidatedJson = this._unvalidatedJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unvalidatedJson = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unvalidatedJson = value.unvalidatedJson;
    }
  }

  // unvalidated_json - computed: true, optional: true, required: false
  private _unvalidatedJson?: string; 
  public get unvalidatedJson() {
    return this.getStringAttribute('unvalidated_json');
  }
  public set unvalidatedJson(value: string) {
    this._unvalidatedJson = value;
  }
  public resetUnvalidatedJson() {
    this._unvalidatedJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unvalidatedJsonInput() {
    return this._unvalidatedJson;
  }
}
export interface GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#units GroundstationConfig#units}
  */
  readonly units?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#value GroundstationConfig#value}
  */
  readonly value?: number;
}

export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    units: cdktn.stringToTerraform(struct!.units),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    units: {
      value: cdktn.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._units = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._units = value.units;
      this._value = value.value;
    }
  }

  // units - computed: true, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#units GroundstationConfig#units}
  */
  readonly units?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#value GroundstationConfig#value}
  */
  readonly value?: number;
}

export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    units: cdktn.stringToTerraform(struct!.units),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    units: {
      value: cdktn.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._units = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._units = value.units;
      this._value = value.value;
    }
  }

  // units - computed: true, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}
  */
  readonly bandwidth?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}
  */
  readonly centerFrequency?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}
  */
  readonly polarization?: string;
}

export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bandwidth: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthToTerraform(struct!.bandwidth),
    center_frequency: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyToTerraform(struct!.centerFrequency),
    polarization: cdktn.stringToTerraform(struct!.polarization),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bandwidth: {
      value: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthToHclTerraform(struct!.bandwidth),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth",
    },
    center_frequency: {
      value: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyToHclTerraform(struct!.centerFrequency),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency",
    },
    polarization: {
      value: cdktn.stringToHclTerraform(struct!.polarization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth?.internalValue;
    }
    if (this._centerFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.centerFrequency = this._centerFrequency?.internalValue;
    }
    if (this._polarization !== undefined) {
      hasAnyValues = true;
      internalValueResult.polarization = this._polarization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth.internalValue = undefined;
      this._centerFrequency.internalValue = undefined;
      this._polarization = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth.internalValue = value.bandwidth;
      this._centerFrequency.internalValue = value.centerFrequency;
      this._polarization = value.polarization;
    }
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth = new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth) {
    this._bandwidth.internalValue = value;
  }
  public resetBandwidth() {
    this._bandwidth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth.internalValue;
  }

  // center_frequency - computed: true, optional: true, required: false
  private _centerFrequency = new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference(this, "center_frequency");
  public get centerFrequency() {
    return this._centerFrequency;
  }
  public putCenterFrequency(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency) {
    this._centerFrequency.internalValue = value;
  }
  public resetCenterFrequency() {
    this._centerFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centerFrequencyInput() {
    return this._centerFrequency.internalValue;
  }

  // polarization - computed: true, optional: true, required: false
  private _polarization?: string; 
  public get polarization() {
    return this.getStringAttribute('polarization');
  }
  public set polarization(value: string) {
    this._polarization = value;
  }
  public resetPolarization() {
    this._polarization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polarizationInput() {
    return this._polarization;
  }
}
export interface GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#decode_config GroundstationConfig#decode_config}
  */
  readonly decodeConfig?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#demodulation_config GroundstationConfig#demodulation_config}
  */
  readonly demodulationConfig?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}
  */
  readonly spectrumConfig?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig;
}

export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigToTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decode_config: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigToTerraform(struct!.decodeConfig),
    demodulation_config: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigToTerraform(struct!.demodulationConfig),
    spectrum_config: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigToTerraform(struct!.spectrumConfig),
  }
}


export function groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigToHclTerraform(struct?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decode_config: {
      value: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigToHclTerraform(struct!.decodeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig",
    },
    demodulation_config: {
      value: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigToHclTerraform(struct!.demodulationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig",
    },
    spectrum_config: {
      value: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigToHclTerraform(struct!.spectrumConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodeConfig = this._decodeConfig?.internalValue;
    }
    if (this._demodulationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.demodulationConfig = this._demodulationConfig?.internalValue;
    }
    if (this._spectrumConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumConfig = this._spectrumConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decodeConfig.internalValue = undefined;
      this._demodulationConfig.internalValue = undefined;
      this._spectrumConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decodeConfig.internalValue = value.decodeConfig;
      this._demodulationConfig.internalValue = value.demodulationConfig;
      this._spectrumConfig.internalValue = value.spectrumConfig;
    }
  }

  // decode_config - computed: true, optional: true, required: false
  private _decodeConfig = new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference(this, "decode_config");
  public get decodeConfig() {
    return this._decodeConfig;
  }
  public putDecodeConfig(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig) {
    this._decodeConfig.internalValue = value;
  }
  public resetDecodeConfig() {
    this._decodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeConfigInput() {
    return this._decodeConfig.internalValue;
  }

  // demodulation_config - computed: true, optional: true, required: false
  private _demodulationConfig = new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference(this, "demodulation_config");
  public get demodulationConfig() {
    return this._demodulationConfig;
  }
  public putDemodulationConfig(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig) {
    this._demodulationConfig.internalValue = value;
  }
  public resetDemodulationConfig() {
    this._demodulationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demodulationConfigInput() {
    return this._demodulationConfig.internalValue;
  }

  // spectrum_config - computed: true, optional: true, required: false
  private _spectrumConfig = new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference(this, "spectrum_config");
  public get spectrumConfig() {
    return this._spectrumConfig;
  }
  public putSpectrumConfig(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig) {
    this._spectrumConfig.internalValue = value;
  }
  public resetSpectrumConfig() {
    this._spectrumConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumConfigInput() {
    return this._spectrumConfig.internalValue;
  }
}
export interface GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#units GroundstationConfig#units}
  */
  readonly units?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#value GroundstationConfig#value}
  */
  readonly value?: number;
}

export function groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyToTerraform(struct?: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    units: cdktn.stringToTerraform(struct!.units),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyToHclTerraform(struct?: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    units: {
      value: cdktn.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._units = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._units = value.units;
      this._value = value.value;
    }
  }

  // units - computed: true, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}
  */
  readonly centerFrequency?: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}
  */
  readonly polarization?: string;
}

export function groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigToTerraform(struct?: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    center_frequency: groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyToTerraform(struct!.centerFrequency),
    polarization: cdktn.stringToTerraform(struct!.polarization),
  }
}


export function groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigToHclTerraform(struct?: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    center_frequency: {
      value: groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyToHclTerraform(struct!.centerFrequency),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency",
    },
    polarization: {
      value: cdktn.stringToHclTerraform(struct!.polarization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._centerFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.centerFrequency = this._centerFrequency?.internalValue;
    }
    if (this._polarization !== undefined) {
      hasAnyValues = true;
      internalValueResult.polarization = this._polarization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._centerFrequency.internalValue = undefined;
      this._polarization = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._centerFrequency.internalValue = value.centerFrequency;
      this._polarization = value.polarization;
    }
  }

  // center_frequency - computed: true, optional: true, required: false
  private _centerFrequency = new GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference(this, "center_frequency");
  public get centerFrequency() {
    return this._centerFrequency;
  }
  public putCenterFrequency(value: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency) {
    this._centerFrequency.internalValue = value;
  }
  public resetCenterFrequency() {
    this._centerFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centerFrequencyInput() {
    return this._centerFrequency.internalValue;
  }

  // polarization - computed: true, optional: true, required: false
  private _polarization?: string; 
  public get polarization() {
    return this.getStringAttribute('polarization');
  }
  public set polarization(value: string) {
    this._polarization = value;
  }
  public resetPolarization() {
    this._polarization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polarizationInput() {
    return this._polarization;
  }
}
export interface GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#units GroundstationConfig#units}
  */
  readonly units?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#value GroundstationConfig#value}
  */
  readonly value?: number;
}

export function groundstationConfigConfigDataAntennaUplinkConfigTargetEirpToTerraform(struct?: GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    units: cdktn.stringToTerraform(struct!.units),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function groundstationConfigConfigDataAntennaUplinkConfigTargetEirpToHclTerraform(struct?: GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    units: {
      value: cdktn.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._units = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._units = value.units;
      this._value = value.value;
    }
  }

  // units - computed: true, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface GroundstationConfigConfigDataAntennaUplinkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}
  */
  readonly spectrumConfig?: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#target_eirp GroundstationConfig#target_eirp}
  */
  readonly targetEirp?: GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#transmit_disabled GroundstationConfig#transmit_disabled}
  */
  readonly transmitDisabled?: boolean | cdktn.IResolvable;
}

export function groundstationConfigConfigDataAntennaUplinkConfigToTerraform(struct?: GroundstationConfigConfigDataAntennaUplinkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    spectrum_config: groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigToTerraform(struct!.spectrumConfig),
    target_eirp: groundstationConfigConfigDataAntennaUplinkConfigTargetEirpToTerraform(struct!.targetEirp),
    transmit_disabled: cdktn.booleanToTerraform(struct!.transmitDisabled),
  }
}


export function groundstationConfigConfigDataAntennaUplinkConfigToHclTerraform(struct?: GroundstationConfigConfigDataAntennaUplinkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    spectrum_config: {
      value: groundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigToHclTerraform(struct!.spectrumConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig",
    },
    target_eirp: {
      value: groundstationConfigConfigDataAntennaUplinkConfigTargetEirpToHclTerraform(struct!.targetEirp),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp",
    },
    transmit_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.transmitDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataAntennaUplinkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataAntennaUplinkConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spectrumConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumConfig = this._spectrumConfig?.internalValue;
    }
    if (this._targetEirp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetEirp = this._targetEirp?.internalValue;
    }
    if (this._transmitDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDisabled = this._transmitDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataAntennaUplinkConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spectrumConfig.internalValue = undefined;
      this._targetEirp.internalValue = undefined;
      this._transmitDisabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spectrumConfig.internalValue = value.spectrumConfig;
      this._targetEirp.internalValue = value.targetEirp;
      this._transmitDisabled = value.transmitDisabled;
    }
  }

  // spectrum_config - computed: true, optional: true, required: false
  private _spectrumConfig = new GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference(this, "spectrum_config");
  public get spectrumConfig() {
    return this._spectrumConfig;
  }
  public putSpectrumConfig(value: GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig) {
    this._spectrumConfig.internalValue = value;
  }
  public resetSpectrumConfig() {
    this._spectrumConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumConfigInput() {
    return this._spectrumConfig.internalValue;
  }

  // target_eirp - computed: true, optional: true, required: false
  private _targetEirp = new GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference(this, "target_eirp");
  public get targetEirp() {
    return this._targetEirp;
  }
  public putTargetEirp(value: GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp) {
    this._targetEirp.internalValue = value;
  }
  public resetTargetEirp() {
    this._targetEirp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEirpInput() {
    return this._targetEirp.internalValue;
  }

  // transmit_disabled - computed: true, optional: true, required: false
  private _transmitDisabled?: boolean | cdktn.IResolvable; 
  public get transmitDisabled() {
    return this.getBooleanAttribute('transmit_disabled');
  }
  public set transmitDisabled(value: boolean | cdktn.IResolvable) {
    this._transmitDisabled = value;
  }
  public resetTransmitDisabled() {
    this._transmitDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDisabledInput() {
    return this._transmitDisabled;
  }
}
export interface GroundstationConfigConfigDataDataflowEndpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#dataflow_endpoint_name GroundstationConfig#dataflow_endpoint_name}
  */
  readonly dataflowEndpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#dataflow_endpoint_region GroundstationConfig#dataflow_endpoint_region}
  */
  readonly dataflowEndpointRegion?: string;
}

export function groundstationConfigConfigDataDataflowEndpointConfigToTerraform(struct?: GroundstationConfigConfigDataDataflowEndpointConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataflow_endpoint_name: cdktn.stringToTerraform(struct!.dataflowEndpointName),
    dataflow_endpoint_region: cdktn.stringToTerraform(struct!.dataflowEndpointRegion),
  }
}


export function groundstationConfigConfigDataDataflowEndpointConfigToHclTerraform(struct?: GroundstationConfigConfigDataDataflowEndpointConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataflow_endpoint_name: {
      value: cdktn.stringToHclTerraform(struct!.dataflowEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataflow_endpoint_region: {
      value: cdktn.stringToHclTerraform(struct!.dataflowEndpointRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataDataflowEndpointConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataDataflowEndpointConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataflowEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowEndpointName = this._dataflowEndpointName;
    }
    if (this._dataflowEndpointRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowEndpointRegion = this._dataflowEndpointRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataDataflowEndpointConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataflowEndpointName = undefined;
      this._dataflowEndpointRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataflowEndpointName = value.dataflowEndpointName;
      this._dataflowEndpointRegion = value.dataflowEndpointRegion;
    }
  }

  // dataflow_endpoint_name - computed: true, optional: true, required: false
  private _dataflowEndpointName?: string; 
  public get dataflowEndpointName() {
    return this.getStringAttribute('dataflow_endpoint_name');
  }
  public set dataflowEndpointName(value: string) {
    this._dataflowEndpointName = value;
  }
  public resetDataflowEndpointName() {
    this._dataflowEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowEndpointNameInput() {
    return this._dataflowEndpointName;
  }

  // dataflow_endpoint_region - computed: true, optional: true, required: false
  private _dataflowEndpointRegion?: string; 
  public get dataflowEndpointRegion() {
    return this.getStringAttribute('dataflow_endpoint_region');
  }
  public set dataflowEndpointRegion(value: string) {
    this._dataflowEndpointRegion = value;
  }
  public resetDataflowEndpointRegion() {
    this._dataflowEndpointRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowEndpointRegionInput() {
    return this._dataflowEndpointRegion;
  }
}
export interface GroundstationConfigConfigDataS3RecordingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#bucket_arn GroundstationConfig#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#prefix GroundstationConfig#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#role_arn GroundstationConfig#role_arn}
  */
  readonly roleArn?: string;
}

export function groundstationConfigConfigDataS3RecordingConfigToTerraform(struct?: GroundstationConfigConfigDataS3RecordingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function groundstationConfigConfigDataS3RecordingConfigToHclTerraform(struct?: GroundstationConfigConfigDataS3RecordingConfig | cdktn.IResolvable): any {
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GroundstationConfigConfigDataS3RecordingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataS3RecordingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataS3RecordingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._prefix = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._prefix = value.prefix;
      this._roleArn = value.roleArn;
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
export interface GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#kinesis_data_stream_arn GroundstationConfig#kinesis_data_stream_arn}
  */
  readonly kinesisDataStreamArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#kinesis_role_arn GroundstationConfig#kinesis_role_arn}
  */
  readonly kinesisRoleArn?: string;
}

export function groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataToTerraform(struct?: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kinesis_data_stream_arn: cdktn.stringToTerraform(struct!.kinesisDataStreamArn),
    kinesis_role_arn: cdktn.stringToTerraform(struct!.kinesisRoleArn),
  }
}


export function groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataToHclTerraform(struct?: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kinesis_data_stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.kinesisDataStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.kinesisRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesisDataStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisDataStreamArn = this._kinesisDataStreamArn;
    }
    if (this._kinesisRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisRoleArn = this._kinesisRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinesisDataStreamArn = undefined;
      this._kinesisRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinesisDataStreamArn = value.kinesisDataStreamArn;
      this._kinesisRoleArn = value.kinesisRoleArn;
    }
  }

  // kinesis_data_stream_arn - computed: true, optional: true, required: false
  private _kinesisDataStreamArn?: string; 
  public get kinesisDataStreamArn() {
    return this.getStringAttribute('kinesis_data_stream_arn');
  }
  public set kinesisDataStreamArn(value: string) {
    this._kinesisDataStreamArn = value;
  }
  public resetKinesisDataStreamArn() {
    this._kinesisDataStreamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDataStreamArnInput() {
    return this._kinesisDataStreamArn;
  }

  // kinesis_role_arn - computed: true, optional: true, required: false
  private _kinesisRoleArn?: string; 
  public get kinesisRoleArn() {
    return this.getStringAttribute('kinesis_role_arn');
  }
  public set kinesisRoleArn(value: string) {
    this._kinesisRoleArn = value;
  }
  public resetKinesisRoleArn() {
    this._kinesisRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisRoleArnInput() {
    return this._kinesisRoleArn;
  }
}
export interface GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#kinesis_data_stream_data GroundstationConfig#kinesis_data_stream_data}
  */
  readonly kinesisDataStreamData?: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData;
}

export function groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataToTerraform(struct?: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kinesis_data_stream_data: groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataToTerraform(struct!.kinesisDataStreamData),
  }
}


export function groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataToHclTerraform(struct?: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kinesis_data_stream_data: {
      value: groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataToHclTerraform(struct!.kinesisDataStreamData),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesisDataStreamData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisDataStreamData = this._kinesisDataStreamData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinesisDataStreamData.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinesisDataStreamData.internalValue = value.kinesisDataStreamData;
    }
  }

  // kinesis_data_stream_data - computed: true, optional: true, required: false
  private _kinesisDataStreamData = new GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference(this, "kinesis_data_stream_data");
  public get kinesisDataStreamData() {
    return this._kinesisDataStreamData;
  }
  public putKinesisDataStreamData(value: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData) {
    this._kinesisDataStreamData.internalValue = value;
  }
  public resetKinesisDataStreamData() {
    this._kinesisDataStreamData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDataStreamDataInput() {
    return this._kinesisDataStreamData.internalValue;
  }
}
export interface GroundstationConfigConfigDataTelemetrySinkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#telemetry_sink_data GroundstationConfig#telemetry_sink_data}
  */
  readonly telemetrySinkData?: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#telemetry_sink_type GroundstationConfig#telemetry_sink_type}
  */
  readonly telemetrySinkType?: string;
}

export function groundstationConfigConfigDataTelemetrySinkConfigToTerraform(struct?: GroundstationConfigConfigDataTelemetrySinkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    telemetry_sink_data: groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataToTerraform(struct!.telemetrySinkData),
    telemetry_sink_type: cdktn.stringToTerraform(struct!.telemetrySinkType),
  }
}


export function groundstationConfigConfigDataTelemetrySinkConfigToHclTerraform(struct?: GroundstationConfigConfigDataTelemetrySinkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    telemetry_sink_data: {
      value: groundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataToHclTerraform(struct!.telemetrySinkData),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData",
    },
    telemetry_sink_type: {
      value: cdktn.stringToHclTerraform(struct!.telemetrySinkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataTelemetrySinkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataTelemetrySinkConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._telemetrySinkData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetrySinkData = this._telemetrySinkData?.internalValue;
    }
    if (this._telemetrySinkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetrySinkType = this._telemetrySinkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataTelemetrySinkConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._telemetrySinkData.internalValue = undefined;
      this._telemetrySinkType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._telemetrySinkData.internalValue = value.telemetrySinkData;
      this._telemetrySinkType = value.telemetrySinkType;
    }
  }

  // telemetry_sink_data - computed: true, optional: true, required: false
  private _telemetrySinkData = new GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference(this, "telemetry_sink_data");
  public get telemetrySinkData() {
    return this._telemetrySinkData;
  }
  public putTelemetrySinkData(value: GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData) {
    this._telemetrySinkData.internalValue = value;
  }
  public resetTelemetrySinkData() {
    this._telemetrySinkData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetrySinkDataInput() {
    return this._telemetrySinkData.internalValue;
  }

  // telemetry_sink_type - computed: true, optional: true, required: false
  private _telemetrySinkType?: string; 
  public get telemetrySinkType() {
    return this.getStringAttribute('telemetry_sink_type');
  }
  public set telemetrySinkType(value: string) {
    this._telemetrySinkType = value;
  }
  public resetTelemetrySinkType() {
    this._telemetrySinkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetrySinkTypeInput() {
    return this._telemetrySinkType;
  }
}
export interface GroundstationConfigConfigDataTrackingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#autotrack GroundstationConfig#autotrack}
  */
  readonly autotrack?: string;
}

export function groundstationConfigConfigDataTrackingConfigToTerraform(struct?: GroundstationConfigConfigDataTrackingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    autotrack: cdktn.stringToTerraform(struct!.autotrack),
  }
}


export function groundstationConfigConfigDataTrackingConfigToHclTerraform(struct?: GroundstationConfigConfigDataTrackingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    autotrack: {
      value: cdktn.stringToHclTerraform(struct!.autotrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataTrackingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataTrackingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autotrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.autotrack = this._autotrack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataTrackingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autotrack = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autotrack = value.autotrack;
    }
  }

  // autotrack - computed: true, optional: true, required: false
  private _autotrack?: string; 
  public get autotrack() {
    return this.getStringAttribute('autotrack');
  }
  public set autotrack(value: string) {
    this._autotrack = value;
  }
  public resetAutotrack() {
    this._autotrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotrackInput() {
    return this._autotrack;
  }
}
export interface GroundstationConfigConfigDataUplinkEchoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#antenna_uplink_config_arn GroundstationConfig#antenna_uplink_config_arn}
  */
  readonly antennaUplinkConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#enabled GroundstationConfig#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function groundstationConfigConfigDataUplinkEchoConfigToTerraform(struct?: GroundstationConfigConfigDataUplinkEchoConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    antenna_uplink_config_arn: cdktn.stringToTerraform(struct!.antennaUplinkConfigArn),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function groundstationConfigConfigDataUplinkEchoConfigToHclTerraform(struct?: GroundstationConfigConfigDataUplinkEchoConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    antenna_uplink_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.antennaUplinkConfigArn),
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

export class GroundstationConfigConfigDataUplinkEchoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigDataUplinkEchoConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antennaUplinkConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaUplinkConfigArn = this._antennaUplinkConfigArn;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigDataUplinkEchoConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antennaUplinkConfigArn = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antennaUplinkConfigArn = value.antennaUplinkConfigArn;
      this._enabled = value.enabled;
    }
  }

  // antenna_uplink_config_arn - computed: true, optional: true, required: false
  private _antennaUplinkConfigArn?: string; 
  public get antennaUplinkConfigArn() {
    return this.getStringAttribute('antenna_uplink_config_arn');
  }
  public set antennaUplinkConfigArn(value: string) {
    this._antennaUplinkConfigArn = value;
  }
  public resetAntennaUplinkConfigArn() {
    this._antennaUplinkConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaUplinkConfigArnInput() {
    return this._antennaUplinkConfigArn;
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
export interface GroundstationConfigConfigData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#antenna_downlink_config GroundstationConfig#antenna_downlink_config}
  */
  readonly antennaDownlinkConfig?: GroundstationConfigConfigDataAntennaDownlinkConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#antenna_downlink_demod_decode_config GroundstationConfig#antenna_downlink_demod_decode_config}
  */
  readonly antennaDownlinkDemodDecodeConfig?: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#antenna_uplink_config GroundstationConfig#antenna_uplink_config}
  */
  readonly antennaUplinkConfig?: GroundstationConfigConfigDataAntennaUplinkConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#dataflow_endpoint_config GroundstationConfig#dataflow_endpoint_config}
  */
  readonly dataflowEndpointConfig?: GroundstationConfigConfigDataDataflowEndpointConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#s3_recording_config GroundstationConfig#s3_recording_config}
  */
  readonly s3RecordingConfig?: GroundstationConfigConfigDataS3RecordingConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#telemetry_sink_config GroundstationConfig#telemetry_sink_config}
  */
  readonly telemetrySinkConfig?: GroundstationConfigConfigDataTelemetrySinkConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#tracking_config GroundstationConfig#tracking_config}
  */
  readonly trackingConfig?: GroundstationConfigConfigDataTrackingConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#uplink_echo_config GroundstationConfig#uplink_echo_config}
  */
  readonly uplinkEchoConfig?: GroundstationConfigConfigDataUplinkEchoConfig;
}

export function groundstationConfigConfigDataToTerraform(struct?: GroundstationConfigConfigData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    antenna_downlink_config: groundstationConfigConfigDataAntennaDownlinkConfigToTerraform(struct!.antennaDownlinkConfig),
    antenna_downlink_demod_decode_config: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigToTerraform(struct!.antennaDownlinkDemodDecodeConfig),
    antenna_uplink_config: groundstationConfigConfigDataAntennaUplinkConfigToTerraform(struct!.antennaUplinkConfig),
    dataflow_endpoint_config: groundstationConfigConfigDataDataflowEndpointConfigToTerraform(struct!.dataflowEndpointConfig),
    s3_recording_config: groundstationConfigConfigDataS3RecordingConfigToTerraform(struct!.s3RecordingConfig),
    telemetry_sink_config: groundstationConfigConfigDataTelemetrySinkConfigToTerraform(struct!.telemetrySinkConfig),
    tracking_config: groundstationConfigConfigDataTrackingConfigToTerraform(struct!.trackingConfig),
    uplink_echo_config: groundstationConfigConfigDataUplinkEchoConfigToTerraform(struct!.uplinkEchoConfig),
  }
}


export function groundstationConfigConfigDataToHclTerraform(struct?: GroundstationConfigConfigData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    antenna_downlink_config: {
      value: groundstationConfigConfigDataAntennaDownlinkConfigToHclTerraform(struct!.antennaDownlinkConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkConfig",
    },
    antenna_downlink_demod_decode_config: {
      value: groundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigToHclTerraform(struct!.antennaDownlinkDemodDecodeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig",
    },
    antenna_uplink_config: {
      value: groundstationConfigConfigDataAntennaUplinkConfigToHclTerraform(struct!.antennaUplinkConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataAntennaUplinkConfig",
    },
    dataflow_endpoint_config: {
      value: groundstationConfigConfigDataDataflowEndpointConfigToHclTerraform(struct!.dataflowEndpointConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataDataflowEndpointConfig",
    },
    s3_recording_config: {
      value: groundstationConfigConfigDataS3RecordingConfigToHclTerraform(struct!.s3RecordingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataS3RecordingConfig",
    },
    telemetry_sink_config: {
      value: groundstationConfigConfigDataTelemetrySinkConfigToHclTerraform(struct!.telemetrySinkConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataTelemetrySinkConfig",
    },
    tracking_config: {
      value: groundstationConfigConfigDataTrackingConfigToHclTerraform(struct!.trackingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataTrackingConfig",
    },
    uplink_echo_config: {
      value: groundstationConfigConfigDataUplinkEchoConfigToHclTerraform(struct!.uplinkEchoConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationConfigConfigDataUplinkEchoConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationConfigConfigDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationConfigConfigData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antennaDownlinkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaDownlinkConfig = this._antennaDownlinkConfig?.internalValue;
    }
    if (this._antennaDownlinkDemodDecodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaDownlinkDemodDecodeConfig = this._antennaDownlinkDemodDecodeConfig?.internalValue;
    }
    if (this._antennaUplinkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaUplinkConfig = this._antennaUplinkConfig?.internalValue;
    }
    if (this._dataflowEndpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowEndpointConfig = this._dataflowEndpointConfig?.internalValue;
    }
    if (this._s3RecordingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3RecordingConfig = this._s3RecordingConfig?.internalValue;
    }
    if (this._telemetrySinkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetrySinkConfig = this._telemetrySinkConfig?.internalValue;
    }
    if (this._trackingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingConfig = this._trackingConfig?.internalValue;
    }
    if (this._uplinkEchoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkEchoConfig = this._uplinkEchoConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationConfigConfigData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antennaDownlinkConfig.internalValue = undefined;
      this._antennaDownlinkDemodDecodeConfig.internalValue = undefined;
      this._antennaUplinkConfig.internalValue = undefined;
      this._dataflowEndpointConfig.internalValue = undefined;
      this._s3RecordingConfig.internalValue = undefined;
      this._telemetrySinkConfig.internalValue = undefined;
      this._trackingConfig.internalValue = undefined;
      this._uplinkEchoConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antennaDownlinkConfig.internalValue = value.antennaDownlinkConfig;
      this._antennaDownlinkDemodDecodeConfig.internalValue = value.antennaDownlinkDemodDecodeConfig;
      this._antennaUplinkConfig.internalValue = value.antennaUplinkConfig;
      this._dataflowEndpointConfig.internalValue = value.dataflowEndpointConfig;
      this._s3RecordingConfig.internalValue = value.s3RecordingConfig;
      this._telemetrySinkConfig.internalValue = value.telemetrySinkConfig;
      this._trackingConfig.internalValue = value.trackingConfig;
      this._uplinkEchoConfig.internalValue = value.uplinkEchoConfig;
    }
  }

  // antenna_downlink_config - computed: true, optional: true, required: false
  private _antennaDownlinkConfig = new GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference(this, "antenna_downlink_config");
  public get antennaDownlinkConfig() {
    return this._antennaDownlinkConfig;
  }
  public putAntennaDownlinkConfig(value: GroundstationConfigConfigDataAntennaDownlinkConfig) {
    this._antennaDownlinkConfig.internalValue = value;
  }
  public resetAntennaDownlinkConfig() {
    this._antennaDownlinkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaDownlinkConfigInput() {
    return this._antennaDownlinkConfig.internalValue;
  }

  // antenna_downlink_demod_decode_config - computed: true, optional: true, required: false
  private _antennaDownlinkDemodDecodeConfig = new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference(this, "antenna_downlink_demod_decode_config");
  public get antennaDownlinkDemodDecodeConfig() {
    return this._antennaDownlinkDemodDecodeConfig;
  }
  public putAntennaDownlinkDemodDecodeConfig(value: GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig) {
    this._antennaDownlinkDemodDecodeConfig.internalValue = value;
  }
  public resetAntennaDownlinkDemodDecodeConfig() {
    this._antennaDownlinkDemodDecodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaDownlinkDemodDecodeConfigInput() {
    return this._antennaDownlinkDemodDecodeConfig.internalValue;
  }

  // antenna_uplink_config - computed: true, optional: true, required: false
  private _antennaUplinkConfig = new GroundstationConfigConfigDataAntennaUplinkConfigOutputReference(this, "antenna_uplink_config");
  public get antennaUplinkConfig() {
    return this._antennaUplinkConfig;
  }
  public putAntennaUplinkConfig(value: GroundstationConfigConfigDataAntennaUplinkConfig) {
    this._antennaUplinkConfig.internalValue = value;
  }
  public resetAntennaUplinkConfig() {
    this._antennaUplinkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaUplinkConfigInput() {
    return this._antennaUplinkConfig.internalValue;
  }

  // dataflow_endpoint_config - computed: true, optional: true, required: false
  private _dataflowEndpointConfig = new GroundstationConfigConfigDataDataflowEndpointConfigOutputReference(this, "dataflow_endpoint_config");
  public get dataflowEndpointConfig() {
    return this._dataflowEndpointConfig;
  }
  public putDataflowEndpointConfig(value: GroundstationConfigConfigDataDataflowEndpointConfig) {
    this._dataflowEndpointConfig.internalValue = value;
  }
  public resetDataflowEndpointConfig() {
    this._dataflowEndpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowEndpointConfigInput() {
    return this._dataflowEndpointConfig.internalValue;
  }

  // s3_recording_config - computed: true, optional: true, required: false
  private _s3RecordingConfig = new GroundstationConfigConfigDataS3RecordingConfigOutputReference(this, "s3_recording_config");
  public get s3RecordingConfig() {
    return this._s3RecordingConfig;
  }
  public putS3RecordingConfig(value: GroundstationConfigConfigDataS3RecordingConfig) {
    this._s3RecordingConfig.internalValue = value;
  }
  public resetS3RecordingConfig() {
    this._s3RecordingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RecordingConfigInput() {
    return this._s3RecordingConfig.internalValue;
  }

  // telemetry_sink_config - computed: true, optional: true, required: false
  private _telemetrySinkConfig = new GroundstationConfigConfigDataTelemetrySinkConfigOutputReference(this, "telemetry_sink_config");
  public get telemetrySinkConfig() {
    return this._telemetrySinkConfig;
  }
  public putTelemetrySinkConfig(value: GroundstationConfigConfigDataTelemetrySinkConfig) {
    this._telemetrySinkConfig.internalValue = value;
  }
  public resetTelemetrySinkConfig() {
    this._telemetrySinkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetrySinkConfigInput() {
    return this._telemetrySinkConfig.internalValue;
  }

  // tracking_config - computed: true, optional: true, required: false
  private _trackingConfig = new GroundstationConfigConfigDataTrackingConfigOutputReference(this, "tracking_config");
  public get trackingConfig() {
    return this._trackingConfig;
  }
  public putTrackingConfig(value: GroundstationConfigConfigDataTrackingConfig) {
    this._trackingConfig.internalValue = value;
  }
  public resetTrackingConfig() {
    this._trackingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingConfigInput() {
    return this._trackingConfig.internalValue;
  }

  // uplink_echo_config - computed: true, optional: true, required: false
  private _uplinkEchoConfig = new GroundstationConfigConfigDataUplinkEchoConfigOutputReference(this, "uplink_echo_config");
  public get uplinkEchoConfig() {
    return this._uplinkEchoConfig;
  }
  public putUplinkEchoConfig(value: GroundstationConfigConfigDataUplinkEchoConfig) {
    this._uplinkEchoConfig.internalValue = value;
  }
  public resetUplinkEchoConfig() {
    this._uplinkEchoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkEchoConfigInput() {
    return this._uplinkEchoConfig.internalValue;
  }
}
export interface GroundstationConfigTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#key GroundstationConfig#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#value GroundstationConfig#value}
  */
  readonly value?: string;
}

export function groundstationConfigTagsToTerraform(struct?: GroundstationConfigTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function groundstationConfigTagsToHclTerraform(struct?: GroundstationConfigTags | cdktn.IResolvable): any {
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

export class GroundstationConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GroundstationConfigTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GroundstationConfigTags | cdktn.IResolvable | undefined) {
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

export class GroundstationConfigTagsList extends cdktn.ComplexList {
  public internalValue? : GroundstationConfigTags[] | cdktn.IResolvable

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
  public get(index: number): GroundstationConfigTagsOutputReference {
    return new GroundstationConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config awscc_groundstation_config}
*/
export class GroundstationConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_groundstation_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GroundstationConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroundstationConfig to import
  * @param importFromId The id of the existing GroundstationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroundstationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_config awscc_groundstation_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroundstationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GroundstationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_config',
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
    this._configData.internalValue = config.configData;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // config_data - computed: false, optional: false, required: true
  private _configData = new GroundstationConfigConfigDataOutputReference(this, "config_data");
  public get configData() {
    return this._configData;
  }
  public putConfigData(value: GroundstationConfigConfigData) {
    this._configData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configDataInput() {
    return this._configData.internalValue;
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tags - computed: true, optional: true, required: false
  private _tags = new GroundstationConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GroundstationConfigTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      config_data: groundstationConfigConfigDataToTerraform(this._configData.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(groundstationConfigTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_data: {
        value: groundstationConfigConfigDataToHclTerraform(this._configData.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroundstationConfigConfigData",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(groundstationConfigTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroundstationConfigTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
