class User < ApplicationRecord

    has_many :responses, dependent: :destroy
    has_many :user_activities, dependent: :destroy
    has_many :likes, foreign_key: :liker_id, dependent: :destroy
    has_many :likers, foreign_key: :liked_id, class_name: "Like", dependent: :destroy

    has_many :profile_activities, through: :user_activities, source: :activity
    has_many :skill_levels, through: :user_activities
    
    has_many :hosted_events, class_name: "Event", foreign_key: :host, dependent: :destroy
    has_many :hosted_activities, through: :hosted_events, source: :activity

    has_many :rsvp_events, through: :responses, source: :event
    has_many :rsvp_activities, through: :rsvp_events, source: :activity

    has_secure_password

    #validates :name, :username, :age, :location_zip, :location_name, :bio, :photo, presence: true
    #validates :username, presence: true, uniqueness: true 
    #validates :age, numericality: {greater_than_or_equal_to: 18, less_than_or_equal_to: 100}
    #validates :password, length: {minimum: 8}
    #validates :password, format: { with: /[A-Z]/, message: "must contain at least one uppercase letter" }
    #validates :password, format: { with: /[a-z]/, message: "must contain at least one lowercase letter" }
    #validates :password, format: { with: /[\S&&[\D]&&[^a-zA-Z]]/, message: "must contain at least one special character" }

end
