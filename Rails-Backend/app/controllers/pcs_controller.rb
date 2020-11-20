class PcsController < ApplicationController

    def index
        render :json => Pc.all, :include => [:parts]
    end

    def create
        pc = Pc.create!(pc_params)
        # binding.pry
        render :json => Pc.find_by_id(pc.id), :include => [:parts]
    end

    def destroy
        # binding.pry
        pc = Pc.find_by_id(pc_params[:id])
        render :json => pc
        pc.destroy
    end

    private

    def pc_params
        params.require(:pc).permit(:id, :name, parts_attributes: [:id, :name, :category])
    end
end
