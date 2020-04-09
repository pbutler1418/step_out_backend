class ExperiencesController < ApplicationController
  before_action :set_experience, only: [:show, :update, :destroy]

  # GET /experiences
  def index
    @experiences = Experience.all

    render json: @experiences
  end

  # POST 
  def create
    @experience = Experience.new(experience_params)
    @user = User.find(params[:id])
    if @experience.save!
      @experience.users << @user
      render json: { experience: @experience}, status: :created
    else
      render json: @experience.errors, status: :unprocessable_entity
    end
  end
    # Only allow a trusted parameter "white list" through.
    def experience_params
      params.require(:experience).permit(:name, :location, :description)
    end
end