Rails.application.routes.draw do
  root to: 'toppages#index'
  resources :toppages
  resources :shops
end
