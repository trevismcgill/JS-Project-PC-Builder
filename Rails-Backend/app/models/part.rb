class Part < ApplicationRecord
    belongs_to :pc, optional: true
    belongs_to :category, optional: true
end
