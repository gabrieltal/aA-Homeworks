class Person < ActiveRecord::Base
  belongs_to :house,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: 'House'
end

me = Person.create(name: "Gariel", house_id: 1)

my_home = House.create(address: "Down the street!")
