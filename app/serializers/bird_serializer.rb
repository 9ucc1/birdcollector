class BirdSerializer < ActiveModel::Serializer
  attributes :id, :com_name, :sci_name, :conservation_status, :image, :description, :sightings
  #has_many :sightings
  has_many :users
end
