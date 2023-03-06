class User < ApplicationRecord

    has_secure_password

    validates :name, :username, presence: true
    validates :username, presence: true, uniqueness: true 
    validates :age, numericality: {greater_than_or_equal_to: 18}
end
