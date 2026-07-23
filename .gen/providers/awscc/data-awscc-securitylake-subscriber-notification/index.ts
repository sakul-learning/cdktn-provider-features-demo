// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securitylake_subscriber_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSecuritylakeSubscriberNotificationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securitylake_subscriber_notification#id DataAwsccSecuritylakeSubscriberNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration {
}

export function dataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationToTerraform(struct?: DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationToHclTerraform(struct?: DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_api_key_name - computed: true, optional: false, required: false
  public get authorizationApiKeyName() {
    return this.getStringAttribute('authorization_api_key_name');
  }

  // authorization_api_key_value - computed: true, optional: false, required: false
  public get authorizationApiKeyValue() {
    return this.getStringAttribute('authorization_api_key_value');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // target_role_arn - computed: true, optional: false, required: false
  public get targetRoleArn() {
    return this.getStringAttribute('target_role_arn');
  }
}
export interface DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration {
}

export function dataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationToTerraform(struct?: DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationToHclTerraform(struct?: DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // https_notification_configuration - computed: true, optional: false, required: false
  private _httpsNotificationConfiguration = new DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference(this, "https_notification_configuration");
  public get httpsNotificationConfiguration() {
    return this._httpsNotificationConfiguration;
  }

  // sqs_notification_configuration - computed: true, optional: false, required: false
  public get sqsNotificationConfiguration() {
    return this.getStringAttribute('sqs_notification_configuration');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securitylake_subscriber_notification awscc_securitylake_subscriber_notification}
*/
export class DataAwsccSecuritylakeSubscriberNotification extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securitylake_subscriber_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSecuritylakeSubscriberNotification to import
  * @param importFromId The id of the existing DataAwsccSecuritylakeSubscriberNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSecuritylakeSubscriberNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securitylake_subscriber_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securitylake_subscriber_notification awscc_securitylake_subscriber_notification} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSecuritylakeSubscriberNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSecuritylakeSubscriberNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_securitylake_subscriber_notification',
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

  // notification_configuration - computed: true, optional: false, required: false
  private _notificationConfiguration = new DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference(this, "notification_configuration");
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }

  // subscriber_arn - computed: true, optional: false, required: false
  public get subscriberArn() {
    return this.getStringAttribute('subscriber_arn');
  }

  // subscriber_endpoint - computed: true, optional: false, required: false
  public get subscriberEndpoint() {
    return this.getStringAttribute('subscriber_endpoint');
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
