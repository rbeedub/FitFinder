class LoggedInUserSerializer < ActiveModel::Serializer
  attributes :id, 
    :name, 
    :email, 
    :username, 
    :bio, 
    :age, 
    :location_zip, 
    :location_name, 
    :photo,
    :activities,
    :yesses,
    :maybes, #exclude for peopledetail
    :nos #exclude for peopledetail
  
  has_many :liked_users
  has_many :hosted_events
  #has_many :activities

  #user: activties: [{activity:"jiu jitsu", id: 142, skill: 3}]
  
  def yesses
    ids = object.responses.filter {|r| r.response == 'yes'}.map(&:event_id)
    object.rsvp_events.filter {|r| ids.include?(r.id)}
  end

  def maybes
    ids = object.responses.filter {|r| r.response == 'maybe'}.map(&:event_id)
    object.rsvp_events.filter {|r| ids.include?(r.id)}
  end

  def nos
    ids = object.responses.filter {|r| r.response == 'no'}.map(&:event_id)
    object.rsvp_events.filter {|r| ids.include?(r.id)}
  end

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
