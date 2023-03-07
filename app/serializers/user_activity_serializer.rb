class UserActivitySerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :activity
end
