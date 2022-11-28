class ShopsController < ApplicationController
  def index
    if params[:search].nil?
      @client = ::GooglePlaces::Client.new(ENV['GOOGLE_MAP_API'])
      @places = @client.spots_by_query("ラーメン", language: 'ja', types: 'food')
      gon.places = @places
    else
    @client = ::GooglePlaces::Client.new(ENV['GOOGLE_MAP_API'])
    @places = @client.spots_by_query("#{params[:search]},ラーメン", language: 'ja', types: 'food')
    gon.places = @places
    # byebug
    end
  end

  def new
    @shop = Shop.new
  end

  def create
    @shop = Shop.new(shop_params)
    if @shop.save
      redirect_to shops_path, notice: "タスクを作成しました！"
    else
      render :new
    end
  end

  private

  def shop_params
    params.require(:shop).permit(:name, :address)
  end
end
