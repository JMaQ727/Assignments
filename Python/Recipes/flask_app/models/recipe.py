from flask_app.config.mysqlconnection import connectToMySQL

from flask import flash

import re

class Recipe():
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date = data['date']
        self.overunder = data['overunder']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.users_id = data['users_id']

    @classmethod
    def add_recipe(cls, data):
        query = "INSERT INTO recipes (name, description, instructions, date, overunder, users_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(date)s, %(overunder)s, %(user_id)s);"
        result = connectToMySQL('recipes_schema').query_db(query, data)
        return result

    @classmethod
    def get_all_recipes(cls):
        query = "SELECT * FROM recipes;"
        result = connectToMySQL('recipes_schema').query_db(query)
        recipes = []
        for each_result in result:
            recipes.append(Recipe(each_result))
        return recipes

    @classmethod
    def get_one_recipe(cls, data):
        query = "SELECT * FROM recipes WHERE id=%(id)s"
        result = connectToMySQL('recipes_schema').query_db(query, data)
        recipe = Recipe(result[0])
        return recipe


    @staticmethod
    def validate_recipe(data):
        is_valid = True
        recipe_regex = re.compile(r'^[a-zA-Z0-9.+_ -]{3,}$') 
        if not recipe_regex.match(data['name']):
            is_valid = False
            flash("Name must be at least 3 characters")
        if not recipe_regex.match(data['description']):
            is_valid = False
            flash("Description must be at least 3 characters")
        if not recipe_regex.match(data['instructions']):
            is_valid = False
            flash("Instructions must be at least 3 characters")
        if len(data['name']) < 1:
            is_valid = False
            flash("Name cannot be left empty")
        if len(data['description']) < 1:
            is_valid = False
            flash("Description cannot be left empty")
        if len(data['instructions']) < 1:
            is_valid = False
            flash("Instructions cannot be left empty")
        return is_valid