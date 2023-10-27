Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'articles#index'

  resource :timeline, only: [:show] # [:show] => %i(show)と書くことができる

  resources :articles do
    resources :comments, only: [:new, :create]

    resource :like, only: [:create, :destroy]
  end

  resources :accounts, only: [:show] do
    resources :follows, only: [:create]
    resources :unfollows, only: [:create]
  end

  #resources :articles, only: %i[show new create edit update destroy]

  resource :profile, only: [:show, :edit, :update]
  resources :favorites, only: [:index]
end
