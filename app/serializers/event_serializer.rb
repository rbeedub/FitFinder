class EventSerializer < ActiveModel::Serializer
  attributes :id, :location, :date_time, :recurring, :description, :participants, :host_id
  has_one :activity
end
