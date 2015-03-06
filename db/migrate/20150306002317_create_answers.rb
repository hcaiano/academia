class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.text :general
      t.integer :score
      t.string :guid
      t.string :email
      t.string :name

      t.timestamps
    end
  end
end
