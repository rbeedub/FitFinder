class LikesController < ApplicationController

    before_action :set_like, only: [:show]
    
    def show
        render json: @like, status: :ok
    end

    def create
        like = Like.find_by(like_params)
        if like
        else 
            like = Like.create!(like_params)
        end 
        render json: like.liker, status: :created, serializer: LoggedInUserSerializer
    end

    # def update
    #     @like.update(like_params)
    #     render json: @like, status: :accepted
    # end

    def destroy
        @like = Like.find_by(like_params)
        user = @like.liker
        @like.delete
        render json: user, serializer: LoggedInUserSerializer
        # head :no_content
    end

    private

    def set_like
        @like = Like.find(params[:id])
    end

    def like_params
        params.permit(:liker_id, :liked_id)
    end

end
