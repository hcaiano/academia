class CreateQuizzes < ActiveRecord::Migration
  def change
    create_table :quizzes do |t|
      t.string :question
      t.string :answer_1
      t.string :answer_2
      t.string :answer_3
      t.string :answer_4
      t.integer :correct
      t.string :question_2

      t.timestamps
    end
  end
end
