class ExperiencesController < ApplicationController
  before_action :set_experience, only: [:show, :update, :destroy]

  # GET /experiences
  def index
    @experiences = Experience.all

    render json: @experiences
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @experience = Experience.new(experience_params)
    @user = User.find(params[:id])
    puts @user.id, @user.name, "HEY"
    puts params[:id]
    @experience.users << @user
    puts @experience.users.name, "HEY AGAIN"
    if @experience.save
      render json: { experience: @experience}, status: :created, location: @experience
    else
      render json: @experience.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def experience_params
      params.require(:experience).permit(:name, :location, :description)
    end
end