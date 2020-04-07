Rails.application.routes.draw do
resources :users
resources :experiences

get '/users/', to: 'users#index'
get '/experiences/', to: 'experiences#index'


# ============== Auth =====================
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
end