class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :activity, :category
  has_many :events#, :user_activities
end
