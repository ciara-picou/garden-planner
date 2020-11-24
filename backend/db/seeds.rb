# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Plant.destroy_all
User.destroy_all
Post.destroy_all
Comment.destroy_all

u1= User.create(username:"pikusaurus", password_digest:"secret")
pl1= Plant.create(
    name: "Geranium",
    pimage:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/2/9/shutterstock_423414625-Maya-Afzaal_geraniums.jpg.rend.hgtvcom.616.411.suffix/1518196004257.jpeg",
    water:"sparingly",
    light:"full sun",
    fertilization:"every 2 weeks",
    next_fertilization_date:"12/03/2020",
    cold_tolerance: "45 degrees",
    user_id: u1.id,
    )


p1= Post.create(content:"Why is my geranium wilting?", user_id: u1.id, image: "https://projects.ncsu.edu/cals/course/pp728/Ralstonia/geranium_later.jpg")
c1 = Comment.create(content:"It's a goner!", username: "sally_green_thumb", post_id: p1)


pl2= Plant.create(
    name: "RatttleSnake Calathea",
    pimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-oVALBZjOgfiABf1Kx-XOMLpem-TmDBXRlACWn6-0evcukc855PsSFKPXPa4NhaWTkearPE&usqp=CAc",
    water:"sparingly",
    light:"shade",
    fertilization:"every 2 weeks",
    next_fertilization_date:"12/03/2020",
    cold_tolerance: "65 degrees",
    user_id: u1.id,
    )

u2= User.create(username:"treehugger84", password_digest:"secret")
p2= Post.create(content:"What are these spots on my calathea?", user_id: u1.id, image: "https://i.redd.it/2g59xixu8eu41.jpg")
c2 = Comment.create(content:"Looks like fungus", username: "plant_lady_420", post_id: p2.id)
c3 = Comment.create(content:"Have you tried watering it?", username: "plant_lady_420", post_id: p1.id)
c4 = Comment.create(content:"That's a fungus, alright. Quarantine that plant asap", username: "sally_green_thumb", post_id: p2.id)
c5 = Comment.create(content:"Looks like it's time to invest in some fungicide", username: "green_man", post_id: p2.id)
c6 = Comment.create(content:"Actually, it could be overwatered", username: "green_man", post_id: p1.id)

puts "the seed file ran"