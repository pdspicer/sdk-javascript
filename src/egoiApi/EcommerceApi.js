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
    define(['ApiClient', 'egoiSdk/AcceptedResponse', 'egoiSdk/BadRequest', 'egoiSdk/Catalog', 'egoiSdk/CatalogCollection', 'egoiSdk/CatalogPostRequest', 'egoiSdk/Forbidden', 'egoiSdk/InternalServerError', 'egoiSdk/NotFound', 'egoiSdk/PostProductsConflict', 'egoiSdk/Product', 'egoiSdk/ProductBulkRequest', 'egoiSdk/ProductCollection', 'egoiSdk/ProductPatchRequest', 'egoiSdk/ProductPostRequest', 'egoiSdk/Unauthorized', 'egoiSdk/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../egoiSdk/AcceptedResponse'), require('../egoiSdk/BadRequest'), require('../egoiSdk/Catalog'), require('../egoiSdk/CatalogCollection'), require('../egoiSdk/CatalogPostRequest'), require('../egoiSdk/Forbidden'), require('../egoiSdk/InternalServerError'), require('../egoiSdk/NotFound'), require('../egoiSdk/PostProductsConflict'), require('../egoiSdk/Product'), require('../egoiSdk/ProductBulkRequest'), require('../egoiSdk/ProductCollection'), require('../egoiSdk/ProductPatchRequest'), require('../egoiSdk/ProductPostRequest'), require('../egoiSdk/Unauthorized'), require('../egoiSdk/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.EcommerceApi = factory(root.egoiSdk.ApiClient, root.egoiSdk.AcceptedResponse, root.egoiSdk.BadRequest, root.egoiSdk.Catalog, root.egoiSdk.CatalogCollection, root.egoiSdk.CatalogPostRequest, root.egoiSdk.Forbidden, root.egoiSdk.InternalServerError, root.egoiSdk.NotFound, root.egoiSdk.PostProductsConflict, root.egoiSdk.Product, root.egoiSdk.ProductBulkRequest, root.egoiSdk.ProductCollection, root.egoiSdk.ProductPatchRequest, root.egoiSdk.ProductPostRequest, root.egoiSdk.Unauthorized, root.egoiSdk.UnprocessableEntity);
  }
}(this, function(ApiClient, AcceptedResponse, BadRequest, Catalog, CatalogCollection, CatalogPostRequest, Forbidden, InternalServerError, NotFound, PostProductsConflict, Product, ProductBulkRequest, ProductCollection, ProductPatchRequest, ProductPostRequest, Unauthorized, UnprocessableEntity) {
  'use strict';

  /**
   * Ecommerce service.
   * @module egoiApi/EcommerceApi
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new EcommerceApi. 
   * @alias module:egoiApi/EcommerceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCatalog operation.
     * @callback module:egoiApi/EcommerceApi~createCatalogCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new catalog
     * Creates a new catalog
     * @param {module:egoiSdk/CatalogPostRequest} catalogPostRequest Parameters for the Catalog
     * @param {module:egoiApi/EcommerceApi~createCatalogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/Catalog}
     */
    this.createCatalog = function(catalogPostRequest, callback) {
      var postBody = catalogPostRequest;

      // verify the required parameter 'catalogPostRequest' is set
      if (catalogPostRequest === undefined || catalogPostRequest === null) {
        throw new Error("Missing the required parameter 'catalogPostRequest' when calling createCatalog");
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createProduct operation.
     * @callback module:egoiApi/EcommerceApi~createProductCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new product
     * Creates a new product
     * @param {Number} catalogId ID of the Catalog
     * @param {module:egoiSdk/ProductPostRequest} productPostRequest Parameters for the Product
     * @param {module:egoiApi/EcommerceApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/Product}
     */
    this.createProduct = function(catalogId, productPostRequest, callback) {
      var postBody = productPostRequest;

      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling createProduct");
      }

      // verify the required parameter 'productPostRequest' is set
      if (productPostRequest === undefined || productPostRequest === null) {
        throw new Error("Missing the required parameter 'productPostRequest' when calling createProduct");
      }


      var pathParams = {
        'catalog_id': catalogId
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
      var returnType = Product;

      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCatalog operation.
     * @callback module:egoiApi/EcommerceApi~deleteCatalogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove catalog
     * Remove catalog information given its ID
     * @param {Number} catalogId ID of the Catalog
     * @param {module:egoiApi/EcommerceApi~deleteCatalogCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCatalog = function(catalogId, callback) {
      var postBody = null;

      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling deleteCatalog");
      }


      var pathParams = {
        'catalog_id': catalogId
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/{catalog_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProduct operation.
     * @callback module:egoiApi/EcommerceApi~deleteProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove product
     * Remove product information given its ID
     * @param {Number} catalogId ID of the Catalog
     * @param {String} productIdentifier ID of the Product
     * @param {module:egoiApi/EcommerceApi~deleteProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProduct = function(catalogId, productIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling deleteProduct");
      }

      // verify the required parameter 'productIdentifier' is set
      if (productIdentifier === undefined || productIdentifier === null) {
        throw new Error("Missing the required parameter 'productIdentifier' when calling deleteProduct");
      }


      var pathParams = {
        'catalog_id': catalogId,
        'product_identifier': productIdentifier
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products/{product_identifier}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCatalogs operation.
     * @callback module:egoiApi/EcommerceApi~getAllCatalogsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/CatalogCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all catalogs
     * Returns all catalogs
     * @param {module:egoiApi/EcommerceApi~getAllCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/CatalogCollection}
     */
    this.getAllCatalogs = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CatalogCollection;

      return this.apiClient.callApi(
        '/catalogs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllProducts operation.
     * @callback module:egoiApi/EcommerceApi~getAllProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/ProductCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all products
     * Returns all products for the given catalog
     * @param {Number} catalogId ID of the Catalog
     * @param {Object} opts Optional parameters
     * @param {String} opts.productIdentifier Product ID in your store
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoiApi/EcommerceApi~getAllProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/ProductCollection}
     */
    this.getAllProducts = function(catalogId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling getAllProducts");
      }


      var pathParams = {
        'catalog_id': catalogId
      };
      var queryParams = {
        'product_identifier': opts['productIdentifier'],
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = ProductCollection;

      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProduct operation.
     * @callback module:egoiApi/EcommerceApi~getProductCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get product
     * Returns product information given its ID
     * @param {Number} catalogId ID of the Catalog
     * @param {String} productIdentifier ID of the Product
     * @param {module:egoiApi/EcommerceApi~getProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/Product}
     */
    this.getProduct = function(catalogId, productIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling getProduct");
      }

      // verify the required parameter 'productIdentifier' is set
      if (productIdentifier === undefined || productIdentifier === null) {
        throw new Error("Missing the required parameter 'productIdentifier' when calling getProduct");
      }


      var pathParams = {
        'catalog_id': catalogId,
        'product_identifier': productIdentifier
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products/{product_identifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the importProducts operation.
     * @callback module:egoiApi/EcommerceApi~importProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import products
     * Imports a collection of products
     * @param {Number} catalogId ID of the Catalog
     * @param {module:egoiSdk/ProductBulkRequest} productBulkRequest Parameters for the Product
     * @param {module:egoiApi/EcommerceApi~importProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/AcceptedResponse}
     */
    this.importProducts = function(catalogId, productBulkRequest, callback) {
      var postBody = productBulkRequest;

      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling importProducts");
      }

      // verify the required parameter 'productBulkRequest' is set
      if (productBulkRequest === undefined || productBulkRequest === null) {
        throw new Error("Missing the required parameter 'productBulkRequest' when calling importProducts");
      }


      var pathParams = {
        'catalog_id': catalogId
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
        '/catalogs/{catalog_id}/products/actions/import', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:egoiApi/EcommerceApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update product
     * Updates a product
     * @param {Number} catalogId ID of the Catalog
     * @param {String} productIdentifier ID of the Product
     * @param {module:egoiSdk/ProductPatchRequest} productPatchRequest Parameters for the product
     * @param {module:egoiApi/EcommerceApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/Product}
     */
    this.updateProduct = function(catalogId, productIdentifier, productPatchRequest, callback) {
      var postBody = productPatchRequest;

      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling updateProduct");
      }

      // verify the required parameter 'productIdentifier' is set
      if (productIdentifier === undefined || productIdentifier === null) {
        throw new Error("Missing the required parameter 'productIdentifier' when calling updateProduct");
      }

      // verify the required parameter 'productPatchRequest' is set
      if (productPatchRequest === undefined || productPatchRequest === null) {
        throw new Error("Missing the required parameter 'productPatchRequest' when calling updateProduct");
      }


      var pathParams = {
        'catalog_id': catalogId,
        'product_identifier': productIdentifier
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
      var returnType = Product;

      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products/{product_identifier}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
