class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  has_many :sightings
  has_many :birds
end
