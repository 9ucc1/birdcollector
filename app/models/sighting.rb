class Sighting < ApplicationRecord
    belongs_to :bird
    belongs_to :user

    validates :date, presence: true
end
