class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :username
      t.string :password_digest
      t.text :bio
      t.integer :age
      t.string :location_name
      t.integer :location_zip
      t.string :photo

      t.timestamps
    end
  end
end
