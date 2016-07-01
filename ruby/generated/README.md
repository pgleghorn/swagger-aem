# swagger_aem

SwaggerAemClient - the Ruby gem for the Adobe Experience Manager (AEM) API

An Adobe Experience Manager (AEM) API specification

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 6.2
- Package version: 0.0.1
- Build date: 2016-07-01T15:05:56.025+10:00
- Build package: class io.swagger.codegen.languages.RubyClientCodegen

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build swagger_aem.gemspec
```

Then either install the gem locally:

```shell
gem install ./swagger_aem-0.0.1.gem
```
(for development, run `gem install --dev ./swagger_aem-0.0.1.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'swagger_aem', '~> 0.0.1'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/GIT_USER_ID/GIT_REPO_ID, then add the following in the Gemfile:

    gem 'swagger_aem', :git => 'https://github.com/GIT_USER_ID/GIT_REPO_ID.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:
```ruby
# Load the gem
require 'swagger_aem'

# Setup authorization
SwaggerAemClient.configure do |config|
  # Configure HTTP basic authorization: aemAuth
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = SwaggerAemClient::ConsoleApi.new

name = "name_example" # String | 

action = "action_example" # String | 


begin
  api_instance.post_bundle(name, action)
rescue SwaggerAemClient::ApiError => e
  puts "Exception when calling ConsoleApi->post_bundle: #{e}"
end

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwaggerAemClient::ConsoleApi* | [**post_bundle**](docs/ConsoleApi.md#post_bundle) | **POST** /system/console/bundles/{name} | 
*SwaggerAemClient::ConsoleApi* | [**post_jmx_repository**](docs/ConsoleApi.md#post_jmx_repository) | **POST** /system/console/jmx/com.adobe.granite:type&#x3D;Repository/op/{action} | 
*SwaggerAemClient::CqApi* | [**post_cq_actions**](docs/CqApi.md#post_cq_actions) | **POST** .cqactions.html | 
*SwaggerAemClient::CrxApi* | [**post_package_service**](docs/CrxApi.md#post_package_service) | **POST** /crx/packmgr/service.jsp | 
*SwaggerAemClient::CrxApi* | [**post_package_service_json**](docs/CrxApi.md#post_package_service_json) | **POST** /crx/packmgr/service/.json/{path} | 
*SwaggerAemClient::CrxApi* | [**post_package_update**](docs/CrxApi.md#post_package_update) | **POST** /crx/packmgr/update.jsp | 
*SwaggerAemClient::CrxApi* | [**post_set_password**](docs/CrxApi.md#post_set_password) | **POST** /crx/explorer/ui/setpassword.jsp | 
*SwaggerAemClient::SlingApi* | [**delete_agent**](docs/SlingApi.md#delete_agent) | **DELETE** /etc/replication/agents.{runmode}/{name} | 
*SwaggerAemClient::SlingApi* | [**delete_node**](docs/SlingApi.md#delete_node) | **DELETE** /{path}/{name} | 
*SwaggerAemClient::SlingApi* | [**get_agent**](docs/SlingApi.md#get_agent) | **GET** /etc/replication/agents.{runmode}/{name} | 
*SwaggerAemClient::SlingApi* | [**get_node**](docs/SlingApi.md#get_node) | **GET** /{path}/{name} | 
*SwaggerAemClient::SlingApi* | [**get_package**](docs/SlingApi.md#get_package) | **GET** /etc/packages/{group}/{name}-{version}.zip | 
*SwaggerAemClient::SlingApi* | [**get_package_filter**](docs/SlingApi.md#get_package_filter) | **GET** /etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json | 
*SwaggerAemClient::SlingApi* | [**post_agent**](docs/SlingApi.md#post_agent) | **POST** /etc/replication/agents.{runmode}/{name} | 
*SwaggerAemClient::SlingApi* | [**post_authorizables**](docs/SlingApi.md#post_authorizables) | **POST** /libs/granite/security/post/authorizables | 
*SwaggerAemClient::SlingApi* | [**post_config**](docs/SlingApi.md#post_config) | **POST** /apps/system/config.{runmode}/{name} | 
*SwaggerAemClient::SlingApi* | [**post_node_rw**](docs/SlingApi.md#post_node_rw) | **POST** /{path}/{name}.rw.html | 
*SwaggerAemClient::SlingApi* | [**post_path**](docs/SlingApi.md#post_path) | **POST** /{path}/ | 
*SwaggerAemClient::SlingApi* | [**post_query**](docs/SlingApi.md#post_query) | **POST** /bin/querybuilder.json | 
*SwaggerAemClient::SlingApi* | [**post_tree_activation**](docs/SlingApi.md#post_tree_activation) | **POST** /etc/replication/treeactivation.html | 


## Documentation for Models



## Documentation for Authorization


### aemAuth

- **Type**: HTTP basic authentication
