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
    :yesses,
    :maybes,
    :nos
  
  has_many :liked_users
  has_many :liker_users
  has_many :activities

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

end
