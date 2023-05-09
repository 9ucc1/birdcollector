class User < ApplicationRecord
    has_secure_password
    
    has_many :sightings, dependent: :destroy
    has_many :birds, through: :sightings

    validates :name, :username, :password, :password_confirmation, presence: true

    def birds_uniq
        self.birds.uniq
    end
end
