class Api::V1::AppointmentsController < ApplicationController
  before_action :set_physician, only: %i[show]

  def index
    physician = Physician.all.order(created_at: :desc)
    render json: physician
  end

  def show
    render json: @physician, include: :appointments
  end

  private

  def set_physician
    @physician = Physician.find(params[:id])
  end
end
