class BirdsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
before_action :authorize
skip_before_action :authorize, only: [:index]
    def index
        render json: Bird.all
    end

    # LOGIN VALIDATION stuff for these

    def create
        bird = Bird.create(bird_params)
        render json: bird, status: :created
    end

    def show
        bird = Bird.find(params[:id])
        render json: bird
    end

    #def showsightings
    #    bird = Bird.find(params[:id])
    #    render json: bird.sightings
        #that the user found
    #end

    def update
        bird = Bird.find(params[:id])
        bird.update(bird_params)
        render json: bird
    end

    def destroy
        bird = Bird.find(params[:id])
        bird.destroy
        head :no_content
    end

    private

    def bird_params
        params.permit(:com_name, :sci_name, :conservation_status, :image, :description)
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Bird not found"}, status: :not_found
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
