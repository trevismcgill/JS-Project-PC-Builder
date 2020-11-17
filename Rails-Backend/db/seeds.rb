# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Part.destroy_all
Pc.destroy_all

pca = Pc.create(name: "Cooler-Master-2020")
pcb = Pc.create(name: "Thor-2013")
pcc = Pc.create(name: "Qosmio-2007")

Part.create!([{name: "AMD Ryzen", pc_id: 1}, {name: "Intel Core"}])
Part.create!([{name: "Noctua"}, {name: "Corsair"}, {name: "Cooler Master"}])
Part.create!([{name: "MSI"}, {name: "Asus"}, {name: "Gigabyte"}])
Part.create!([{name: "8gb"}, {name: "16gb"}, {name: "32gb"}])
Part.parts.create!([{name: "HDD"}, {name: "SSD"}])
Part.create!([{name: "NVIDIA"}, {name: "PNY"}, {name: "EVGA"}])
Part.create!([{name: "Corsair"}, {name: "SeaSonic"}, {name: "Thermaltake"}])
