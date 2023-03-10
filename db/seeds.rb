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

# (1..30).each do |num| 
#     User.create(
#         name: Faker::Name.unique.name, 
#         email: Faker::Internet.unique.email,
#         age: Faker::Number.between(from: 18, to: 80),  
#         username: Faker::Internet.unique.username, 
#         password: "Password123!", 
#         bio: Faker::Hipster.paragraphs(number: 1).first, 
#         location_zip: Faker::Address.postcode, 
#         location_name: Faker::Address.city,  
#         photo: "./images/#{num}.svg")
# end
puts "Seeding users..."
User.create(name: "Michael Scott", email: "mscott@dundermifflin.com", age: 45, username: "chaotic_evil", password: "Password123!", bio: "World's Greatest Boss, Marathon Runner - Rabies Curer", location_zip: 18503, location_name: "Scranton", photo: "/images/1.svg")
User.create(name: "Polly Pocquet", email: "pp@girlyswirly.com", age: 22, username: "princesspolly", password: "Password123!", bio: "Shopping is my cardio! That's why I am really out of shape and need someone to do real cardio with.", location_zip: 90210, location_name: "Beverly Hills", photo: "/images/2.svg")
User.create(name: "Guadalupe McGillicudy", email: "gmcgill@gmail.com", age: 52, username: "guads_quads", password: "Password123!", bio: "FAMILY. FAITH. Father of 3. Looking for a leg day partner who can keep up with these quads. ", location_zip: 87501, location_name: "Santa Fe", photo: "/images/3.svg")
User.create(name: "Chad Johnson", email: "sexychad@sports.com", age: 25, username: "chadtastic", password: "Password123!", bio: "Former D1 Athlete, BALL IS LIFE, just looking for some local lads to toss the old pig skin with.", location_zip: 16831, location_name: "Greenwich", photo: "/images/4.svg")
User.create(name: "Shaquil Shimkat", email: "shaquil_oatmeal@yahoo.com", age: 31, username: "shaquil_oatmeal", password: "Password123!", bio: "SHAQ FA SHORT! ~I didn't chose the hoop life, the hoop life chose me~", location_zip: 89113, location_name: "Las Vegas", photo: "/images/5.svg")
User.create(name: "Crystal Cullen", email: "moonchild19@gmail.com", age: 27, username: "mysticmama", password: "Password123!", bio: "Aura reader, vegan, crystal collector, nature enthusiast, hiker, dog-lover, reiki healer", location_zip: 86336, location_name: "Sedona", photo: "/images/6.svg")
User.create(name: "Ben Dover", email: "bendover@gmail.com", age: 41, username: "bdoverrr", password: "Password123!", bio: "Swimmer. Biker. Hiker. Golfer. Skier. Fencer. Tightrope walker. Slack-liner. Didn't say I was good at any of those things.", location_zip: 86336, location_name: "Sedona", photo: "/images/7.svg")
User.create(name: "Isis Gaston", email: "icespice@capitolrecords.com", age: 23, username: "icespice", password: "Password123!", bio: "Tryna find a gangsta boo to work out wit! NO MUNCHES ALLOWED!", location_zip: 10474, location_name: "New York", photo: "/images/8.svg")
User.create(name: "Dwight Schrute", email: "dschrute@dundermifflin.com", age: 43, username: "beetluvr", password: "Password123!", bio: "Beets. Bears. Battlestar Galactica... Bench press?", location_zip: 18503, location_name: "Scranton", photo: "/images/9.svg")
User.create(name: "Caleigh Steill", email: "caleighsteill@gmail.com", age: 23, username: "cmoneysbigmoves", password: "Password123!", bio: "Cat-mom, yogi, city-dweller, nature-lover <3", location_zip: 10012, location_name: "New York", photo: "/images/10.svg")
User.create(name: "Rebecca Wollard", email: "rebeccawollard@gmail.com", age: 40, username: "rbeedub", password: "Password123!", bio: "Dog-mom! CA --> CO! Let's be fitness friends", location_zip: 80014, location_name: "Denver", photo: "/images/11.svg")
User.create(name: "Matt Ishida", email: "mattishida@gmail.com", age: 39, username: "mattishida", password: "Password123!", bio: "Looking for fellow islanders to get active with!", location_zip: 96813, location_name: "Honolulu", photo: "/images/12.svg")
User.create(name: "Jensen Miers", email: "jmiers@gmail.com", age: 26, username: "jensenorita", password: "Password123!", bio: "Basketball enthusiast. Angeleno. Let's shoot some hoops together.", location_zip: 90045, location_name: "Los Angeles", photo: "/images/13.svg")
User.create(name: "Walker Le", email: "wlee@flatearthsociety.com", age: 30, username: "earth_is_flat", password: "Password123!", bio: "Founder of the Flat Earth Society, looking for a running partner, but preferably flat terrain only", location_zip: 80014, location_name: "Denver", photo: "/images/14.svg")
User.create(name: "Ben Murchie", email: "benmurchie@gmail.com", age: 27, username: "beanswtf", password: "Password123!", bio: "Self-proclaimed hermit who is trying to get out more.", location_zip: 98901, location_name: "Yakima", photo: "/images/15.svg")
User.create(name: "Austin Schaffer", email: "aschaffer@gmail.com", age: 28, username: "itsyaboi", password: "Password123!", bio: "Racer. Looking for some bois to go down to the track for a couple laps, ya heard!", location_zip: 35005, location_name: "Birmingham", photo: "/images/16.svg")
User.create(name: "Ryan Horn", email: "rhorn@gmail.com", age: 39, username: "rhorn", password: "Password123!", bio: "Looking for a hiking buddy! Proud Coloradoan.", location_zip: 80014, location_name: "Denver", photo: "/images/17.svg")
User.create(name: "Jaz Singh", email: "jsingh@gmail.com", age: 23, username: "smooth_jaz", password: "Password123!", bio: "Personal trainer looking to find other trainers to collaborate with and learn from!", location_zip: 95660, location_name: "Sacramento", photo: "/images/18.svg")
User.create(name: "Surapat Mekvanich", email: "surapatmek@gmail.com", age: 26, username: "surmek", password: "Password123!", bio: "Chill guy looking for other chill people to chill with and maybe do some working out.", location_zip: 98901, location_name: "Yakima", photo: "/images/19.svg")
User.create(name: "Colm Traci", email: "ctraci@gmail.com", age: 21, username: "keep_colm", password: "Password123!", bio: "Based in SF. Need someone to take long uphill walks with.", location_zip: 94106, location_name: "San Francisco", photo: "/images/20.svg")
User.create(name: "Lantz Warrick", email: "ctraci@flatironschool.com", age: 50, username: "betalantz", password: "Password123!", bio: "Seattlite. Programmer. Teacher. Overall awesome guy.", location_zip: 94106, location_name: "Seattle", photo: "/images/21.svg")
User.create(name: "Chris Santander", email: "chris@elevow.com", age: 25, username: "chrees", password: "Password123!", bio: "Bolivia Born. Cat-Dad. Let's be gym bros.", location_zip: 98101, location_name: "Seattle", photo: "/images/22.svg")
User.create(name: "Sam Chappell", email: "schappel@gmail.com", age: 26, username: "packdaddy", password: "Password123!", bio: "Dog-Mommy! Rock climber seeking a fun, group of fellow climbers. Must be a dog lover. And a little sassy. And sarcastic.", location_zip: 98045, location_name: "Bend", photo: "/images/23.svg")
User.create(name: "Javonn Williams", email: "jwilliams@gmail.com", age: 26, username: "gymgod73", password: "Password123!", bio: "Body builder. Football lover. Baby oil consumer.", location_zip: 94501, location_name: "Oakland", photo: "/images/24.svg")
User.create(name: "Topher Ludlow", email: "topher@gmail.com", age: 26, username: "tophdoggy", password: "Password123!", bio: "Water-sign. Mustache-haver. Metal core enjoyer. If you are also one or more of those things then we can workout together.", location_zip: 95631, location_name: "Foresthill", photo: "/images/25.svg")
User.create(name: "Liam Namba", email: "lermnamba@gmail.com", age: 25, username: "lerm_the_werm", password: "Password123!", bio: "Hawaiian living in LA. Currently training for a marathon and could use some running buddies. Preferably, non-smokers so I'm not tempted. Need my lungs to be in the best shape possible.", location_zip: 90045, location_name: "Los Angeles", photo: "/images/26.svg")
User.create(name: "Amelia Jay", email: "meels@gmail.com", age: 25, username: "meelzzz", password: "Password123!", bio: "Seattle --> LA. Love a long walk on the beach. Need some girlies to go on hot girl walks with!!!", location_zip: 90283, location_name: "Playa Del Rey", photo: "/images/27.svg")
User.create(name: "Anita Mann", email: "anitamann@gmail.com", age: 38, username: "anitamann", password: "Password123!", bio: "Anita partner to play doubles with!", location_zip: 10017, location_name: "New York", photo: "/images/27.svg")
User.create(name: "Arthur Jones", email: "ajones@jonesbbqnfootmassage.com", age: 48, username: "bbqking", password: "Password123!", bio: "Owner of Jones BBQ and Foot Massage! Chicagoan. Want to find some fellas that love fitness, BBQ, and foot massages as much as I do", location_zip: 60007, location_name: "Chicago", photo: "/images/28.svg")
User.create(name: "Creed Bratton", email: "creed@dundermifflin.com", age: 60, username: "assassins_creed", password: "Password123!", bio: "Down for anything as long as I don't go back to jail", location_zip: 18503, location_name: "Scranton", photo: "/images/29.svg")
User.create(name: "Micah Peasley", email: "micah@gmail.com", age: 31, username: "wahpow", password: "Password123!", bio: "Shaka brah! Let's catch a vibe and catch some waves together", location_zip: 90742, location_name: "Huntington Beach", photo: "/images/30.svg")

