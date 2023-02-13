Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'physicians/index'
      get '/show/:id', to: 'physicians#show'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
