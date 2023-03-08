class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :bio, :age#, :location, :photo
end
