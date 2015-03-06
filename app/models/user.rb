class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_save :create_answer
  has_one :answer

  def create_answer
  	a = Answer.new(
  		guid: SecureRandom.uuid(),
  		user_id: self.id
  		)
    a.save
  end
end
