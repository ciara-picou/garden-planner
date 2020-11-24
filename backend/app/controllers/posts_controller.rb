class PostsController < ApplicationController

        def index
            posts = Post.all
            render json: posts, include: :comments
            
       end
    
       def show
           post = Post.find(params[:id])
           render json: post, include: :comments
       end
    
       def create
        post = Post.create(post_params)
        render json: post
        #do i need to include comments?
       end
    
        def update
            post= Post.find(params[:id])
            post.update(post_params)
            render json: post, include: :comments
        end
    
       def destroy
        posts = Post.all
        post = Post.find(params[:id])
        post.destroy
        #dependant destroy?
        end
    
    private
   
    def post_params
        params.require(:post).permit(
            :content, 
            :user_id,
            :image,
            comments_attributes: [ 
            :content, 
            :username,
            :post_id
             ]
            )
    end
    
    end
    


