/**
 * Adobe Experience Manager (AEM) API
 * Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API
 *
 * OpenAPI spec version: 1.2.0
 * Contact: opensource@shinesolutions.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3-SNAPSHOT
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
    if (!root.NodeSwaggerAem) {
      root.NodeSwaggerAem = {};
    }
    root.NodeSwaggerAem.CustomApi = factory(root.NodeSwaggerAem.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Custom service.
   * @module api/CustomApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CustomApi. 
   * @alias module:api/CustomApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAemHealthCheck operation.
     * @callback module:api/CustomApi~getAemHealthCheckCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.tags 
     * @param {Boolean} opts.combineTagsOr 
     * @param {module:api/CustomApi~getAemHealthCheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getAemHealthCheck = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'tags': opts['tags'],
        'combineTagsOr': opts['combineTagsOr']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['aemAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/system/health', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postConfigAemHealthCheckServlet operation.
     * @callback module:api/CustomApi~postConfigAemHealthCheckServletCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} runmode 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.bundlesIgnored 
     * @param {String} opts.bundlesIgnoredTypeHint 
     * @param {module:api/CustomApi~postConfigAemHealthCheckServletCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postConfigAemHealthCheckServlet = function(runmode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'runmode' is set
      if (runmode === undefined || runmode === null) {
        throw new Error("Missing the required parameter 'runmode' when calling postConfigAemHealthCheckServlet");
      }


      var pathParams = {
        'runmode': runmode
      };
      var queryParams = {
        'bundles.ignored': this.apiClient.buildCollectionParam(opts['bundlesIgnored'], 'multi'),
        'bundles.ignored@TypeHint': opts['bundlesIgnoredTypeHint']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['aemAuth'];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/apps/system/config.{runmode}/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postConfigAemPasswordReset operation.
     * @callback module:api/CustomApi~postConfigAemPasswordResetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} runmode 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.pwdresetAuthorizables 
     * @param {String} opts.pwdresetAuthorizablesTypeHint 
     * @param {module:api/CustomApi~postConfigAemPasswordResetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postConfigAemPasswordReset = function(runmode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'runmode' is set
      if (runmode === undefined || runmode === null) {
        throw new Error("Missing the required parameter 'runmode' when calling postConfigAemPasswordReset");
      }


      var pathParams = {
        'runmode': runmode
      };
      var queryParams = {
        'pwdreset.authorizables': this.apiClient.buildCollectionParam(opts['pwdresetAuthorizables'], 'multi'),
        'pwdreset.authorizables@TypeHint': opts['pwdresetAuthorizablesTypeHint']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['aemAuth'];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/apps/system/config.{runmode}/com.shinesolutions.aem.passwordreset.Activator', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
