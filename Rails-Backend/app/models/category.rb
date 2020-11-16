class Category < ApplicationRecord
    has_many :parts
    has_many :pcs, through: :parts
end
