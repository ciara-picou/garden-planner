class UsersController < ApplicationController
    skip_before_action :logged_in?, only: [:create]
    def index
        users= User.all
        render json: users, include: [ :plants, { posts: { include:  :comments }  } ]
    end
    def create
        user = User.new(user_params)
      
        # render json: user, include: [ :plants, { posts: { include:  :comments }  } ]
       
        if user.valid?
            user.save
            render json: user, include: [ :plants, { posts: { include:  :comments }  } ],status: :created
        
        else
            render json: {error: "Failed to create a user"}, status: :not_acceptable
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end
    
    private

    # def user_params
    #     params.require.(:user).permit(
    #         :username,
    #         :password,
    #         posts_attributes: [ 
    #         :content, 
    #         :user_id,
    #         :image
    #     ])
    # end   

     def user_params
        params.permit(
            :username,
            :password
        )
    end   



 # def recipe_params
    #     params.require(:recipe).permit(
    #       :title,
    #       ingredients_attributes: [ :name, :quantity ]
    #     )
end
