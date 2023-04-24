class CreateSightings < ActiveRecord::Migration[6.1]
  def change
    create_table :sightings do |t|
      t.date :date
      t.string :location
      t.string :notes
      t.integer :user_id
      t.integer :bird_id

      t.timestamps
    end
  end
end
