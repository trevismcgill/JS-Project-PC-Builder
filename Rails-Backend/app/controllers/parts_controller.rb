class PartsController < ApplicationController

    def index
        render :json => Part.all, :include => [:category, :pc]
    end
end
