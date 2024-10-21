# - Create a distance converter converting Km to miles
# - Take two inputs from user: Their first name and the distance in km
# - Print: Greet user by name and show km, and mile values
# - 1 mile is 1.609 kilometers
# - hint: use correct types for calculating and print
# - Did you capitalize the name

name = input("What is your name?")
km = input("Enter number of km.")
miles = float(km)/1.609

print(f"Hello {name.capitalize()}! {km}km is equal to {round(miles, 1)} miles.")