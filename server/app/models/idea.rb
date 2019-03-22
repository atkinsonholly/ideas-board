class Idea < ApplicationRecord
  belongs_to :user, required: false

  validates :title, length: { maximum: 30 }
  validates :body, length: { maximum: 140 }
end
