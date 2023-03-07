class SkillLevelSerializer < ActiveModel::Serializer
  attributes :id, :skillable_id, :skillable_type, :skill_level
end
