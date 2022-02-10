class BankAccount:
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        if isinstance(amount, int):
            if amount > 0:
                self.balance += amount
    def withdraw(self, amount):
        if isinstance(amount, int):
            if amount > 0:
                if self.balance - amount < 0:
                    print("Insufficient funds: Charging a $5 fee")
                    self.balance -= amount - 5
                else:
                    self.balance -= amount    
    def display_account_info(self):
        print("Balance: $",self.balance)
    def yield_interest(self):
        if self.balance >= 0:
            self.balance += self.balance * self.int_rate

class User:
    bank_name = "First National Dojo"
    def __init__(self, name, email_address):
        self.name = name
        self.email_address = email_address
        self.account = BankAccount(.01, 0)
    def make_deposit(self, amount):
        self.account.deposit(amount)
    def make_withdraw(self, amount):
        self.account.withdraw(amount)
    def display_user_balance(self):
        print("User:", self.name,self.account.display_account_info())

bank_acc1=BankAccount(.05, 10)
bank_acc2=BankAccount(.03, 100)

jon=User("Jon Snow", "jsnow@gmail.com")
wayne=User("Wayne Gretzky", "wg88@gmail.com")
riley=User("Jonsey Riley", "ferda@boys.com")


riley.make_deposit(50)
riley.make_deposit(50)
riley.make_withdraw(25)
print(riley.display_user_balance())