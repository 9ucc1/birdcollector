class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  has_many :birds_uniq
  has_many :sightings
end
