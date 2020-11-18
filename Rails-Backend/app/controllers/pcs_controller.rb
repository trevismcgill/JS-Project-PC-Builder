class PcsController < ApplicationController

    def index
        render :json => Pc.all, :include => [:parts]
    end

    def create
        pc = Pc.new
        binding.pry
    end

    def show
        # render :json pc
    end

    private

    def pc_params
        params.require(:pc).permit(:id, :name, parts_attributes: [:id, :name, :category])
    end
end
