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
    root.egoiSdk.InvalidSegmentTypeErrors = factory(root.egoiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InvalidSegmentTypeErrors model module.
   * @module egoiSdk/InvalidSegmentTypeErrors
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>InvalidSegmentTypeErrors</code>.
   * @alias module:egoiSdk/InvalidSegmentTypeErrors
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InvalidSegmentTypeErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/InvalidSegmentTypeErrors} obj Optional instance to populate.
   * @return {module:egoiSdk/InvalidSegmentTypeErrors} The populated <code>InvalidSegmentTypeErrors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('invalid_segment_type')) {
        obj['invalid_segment_type'] = ApiClient.convertToType(data['invalid_segment_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Occurs when the segment type is invalid
   * @member {module:egoiSdk/InvalidSegmentTypeErrors.InvalidSegmentTypeEnum} invalid_segment_type
   */
  exports.prototype['invalid_segment_type'] = undefined;


  /**
   * Returns Occurs when the segment type is invalid
   * @return {module:egoiSdk/InvalidSegmentTypeErrors.InvalidSegmentTypeEnum}
   */
  exports.prototype.getInvalidSegmentType = function() {
    return this['invalid_segment_type'];
  }

  /**
   * Sets Occurs when the segment type is invalid
   * @param {module:egoiSdk/InvalidSegmentTypeErrors.InvalidSegmentTypeEnum} invalidSegmentType Occurs when the segment type is invalid
   */
  exports.prototype.setInvalidSegmentType = function(invalidSegmentType) {
    this['invalid_segment_type'] = invalidSegmentType;
  }


  /**
   * Allowed values for the <code>invalid_segment_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InvalidSegmentTypeEnum = {
    /**
     * value: "You can only delete segments of type 'saved'"
     * @const
     */
    "You can only delete segments of type &#39;saved&#39;": "You can only delete segments of type 'saved'"  };


  return exports;
}));


