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
    define(['ApiClient', 'egoiSdk/MessageWebPushPost'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageWebPushPost'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.WebPushCampaign = factory(root.egoiSdk.ApiClient, root.egoiSdk.MessageWebPushPost);
  }
}(this, function(ApiClient, MessageWebPushPost) {
  'use strict';



  /**
   * The WebPushCampaign model module.
   * @module egoiSdk/WebPushCampaign
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>WebPushCampaign</code>.
   * @alias module:egoiSdk/WebPushCampaign
   * @class
   * @param siteId {Number} 
   * @param internalName {String} Webpush campaign internal title
   * @param content {module:egoiSdk/MessageWebPushPost} 
   */
  var exports = function(siteId, internalName, content) {
    var _this = this;

    _this['site_id'] = siteId;
    _this['internal_name'] = internalName;
    _this['content'] = content;
  };

  /**
   * Constructs a <code>WebPushCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/WebPushCampaign} obj Optional instance to populate.
   * @return {module:egoiSdk/WebPushCampaign} The populated <code>WebPushCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('site_id')) {
        obj['site_id'] = ApiClient.convertToType(data['site_id'], 'Number');
      }
      if (data.hasOwnProperty('internal_name')) {
        obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = MessageWebPushPost.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} site_id
   */
  exports.prototype['site_id'] = undefined;
  /**
   * Webpush campaign internal title
   * @member {String} internal_name
   */
  exports.prototype['internal_name'] = undefined;
  /**
   * @member {module:egoiSdk/MessageWebPushPost} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Array.<Object>} actions
   */
  exports.prototype['actions'] = undefined;


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getSiteId = function() {
    return this['site_id'];
  }

  /**
   * @param {Number} siteId
   */
  exports.prototype.setSiteId = function(siteId) {
    this['site_id'] = siteId;
  }


  /**
   * Returns Webpush campaign internal title
   * @return {String}
   */
  exports.prototype.getInternalName = function() {
    return this['internal_name'];
  }

  /**
   * Sets Webpush campaign internal title
   * @param {String} internalName Webpush campaign internal title
   */
  exports.prototype.setInternalName = function(internalName) {
    this['internal_name'] = internalName;
  }


  /**
   * @return {module:egoiSdk/MessageWebPushPost}
   */
  exports.prototype.getContent = function() {
    return this['content'];
  }

  /**
   * @param {module:egoiSdk/MessageWebPushPost} content
   */
  exports.prototype.setContent = function(content) {
    this['content'] = content;
  }


  /**
   * @return {Array.<Object>}
   */
  exports.prototype.getActions = function() {
    return this['actions'];
  }

  /**
   * @param {Array.<Object>} actions
   */
  exports.prototype.setActions = function(actions) {
    this['actions'] = actions;
  }



  return exports;
}));


