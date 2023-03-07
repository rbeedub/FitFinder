class CreateSkillLevels < ActiveRecord::Migration[7.0]
  def change
    create_table :skill_levels do |t|
      t.integer :skillable_id
      t.string :skillable_type
      t.integer :skill_level

      t.timestamps
    end
  end
end
