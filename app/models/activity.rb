class Activity < ApplicationRecord
    has_many :events
    has_many :user_activities
    has_many :responses, through: :events
    has_many :profile_users, through: :user_activities, source: :user
    has_many :rsvp_users, through: :responses, source: :user
end
