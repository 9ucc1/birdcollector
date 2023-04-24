class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {error: "error"}
        end
    end

    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: session[:user_id])
        # if user is nil, send error
        if user
            render json: user
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end
end
