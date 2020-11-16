class CreateParts < ActiveRecord::Migration[6.0]
  def change
    create_table :parts do |t|
      t.string :name
      t.integer :pc_id, :default => nil

      t.timestamps
    end
  end
end
