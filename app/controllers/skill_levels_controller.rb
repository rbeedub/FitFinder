class SkillLevelsController < ApplicationController

    before_action :set_skill_level, only: [:show, :update]

    def show
        render json: @skill_level, status: :ok
    end

    def create
        skill_level = SkillLevel.create(skill_level_params)
        render json: skill_level, status: :created
    end

    def update
        @skill_level.update(skill_level_params)
        render json: @skill_level, status: :accepted
    end 

    private

    def skill_level_params
        params.permit(:skillable_id, :skillable_type, :skill_level)
    end

    def set_skill_level
        @skill_level = SkillLevel.find_by(skillable_id: params[:skillable_id])
    end
    
end
