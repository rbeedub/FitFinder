class UserActivitiesController < ApplicationController

    before_action :set_user_activity, only: :destroy

    def create
        user_activity = UserActivity.create(user_activity_params)
        render json: user_activity, status: :created
    end

    def destroy
        @user_activity.delete
        head :no_content
    end

    private

    def set_user_activity
        @user_activity = UserActivity.find(params[:id])
    end

    def user_activity_params
        params.permit(:user_id, :activity_id)
    end
end
