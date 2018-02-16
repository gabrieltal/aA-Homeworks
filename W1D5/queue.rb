class Queue
  def initialize
    @store = []
  end

  def enqueue(el)
    @store << el
    el
  end

  def dequeue
    @store.shift
  end

  def show
    @store.dup
  end
end

# q = Queue.new
# q.enqueue(1)
# q.enqueue(2)
# q.enqueue(24)
# q.enqueue(6)
# p q.show
# q.dequeue
# p q.show
# q.enqueue(4)
# q.dequeue
# p q.show
# q.enqueue(1)
# p q.show
