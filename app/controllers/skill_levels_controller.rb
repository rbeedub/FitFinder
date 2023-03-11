class SkillLevelsController < ApplicationController

    before_action :set_skill_level, only: [:show, :update]

    def index
        render json: SkillLevel.all
    end


    def show
        render json: @skill_level, status: :ok
    end

    def create
        user = User.find(params[:user_id])
        user.user_activities.destroy_all
        params[:activity_ids].each.with_index do |a, idx| 
            ua = UserActivity.find_or_create_by!(user: user, activity_id: a)

            sl = SkillLevel.find_by(skillable: ua)
            if sl 
                sl.update(skill_level: params[:skill_levels][idx])
            else
                SkillLevel.create(skillable: ua, skill_level: params[:skill_levels][idx])
            end
        end
        render json: user, status: :created, serializer: LoggedInUserSerializer
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
