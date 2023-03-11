class SkillLevel < ApplicationRecord
    belongs_to :skillable, polymorphic: true, dependent: :destroy
    #has_one :activity, through: :skillable, source_type: "UserActivity", source: :activity
    validates :skill_level, presence: true, numericality: true
end
