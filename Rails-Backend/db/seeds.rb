# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pca = Pc.create(name: "Cooler-Master-2020")
pcb = Pc.create(name: "Thor-2013")
pcc = Pc.create(name: "Qosmio-2007")

Part.create!(name: "AMD Ryzen", category: "CPU", pc_id: 1)
 Part.create!(name: "Intel Core", category: "CPU", pc_id: 2)
# Part.create!([{name: "Noctua", category: "Cooler", pc_id: 2}, {name: "Corsair", category: "Cooler"}, {name: "Cooler Master", category: "Cooler", pc_id: 1}])
# Part.create!([{name: "MSI"}, {name: "Asus"}, {name: "Gigabyte"}])
# Part.create!([{name: "8gb"}, {name: "16gb"}, {name: "32gb"}])
# Part.create!([{name: "HDD"}, {name: "SSD"}])
# Part.create!([{name: "NVIDIA"}, {name: "PNY"}, {name: "EVGA"}])
# Part.create!([{name: "Corsair"}, {name: "SeaSonic"}, {name: "Thermaltake"}])
