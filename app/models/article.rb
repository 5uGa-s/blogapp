# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  content    :text
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
# Indexes
#
#  index_articles_on_user_id  (user_id)
#
class Article < ApplicationRecord
  has_one_attached :eyecatch

  require_dependency 'comment'
  validates :title, presence: true
  validates :title, length: { minimum: 2, maximum: 100 }
  validates :title, format: { with: /\A(?!\@)/ }

  validates :content, length: { minimum: 10 }
  validates :content, presence: true
  validates :content, uniqueness: true

  validate :validate_title_and_content_length
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  belongs_to :user

  def display_created_at
    I18n.l(created_at, format: :default)
  end

  def author_name
    user.display_name
  end

  def like_count
    likes.count
  end

  private
  def validate_title_and_content_length
    char_content = self.title.length + self.content.length
    unless char_content > 100
        errors.add(:content, '100文字以上で!')
    end
  end

end
