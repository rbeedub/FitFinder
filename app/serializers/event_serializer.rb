class EventSerializer < ActiveModel::Serializer
  attributes :id, :location_name, :event_name, :location_zip, :date_time, :recurring, :description, :participants, :host_id
  has_one :activity
end
