class SkillLevel < ApplicationRecord
    belongs_to :skillable, polymorphic: true
end
