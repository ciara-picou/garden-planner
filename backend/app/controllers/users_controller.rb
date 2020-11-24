class UsersController < ApplicationController

    def index
        users= User.all
        render json: users, include: [ :plants, { posts: { include:  :comments }  } ]
    end
    def create
        user = User.create(user_params)
        #render json: user, include: :plants :posts
        render json: user, include: [ :plants, { posts: { include:  :comments }  } ]
        #super(include: { albums: { include:  :songs } })
        # if user.valid?
        #     user.save
        #     render json: user, status: :created
        
        # else
        #     render json: {error: "Failed to create a user"}, status: :not_acceptable
        # end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end
    
    private

    def user_params
        params.require.(:user).permit(
            :username,
            :password,
            posts_attributes: [ 
            :content, 
            :user_id,
            :image
        ])
    end   

 # def recipe_params
    #     params.require(:recipe).permit(
    #       :title,
    #       ingredients_attributes: [ :name, :quantity ]
    #     )
end
