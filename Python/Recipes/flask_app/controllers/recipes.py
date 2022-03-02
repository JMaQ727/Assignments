from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user import User
from flask_app.models.recipe import Recipe

@app.route('/recipe/new')
def newrecipe():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('create.html')

@app.route('/recipe/create', methods=['POST'])
def createrecipe():
    if not Recipe.validate_recipe(request.form):
        print('**FAILED**')
        return redirect('/recipe/new')
    else:
        data = {
            'name': request.form['name'],
            'description': request.form['description'],
            'instructions': request.form['instructions'],
            'date': request.form['date'],
            'overunder': request.form['overunder'],
            'user_id': session['user_id']
        }
        print('***SUCCESS****')
        Recipe.add_recipe(data)
        return redirect('/dashboard')

@app.route('/recipe/<int:id>')
def viewrecipe(id):
    data = {
        'id': id,
    }
    recipes = Recipe.get_one_recipe(data)
    return render_template('info.html', recipes = recipes)

@app.route('/recipe/<int:id>/edit')
def editrecipe(id):
    data = {
        'id': id,
    }
    recipes = Recipe.get_one_recipe(data)
    return render_template('edit.html', recipes = recipes)

@app.route('/recipe/<int:id>/update', methods=['POST'])
def updaterecipe(id):
    if not Recipe.validate_recipe(request.form):
        print('**FAILED**')
        return redirect('/recipe/new')
    else:
        data = {
            'id': id,
            'name': request.form['name'],
            'description': request.form['description'],
            'instructions': request.form['instructions'],
            'date': request.form['date'],
            'overunder': request.form['overunder'],
        }
        print('***SUCCESS****')
        Recipe.update_recipe(data)
        return redirect('/dashboard')

@app.route('/recipe/<int:id>/delete')
def deleterecipe(id):
    data = {
        'id': id
    }
    Recipe.delete_recipe(data)
    return redirect('/dashboard')