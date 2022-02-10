class Card():
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit
        if (value == 1):
            self.rank = 'Ace'
        elif (value == 11):
            self.rank = 'Jack'
        elif (value == 12):
            self.rank = 'Queen'
        elif (value == 13):
            self.rank = 'King'
        else:
            self.rank = value

    def __repr__(self):
        return f"{self.suit[0]} {self.value}"

    def __str__(self):
        return f"{self.rank} of {self.suit}"

# class to represent a deck of cards

class Deck():
    def __init__(self):
        self.contents = []
        suits = ['hearts', 'diamonds', 'clubs', 'spades']
        values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        for value in values:
            for suit in suits:
                self.contents.append(Card(value,suit))

new_deck = Deck()
print(new_deck.contents)