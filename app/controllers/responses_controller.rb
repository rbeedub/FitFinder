class ResponsesController < ApplicationController

    before_action :set_response, only: [:show, :update]
    def show
        render json: @response, status: :ok
    end

    def create
        response = Response.find_by(user_id: response_params[:user_id], event_id: response_params[:event_id])
        if response
            response.update!(response_params)
            render json: response.event, status: :accepted, serializer: EventWithRsvpSerializer
        else 
            response = Response.create!(response_params)
            render json: response.event, status: :created, serializer: EventWithRsvpSerializer
        end  
    end

    def update
        @response.update!(response_params)
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
