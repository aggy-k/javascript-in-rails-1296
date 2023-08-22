Rails.application.routes.draw do
  root to: "monuments#index"
  resources :monuments, except: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
