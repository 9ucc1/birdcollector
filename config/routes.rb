Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :users, only: [:index]
  resources :birds, only: [:index, :create, :show, :update]
  resources :sightings

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end




  ##
  #get '/birdssearch/:q', to: 'birds#search'
  #get '/recentsightings', to: 'sightings#recent'

  #get '/notesearch/:word', to: 'sightings#search'