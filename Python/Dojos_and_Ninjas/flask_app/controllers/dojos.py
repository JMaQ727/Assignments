from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route('/')
def dojos():
    dojos = Dojo.get_all_dojos()
    return render_template('dojos.html', dojos = dojos)

@app.route('/createdojo', methods=['POST'])
def createdojo():
    Dojo.add_dojo(request.form)
    return redirect('/')

@app.route('/addninja')
def addninja():
    dojos = Dojo.get_all_dojos()
    return render_template('ninjas.html', dojos = dojos)

@app.route('/createninja', methods=['POST'])
def createninja():
    Ninja.add_ninja(request.form)
    return redirect('/')

@app.route('/dojos/<int:dojo_id>')
def getmembers(dojo_id):
    data = {
        'dojo_id': dojo_id
    }
    ninjas = Ninja.get_ninja_dojo(data)
    return render_template('members.html', ninjas = ninjas)
