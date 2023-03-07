class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :response
  has_one :user
  has_one :event
end
