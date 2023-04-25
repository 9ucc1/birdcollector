class BirdSerializer < ActiveModel::Serializer
  attributes :id, :com_name, :sci_name, :conservation_status, :image, :description
  has_many :sightings
  has_many :users
end
