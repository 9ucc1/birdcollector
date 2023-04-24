class User < ApplicationRecord
    has_secure_password
    #The has_secure_password method also provides 
    #two new instance methods on your User model: 
    #password and password_confirmation. 
    #These methods don't correspond to database columns! 
    #Instead, to make these methods work, 
    #your users table must have a password_digest column
    has_many :sightings
    has_many :birds, through: :sightings
end
