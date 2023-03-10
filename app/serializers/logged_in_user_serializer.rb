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
    levels = object.skill_levels
    user_activities = object.user_activities
    object.activities.map do |a| 
      ua_id = user_activities.find {|ua| ua.activity_id == a.id}
      skill_level = levels.find {|l| l.skillable_id = ua_id}.skill_level
      return {
        activity: a.activity, 
        id: a.id, 
        skill_level: skill_level
      }
    end
  end

end
