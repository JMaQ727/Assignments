from flask_app.config.mysqlconnection import connectToMySQL

from flask import flash

import re

class User():
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def add_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        result = connectToMySQL('recipes_schema').query_db(query, data)
        return result

    @classmethod
    def get_user_by_email(cls, data):
        query = "SELECT * FROM users WHERE email=%(email)s"
        result = connectToMySQL('recipes_schema').query_db(query, data)
        if len(result) == 0:
            return False
        else:
            return User(result[0])

    @staticmethod
    def validate_new_user(data):
        is_valid = True
        email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        name_regex = re.compile(r'^[a-zA-Z]{2,}$') 
        if not email_regex.match(data['email']):
            is_valid = False
            flash("Incorrect email")
        if not name_regex.match(data['first_name']):
            is_valid = False
            flash("First name must be at least 2 letters")
        if not name_regex.match(data['last_name']):
            is_valid = False
            flash("Last name must be at least 2 letters")
        if len(data['password']) < 8:
            is_valid = False
            flash("Password should be at least 8 characters")
        if not data['password'] == data['confirm']:
            is_valid = False
            flash("Passwords do not match.")
        if User.get_user_by_email(data):
            is_valid = False
            flash('Email already in use')
        return is_valid
