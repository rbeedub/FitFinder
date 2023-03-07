class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :activity
      t.string :category

      t.timestamps
    end
  end
end
