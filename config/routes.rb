Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  resources :users, only: [:index] 

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :birds
  resources :sightings

  ##
  get '/birdssearch/:q', to: 'birds#search'
  get '/recentsightings', to: 'sightings#recent'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
