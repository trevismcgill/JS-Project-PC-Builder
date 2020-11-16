# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cpu = Category.create(name: "CPU")
cpu_cooler = Category.create(name: "Cooler")
motherboard = Category.create(name: "MOBO")
ram = Category.create(name: "RAM")
storage = Category.create(name: "Storage")
gpu = Category.create(name: "GPU")
psu = Category.create(name: "PSU")

pca = Pc.create(name: "Cooler-Master-2020")
pcb = Pc.create(name: "Thor-2013")
pcc = Pc.create(name: "Qosmio-2007")

cpu.parts.create!([{name: "AMD Ryzen"}, {name: "Intel Core"}])
cpu_cooler.parts.create!([{name: "Noctua"}, {name: "Corsair"}, {name: "Cooler Master"}])
motherboard.parts.create!([{name: "MSI"}, {name: "Asus"}, {name: "Gigabyte"}])
ram.parts.create!([{name: "8gb"}, {name: "16gb"}, {name: "32gb"}])
storage.parts.create!([{name: "HDD"}, {name: "SSD"}])
gpu.parts.create!([{name: "NVIDIA"}, {name: "PNY"}, {name: "EVGA"}])
psu.parts.create!([{name: "Corsair"}, {name: "SeaSonic"}, {name: "Thermaltake"}])
