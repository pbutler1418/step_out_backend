class CreateJoinTableUserExperience < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :experiences do |t|
      # t.index [:user_id, :experience_id]
      # t.index [:experience_id, :user_id]
    end
  end
end
