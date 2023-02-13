class PhysiciansController < ApplicationController
  before_action :set_physician, only: %i[show]
  def index
    @physicians = Physician.all
  end

  def show
    @physician
  end

  private

  def set_physician
    @physician = Physician.find(params[:id])
  end
end
