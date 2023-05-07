class BirdSightingSerializer < ActiveModel::Serializer
  attributes :id, :location, :notes, :user_id, :user
end
