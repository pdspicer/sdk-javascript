/**
 * APIv3 (Beta)
 *  # Introduction Just a quick peek!!! This is our new version of API. Remember, it is not stable yet!!! But we invite you play with it and give us your feedback ;) # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.   The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.   BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication   We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:  #!/bin/bash  curl -X GET 'https://api.egoiapp.com/my-account' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:  #!/bin/bash  curl -X POST 'http://api.egoiapp.com/tags' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>' \\  -H 'Content-Type: application/json' \\  -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services. * <b><a href='https://github.com/E-goi/sdk-java'>Java</a></b> * <b><a href='https://github.com/E-goi/sdk-php'>PHP</a></b> * <b><a href='https://github.com/E-goi/sdk-python'>Python</a></b>  <security-definitions/>
 *
 * OpenAPI spec version: 3.0.0-beta
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.ContactOtherActivity = factory(root.egoiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ContactOtherActivity model module.
   * @module egoiSdk/ContactOtherActivity
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>ContactOtherActivity</code>.
   * Other contact activity schema
   * @alias module:egoiSdk/ContactOtherActivity
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContactOtherActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ContactOtherActivity} obj Optional instance to populate.
   * @return {module:egoiSdk/ContactOtherActivity} The populated <code>ContactOtherActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('action_name')) {
        obj['action_name'] = ApiClient.convertToType(data['action_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The date and time
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Action name
   * @member {module:egoiSdk/ContactOtherActivity.ActionNameEnum} action_name
   */
  exports.prototype['action_name'] = undefined;


  /**
   * Returns The date and time
   * @return {Date}
   */
  exports.prototype.getDate = function() {
    return this['date'];
  }

  /**
   * Sets The date and time
   * @param {Date} _date The date and time
   */
  exports.prototype.setDate = function(_date) {
    this['date'] = _date;
  }


  /**
   * Returns Action name
   * @return {module:egoiSdk/ContactOtherActivity.ActionNameEnum}
   */
  exports.prototype.getActionName = function() {
    return this['action_name'];
  }

  /**
   * Sets Action name
   * @param {module:egoiSdk/ContactOtherActivity.ActionNameEnum} actionName Action name
   */
  exports.prototype.setActionName = function(actionName) {
    this['action_name'] = actionName;
  }


  /**
   * Allowed values for the <code>action_name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionNameEnum = {
    /**
     * value: "email_open"
     * @const
     */
    "email_open": "email_open",
    /**
     * value: "forward"
     * @const
     */
    "forward": "forward",
    /**
     * value: "conversion"
     * @const
     */
    "conversion": "conversion",
    /**
     * value: "email_send"
     * @const
     */
    "email_send": "email_send",
    /**
     * value: "sms_send"
     * @const
     */
    "sms_send": "sms_send",
    /**
     * value: "voice_send"
     * @const
     */
    "voice_send": "voice_send",
    /**
     * value: "mms_send"
     * @const
     */
    "mms_send": "mms_send",
    /**
     * value: "sms_report"
     * @const
     */
    "sms_report": "sms_report",
    /**
     * value: "voice_report"
     * @const
     */
    "voice_report": "voice_report",
    /**
     * value: "invitation_send"
     * @const
     */
    "invitation_send": "invitation_send",
    /**
     * value: "invitation_open"
     * @const
     */
    "invitation_open": "invitation_open",
    /**
     * value: "mms_open"
     * @const
     */
    "mms_open": "mms_open",
    /**
     * value: "unsubscribe"
     * @const
     */
    "unsubscribe": "unsubscribe",
    /**
     * value: "email_soft_bounce"
     * @const
     */
    "email_soft_bounce": "email_soft_bounce",
    /**
     * value: "email_hard_bounce"
     * @const
     */
    "email_hard_bounce": "email_hard_bounce",
    /**
     * value: "subscription"
     * @const
     */
    "subscription": "subscription",
    /**
     * value: "resubscription"
     * @const
     */
    "resubscription": "resubscription",
    /**
     * value: "unsubscribe_reason"
     * @const
     */
    "unsubscribe_reason": "unsubscribe_reason",
    /**
     * value: "facebook_like"
     * @const
     */
    "facebook_like": "facebook_like",
    /**
     * value: "social_share"
     * @const
     */
    "social_share": "social_share",
    /**
     * value: "unsubscribe_manual"
     * @const
     */
    "unsubscribe_manual": "unsubscribe_manual",
    /**
     * value: "double_optin"
     * @const
     */
    "double_optin": "double_optin",
    /**
     * value: "double_optin_resend"
     * @const
     */
    "double_optin_resend": "double_optin_resend",
    /**
     * value: "email_spam_complaint"
     * @const
     */
    "email_spam_complaint": "email_spam_complaint",
    /**
     * value: "email_field_disable"
     * @const
     */
    "email_field_disable": "email_field_disable",
    /**
     * value: "cellphone_field_disable"
     * @const
     */
    "cellphone_field_disable": "cellphone_field_disable",
    /**
     * value: "phone_field_disable"
     * @const
     */
    "phone_field_disable": "phone_field_disable",
    /**
     * value: "unsubscribe_api"
     * @const
     */
    "unsubscribe_api": "unsubscribe_api",
    /**
     * value: "email_field_enable"
     * @const
     */
    "email_field_enable": "email_field_enable",
    /**
     * value: "cellphone_field_enable"
     * @const
     */
    "cellphone_field_enable": "cellphone_field_enable",
    /**
     * value: "phone_field_enable"
     * @const
     */
    "phone_field_enable": "phone_field_enable",
    /**
     * value: "edit_subscription"
     * @const
     */
    "edit_subscription": "edit_subscription",
    /**
     * value: "double_optedit"
     * @const
     */
    "double_optedit": "double_optedit",
    /**
     * value: "automation_event"
     * @const
     */
    "automation_event": "automation_event",
    /**
     * value: "push_send"
     * @const
     */
    "push_send": "push_send",
    /**
     * value: "push_open"
     * @const
     */
    "push_open": "push_open",
    /**
     * value: "push_received"
     * @const
     */
    "push_received": "push_received",
    /**
     * value: "push_error"
     * @const
     */
    "push_error": "push_error",
    /**
     * value: "push_canceled"
     * @const
     */
    "push_canceled": "push_canceled",
    /**
     * value: "reply_to_email"
     * @const
     */
    "reply_to_email": "reply_to_email",
    /**
     * value: "web_push_send"
     * @const
     */
    "web_push_send": "web_push_send",
    /**
     * value: "web_push_delivered"
     * @const
     */
    "web_push_delivered": "web_push_delivered",
    /**
     * value: "web_push_open"
     * @const
     */
    "web_push_open": "web_push_open",
    /**
     * value: "web_push_bounce"
     * @const
     */
    "web_push_bounce": "web_push_bounce",
    /**
     * value: "web_push_subscription"
     * @const
     */
    "web_push_subscription": "web_push_subscription",
    /**
     * value: "web_push_unsubscription"
     * @const
     */
    "web_push_unsubscription": "web_push_unsubscription",
    /**
     * value: "add_push_contact"
     * @const
     */
    "add_push_contact": "add_push_contact",
    /**
     * value: "remove_push_contact"
     * @const
     */
    "remove_push_contact": "remove_push_contact",
    /**
     * value: "forget_subscription"
     * @const
     */
    "forget_subscription": "forget_subscription",
    /**
     * value: "change_consent"
     * @const
     */
    "change_consent": "change_consent",
    /**
     * value: "push_unsubscription"
     * @const
     */
    "push_unsubscription": "push_unsubscription"  };


  return exports;
}));

