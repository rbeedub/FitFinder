class User < ApplicationRecord

    has_many :responses
    has_many :user_activities
    has_many :likes
    has_many :profile_activities, class_name: "Activity", through: :user_activities
    has_many :rsvp_activitites, class_name: "Activity", through: :responses
    has_many :host_activities, class_name: "Activity", source: :host, through: :events
    has_many :skill_levels, through: :user_activities
    has_many :hosted_events, class_name: "Event", source: :host
    has_many :rsvp_events, through: :responses

    has_secure_password

    validates :name, :username, presence: true
    validates :username, presence: true, uniqueness: true 
    validates :age, numericality: {greater_than_or_equal_to: 18}
end
