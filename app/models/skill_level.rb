class SkillLevel < ApplicationRecord
    belongs_to :skillable, polymorphic: true
    #has_one :activity, source: :skillable, source_type: "UserActivity"
end
