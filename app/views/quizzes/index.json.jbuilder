json.array!(@quizzes) do |quiz|
  json.extract! quiz, :id, :question, :answer_1, :answer_2, :answer_3, :answer_4, :correct, :question_2
  json.url quiz_url(quiz, format: :json)
end
