class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {error: "error"}
        end
    end

    def show
        user = "hi" #User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end
end
