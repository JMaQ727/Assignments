from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.user import User

@app.route('/')
def index():
    users=User.get_all_users()
    return render_template('/users.html', users = users)

@app.route('/create_user', methods=['POST'])
def create_user():
    User.create_user(request.form)
    return redirect('/')

@app.route('/create')
def create():
    return render_template('/create.html')

@app.route('/<int:user_id>/update', methods=['POST'])
def update_user(user_id):
    data = {
        'id': user_id,
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
    }
    User.update_user(data)
    return redirect('/')

@app.route('/<int:user_id>/edit')
def edit(user_id):
    data = {
        'id': user_id
    }
    user = User.get_one_user(data)
    return render_template('/edit.html', user = user)

@app.route('/<int:user_id>/delete')
def delete(user_id):
    data = {
        'id': user_id
    }
    User.delete_user(data)
    return redirect('/')

@app.route('/<int:user_id>/info')
def show_user(user_id):
    data = {
        'id': user_id
    }
    user = User.get_one_user(data)
    return render_template('/info.html',  user = user)