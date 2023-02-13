10.times do
  Physician.create! first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email
end

10.times do
  Appointment.create! time: DateTime.now + rand(10_000), physician: Physician.find(rand(1..10))
end
