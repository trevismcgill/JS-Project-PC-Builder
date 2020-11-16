class PartsController < ApplicationController

    def index
        render json: parts
    end
end
