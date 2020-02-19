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
    define(['ApiClient', 'egoiSdk/CampaignEmailRssContent', 'egoiSdk/HeaderFooter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CampaignEmailRssContent'), require('./HeaderFooter'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.EmailRssCampaignCreate = factory(root.egoiSdk.ApiClient, root.egoiSdk.CampaignEmailRssContent, root.egoiSdk.HeaderFooter);
  }
}(this, function(ApiClient, CampaignEmailRssContent, HeaderFooter) {
  'use strict';



  /**
   * The EmailRssCampaignCreate model module.
   * @module egoiSdk/EmailRssCampaignCreate
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>EmailRssCampaignCreate</code>.
   * Email rss campaign schema
   * @alias module:egoiSdk/EmailRssCampaignCreate
   * @class
   * @param listId {Number} 
   * @param internalName {String} Campaign internal name
   * @param content {module:egoiSdk/CampaignEmailRssContent} 
   * @param senderId {Number} 
   */
  var exports = function(listId, internalName, content, senderId) {
    var _this = this;

    _this['list_id'] = listId;
    _this['internal_name'] = internalName;
    _this['content'] = content;
    _this['sender_id'] = senderId;
  };

  /**
   * Constructs a <code>EmailRssCampaignCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/EmailRssCampaignCreate} obj Optional instance to populate.
   * @return {module:egoiSdk/EmailRssCampaignCreate} The populated <code>EmailRssCampaignCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('list_id')) {
        obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
      }
      if (data.hasOwnProperty('internal_name')) {
        obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = CampaignEmailRssContent.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('sender_id')) {
        obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'Number');
      }
      if (data.hasOwnProperty('reply_to')) {
        obj['reply_to'] = ApiClient.convertToType(data['reply_to'], 'Number');
      }
      if (data.hasOwnProperty('header_footer')) {
        obj['header_footer'] = HeaderFooter.constructFromObject(data['header_footer']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} list_id
   */
  exports.prototype['list_id'] = undefined;
  /**
   * Campaign internal name
   * @member {String} internal_name
   */
  exports.prototype['internal_name'] = undefined;
  /**
   * Campaign subject. If no value is sent, defaults to 'internal_name' property value
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {module:egoiSdk/CampaignEmailRssContent} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Number} sender_id
   */
  exports.prototype['sender_id'] = undefined;
  /**
   * @member {Number} reply_to
   */
  exports.prototype['reply_to'] = undefined;
  /**
   * @member {module:egoiSdk/HeaderFooter} header_footer
   */
  exports.prototype['header_footer'] = undefined;


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getListId = function() {
    return this['list_id'];
  }

  /**
   * @param {Number} listId
   */
  exports.prototype.setListId = function(listId) {
    this['list_id'] = listId;
  }


  /**
   * Returns Campaign internal name
   * @return {String}
   */
  exports.prototype.getInternalName = function() {
    return this['internal_name'];
  }

  /**
   * Sets Campaign internal name
   * @param {String} internalName Campaign internal name
   */
  exports.prototype.setInternalName = function(internalName) {
    this['internal_name'] = internalName;
  }


  /**
   * Returns Campaign subject. If no value is sent, defaults to 'internal_name' property value
   * @return {String}
   */
  exports.prototype.getSubject = function() {
    return this['subject'];
  }

  /**
   * Sets Campaign subject. If no value is sent, defaults to 'internal_name' property value
   * @param {String} subject Campaign subject. If no value is sent, defaults to 'internal_name' property value
   */
  exports.prototype.setSubject = function(subject) {
    this['subject'] = subject;
  }


  /**
   * @return {module:egoiSdk/CampaignEmailRssContent}
   */
  exports.prototype.getContent = function() {
    return this['content'];
  }

  /**
   * @param {module:egoiSdk/CampaignEmailRssContent} content
   */
  exports.prototype.setContent = function(content) {
    this['content'] = content;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getSenderId = function() {
    return this['sender_id'];
  }

  /**
   * @param {Number} senderId
   */
  exports.prototype.setSenderId = function(senderId) {
    this['sender_id'] = senderId;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getReplyTo = function() {
    return this['reply_to'];
  }

  /**
   * @param {Number} replyTo
   */
  exports.prototype.setReplyTo = function(replyTo) {
    this['reply_to'] = replyTo;
  }


  /**
   * @return {module:egoiSdk/HeaderFooter}
   */
  exports.prototype.getHeaderFooter = function() {
    return this['header_footer'];
  }

  /**
   * @param {module:egoiSdk/HeaderFooter} headerFooter
   */
  exports.prototype.setHeaderFooter = function(headerFooter) {
    this['header_footer'] = headerFooter;
  }



  return exports;
}));


