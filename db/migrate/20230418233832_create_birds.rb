class CreateBirds < ActiveRecord::Migration[6.1]
  def change
    create_table :birds do |t|
      t.string :com_name
      t.string :sci_name
      t.string :conservation_status
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
