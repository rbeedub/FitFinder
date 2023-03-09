class EventWithRsvpSerializer < ActiveModel::Serializer
  attributes :id, :location_name, :event_name, :location_zip, :date_time, :recurring, :description, :participants, :host, :activity, :yesses, :maybes, :nos
  #has_many :responses
  #has_many :respondants
  has_one :skill_level

  def activity 
    object.activity
  end

  def yesses
    ids = object.responses.filter {|r| r.response == 'yes'}.map(&:user_id)
    object.respondants.filter {|r| ids.include?(r.id)}
  end

  def maybes
    ids = object.responses.filter {|r| r.response == 'maybe'}.map(&:user_id)
    object.respondants.filter {|r| ids.include?(r.id)}
  end

  def nos
    ids = object.responses.filter {|r| r.response == 'no'}.map(&:user_id)
    object.respondants.filter {|r| ids.include?(r.id)}
  end
end
