class ExperiencesController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /experiences
  def index
    @experiences = Experience.all

    render json: @experiences
  end

  
    # def user_params
    #   params.require(:user).permit(:name, :avatar, :email, :password)
    # end
end