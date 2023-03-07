class Activity < ApplicationRecord
    has_many :events
    has_many :user_activities
    has_many :responses, through: :events
    has_many :profile_users, class_name: "User", through: :user_activities
    has_many :rsvp_users, class_name: "User", through: responses
end
