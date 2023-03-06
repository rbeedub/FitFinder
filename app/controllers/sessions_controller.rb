class SessionsController < ApplicationController
  
  skip_before_action :authorize, only: :delete
  
  def create
    user = User.find_by(id: params[:username])
    if user&.authenticate(params[:password])
      render json: user, status: :ok
    else
      render json: {errors: ["Username or password invalid"]}, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

end
