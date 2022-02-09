# employee_1 = {'first_name': 'Jake', 'last_name': 'Andrews', 'salary': 48000, 'department': 'Sales'}
# employee_2 = {'first_name': 'Sally', 'last_name': 'Jones', 'salary': 78000, 'department': 'Sales'}
# employee_3 = {'first_name': 'Alex', 'last_name': 'Smith', 'salary': 52000, 'department': 'Engineering'}
# employee_4 = {'first_name': 'Brad', 'last_name': 'Andrews', 'salary': 59000, 'department': 'HR'}
# employee_4 = {'first_name': 'Charlie', 'last_name': 'Adams', 'salary': '48000', 'department': 'HR'}

# employees = [employee_1, employee_2, employee_3, employee_4]

# for employee in employees:
#     employee['salary'] = employe['salary'] * .05
#     print(employee)

# Class names should be singular and start with a capital letter
from hashlib import new

class Department:

    def __init__(self, name, location):
        self.name = name
        self.location = location
        self.employees = []

class Employee:

    def __init__(self, first_name, last_name, salary, department, middle_name = None):
        self.first_name = first_name
        self.middle_name = middle_name
        self.last_name = last_name
        self.salary = salary
        self.department = department
    def change_salary(self, new_salary):
        if isinstance(new_salary, int):
            if new_salary > 40000:  
                self.salary = new_salary


department_a= Department("Sales", "301A")
department_b= Department("Engineering", "208B")
department_c= Department("HR", "801C")

new_employee = Employee("Adam", "Jones", 48000, department_a)
# new_employee2 = Employee("Brad", "Smith", 68000, "HR")
# new_employee3 = Employee("Charlie", "Adams", 74000, "Engineering", middle_name = "Jacob")

# employees = [new_employee, new_employee2, new_employee3]

# for employee in employees:
#     if employee.middle_name != None:
#         print(f"{employee.first_name} {employee.middle_name} {employee.last_name}")
#     else:
#         print(f"{employee.first_name} {employee.last_name}")

