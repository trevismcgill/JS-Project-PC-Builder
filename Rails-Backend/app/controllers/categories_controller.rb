class CategoriesController < ApplicationController

    def index
        render :json => Category.all
    end

    def show
        render :json => category
    end
end
