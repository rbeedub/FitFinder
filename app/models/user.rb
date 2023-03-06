class User < ApplicationRecord

    has_secure_password

    validates :name, presence: true
    validates :age, numericality: {greater_than_or_equal_to: 18}
end
