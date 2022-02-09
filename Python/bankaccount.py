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

bank_acc1=BankAccount(.05, 10)
bank_acc2=BankAccount(.03, 100)

bank_acc1.deposit(50)
bank_acc1.deposit(40)
bank_acc1.deposit(20)
bank_acc1.withdraw(20)
bank_acc1.yield_interest().display_account_info()
# bank_acc1.display_account_info()
# bank_acc1.deposit(50).deposit(40).deposit(20).withdraw(20).yield_interest().display_account_info()
# bank_acc2.deposit(100)
# bank_acc2.deposit(400)
# bank_acc2.withdraw(40)
# bank_acc2.withdraw(60)
# bank_acc2.withdraw(50)
# bank_acc2.withdraw(10)
# bank_acc2.yield_interest()
# bank_acc2.display_account_info()