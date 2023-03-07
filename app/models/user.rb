class User < ApplicationRecord

    has_many :responses
    has_many :user_activities
    has_many :likes
    #has_many :activities, through: :user_activities

    has_many :profile_activities, through: :user_activities, source: :activity
    has_many :skill_levels, through: :user_activities
    
    has_many :hosted_events, class_name: "Event", foreign_key: :host
    has_many :hosted_activities, through: :hosted_events, source: :activity

    has_many :rsvp_events, through: :responses, source: :event
    has_many :rsvp_activities, through: :rsvp_events, source: :activity

    has_secure_password

    validates :name, :username, presence: true
    validates :username, presence: true, uniqueness: true 
    validates :age, numericality: {greater_than_or_equal_to: 18}
end
