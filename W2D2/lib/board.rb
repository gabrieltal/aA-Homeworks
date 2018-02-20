require 'byebug'
class Board
  attr_accessor :cups
  attr_reader :name1, :name2

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup, idx|
      unless idx == 6 || idx == 13
        4.times do
          cup << :stone
        end
      end
    end
  end

  def valid_move?(start_pos)
    if start_pos <= 0 || start_pos >= 13
      raise "Invalid starting cup"
    end

  end

  def make_move(start_pos, current_player_name)
    idx = start_pos + 1
    until @cups[start_pos].empty?
      if current_player_name == name2
        @cups[idx] << @cups[start_pos].shift unless idx == 6
      elsif current_player_name == name1
        @cups[idx] << @cups[start_pos].shift unless idx == 13
      end
      idx += 1
      idx %= 14 if idx >= 14
    end
    render
    next_turn(idx)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returnsending_cup_idx -= 1
    return :switch if @cups[ending_cup_idx-1].empty?
    return ending_cup_idx-1 unless @cups[ending_cup_idx].empty?
    if ending_cup_idx == 7 || ending_cup_idx == 14
      return :prompt
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if (0..5).all? { |idx| @cups[idx].empty? }
    return true if (7..12).all? { |idx| @cups[idx].empty? }
    false
  end

  def winner
    case @cups[6] <=> @cups[13]
    when -1
      @name2
    when 0
      return :draw
    when 1
      @name1
    end
  end
end
