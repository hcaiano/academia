class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.text :general
      t.integer :score
      t.integer :user_id
      t.string :guid

      t.timestamps
    end
  end
end
