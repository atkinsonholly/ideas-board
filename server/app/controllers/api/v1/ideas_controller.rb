class Api::V1::IdeasController < ApplicationController
  before_action :find_idea, only: [:update, :show, :destroy]

  def index
    @ideas = Idea.order(:id).reverse
    render json: @ideas
  end

  def new
    @idea = Idea.new
  end

  def create
    @idea = Idea.create(title: "", body: "")
    if @idea
      render json: @idea, status: 201
    else
      render json: { errors: @idea.errors.full_messages }, status: 202
    end
  end

  def update
    if @idea
      @idea = @idea.update(idea_params)
      render json: @idea, status: 200
    else
      render json: { errors: @idea.errors.full_messages }, status: 202
    end
  end

  def show
    render json: @idea, status: 200
  end

  def destroy
    @idea.delete
    render json: @ideas, status: 200
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end

  def find_idea
    @idea = Idea.find(params[:id])
  end
end
