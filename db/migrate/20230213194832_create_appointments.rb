class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :time, null: false
      t.string :kind, null: false, default: 'New Appointment'
      t.references :physician

      t.timestamps
    end
  end
end
