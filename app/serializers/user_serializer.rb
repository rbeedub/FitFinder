class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :bio, :age, :location_zip, :location_name, :photo

  has_many :activities

end
