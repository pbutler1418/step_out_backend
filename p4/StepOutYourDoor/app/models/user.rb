class User < ApplicationRecord
  has_secure_password

  # has_and_belongs_to_many :bucketlists
  has_and_belongs_to_many :experiences

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  def frontend_data
    {
      id: id,
      email: email,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end
