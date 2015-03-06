class AnswersController < ApplicationController
	before_action :set_answer, only: [:show]

	def create
		@answer = Answer.new(answer_params)
		if @answer.save
			redirect_to answer_path(@answer.guid)
		else
			redirect_to root_path, notice: "Something went wrong"
		end
	end

	def show
		@questions = Quiz.all
	end

	private

	def answer_params
		 params.require(:answer).permit(:email, :name)
	end

	def set_answer
		@answer = Answer.find_by(guid: params[:guid])
	end
end
