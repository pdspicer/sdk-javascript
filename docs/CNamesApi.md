# egoiSdk.CNamesApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllCNames**](CNamesApi.md#getAllCNames) | **GET** /cnames | Get All CNames


<a name="getAllCNames"></a>
# **getAllCNames**
> CNamesCollection getAllCNames()

Get All CNames

Returns all cnames

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.CNamesApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCNames(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CNamesCollection**](CNamesCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

