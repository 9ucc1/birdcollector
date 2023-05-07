class Bird < ApplicationRecord
    has_many :sightings, dependent: :destroy
    has_many :users, through: :sightings

    validates :com_name, presence: :true
end
