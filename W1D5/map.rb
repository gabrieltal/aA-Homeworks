class Map
  def initialize
    @store = Array.new { Array.new }
  end

  def assign(key, value)
    location = find(key)
    if location
      @store[location] = [key, value]
    else
      @store << [key, value]
    end
  end

  def lookup(key)
    @store.each { |pair| return pair[1] if pair[0] == key }
    nil
  end

  def find(key)
    @store.each_with_index do |el, idx|
      return idx if el.first == key
    end
    nil
  end

  def remove(key)
    location = find(key)
    @store.delete_at(location)
  end

  def show
    @store
  end

  private
  def deep_dup(arr)
    arr.map { |el| el.is_a?(Array) ? deep_dup(el) : el }
  end
end

# my_map = Map.new
# p my_map.show
# my_map.assign(1, 2)
# p my_map.show
# my_map.assign(1, 4)
# p my_map.show
# my_map.remove(1)
# my_map.assign(4, 6)
# p my_map.show
# my_map.assign(8, 9)
# p my_map.show
