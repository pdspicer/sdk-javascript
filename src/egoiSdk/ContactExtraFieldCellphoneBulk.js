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
    root.egoiSdk.ContactExtraFieldCellphoneBulk = factory(root.egoiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ContactExtraFieldCellphoneBulk model module.
   * @module egoiSdk/ContactExtraFieldCellphoneBulk
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>ContactExtraFieldCellphoneBulk</code>.
   * @alias module:egoiSdk/ContactExtraFieldCellphoneBulk
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContactExtraFieldCellphoneBulk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ContactExtraFieldCellphoneBulk} obj Optional instance to populate.
   * @return {module:egoiSdk/ContactExtraFieldCellphoneBulk} The populated <code>ContactExtraFieldCellphoneBulk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('field_id')) {
        obj['field_id'] = ApiClient.convertToType(data['field_id'], 'Number');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} field_id
   */
  exports.prototype['field_id'] = undefined;
  /**
   * Extra field format
   * @member {module:egoiSdk/ContactExtraFieldCellphoneBulk.FormatEnum} format
   */
  exports.prototype['format'] = undefined;
  /**
   * Extra field value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getFieldId = function() {
    return this['field_id'];
  }

  /**
   * @param {Number} fieldId
   */
  exports.prototype.setFieldId = function(fieldId) {
    this['field_id'] = fieldId;
  }


  /**
   * Returns Extra field format
   * @return {module:egoiSdk/ContactExtraFieldCellphoneBulk.FormatEnum}
   */
  exports.prototype.getFormat = function() {
    return this['format'];
  }

  /**
   * Sets Extra field format
   * @param {module:egoiSdk/ContactExtraFieldCellphoneBulk.FormatEnum} format Extra field format
   */
  exports.prototype.setFormat = function(format) {
    this['format'] = format;
  }


  /**
   * Returns Extra field value
   * @return {String}
   */
  exports.prototype.getValue = function() {
    return this['value'];
  }

  /**
   * Sets Extra field value
   * @param {String} value Extra field value
   */
  exports.prototype.setValue = function(value) {
    this['value'] = value;
  }


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "cellphone"
     * @const
     */
    "cellphone": "cellphone"  };


  return exports;
}));


