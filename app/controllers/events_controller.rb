class EventsController < ApplicationController

    before_action :set_event, only: [:show, :update, :destroy]

    def index
        render json: Event.all, status: :ok
    end

    def show
        render json: @event, status: :ok
    end

    def create
        event = Event.create(event_params)
        render json: event, status: :created
    end

    def update
        @event.update(event_params)
        render json: @event, status: :accepted
    end

    def destroy
        @event.delete
        head :no_content
    end

    private

    def set_event
        @event = Event.find(params[:id])
    end

    def event_params
        params.permit(:location_name, :location_zip, :date_time, :recurring, :description, :participants, :host_id, :activity_id)
    end

end
