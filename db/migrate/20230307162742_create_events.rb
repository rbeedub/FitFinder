class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :location
      t.datetime :date_time
      t.boolean :recurring
      t.text :description
      t.integer :participants
      t.integer :host_id
      t.references :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
