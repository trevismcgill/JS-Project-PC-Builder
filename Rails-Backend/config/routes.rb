Rails.application.routes.draw do
  resources :parts, only: [:index, :create]
  resources :pcs, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
