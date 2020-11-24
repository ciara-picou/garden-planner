class User < ApplicationRecord
    has_many :plants
    has_many :posts, dependent: :destroy
    #do you have to put dependent destroy before you migrate?
end
