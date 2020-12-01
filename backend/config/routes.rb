Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :plants
  resources :comments
  resources :posts
  post "/login", to: "auth#create"
  get "/user", to: "users#get_user"
end
