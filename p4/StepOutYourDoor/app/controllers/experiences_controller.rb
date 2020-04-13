class ExperiencesController < ApplicationController
  before_action :set_experience, only: [:show, :update, :destroy]

  # GET /experiences
  def index
    @experiences = Experience.all

    render json: @experiences
  end

  def show
    @user = User.find(params[:id])
    render json: @user.experiences
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

  def delete
    @experience = Experience.find(params[:id])
    puts @experience, "HEY"
    @experience.destroy
  end
    # Only allow a trusted parameter "white list" through.
    def experience_params
      params.require(:experience).permit(:name, :location, :description)
    end
end

def set_experience
  @experience = Experience.find(params[:id])
end