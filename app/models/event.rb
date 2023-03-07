class Event < ApplicationRecord
  belongs_to :activity
  belongs_to :host, class_name: "User", foreign_key: :host_id
  has_many :responses, dependent: :destroy
  has_many :respondants, through: :responses, source: :user
  has_one :skill_level, as: :skillable, dependent: :destroy
end
