class PartsController < ApplicationController

    def index
        render :json => Part.all, :include => [:pc, :category]
    end

    def create
        binding.pry
    end
end
