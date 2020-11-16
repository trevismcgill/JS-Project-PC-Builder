class PcsController < ApplicationController

    def index
        render :json => Pc.all
    end

    def show
        render :json pc
    end
end
