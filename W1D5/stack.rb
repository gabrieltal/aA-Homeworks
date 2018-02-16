class Stack
  def initialize
    @store = []
  end

  def add(el)
    @store << el
    el
  end

  def remove
    @store.pop
  end

  def show
    @store.dup
  end

end

# s = Stack.new
# s.add(1)
# s.add(4)
# s.add(25)
# p s.show
# s.remove
# p s.show