# Activity
puts "Seeding activities..."
activities = ["pickleball", "pilates", "zumba", "basketball", "running", "swimming", "weights", "leg day", "yoga", "HIIT", "crossfit", "tennis", "kickball", "badminton", "hiking", "spin", "aerial silks", "pole dancing", "karate", "jiu jitsu", "water aerobics", "dance", "trampoline", "tabata", "bowling", "running", "soccer", "football", "squash", "gymnastics", "field hockey", "tai chi", "ice hockey", "ping pong", "volleyball", "rugby", "paintball", "frisbee", "baseball", "boxing", "golf", "walking", "kayaking", "rock climbing", "ice skating", "roller skating", "roller blading", "skateboarding", "rollerblading", "hot yoga", "surfing", "paddleboarding", "yard work", "weight lifting", "curling", "jazzercise", "TRX", "hop scotch", "meditation", "resistance training", "cardio"]

activities.each do |a|
    Activity.create(activity: a)
end

# Events

# event_names = ["Badminton Baddies", "Meat Head Meet Up", "Pilates Hotties", "Yoga Meditation & Sound Bath", "Leg Day Gainz", "Ultra intense cardio for vegans", "Basketball against the warehouse", "GymBro 4 GymBro", "Jazzercise with Phyllis", "Beach Vollyball", "Elderly TaiChi", "Doubles Tennis", "HopScotch with Scotch", "Bros, Brews, & Balls", "Babes, Brews, & Balls", "Crossfit in the Park for Meat Eaters Only", "Jump Rope for Charity", "Fun Run for the Cure for Rabies", "Shoot Hoops, Not Drugs", "Arms & Abs All Day", "Swim With Us", "Bootcamp for Software Engineers Only", "Deep Breathing Techniques", "Tennis for Two", "Pickleball Pontification"]

