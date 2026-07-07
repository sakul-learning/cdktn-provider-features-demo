// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/notifications_notification_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NotificationsNotificationHubConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region that NotificationHub is present in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/notifications_notification_hub#region NotificationsNotificationHub#region}
  */
  readonly region: string;
}
export interface NotificationsNotificationHubNotificationHubStatusSummary {
}

export function notificationsNotificationHubNotificationHubStatusSummaryToTerraform(struct?: NotificationsNotificationHubNotificationHubStatusSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function notificationsNotificationHubNotificationHubStatusSummaryToHclTerraform(struct?: NotificationsNotificationHubNotificationHubStatusSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class NotificationsNotificationHubNotificationHubStatusSummaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationsNotificationHubNotificationHubStatusSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationsNotificationHubNotificationHubStatusSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notification_hub_status - computed: true, optional: false, required: false
  public get notificationHubStatus() {
    return this.getStringAttribute('notification_hub_status');
  }

  // notification_hub_status_reason - computed: true, optional: false, required: false
  public get notificationHubStatusReason() {
    return this.getStringAttribute('notification_hub_status_reason');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/notifications_notification_hub awscc_notifications_notification_hub}
*/
export class NotificationsNotificationHub extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_notifications_notification_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NotificationsNotificationHub resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationsNotificationHub to import
  * @param importFromId The id of the existing NotificationsNotificationHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/notifications_notification_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationsNotificationHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_notifications_notification_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/notifications_notification_hub awscc_notifications_notification_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationsNotificationHubConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationsNotificationHubConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_notifications_notification_hub',
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
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_hub_status_summary - computed: true, optional: false, required: false
  private _notificationHubStatusSummary = new NotificationsNotificationHubNotificationHubStatusSummaryOutputReference(this, "notification_hub_status_summary");
  public get notificationHubStatusSummary() {
    return this._notificationHubStatusSummary;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
