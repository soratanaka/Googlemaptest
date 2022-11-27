class ToppagesController < ApplicationController
  def index
    @places = []
    # byebug
    if params[:search] =! ""
      @client = ::GooglePlaces::Client.new(ENV['GOOGLE_MAP_API'])
      @places = @client.spots_by_query("#{params[:search]},ラーメン", language: 'ja', types: 'food')
      gon.places = @places
      # byebug
    else
      @client = ::GooglePlaces::Client.new(ENV['GOOGLE_MAP_API'])
      @places = @client.spots_by_query("ラーメン", language: 'ja', types: 'food')
      gon.places = @places
    end
  end

  def show 
    
  end
end
