class UsersController < ApplicationController

skip_before_action :authorize, only: [:create, :userDetail]

    def index
        render json: User.all, status: :ok
    end

    def create
        @user = User.create!(user_params)
        session[:user_id] = @user.id 
        render json: @user, status: :created, serializer: LoggedInUserSerializer
    end

    def show
        render json: @user, status: :ok, serializer: LoggedInUserSerializer
    end

    def userDetail
        user = User.find_by!(id: params[:id])
        render json: user, status: :ok, serializer: LoggedInUserSerializer
    end

    def update
        @user.update!(user_params)
        render json: @user, status: :accepted, serializer: LoggedInUserSerializer
    end

    def destroy
        @user.destroy
        session.delete :user_id
        head :no_content
    end

    private 

    def user_params 
        params.permit(:name, :email, :username, :password, :password_confirmation, :bio, :age, :location_zip, :location_name, :photo)
    end

end
