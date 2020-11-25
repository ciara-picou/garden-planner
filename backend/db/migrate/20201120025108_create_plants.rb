class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :pimage
      t.string :water
      t.string :light
      t.string :fertilization
      t.string :next_fertilization_date
      t.string :cold_tolerance
      t.integer :user_id

      t.timestamps
    end
  end
end
