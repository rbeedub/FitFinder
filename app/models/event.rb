class Event < ApplicationRecord
  belongs_to :activity
  belongs_to :host, class_name: "User"
  has_many :responses
  has_many :respondants, class_name: "User", through: :responses
  has_one :skill_level, as: :skillable

end
