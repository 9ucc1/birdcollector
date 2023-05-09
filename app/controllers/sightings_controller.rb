class SightingsController < ApplicationController
before_action :authorize
before_action :authorize_user, except: [:index, :create]
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


    private

    def sighting_params
        params.permit(:date, :location, :notes, :user_id, :bird_id)
    end

    def authorize_user
        user_id = session[:user_id]
        sighting = Sighting.find(params[:id])
        return render json: { error: "You are not authorized to edit this sighting" }, status: :unauthorized unless sighting.user_id == user_id
    end
end


    ##
    #def recent
    #    sighting = Sighting.where('date = ?', + '2023-04-24')
        #sighting = Sighting.find(1)
    #    render json: sighting
    #end


    # def search
    #     sightings = Sighting.where('notes LIKE ?', "%" + params[:word] + "%")
    #     render json: sightings
    #    sightings = Sighting.notesearch(params[:word])
    #    if sightings.count >0
    #        birds = sightings.map{|s| s.bird}
    #         render json: birds
    #     else
    #         render json: {error: "no results found"}
    #     end
    # end

        #def create:
        #with sighting object, determine 

        #check user's uniq birds, does this bird already exist?
        #if so, do nothing
        #if not, add bird object
        #sightings need to bring bird with it(serializer) either sighting pov or bird pov
        
        #user = User.find_by(sighting[:user_id])
        #render json: user, status: :created