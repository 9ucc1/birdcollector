class SightingsController < ApplicationController
before_action :authorize
before_action :authorize_user, except: [:index]
    def create
        sighting = Sighting.create!(sighting_params)
        render json: sighting, status: :created
    end

    def index
        render json: Sighting.all
    end

    def show
        sighting = Sighting.find(params[:id])
        render json: sighting
    end

    def update
        sighting = Sighting.find(params[:id])
        sighting.update!(sighting_params)
        render json: sighting
    end

    def destroy
        sighting = Sighting.find(params[:id])
        sighting.destroy
        head :no_content
    end

    ##
    def recent
        sighting = Sighting.where('date = ?', + '2023-04-24')
        #sighting = Sighting.find(1)
        render json: sighting
    end

    private

    def sighting_params
        params.permit(:date, :location, :notes, :user_id, :bird_id)
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize_user
        user_id = session[:user_id]
        sighting = Sighting.find(params[:id])
        return render json: { error: "You are not authorized to edit this sighting" }, status: :unauthorized unless sighting.user_id == user_id
    end
end
