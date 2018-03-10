require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  subject(:user) do
    FactoryBot.build(:user, email: "test@whocares.com",
      password: "passwordisme")
    end

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest)}
  it { should validate_length_of(:password).
    is_at_least(10) }
  it "creates a password digest" do
    expect(user.password_digest).to_not be_nil
  end

  it "creates a session token before validating" do
    user.valid?
    expect(user.session_token).to_not be_nil
  end

  describe "#reset_session_token!" do
    it "sets a new session token" do
      old_session_token = user.session_token
      user.reset_session_token!

      expect(user.session_token).to_not eq(old_session_token)
    end

    it "returns the new session token" do
      expect(user.reset_session_token!).to eq(user.session_token)
    end
  end

  describe "#is_password?" do
    it "verifies password" do
      expect(user.is_password?("passwordisme")).to be true
    end
  end

  describe ".find_by_credentials" do
    before { user.save! }

    it "returns user when credentials are found" do
      expect(User.find_by_credentials("test@whocares.com", "passwordisme")).to eq(user))
    end
end
