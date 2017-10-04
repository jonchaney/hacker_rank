# A number is called lucky if the sum of its digits, as well as the sum of the squares 
# of its digits is a prime number. How many numbers between A and B(both inclusive) are lucky?
# puts "enter a number"

a = ARGV


def lucky_numbers(a, b)
  nums = (a..b).to_a
  count = 0
  sum = 0
  square_sum = 0

  
  nums.each do |num|
    p num
    if num.length > 1
      num.chars.each do |el|
          sum += el.to_i
          square_sum += (el.to_i ** 2)
      end 
      if is_prime?(sum) && is_prime?(square_sum) 
        count+=1
      end 
      sum = 0
      square_sum = 0
    end

  end 
  p count
end 

def is_prime?(num)
    (2...num).each do |el|
    if num % el == 0
      return false
    end 
  end
  true
end

lucky_numbers(a[0],a[1])

# sum = (a..b).to_a.reduce(:+)
# square_sum = (1..3).to_a.map do |el|
#   el * el
# end.reduce(:+)