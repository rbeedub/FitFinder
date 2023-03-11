class EventSerializer < ActiveModel::Serializer
  attributes :id, :location_name, :event_name, :location_zip, :date_time, :recurring, :description, :participants, :host, :image
  has_one :activity
  has_one :skill_level
end
