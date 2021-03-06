require_relative 'spec_helper'

describe 'Client' do
  before do
    SwaggerAemClient.configure { |conf| [
      conf.host = 'http://localhost:4502',
      conf.username = 'someinexistingusername',
      conf.password = 'someinexistingpassword',
      conf.debugging = false
    ]}
    @sling = SwaggerAemClient::SlingApi.new
  end

  after do
  end

  describe 'test api call' do

    it 'should error when credential is incorrect' do
      begin
        data, status_code, headers = @sling.post_tree_activation_with_http_info(
          ignoredeactivated = true,
          onlymodified = false,
          path = '/etc/designs/geometrixx'
        )
        fail
      rescue SwaggerAemClient::ApiError => err
        expect(err.code).to eq(401)
      end
    end

  end

end
