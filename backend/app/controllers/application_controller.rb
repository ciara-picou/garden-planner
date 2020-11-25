class ApplicationController < ActionController::API
before_action :logged_in?
    def encode_token(payload)
        #byebug
        #JWT.encode(payload, "se082420", "HS256") # for the 3rd (optional) arg you may choose which algo you'd like. If none is specified the default  HS256 is used
        JWT.encode(payload, "se082420")
    end

    def logged_in?
         #byebug
          headers = request.headers["Authorization"] 
          token = headers.split(" ")[1]
          begin
          user_id = JWT.decode(token, "se082420")[0]["user_id"]
           
          user= User.find(user_id)
        
        rescue # if you don't specify what kind of error you are looking for, it will catch any type of error
           user =  nil
          end 
         

          #unless cuts straight to the else of an if else statement
          render json: {error: "Please Log In <3"} unless user
          
    end

end
