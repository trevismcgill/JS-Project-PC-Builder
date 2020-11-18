class PartsController < ApplicationController

    def index
        render :json => Part.all, :include => [:pc]
    end

    def create
        
    end
end
