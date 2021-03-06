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
    define(['ApiClient', 'egoiSdk/AcceptedResponse', 'egoiSdk/AdvancedReportsCollection', 'egoiSdk/BadRequest', 'egoiSdk/Forbidden', 'egoiSdk/GenerateEmailBouncesReport', 'egoiSdk/GenerateEmailClicksByContactReport', 'egoiSdk/GenerateEmailClicksByUrlReport', 'egoiSdk/GenerateEmailEventsReport', 'egoiSdk/GenerateEmailUnsubscriptionsReport', 'egoiSdk/GenerateFormAnswersReport', 'egoiSdk/GenerateSendsReport', 'egoiSdk/GenerateSmsBouncesReport', 'egoiSdk/GenerateSmsEventsReport', 'egoiSdk/GenerateSubscriptionsReport', 'egoiSdk/GenerateUnsubscriptionsReport', 'egoiSdk/InternalServerError', 'egoiSdk/Unauthorized', 'egoiSdk/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../egoiSdk/AcceptedResponse'), require('../egoiSdk/AdvancedReportsCollection'), require('../egoiSdk/BadRequest'), require('../egoiSdk/Forbidden'), require('../egoiSdk/GenerateEmailBouncesReport'), require('../egoiSdk/GenerateEmailClicksByContactReport'), require('../egoiSdk/GenerateEmailClicksByUrlReport'), require('../egoiSdk/GenerateEmailEventsReport'), require('../egoiSdk/GenerateEmailUnsubscriptionsReport'), require('../egoiSdk/GenerateFormAnswersReport'), require('../egoiSdk/GenerateSendsReport'), require('../egoiSdk/GenerateSmsBouncesReport'), require('../egoiSdk/GenerateSmsEventsReport'), require('../egoiSdk/GenerateSubscriptionsReport'), require('../egoiSdk/GenerateUnsubscriptionsReport'), require('../egoiSdk/InternalServerError'), require('../egoiSdk/Unauthorized'), require('../egoiSdk/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.AdvancedReportsApi = factory(root.egoiSdk.ApiClient, root.egoiSdk.AcceptedResponse, root.egoiSdk.AdvancedReportsCollection, root.egoiSdk.BadRequest, root.egoiSdk.Forbidden, root.egoiSdk.GenerateEmailBouncesReport, root.egoiSdk.GenerateEmailClicksByContactReport, root.egoiSdk.GenerateEmailClicksByUrlReport, root.egoiSdk.GenerateEmailEventsReport, root.egoiSdk.GenerateEmailUnsubscriptionsReport, root.egoiSdk.GenerateFormAnswersReport, root.egoiSdk.GenerateSendsReport, root.egoiSdk.GenerateSmsBouncesReport, root.egoiSdk.GenerateSmsEventsReport, root.egoiSdk.GenerateSubscriptionsReport, root.egoiSdk.GenerateUnsubscriptionsReport, root.egoiSdk.InternalServerError, root.egoiSdk.Unauthorized, root.egoiSdk.UnprocessableEntity);
  }
}(this, function(ApiClient, AcceptedResponse, AdvancedReportsCollection, BadRequest, Forbidden, GenerateEmailBouncesReport, GenerateEmailClicksByContactReport, GenerateEmailClicksByUrlReport, GenerateEmailEventsReport, GenerateEmailUnsubscriptionsReport, GenerateFormAnswersReport, GenerateSendsReport, GenerateSmsBouncesReport, GenerateSmsEventsReport, GenerateSubscriptionsReport, GenerateUnsubscriptionsReport, InternalServerError, Unauthorized, UnprocessableEntity) {
  'use strict';

  /**
   * AdvancedReports service.
   * @module egoiApi/AdvancedReportsApi
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new AdvancedReportsApi. 
   * @alias module:egoiApi/AdvancedReportsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the generateEmailBouncesReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailBouncesReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email bounces report
     * Generates a new email bounces report
     * @param {module:egoiSdk/GenerateEmailBouncesReport} generateEmailBouncesReport Parameters for the email bounces report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailBouncesReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateEmailBouncesReport = function(generateEmailBouncesReport, callback) {
      var postBody = generateEmailBouncesReport;

      // verify the required parameter 'generateEmailBouncesReport' is set
      if (generateEmailBouncesReport === undefined || generateEmailBouncesReport === null) {
        throw new Error("Missing the required parameter 'generateEmailBouncesReport' when calling generateEmailBouncesReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/email-bounces', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailClicksByContactReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailClicksByContactReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email clicks by contact report
     * Generates a new email clicks by contact report
     * @param {module:egoiSdk/GenerateEmailClicksByContactReport} generateEmailClicksByContactReport Parameters for the email clicks by contact report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailClicksByContactReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateEmailClicksByContactReport = function(generateEmailClicksByContactReport, callback) {
      var postBody = generateEmailClicksByContactReport;

      // verify the required parameter 'generateEmailClicksByContactReport' is set
      if (generateEmailClicksByContactReport === undefined || generateEmailClicksByContactReport === null) {
        throw new Error("Missing the required parameter 'generateEmailClicksByContactReport' when calling generateEmailClicksByContactReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/email-clicks-by-contact', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailClicksByUrlReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailClicksByUrlReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email clicks by URL report
     * Generates a new email clicks by URL report
     * @param {module:egoiSdk/GenerateEmailClicksByUrlReport} generateEmailClicksByUrlReport Parameters for the email clicks by URL report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailClicksByUrlReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateEmailClicksByUrlReport = function(generateEmailClicksByUrlReport, callback) {
      var postBody = generateEmailClicksByUrlReport;

      // verify the required parameter 'generateEmailClicksByUrlReport' is set
      if (generateEmailClicksByUrlReport === undefined || generateEmailClicksByUrlReport === null) {
        throw new Error("Missing the required parameter 'generateEmailClicksByUrlReport' when calling generateEmailClicksByUrlReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/email-clicks-by-url', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailEventsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailEventsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email events report
     * Generates a new email events report
     * @param {module:egoiSdk/GenerateEmailEventsReport} generateEmailEventsReport Parameters for the email events report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailEventsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateEmailEventsReport = function(generateEmailEventsReport, callback) {
      var postBody = generateEmailEventsReport;

      // verify the required parameter 'generateEmailEventsReport' is set
      if (generateEmailEventsReport === undefined || generateEmailEventsReport === null) {
        throw new Error("Missing the required parameter 'generateEmailEventsReport' when calling generateEmailEventsReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/email-events', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailSmsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailSmsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate SMS bounces report
     * Generates a new SMS bounces report
     * @param {module:egoiSdk/GenerateSmsBouncesReport} generateSmsBouncesReport Parameters for the SMS bounces report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailSmsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateEmailSmsReport = function(generateSmsBouncesReport, callback) {
      var postBody = generateSmsBouncesReport;

      // verify the required parameter 'generateSmsBouncesReport' is set
      if (generateSmsBouncesReport === undefined || generateSmsBouncesReport === null) {
        throw new Error("Missing the required parameter 'generateSmsBouncesReport' when calling generateEmailSmsReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/sms-bounces', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailUnsubscriptionsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailUnsubscriptionsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email unsubscriptions report
     * Generates a new email unsubscriptions report
     * @param {module:egoiSdk/GenerateEmailUnsubscriptionsReport} generateEmailUnsubscriptionsReport Parameters for the email unsubscriptions report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailUnsubscriptionsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateEmailUnsubscriptionsReport = function(generateEmailUnsubscriptionsReport, callback) {
      var postBody = generateEmailUnsubscriptionsReport;

      // verify the required parameter 'generateEmailUnsubscriptionsReport' is set
      if (generateEmailUnsubscriptionsReport === undefined || generateEmailUnsubscriptionsReport === null) {
        throw new Error("Missing the required parameter 'generateEmailUnsubscriptionsReport' when calling generateEmailUnsubscriptionsReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/email-unsubscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateFormAnswersReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateFormAnswersReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate form answers report
     * Generates a new form answers report
     * @param {module:egoiSdk/GenerateFormAnswersReport} generateFormAnswersReport Parameters for the form answers report
     * @param {module:egoiApi/AdvancedReportsApi~generateFormAnswersReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateFormAnswersReport = function(generateFormAnswersReport, callback) {
      var postBody = generateFormAnswersReport;

      // verify the required parameter 'generateFormAnswersReport' is set
      if (generateFormAnswersReport === undefined || generateFormAnswersReport === null) {
        throw new Error("Missing the required parameter 'generateFormAnswersReport' when calling generateFormAnswersReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/form-answers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSendsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateSendsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate sends report
     * Generates a new sends report
     * @param {module:egoiSdk/GenerateSendsReport} generateSendsReport Parameters for the sends report
     * @param {module:egoiApi/AdvancedReportsApi~generateSendsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateSendsReport = function(generateSendsReport, callback) {
      var postBody = generateSendsReport;

      // verify the required parameter 'generateSendsReport' is set
      if (generateSendsReport === undefined || generateSendsReport === null) {
        throw new Error("Missing the required parameter 'generateSendsReport' when calling generateSendsReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/sends', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSmsEventsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateSmsEventsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate SMS events report
     * Generates a new SMS events report
     * @param {module:egoiSdk/GenerateSmsEventsReport} generateSmsEventsReport Parameters for the SMS events report
     * @param {module:egoiApi/AdvancedReportsApi~generateSmsEventsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateSmsEventsReport = function(generateSmsEventsReport, callback) {
      var postBody = generateSmsEventsReport;

      // verify the required parameter 'generateSmsEventsReport' is set
      if (generateSmsEventsReport === undefined || generateSmsEventsReport === null) {
        throw new Error("Missing the required parameter 'generateSmsEventsReport' when calling generateSmsEventsReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/sms-events', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSubscriptionsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateSubscriptionsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate subscriptions report
     * Generates a new subscriptions report
     * @param {module:egoiSdk/GenerateSubscriptionsReport} generateSubscriptionsReport Parameters for the subscriptions report
     * @param {module:egoiApi/AdvancedReportsApi~generateSubscriptionsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateSubscriptionsReport = function(generateSubscriptionsReport, callback) {
      var postBody = generateSubscriptionsReport;

      // verify the required parameter 'generateSubscriptionsReport' is set
      if (generateSubscriptionsReport === undefined || generateSubscriptionsReport === null) {
        throw new Error("Missing the required parameter 'generateSubscriptionsReport' when calling generateSubscriptionsReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateUnsubscriptionsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateUnsubscriptionsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate unsubscriptions report
     * Generates a new unsubscriptions report
     * @param {module:egoiSdk/GenerateUnsubscriptionsReport} generateUnsubscriptionsReport Parameters for the unsubscriptions report
     * @param {module:egoiApi/AdvancedReportsApi~generateUnsubscriptionsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.generateUnsubscriptionsReport = function(generateUnsubscriptionsReport, callback) {
      var postBody = generateUnsubscriptionsReport;

      // verify the required parameter 'generateUnsubscriptionsReport' is set
      if (generateUnsubscriptionsReport === undefined || generateUnsubscriptionsReport === null) {
        throw new Error("Missing the required parameter 'generateUnsubscriptionsReport' when calling generateUnsubscriptionsReport");
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
      var returnType = AcceptedResponse;

      return this.apiClient.callApi(
        '/reports/advanced/unsubscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAdvancedReports operation.
     * @callback module:egoiApi/AdvancedReportsApi~getAllAdvancedReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AdvancedReportsCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all advanced reports
     * Returns all advanced reports
     * @param {Object} opts Optional parameters
     * @param {module:egoiSdk/String} opts.status Advanced report status
     * @param {String} opts.title Advanced report title
     * @param {Date} opts.createdMin Created initial date
     * @param {Date} opts.createdMax Created finish
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoiSdk/String} opts.order Type of order (default to &#39;desc&#39;)
     * @param {module:egoiSdk/String} opts.orderBy Reference attribute to order the advanced reports (default to &#39;advanced_report_id&#39;)
     * @param {module:egoiApi/AdvancedReportsApi~getAllAdvancedReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AdvancedReportsCollection}
     */
    this.getAllAdvancedReports = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'status': opts['status'],
        'title': opts['title'],
        'created_min': opts['createdMin'],
        'created_max': opts['createdMax'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'order': opts['order'],
        'order_by': opts['orderBy'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AdvancedReportsCollection;

      return this.apiClient.callApi(
        '/reports/advanced', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
