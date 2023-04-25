class SightingSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :notes, :bird_id, :user_id
  belongs_to :bird
  belongs_to :user
end
