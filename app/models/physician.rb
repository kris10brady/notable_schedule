class Physician < ApplicationRecord
  has_many :appointments

  def display_name
    "#{last_name}, #{first_name}"
  end
end
