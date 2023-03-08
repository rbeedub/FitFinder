Rails.application.routes.draw do
  resources :skill_levels, only: [:show, :create, :update]
  resources :user_activities, only: [:create, :destroy]
  resources :activities, only: [:index, :show]
  resources :events
  resources :likes, only: [:show, :create, :destroy]
  resources :responses, only: [:show, :create, :update]
  get 'sessions/create'
  get 'sessions/destroy'
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    # route to test your configuration
    get '/hello', to: 'application#hello_world'
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
end
