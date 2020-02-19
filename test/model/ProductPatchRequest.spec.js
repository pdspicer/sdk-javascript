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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.egoiSdk);
  }
}(this, function(expect, egoiSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new egoiSdk.ProductPatchRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProductPatchRequest', function() {
    it('should create an instance of ProductPatchRequest', function() {
      // uncomment below and update the code to test ProductPatchRequest
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be.a(egoiSdk.ProductPatchRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property upc (base name: "upc")', function() {
      // uncomment below and update the code to test the property upc
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property ean (base name: "ean")', function() {
      // uncomment below and update the code to test the property ean
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property gtin (base name: "gtin")', function() {
      // uncomment below and update the code to test the property gtin
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property mpn (base name: "mpn")', function() {
      // uncomment below and update the code to test the property mpn
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property imageLink (base name: "image_link")', function() {
      // uncomment below and update the code to test the property imageLink
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property salePrice (base name: "sale_price")', function() {
      // uncomment below and update the code to test the property salePrice
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property brand (base name: "brand")', function() {
      // uncomment below and update the code to test the property brand
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property relatedProducts (base name: "related_products")', function() {
      // uncomment below and update the code to test the property relatedProducts
      //var instance = new egoiSdk.ProductPatchRequest();
      //expect(instance).to.be();
    });

  });

}));
