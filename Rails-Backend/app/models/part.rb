class Part < ApplicationRecord
    belongs_to :pc, optional: true
    belongs_to :part, optional: true
end
