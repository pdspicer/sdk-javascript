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
    define(['ApiClient', 'egoiSdk/SendSmartSms', 'egoiSdk/SmartSmsSegmentsActionSend'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SendSmartSms'), require('./SmartSmsSegmentsActionSend'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.CampaignSmartSmsScheduleRequest = factory(root.egoiSdk.ApiClient, root.egoiSdk.SendSmartSms, root.egoiSdk.SmartSmsSegmentsActionSend);
  }
}(this, function(ApiClient, SendSmartSms, SmartSmsSegmentsActionSend) {
  'use strict';



  /**
   * The CampaignSmartSmsScheduleRequest model module.
   * @module egoiSdk/CampaignSmartSmsScheduleRequest
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>CampaignSmartSmsScheduleRequest</code>.
   * @alias module:egoiSdk/CampaignSmartSmsScheduleRequest
   * @class
   * @extends module:egoiSdk/SendSmartSms
   * @implements module:egoiSdk/SendSmartSms
   */
  var exports = function() {
    var _this = this;

    SendSmartSms.call(_this);
  };

  /**
   * Constructs a <code>CampaignSmartSmsScheduleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/CampaignSmartSmsScheduleRequest} obj Optional instance to populate.
   * @return {module:egoiSdk/CampaignSmartSmsScheduleRequest} The populated <code>CampaignSmartSmsScheduleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      SendSmartSms.constructFromObject(data, obj);
      if (data.hasOwnProperty('schedule_date')) {
        obj['schedule_date'] = ApiClient.convertToType(data['schedule_date'], 'Date');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(SendSmartSms.prototype);
  exports.prototype.constructor = exports;

  /**
   * The date and time
   * @member {Date} schedule_date
   */
  exports.prototype['schedule_date'] = undefined;

  // Implement SendSmartSms interface:
  /**
   * Array of IDs of the users to notify
   * @member {} notify
   */
exports.prototype['notify'] = undefined;

  /**
   * @member {} segments
   */
exports.prototype['segments'] = undefined;


  /**
   * Returns The date and time
   * @return {Date}
   */
  exports.prototype.getScheduleDate = function() {
    return this['schedule_date'];
  }

  /**
   * Sets The date and time
   * @param {Date} scheduleDate The date and time
   */
  exports.prototype.setScheduleDate = function(scheduleDate) {
    this['schedule_date'] = scheduleDate;
  }



  return exports;
}));


