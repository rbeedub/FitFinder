class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :bio, :age, :location, :photo
end
