class SightingsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def create
        sighting = Sighting.create(sighting_params)
        render json: sighting, status: :created
    end

    def index
        render json: Sighting.all
    end

    def show
        sighting = Sighting.find(params[:id])
        render json: sighting
    end

    def destroy
        sighting = Sighting.find(params[:id])
        sighting.destroy
        head :no_content
    end

    private

    def sighting_params
        params.permit(:date, :location, :notes, :user_id, :bird_id)
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
