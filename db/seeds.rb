# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Response.destroy_all
UserActivity.destroy_all
SkillLevel.destroy_all
Like.destroy_all
Event.destroy_all
User.destroy_all
Activity.destroy_all


#Create Users

20.times do 
    User.create(
        name: Faker::Name.unique.name, 
        email: Faker::Internet.unique.email,
        age: Faker::Number.between(from: 18, to: 80),  
        username: Faker::Internet.unique.username, 
        password_digest: BCrypt::Password.create(Faker::Internet.password(min_length: 10, max_length: 20, mix_case: true, special_characters: true)), 
        bio: Faker::Lorem.paragraph(sentence_count: 2), 
        location_zip: Faker::Address.postcode, 
        location_name: Faker::Address.city,  
        photo: Faker::LoremFlickr.image)
end

User.create(
    name: "Michael Scott",
    email: "mscott@dundermifflin.com",
    age: 45, 
    username: "chaotic_evil",
    #password_digest: BCrypt::Password.create("Michael123!"),
    password_digest: #{User.digest("Michael123!")} ),
    bio: "World's Greatest Boss",
    location_zip: 18503,
    location_name: "Scranton, PA",
    photo: "./public/images/31.svg"
)

# Activity
activities = ["pickleball", "pilates", "zumba", "basketball", "running", "swimming", "weights", "leg day", "yoga", "HIIT", "crossfit", "tennis", "kickball", "badminton"]
activities.each do |a|
    Activity.create(activity: a)
end

# Events
20.times do 
    Event.create(
        location_name: Faker::Address.city, 
        location_zip: Faker::Number.number(digits: 5), 
        date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), 
        recurring: false, 
        description:Faker::TvShows::MichaelScott.quote, 
        participants:Faker::Number.between(from: 1, to: 10), 
        host_id: User.all.sample.id, 
        activity: Activity.all.sample)
end

# UserActivity
User.all.each do |u|
    count = (0..Activity.count).to_a.sample
    user_activities = Activity.all.sample(count)
    user_activities.each do |ua|
        UserActivity.create(user: u, activity: ua)
    end
end

# Responses
responses = ["yes", "no", "maybe"]
User.all.each do |u|
    count = (0..Event.count).to_a.sample
    user_events = Event.all.sample(count)
    user_events.each do |ue|
        Response.create(user: u, event: ue, response: responses.sample)
    end   
end

# SkillLevel
levels = (0..10).to_a

UserActivity.all.each do |ua|
    SkillLevel.create(skillable: ua, skill_level: levels.sample)
end

Event.all.each do |e|
    SkillLevel.create(skillable: e, skill_level: levels.sample)
end

# Likes
User.all.each do |u|
    count = (0..10).to_a.sample
    count.times do 
        Like.create(liker: u, liked: User.all.sample)
    end
end