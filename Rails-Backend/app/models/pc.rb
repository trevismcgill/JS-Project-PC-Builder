class Pc < ApplicationRecord
    has_many :parts
    has_many :categories, through: :parts
end
