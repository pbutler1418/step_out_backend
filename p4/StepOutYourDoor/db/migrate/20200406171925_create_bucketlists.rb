class CreateBucketlists < ActiveRecord::Migration[6.0]
  def change
    create_table :bucketlists do |t|
      t.string :name
      t.string :location
      t.string :how

      t.timestamps
    end
  end
end
