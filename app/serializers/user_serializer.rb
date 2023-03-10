class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :bio, :age, :location_zip, :location_name, :photo, :activities

  #has_many :activities

  def activities
    result = object.activities.map do |a|
      ua = UserActivity.find_by(user_id: object.id, activity_id: a.id)
      level = SkillLevel.find_by(skillable_id: ua.id, skillable_type: "UserActivity")
      {
        activity: a.activity, 
        id: a.id, 
        skill_level: level.skill_level
      }
    end
    result 
  end
end
