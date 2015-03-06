class AnswersController < ApplicationController
	before_action :authenticate_user!
	before_action :set_answer, only: [:show]

	def show
		@questions = Quiz.all
	end

	private

	def set_answer
		@answer = Answer.find_by(guid: params[:guid])
	end
end