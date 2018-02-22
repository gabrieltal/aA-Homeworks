def sluggish_octopus(array)
  longest = ""
  0.upto(array.length-1) do |idx1|
    (idx1+1).upto(array.length) do |idx2|
      next if idx2 == array.length
      if array[idx2].length > array[idx1].length
        longest = array[idx2] if longest.length < array[idx2].length
      end
    end
  end
  longest
end

def dominant_octopus(array)
  prc = Proc.new { |x, y| x.length <=> y.length }
  sorted = array.merge_sort(&prc)
  sorted.last
end

def clever_octopus(array)
  longest = array.first
  array.each do |el|
    if longest.length < el.length
      longest = el
    end
  end
  longest
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new { |x, y| x <=> y}
    return self if length <= 1

    mid = self.length / 2
    Array.merge(self[0...mid].merge_sort(&prc), self[mid..-1].merge_sort(&prc), &prc)
  end

  private
  def self.merge(first, second, &prc)
    sorted = []
    until first.empty? || second.empty?
      if prc.call(first[0], second[0]) == -1
        sorted << first.shift
      else
        sorted << second.shift
      end
    end
    sorted.concat(first).concat(second)
  end

end

fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
p "SLUGGISH"

p sluggish_octopus(fishes)

p "DOMINANT"

p dominant_octopus(fishes)

p "CLEVER"

p clever_octopus(fishes)


# DANCE DANCE REVOLUTION IN COMES THE OCTOPUS EVERYONE STEP BACK AND BE PREPARED

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(dir, tiles)
  tiles.each_with_index do |el, idx|
    return idx if el == dir
  end
  -1
end

p "HERE COMES THE SLOW DANCING OCTOPUS, HE'S STILL LEARNING HOW TO DANCE"
p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)

tiles_hash = Hash.new
tiles_array.each_with_index do |el, idx|
  tiles_hash[el] = idx
end

def fast_dance(dir, tiles_hash)
  tiles_hash[dir]
end

p "HERE COMES THE QUICK DANCING OCTOPUS, WHOA LOOK AT HIM GO"
p fast_dance("up", tiles_hash)
p fast_dance("right-down", tiles_hash)
