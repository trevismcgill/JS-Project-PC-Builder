class Pc < ApplicationRecord
    has_many :parts
    accepts_nested_attributes_for :parts, :allow_destroy => true
end


