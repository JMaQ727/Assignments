import random

def roll_dice(number_dice = 1, number_sides = 20, bonus = 0):
    output = 0

    for x in range(0, number_dice):
        output += random.randint(1, number_sides)

    return output + bonus

print(roll_dice(2, 6, 1))
print(roll_dice(2,6, bonus = 1))
print(roll_dice(number_dice=2, number_sides=6, bonus=1))
# these all do the same thing
print(roll_dice(bonus=1, number_dice=2, number_sides=6))
# also works because all are defined
print(roll_dice(bonus = 1, 2, 6))
# this does not work because you cannot put the keyword in the wrong position and not follow with keywords for the other arguments (bonus should be the third arguemnt.  if it's put elsewhere, the other arguments must be named)

# strength, constitution, dexterity, intelligence, wisdom, charisma
# range 3-18

def generate_class_character():

    character = {}
    stats = ["STR", "CON", "DEX", "INT", "WIS", "CHA"]

    for stat in stats:
        character[stat] = roll_dice(3,6)
    
    return character