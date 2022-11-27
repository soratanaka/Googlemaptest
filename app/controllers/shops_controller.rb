class ShopsController < ApplicationController
  def index
    @shops = Shop.all
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
