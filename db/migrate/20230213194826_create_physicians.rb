class CreatePhysicians < ActiveRecord::Migration[7.0]
  def change
    create_table :physicians do |t|
      t.string :first_name
      t.string :last_name, null: false
      t.string :email, null: false

      t.timestamps
    end
  end
end
