class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string :name
      t.string :location
      t.string :description

      t.timestamps
    end
  end
end
