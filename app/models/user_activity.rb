class UserActivity < ApplicationRecord
  belongs_to :user
  belongs_to :activity
  has_one :skill_level, as: :skillable
end
