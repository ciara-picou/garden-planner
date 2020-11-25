# class AuthController < ActionController::API
class AuthController < ApplicationController
skip_before_action :logged_in?

    def create
        #byebug
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password]) # we can use the .authenticate method to check password thanks to the bcrypt gem
            render json: {username: user.username, token: encode_token({user_id: user.id})}
        else
            render json: {error: "invalid username or password"}
        end
    end

end