# event_names.each do |e|
#     Event.create(
#         event_name: e,
#         location_name: Faker::Address.city, 
#         location_zip: Faker::Number.number(digits: 5), 
#         date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), 
#         recurring: false, 
#         description:Faker::TvShows::MichaelScott.quote, 
#         participants:Faker::Number.between(from: 1, to: 10), 
#         host_id: User.all.sample.id, 
#         activity: Activity.all.sample)
# end
puts "Seeding events..."
Event.create(event_name: "Badminton Baddies", location_name: "Los Angeles", location_zip: 90045, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Baddies Badminton tournament. Dockweiler State Beach - Tower 44. BYOB (Bring Your Own Birdies)!", 
participants:Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "badminton"))

Event.create(event_name: "Meat Head Meet Up", location_name: "Las Vegas", location_zip: 89113, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "If you love lifting then come join my meet up for dudes who love lifting", 
participants:Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "weight lifting"))

Event.create(event_name: "Pilates Hotties", location_name: "New York", location_zip: 10017, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Hey Hotties! Let's snatch that core with the power of team work. Pilates matt class in Sutton Place park. Bring a mat and good vibes!", participants:Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "pilates"))

Event.create(event_name: "Yoga Meditation & Sound Bath", location_name: "Sedona", location_zip: 86336, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Restorative yin yoga session with traditional singing sound bowls to raise your vibrations.", participants:Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "yoga"))

Event.create(event_name: "Fun Run for the Cure of Rabies", location_name: "Scranton", location_zip: 18503, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Rabies is a serious disease that needs a cure. Let's put an end to rabies once and for all. Presented by Dunder Mifflin.", participants: Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "running"))

Event.create(event_name: "Leg Day Gainz", location_name: "Denver", location_zip: 80022, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Are you shaped like a martini glass? Are you seriously in need of a leg day? Well me too and I could really use the mental, emotional, and physical support of another man with the same issue. I'm tired of having skinny calves. TIRED OF IT!", participants:Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "leg day"))

Event.create(event_name: "Jazzercise with Phyllis", location_name: "Scranton", location_zip: 18503, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Get in tune with your body's rhythms with Dunder Mifflin's very own Phyllis", participants:Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "jazzercise"))

Event.create(event_name: "Doubles Tennis", location_name: "Honolulu", location_zip: 96813, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Looking for a doubles tennis crew to meet regularly. Maybe get bottomless mimosas after.", participants: 3, host_id: User.all.sample.id, activity: Activity.find_by(activity: "tennis"))

Event.create(event_name: "Hop Scotch with Scotch", location_name: "Chicago", location_zip: 18503, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "HopScotch. Scotch. Nuff said. BYOB.", participants:Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "hop scotch"))

Event.create(event_name: "Arms, Abs, & Ass All Day", location_name: "Chicago", location_zip: 18503, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Come join me for a matt resistance training workout that targets the arms, abs, and ass.", participants: Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "resistance training"))

Event.create(event_name: "Tennis for Two", location_name: "Birmingham", location_zip: 35005, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Tennis partner needed. Any skill level.", participants: 1, host_id: User.all.sample.id, activity: Activity.find_by(activity: "tennis"))

Event.create(event_name: "Pickleball Pontification", location_name: "Long Beach", location_zip: 90712, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Looking to play pickle ball with some fellow intellectualy inclined individuals.", participants: Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "pickleball"))

Event.create(event_name: "Beach Volleyball", location_name: "Playa Del Rey", location_zip: 90293, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: true, description: "Looking to get a group of people together for weekly beach volleyball tournaments. We'll have drinks, snacks, music, and good vibes! Any skill level welcome!", participants: 9, host_id: User.all.sample.id, activity: Activity.find_by(activity: "volleyball"))

Event.create(event_name: "Elderly Tai Chi", location_name: "Bend", location_zip: 98045, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: true, description: "Seniors--a body in motion stays in motion, that's why I want to get a group of 55+ individuals together for a Tai Chi workshop. No experience necessary!", participants: 10, host_id: User.all.sample.id, activity: Activity.find_by(activity: "tai chi"))

Event.create(event_name: "Bros, Brews, & Balls", location_name: "New York", location_zip: 10002, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: true, description: "Bros, do you like bres and ball sports? If you answered yes to both of those questions, then look no further than Bros, Brews, & Balls", participants: 10, host_id: User.all.sample.id, activity: Activity.find_by(activity: "soccer"))

Event.create(event_name: "Babes, Brews, & Balls", location_name: "Greenwich", location_zip: 16831, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: true, description: "Babes, we're not going to let the bros have all the fun now are we? If you are a babe who loves brews and ball sports then come join my meet up!", participants: 10, host_id: User.all.sample.id, activity: Activity.find_by(activity: "football"))

Event.create(event_name: "Deep Breathing Techniques", location_name: "Sedona", location_zip: 86336, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Breath work is one of the most powerful wellness tools available to us, yet so many people overlook it. Leverage the power of intentional breathing and unleash your inner peace.", participants: 10, host_id: User.all.sample.id, activity: Activity.find_by(activity: "meditation"))

Event.create(event_name: "Ultra Intense Cardio for Vegans", location_name: "Sacramento", location_zip: 95660, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Vegans! Let's show these meat eaters what we are made of! Join me for an intense HIIT/cardio workout in the park. Plant-based protein bars will be provided.", participants: Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "HIIT"))

Event.create(event_name: "Crossfit in the Park for Meat Eaters Only", location_name: "Sacramento", location_zip: 95660, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "Crossfit meet up for carnivores ONLY. Will be hosting an optional BBQ after the work-out with different meats for maximal gains. BYOM (bring your own meat)!", participants: Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "crossfit"))

Event.create(event_name: "Gym Bro 4 Gym Bro", location_name: "San Francisco", location_zip: 94106, date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), recurring: false, description: "A safe-space for gym bros to work out together with no judgements and talk about our feelings.", participants: Faker::Number.between(from: 1, to: 10), host_id: User.all.sample.id, activity: Activity.find_by(activity: "leg day"))




# UserActivity
User.all.each do |u|
    count = (1..5).to_a.sample
    user_activities = Activity.all.sample(count)
    user_activities.each do |ua|
        UserActivity.create(user: u, activity: ua)
    end
end

# Responses
puts "Seeding responses..."
responses = ["yes", "no", "maybe"]
User.all.each do |u|
    count = (0..Event.count).to_a.sample
    user_events = Event.all.sample(count)
    user_events.each do |ue|
        Response.create(user: u, event: ue, response: responses.sample)
    end   
end

# SkillLevel
puts "Seeding skill levels..."
levels = (0..10).to_a

UserActivity.all.each do |ua|
    SkillLevel.create(skillable: ua, skill_level: levels.sample)
end

Event.all.each do |e|
    SkillLevel.create(skillable: e, skill_level: levels.sample)
end

# Likes
puts "Seeding likes..."
User.all.each do |u|
    count = (1..5).to_a.sample
    likees = User.all.sample(count)
    likees.each do |l|
        Like.create(liker: u, liked: l) unless u==l
    end
end