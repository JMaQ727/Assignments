import email


class User:
    bank_name = "First National Dojo"
    def __init__(self, name, email_address):
        self.name = name
        self.email_address = email_address
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
    def make_withdraw(self, amount):
        if isinstance(amount, int):
            if self.account_balance - amount < 0:
                print("Not enough funds")
            else:
                self.account_balance -= amount
    def display_user_balance(self):
        print("User:", self.name,", Balance: $",self.account_balance)

jon=User("Jon Snow", "jsnow@gmail.com")
wayne=User("Wayne Gretzky", "wg88@gmail.com")
riley=User("Jonsey Riley", "ferda@boys.com")

jon.make_deposit(50)
jon.make_deposit(50)
jon.make_deposit(50)
print(jon.display_user_balance())
wayne.make_deposit(50)
wayne.make_deposit(50)
wayne.make_withdraw(25)
wayne.make_withdraw(25)
print(wayne.display_user_balance())
riley.make_deposit(200)
riley.make_withdraw(50)
riley.make_withdraw(50)
riley.make_withdraw(50)
print(riley.display_user_balance())