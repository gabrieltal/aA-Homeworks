class UserMailer < ApplicationMailer
  default from: 'NinetyNineCats@example.com'

  def welcome_email(user)
    @user = user
    mail(to: @user.username, subject: "Welcome to my awesome site")
  end
end
