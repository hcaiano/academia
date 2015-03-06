class PagesController < ApplicationController
  def home
  	@answer = Answer.new
  end
  def challenge
  	@questions = Quiz.all
  end
end
