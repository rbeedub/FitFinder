class ResponsesController < ApplicationController

    before_action :set_response, only: [:show, :update]
    def show
        render json: @response, status: :ok
    end

    def create
        response = Response.create(response_params)
        render json: response, status: :created
    end

    def update
        @response.update(response_params)
        render json: @response, status: :accepted
    end
    
    # def destroy
    #     @response.delete
    #     head :no_content
    # end

    private

    def response_params
        params.permit(:response, :user_id, :event_id)
    end

    def set_response
        @response = Response.find(params[:id])
    end

end
