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
