class UsersController < ApplicationController
    def create
        user = User.create
    end

    def show
        user = "hi" #User.find_by(id: session[:user_id])
        render json: user
    end
end
