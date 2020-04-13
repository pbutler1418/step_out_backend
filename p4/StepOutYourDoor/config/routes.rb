Rails.application.routes.draw do
resources :users
resources :experiences

get '/users/', to: 'users#index'
get '/experiences/', to: 'experiences#index'
post '/users/:id/', to: 'users#show'
post '/users/:id/experiences', to: 'experiences#create'
get '/users/:id/experiences', to: 'experiences#show'
put '/users/:id/', to: 'users#update'
delete '/users/:user_id/experiences/:id', to: 'experiences#delete'


# ============== Auth =====================
post '/users/', to: 'users#create'
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
end