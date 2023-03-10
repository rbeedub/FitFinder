class EventsController < ApplicationController

    before_action :set_event, only: [:show, :update, :destroy]

    def index
        render json: Event.all, status: :ok
    end

    def show
        render json: @event, serializer: EventWithRsvpSerializer, status: :ok
        #render json: @event, status: :ok
    end

    def create
        event = Event.create!(event_params)
        SkillLevel.create!(skillable: event, skill_level: params[:skill_level])
        render json: event, status: :created
    end

    def update
        @event.update!(event_params)
        skill_level = SkillLevel.find_by!(skillable: @event)
        skill_level.update!(skill_level: params[:skill_level])
        render json: @event, status: :accepted
    end

    def destroy
        @event.destroy
        head :no_content
    end

    private

    def set_event
        @event = Event.find(params[:id])
    end

    def event_params
        params.permit(:event_name, :location_name, :location_zip, :date_time, :recurring, :description, :participants, :host_id, :activity_id, :image)
    end

end
