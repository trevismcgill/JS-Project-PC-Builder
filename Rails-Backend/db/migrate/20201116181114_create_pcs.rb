class CreatePcs < ActiveRecord::Migration[6.0]
  def change
    create_table :pcs do |t|
      t.string :name, :default => nil

      t.timestamps
    end
  end
end
