#
# johnny_cache = LRUCache.new(4)
#
# johnny_cache.add("I walk the line")
# johnny_cache.add(5)
#
# johnny_cache.count # => returns 2
#
# johnny_cache.add([1,2,3])
# johnny_cache.add(5)
# johnny_cache.add(-5)
# johnny_cache.add({a: 1, b: 2, c: 3})
# johnny_cache.add([1,2,3,4])
# johnny_cache.add("I walk the line")
# johnny_cache.add(:ring_of_fire)
# johnny_cache.add("I walk the line")
# johnny_cache.add({a: 1, b: 2, c: 3})
#
# i walk, 5, [1, 2, 3], 5, -5, {a:1, b:2, c:3}, [1, 2, 3, 4], ("I walk"), :ring_of_fire, "i walk", {a:1}
# johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]

#DOESN'T ALLOW COPIES
#
# lru ->a , I , :ring, I, [1, 2, 3], {a:1}, -5, 5, [1, 2, 3], 5, i
class LRUCache
  def initialize(size)
    @array = Array.new(size)
  end

  def count
    @array.count
  end

  def add(el)
    unless @array.include?(el)
      @array[1..-1] = @array[0..-2]
      @array[0] = el
    end
  end

  def show
    print @array
    puts ""
  end

  private

end
