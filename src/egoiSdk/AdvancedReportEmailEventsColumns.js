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
    define(['ApiClient', 'egoiSdk/EmailEventsCampaignFields', 'egoiSdk/EmailEventsListStatsFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailEventsCampaignFields'), require('./EmailEventsListStatsFields'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.AdvancedReportEmailEventsColumns = factory(root.egoiSdk.ApiClient, root.egoiSdk.EmailEventsCampaignFields, root.egoiSdk.EmailEventsListStatsFields);
  }
}(this, function(ApiClient, EmailEventsCampaignFields, EmailEventsListStatsFields) {
  'use strict';



  /**
   * The AdvancedReportEmailEventsColumns model module.
   * @module egoiSdk/AdvancedReportEmailEventsColumns
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>AdvancedReportEmailEventsColumns</code>.
   * Columns of the report
   * @alias module:egoiSdk/AdvancedReportEmailEventsColumns
   * @class
   * @param listBaseFields {Array.<String>} Array of base fields
   * @param listExtraFields {Array.<Object>} 
   * @param listStatsFields {module:egoiSdk/EmailEventsListStatsFields} 
   * @param campaignFields {module:egoiSdk/EmailEventsCampaignFields} 
   */
  var exports = function(listBaseFields, listExtraFields, listStatsFields, campaignFields) {
    var _this = this;

    _this['list_base_fields'] = listBaseFields;
    _this['list_extra_fields'] = listExtraFields;
    _this['list_stats_fields'] = listStatsFields;
    _this['campaign_fields'] = campaignFields;
  };

  /**
   * Constructs a <code>AdvancedReportEmailEventsColumns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/AdvancedReportEmailEventsColumns} obj Optional instance to populate.
   * @return {module:egoiSdk/AdvancedReportEmailEventsColumns} The populated <code>AdvancedReportEmailEventsColumns</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('list_base_fields')) {
        obj['list_base_fields'] = ApiClient.convertToType(data['list_base_fields'], ['String']);
      }
      if (data.hasOwnProperty('list_extra_fields')) {
        obj['list_extra_fields'] = ApiClient.convertToType(data['list_extra_fields'], [Object]);
      }
      if (data.hasOwnProperty('list_stats_fields')) {
        obj['list_stats_fields'] = EmailEventsListStatsFields.constructFromObject(data['list_stats_fields']);
      }
      if (data.hasOwnProperty('campaign_fields')) {
        obj['campaign_fields'] = EmailEventsCampaignFields.constructFromObject(data['campaign_fields']);
      }
    }
    return obj;
  }

  /**
   * Array of base fields
   * @member {Array.<String>} list_base_fields
   */
  exports.prototype['list_base_fields'] = undefined;
  /**
   * @member {Array.<Object>} list_extra_fields
   */
  exports.prototype['list_extra_fields'] = undefined;
  /**
   * @member {module:egoiSdk/EmailEventsListStatsFields} list_stats_fields
   */
  exports.prototype['list_stats_fields'] = undefined;
  /**
   * @member {module:egoiSdk/EmailEventsCampaignFields} campaign_fields
   */
  exports.prototype['campaign_fields'] = undefined;


  /**
   * Returns Array of base fields
   * @return {Array.<String>}
   */
  exports.prototype.getListBaseFields = function() {
    return this['list_base_fields'];
  }

  /**
   * Sets Array of base fields
   * @param {Array.<String>} listBaseFields Array of base fields
   */
  exports.prototype.setListBaseFields = function(listBaseFields) {
    this['list_base_fields'] = listBaseFields;
  }


  /**
   * @return {Array.<Object>}
   */
  exports.prototype.getListExtraFields = function() {
    return this['list_extra_fields'];
  }

  /**
   * @param {Array.<Object>} listExtraFields
   */
  exports.prototype.setListExtraFields = function(listExtraFields) {
    this['list_extra_fields'] = listExtraFields;
  }


  /**
   * @return {module:egoiSdk/EmailEventsListStatsFields}
   */
  exports.prototype.getListStatsFields = function() {
    return this['list_stats_fields'];
  }

  /**
   * @param {module:egoiSdk/EmailEventsListStatsFields} listStatsFields
   */
  exports.prototype.setListStatsFields = function(listStatsFields) {
    this['list_stats_fields'] = listStatsFields;
  }


  /**
   * @return {module:egoiSdk/EmailEventsCampaignFields}
   */
  exports.prototype.getCampaignFields = function() {
    return this['campaign_fields'];
  }

  /**
   * @param {module:egoiSdk/EmailEventsCampaignFields} campaignFields
   */
  exports.prototype.setCampaignFields = function(campaignFields) {
    this['campaign_fields'] = campaignFields;
  }



  return exports;
}));


