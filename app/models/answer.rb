class Answer < ActiveRecord::Base
	before_create :set_guid
	validates_presence_of :name
	validates_presence_of :email

	def set_guid
		self.guid = SecureRandom.uuid()
	end
end
