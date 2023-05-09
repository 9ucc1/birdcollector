class BirdsController < ApplicationController
before_action :authorize
skip_before_action :authorize, only: [:index]
    def index
        render json: Bird.all
    end

    def create
        bird = Bird.create!(bird_params)
        render json: bird, status: :created
    end

    def show
        bird = Bird.find(params[:id])
        render json: bird
    end

    def update
        bird = Bird.find(params[:id])
        bird.update!(bird_params)
        render json: bird
    end

    private

    def bird_params
        params.permit(:com_name, :sci_name, :conservation_status, :image, :description)
    end

end



    ##
    #def search
    #    birds = Bird.where('com_name = ?', + params[:q])
    #    render json: birds
    #end
