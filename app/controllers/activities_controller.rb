class ActivitiesController < ApplicationController

    before_action :set_activity, only: [:show]
    
    def index
        render json: Activity.all, status: :ok
    end

    def show
        render json: @activity, status: :ok
    end

    # def create
    #     activity = Activity.create(activity_params)
    #     render json: activity, status: :created
    # end

    # def update
    #     @activity.update(activity_params)
    #     render json: @activity, status: :accepted
    # end

    # def destroy
    #     @activity.delete
    #     head :no_content
    # end

    private

    # def activity_params
    #     params.permit(:activity, :category)
    # end

    def set_activity
        @activity = Activity.find(params[:id])
    end 
end
