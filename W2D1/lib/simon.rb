require 'byebug'
class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @game_over = false
    @sequence_length = 1
    @seq = []
  end

  def play
    until @game_over
      take_turn
      system("clear")
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    #debugger
    input = require_sequence
    unless input == seq
      @game_over = true
    end

    unless @game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |el|
      p el
      sleep 0.75
      system("clear")
      sleep 0.25
    end
  end

  def require_sequence
    puts "Please enter the sequence (e.g. red, blue, green,...)"
    guess = gets.chomp.split(",").to_a
    guess.map { |el| el.strip }
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Hey you're pretty good at this!"
  end

  def game_over_message
    puts "Game over! You made it to sequence #{@sequence_length}. Good job! Try again?"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end

Simon.new.play
