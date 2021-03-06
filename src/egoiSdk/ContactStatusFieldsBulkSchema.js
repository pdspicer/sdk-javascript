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
    root.egoiSdk.ContactStatusFieldsBulkSchema = factory(root.egoiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ContactStatusFieldsBulkSchema model module.
   * @module egoiSdk/ContactStatusFieldsBulkSchema
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>ContactStatusFieldsBulkSchema</code>.
   * Contact status schema
   * @alias module:egoiSdk/ContactStatusFieldsBulkSchema
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContactStatusFieldsBulkSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ContactStatusFieldsBulkSchema} obj Optional instance to populate.
   * @return {module:egoiSdk/ContactStatusFieldsBulkSchema} The populated <code>ContactStatusFieldsBulkSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email_status')) {
        obj['email_status'] = ApiClient.convertToType(data['email_status'], 'String');
      }
      if (data.hasOwnProperty('cellphone_status')) {
        obj['cellphone_status'] = ApiClient.convertToType(data['cellphone_status'], 'String');
      }
      if (data.hasOwnProperty('phone_status')) {
        obj['phone_status'] = ApiClient.convertToType(data['phone_status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Email channel status
   * @member {module:egoiSdk/ContactStatusFieldsBulkSchema.EmailStatusEnum} email_status
   */
  exports.prototype['email_status'] = undefined;
  /**
   * Cellphone channel status
   * @member {module:egoiSdk/ContactStatusFieldsBulkSchema.CellphoneStatusEnum} cellphone_status
   */
  exports.prototype['cellphone_status'] = undefined;
  /**
   * Phone channel status
   * @member {module:egoiSdk/ContactStatusFieldsBulkSchema.PhoneStatusEnum} phone_status
   */
  exports.prototype['phone_status'] = undefined;


  /**
   * Returns Email channel status
   * @return {module:egoiSdk/ContactStatusFieldsBulkSchema.EmailStatusEnum}
   */
  exports.prototype.getEmailStatus = function() {
    return this['email_status'];
  }

  /**
   * Sets Email channel status
   * @param {module:egoiSdk/ContactStatusFieldsBulkSchema.EmailStatusEnum} emailStatus Email channel status
   */
  exports.prototype.setEmailStatus = function(emailStatus) {
    this['email_status'] = emailStatus;
  }


  /**
   * Returns Cellphone channel status
   * @return {module:egoiSdk/ContactStatusFieldsBulkSchema.CellphoneStatusEnum}
   */
  exports.prototype.getCellphoneStatus = function() {
    return this['cellphone_status'];
  }

  /**
   * Sets Cellphone channel status
   * @param {module:egoiSdk/ContactStatusFieldsBulkSchema.CellphoneStatusEnum} cellphoneStatus Cellphone channel status
   */
  exports.prototype.setCellphoneStatus = function(cellphoneStatus) {
    this['cellphone_status'] = cellphoneStatus;
  }


  /**
   * Returns Phone channel status
   * @return {module:egoiSdk/ContactStatusFieldsBulkSchema.PhoneStatusEnum}
   */
  exports.prototype.getPhoneStatus = function() {
    return this['phone_status'];
  }

  /**
   * Sets Phone channel status
   * @param {module:egoiSdk/ContactStatusFieldsBulkSchema.PhoneStatusEnum} phoneStatus Phone channel status
   */
  exports.prototype.setPhoneStatus = function(phoneStatus) {
    this['phone_status'] = phoneStatus;
  }


  /**
   * Allowed values for the <code>email_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EmailStatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"  };

  /**
   * Allowed values for the <code>cellphone_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CellphoneStatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"  };

  /**
   * Allowed values for the <code>phone_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PhoneStatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"  };


  return exports;
}));


