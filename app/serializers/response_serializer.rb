class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :response, :user_id, :event_id
  has_one :user
  has_one :event
end
