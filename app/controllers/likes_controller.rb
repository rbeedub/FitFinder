class LikesController < ApplicationController

    before_action :set_like, only: [:show, :update]
    
    def show
        render json: @like, status: :ok
    end

    # def create
    #     like = Like.create(like_params)
    #     render json: like, status: :created
    # end

    def update
        @like.update(like_params)
        render json: @like, status: :accepted
    end

    # def destroy
    #     @like.delete
    #     head :no_content
    # end

    private

    def set_like
        @like = Like.find(params[:id])
    end

    def like_params
        params.permit(:liker_id, :liked_id)
    end

end
