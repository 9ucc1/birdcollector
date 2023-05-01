class User < ApplicationRecord
    has_secure_password
    validates :name, :username, :password, :password_confirmation, presence: true
    has_many :sightings
    has_many :birds, through: :sightings
    #has_many :birds_uniq, through: :sightings

    def birds_uniq
        self.birds.uniq
    end
end
