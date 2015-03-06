class PagesController < ApplicationController
  def home
  	if current_user
  		answer = current_user.answer
  		redirect_to answer_path(answer.guid)
  	end
  end
  def challenge
  	@questions = Quiz.all
  end
end
