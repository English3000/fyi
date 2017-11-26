# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

user1 = User.create({username: 'AMK', password: '12345678',
  profile_pic: 'https://c1.staticflickr.com/9/8440/7931832934_dd2d1e6015_b.jpg',
  cover_photo: 'https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg'})
user2 = User.create({username: 'ARMK', password: '12345678'})

Post.create({user_id: user1.id, body: 'post 1'})
Post.create({user_id: user2.id, body: 'long post.............................................................'})
Post.create({user_id: user1.id, body: 'post 3'})
