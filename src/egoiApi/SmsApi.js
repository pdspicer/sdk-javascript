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
    define(['ApiClient', 'egoiSdk/AcceptedResponse', 'egoiSdk/BadRequest', 'egoiSdk/CampaignSmsSendRequest', 'egoiSdk/Forbidden', 'egoiSdk/HashcodeCampaign', 'egoiSdk/InternalServerError', 'egoiSdk/NotFound', 'egoiSdk/SmsCampaign', 'egoiSdk/SmsCampaignPatchRequest', 'egoiSdk/Unauthorized', 'egoiSdk/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../egoiSdk/AcceptedResponse'), require('../egoiSdk/BadRequest'), require('../egoiSdk/CampaignSmsSendRequest'), require('../egoiSdk/Forbidden'), require('../egoiSdk/HashcodeCampaign'), require('../egoiSdk/InternalServerError'), require('../egoiSdk/NotFound'), require('../egoiSdk/SmsCampaign'), require('../egoiSdk/SmsCampaignPatchRequest'), require('../egoiSdk/Unauthorized'), require('../egoiSdk/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.SmsApi = factory(root.egoiSdk.ApiClient, root.egoiSdk.AcceptedResponse, root.egoiSdk.BadRequest, root.egoiSdk.CampaignSmsSendRequest, root.egoiSdk.Forbidden, root.egoiSdk.HashcodeCampaign, root.egoiSdk.InternalServerError, root.egoiSdk.NotFound, root.egoiSdk.SmsCampaign, root.egoiSdk.SmsCampaignPatchRequest, root.egoiSdk.Unauthorized, root.egoiSdk.UnprocessableEntity);
  }
}(this, function(ApiClient, AcceptedResponse, BadRequest, CampaignSmsSendRequest, Forbidden, HashcodeCampaign, InternalServerError, NotFound, SmsCampaign, SmsCampaignPatchRequest, Unauthorized, UnprocessableEntity) {
  'use strict';

  /**
   * Sms service.
   * @module egoiApi/SmsApi
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new SmsApi. 
   * @alias module:egoiApi/SmsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the actionSendSms operation.
     * @callback module:egoiApi/SmsApi~actionSendSmsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send sms message
     * Deploys and sends an sms message
     * @param {String} campaignHash ID of the Campaign
     * @param {module:egoiSdk/CampaignSmsSendRequest} campaignSmsSendRequest Parameters for the &#39;send sms&#39; action
     * @param {module:egoiApi/SmsApi~actionSendSmsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.actionSendSms = function(campaignHash, campaignSmsSendRequest, callback) {
      var postBody = campaignSmsSendRequest;

      // verify the required parameter 'campaignHash' is set
      if (campaignHash === undefined || campaignHash === null) {
        throw new Error("Missing the required parameter 'campaignHash' when calling actionSendSms");
      }

      // verify the required parameter 'campaignSmsSendRequest' is set
      if (campaignSmsSendRequest === undefined || campaignSmsSendRequest === null) {
        throw new Error("Missing the required parameter 'campaignSmsSendRequest' when calling actionSendSms");
      }


      var pathParams = {
        'campaign_hash': campaignHash
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/campaigns/sms/{campaign_hash}/actions/send', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSmsCampaign operation.
     * @callback module:egoiApi/SmsApi~createSmsCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/HashcodeCampaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new sms campaign
     * Create a new sms campaign
     * @param {module:egoiSdk/SmsCampaign} smsCampaign Parameters for the Sms Campaign
     * @param {module:egoiApi/SmsApi~createSmsCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/HashcodeCampaign}
     */
    this.createSmsCampaign = function(smsCampaign, callback) {
      var postBody = smsCampaign;

      // verify the required parameter 'smsCampaign' is set
      if (smsCampaign === undefined || smsCampaign === null) {
        throw new Error("Missing the required parameter 'smsCampaign' when calling createSmsCampaign");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = HashcodeCampaign;

      return this.apiClient.callApi(
        '/campaigns/sms', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchSmsCampaign operation.
     * @callback module:egoiApi/SmsApi~patchSmsCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/HashcodeCampaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific sms campaign
     * Update sms campaign
     * @param {String} campaignHash ID of the Campaign
     * @param {module:egoiSdk/SmsCampaignPatchRequest} smsCampaignPatchRequest Parameters for the Sms Campaign
     * @param {module:egoiApi/SmsApi~patchSmsCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/HashcodeCampaign}
     */
    this.patchSmsCampaign = function(campaignHash, smsCampaignPatchRequest, callback) {
      var postBody = smsCampaignPatchRequest;

      // verify the required parameter 'campaignHash' is set
      if (campaignHash === undefined || campaignHash === null) {
        throw new Error("Missing the required parameter 'campaignHash' when calling patchSmsCampaign");
      }

      // verify the required parameter 'smsCampaignPatchRequest' is set
      if (smsCampaignPatchRequest === undefined || smsCampaignPatchRequest === null) {
        throw new Error("Missing the required parameter 'smsCampaignPatchRequest' when calling patchSmsCampaign");
      }


      var pathParams = {
        'campaign_hash': campaignHash
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = HashcodeCampaign;

      return this.apiClient.callApi(
        '/campaigns/sms/{campaign_hash}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
