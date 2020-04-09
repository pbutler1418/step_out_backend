class CreateJoinTableUserBucketlist < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :bucketlists do |t|
      # t.index [:user_id, :bucketlist_id]
      # t.index [:bucketlist_id, :user_id]
    end
  end
end
