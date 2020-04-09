# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_08_185747) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bucketlists", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "how"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bucketlists_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "bucketlist_id", null: false
  end

  create_table "experiences", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "experiences_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "experience_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "avatar"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
