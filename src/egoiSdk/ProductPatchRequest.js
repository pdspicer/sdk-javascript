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
    define(['ApiClient', 'egoiSdk/ProductPatchRequestRelatedProducts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductPatchRequestRelatedProducts'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.ProductPatchRequest = factory(root.egoiSdk.ApiClient, root.egoiSdk.ProductPatchRequestRelatedProducts);
  }
}(this, function(ApiClient, ProductPatchRequestRelatedProducts) {
  'use strict';



  /**
   * The ProductPatchRequest model module.
   * @module egoiSdk/ProductPatchRequest
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>ProductPatchRequest</code>.
   * Product patch request schema
   * @alias module:egoiSdk/ProductPatchRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductPatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ProductPatchRequest} obj Optional instance to populate.
   * @return {module:egoiSdk/ProductPatchRequest} The populated <code>ProductPatchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('upc')) {
        obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
      }
      if (data.hasOwnProperty('ean')) {
        obj['ean'] = ApiClient.convertToType(data['ean'], 'String');
      }
      if (data.hasOwnProperty('gtin')) {
        obj['gtin'] = ApiClient.convertToType(data['gtin'], 'String');
      }
      if (data.hasOwnProperty('mpn')) {
        obj['mpn'] = ApiClient.convertToType(data['mpn'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('image_link')) {
        obj['image_link'] = ApiClient.convertToType(data['image_link'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('sale_price')) {
        obj['sale_price'] = ApiClient.convertToType(data['sale_price'], 'Number');
      }
      if (data.hasOwnProperty('brand')) {
        obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
      }
      if (data.hasOwnProperty('related_products')) {
        obj['related_products'] = ProductPatchRequestRelatedProducts.constructFromObject(data['related_products']);
      }
    }
    return obj;
  }

  /**
   * Name of the product
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the product
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Stock Keeping Unit
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * Universal Product Code
   * @member {String} upc
   */
  exports.prototype['upc'] = undefined;
  /**
   * European Article Numbering
   * @member {String} ean
   */
  exports.prototype['ean'] = undefined;
  /**
   * Global Trade Item Number
   * @member {String} gtin
   */
  exports.prototype['gtin'] = undefined;
  /**
   * Manufacturer Part Number
   * @member {String} mpn
   */
  exports.prototype['mpn'] = undefined;
  /**
   * Link for the product
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * Link for the product image
   * @member {String} image_link
   */
  exports.prototype['image_link'] = undefined;
  /**
   * Price of the product
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Sale price of the product
   * @member {Number} sale_price
   */
  exports.prototype['sale_price'] = undefined;
  /**
   * Brand of the product
   * @member {String} brand
   */
  exports.prototype['brand'] = undefined;
  /**
   * Array of product categories, using the character '>' as delimiter for the breadcrumb                         syntax
   * @member {Array.<String>} categories
   */
  exports.prototype['categories'] = undefined;
  /**
   * @member {module:egoiSdk/ProductPatchRequestRelatedProducts} related_products
   */
  exports.prototype['related_products'] = undefined;


  /**
   * Returns Name of the product
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * Sets Name of the product
   * @param {String} name Name of the product
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  /**
   * Returns Description of the product
   * @return {String}
   */
  exports.prototype.getDescription = function() {
    return this['description'];
  }

  /**
   * Sets Description of the product
   * @param {String} description Description of the product
   */
  exports.prototype.setDescription = function(description) {
    this['description'] = description;
  }


  /**
   * Returns Stock Keeping Unit
   * @return {String}
   */
  exports.prototype.getSku = function() {
    return this['sku'];
  }

  /**
   * Sets Stock Keeping Unit
   * @param {String} sku Stock Keeping Unit
   */
  exports.prototype.setSku = function(sku) {
    this['sku'] = sku;
  }


  /**
   * Returns Universal Product Code
   * @return {String}
   */
  exports.prototype.getUpc = function() {
    return this['upc'];
  }

  /**
   * Sets Universal Product Code
   * @param {String} upc Universal Product Code
   */
  exports.prototype.setUpc = function(upc) {
    this['upc'] = upc;
  }


  /**
   * Returns European Article Numbering
   * @return {String}
   */
  exports.prototype.getEan = function() {
    return this['ean'];
  }

  /**
   * Sets European Article Numbering
   * @param {String} ean European Article Numbering
   */
  exports.prototype.setEan = function(ean) {
    this['ean'] = ean;
  }


  /**
   * Returns Global Trade Item Number
   * @return {String}
   */
  exports.prototype.getGtin = function() {
    return this['gtin'];
  }

  /**
   * Sets Global Trade Item Number
   * @param {String} gtin Global Trade Item Number
   */
  exports.prototype.setGtin = function(gtin) {
    this['gtin'] = gtin;
  }


  /**
   * Returns Manufacturer Part Number
   * @return {String}
   */
  exports.prototype.getMpn = function() {
    return this['mpn'];
  }

  /**
   * Sets Manufacturer Part Number
   * @param {String} mpn Manufacturer Part Number
   */
  exports.prototype.setMpn = function(mpn) {
    this['mpn'] = mpn;
  }


  /**
   * Returns Link for the product
   * @return {String}
   */
  exports.prototype.getLink = function() {
    return this['link'];
  }

  /**
   * Sets Link for the product
   * @param {String} link Link for the product
   */
  exports.prototype.setLink = function(link) {
    this['link'] = link;
  }


  /**
   * Returns Link for the product image
   * @return {String}
   */
  exports.prototype.getImageLink = function() {
    return this['image_link'];
  }

  /**
   * Sets Link for the product image
   * @param {String} imageLink Link for the product image
   */
  exports.prototype.setImageLink = function(imageLink) {
    this['image_link'] = imageLink;
  }


  /**
   * Returns Price of the product
   * @return {Number}
   */
  exports.prototype.getPrice = function() {
    return this['price'];
  }

  /**
   * Sets Price of the product
   * @param {Number} price Price of the product
   */
  exports.prototype.setPrice = function(price) {
    this['price'] = price;
  }


  /**
   * Returns Sale price of the product
   * @return {Number}
   */
  exports.prototype.getSalePrice = function() {
    return this['sale_price'];
  }

  /**
   * Sets Sale price of the product
   * @param {Number} salePrice Sale price of the product
   */
  exports.prototype.setSalePrice = function(salePrice) {
    this['sale_price'] = salePrice;
  }


  /**
   * Returns Brand of the product
   * @return {String}
   */
  exports.prototype.getBrand = function() {
    return this['brand'];
  }

  /**
   * Sets Brand of the product
   * @param {String} brand Brand of the product
   */
  exports.prototype.setBrand = function(brand) {
    this['brand'] = brand;
  }


  /**
   * Returns Array of product categories, using the character '>' as delimiter for the breadcrumb                         syntax
   * @return {Array.<String>}
   */
  exports.prototype.getCategories = function() {
    return this['categories'];
  }

  /**
   * Sets Array of product categories, using the character '>' as delimiter for the breadcrumb                         syntax
   * @param {Array.<String>} categories Array of product categories, using the character '>' as delimiter for the breadcrumb                         syntax
   */
  exports.prototype.setCategories = function(categories) {
    this['categories'] = categories;
  }


  /**
   * @return {module:egoiSdk/ProductPatchRequestRelatedProducts}
   */
  exports.prototype.getRelatedProducts = function() {
    return this['related_products'];
  }

  /**
   * @param {module:egoiSdk/ProductPatchRequestRelatedProducts} relatedProducts
   */
  exports.prototype.setRelatedProducts = function(relatedProducts) {
    this['related_products'] = relatedProducts;
  }



  return exports;
}));


