# A number is called lucky if the sum of its digits, as well as the sum of the squares 
# of its digits is a prime number. How many numbers between A and B(both inclusive) are lucky?
# puts "enter a number"

a = ARGV

lucky_numbers(a[0],a[1])

def lucky_numbers(a, b)
  
  sum = (a..b).to_a.reduce(:+)
  square_sum = (1..3).to_a.map do |el|
    el * el
  end.reduce(:+)

 
end 

def is_prime?(num)
  (2...num).each do |el|
    if num % el == 0
      return false
    end 
  end
  true
end
  
  