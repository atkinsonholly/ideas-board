Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :ideas
      post '/ideas/new', to: 'ideas#create'
    end
  end
end
