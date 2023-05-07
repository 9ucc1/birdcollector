class Sighting < ApplicationRecord
    validates :date, presence: true

    belongs_to :bird
    belongs_to :user

end
