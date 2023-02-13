Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'appointments/index'
      get '/show/:id', to: 'appointments#show'
    end
  end
  root 'appointments#index'
  get '/*path' => 'appointment#index'
end
