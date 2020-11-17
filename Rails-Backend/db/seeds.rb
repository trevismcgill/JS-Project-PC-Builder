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
Part.create!(name: "Noctua", category: "Cooler", pc_id: 2)
Part.create!(name: "Corsair", category: "Cooler", pc_id: 3)
Part.create!(name: "Cooler Master", category: "Cooler", pc_id: 1)
Part.create!(name: "MSI", category: "Motherboard", pc_id: 2)
Part.create!(name: "Asus", category: "Motherboard", pc_id: 1)
Part.create!(name: "Gigabyte", category: "Motherboard", pc_id: 3)
Part.create!(name: "8gb", category: "RAM", pc_id: 1)
Part.create!(name: "16gb", category: "RAM", pc_id: 2)
Part.create!(name: "32gb", category: "RAM", pc_id: 3)
Part.create!(name: "HDD", category: "Storage", pc_id: 2)
Part.create!(name: "SSD", category: "Storage", pc_id: 1)
Part.create!(name: "NVIDIA", category: "GPU", pc_id: 1)
Part.create!(name: "PNY", category: "GPU", pc_id: 2)
Part.create!(name: "EVGA", category: "GPU", pc_id: 3)
Part.create!(name: "Corsair", category: "PSU", pc_id: 1)
Part.create!(name: "SeaSonic", category: "PSU", pc_id: 2)
Part.create!(name: "Thermaltake", category: "PSU", pc_id: 3)
