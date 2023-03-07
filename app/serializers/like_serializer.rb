class LikeSerializer < ActiveModel::Serializer
  attributes :id, :liker_id, :liked_id
end
