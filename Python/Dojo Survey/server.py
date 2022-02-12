from flask import Flask, render_template, session, request, redirect

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_form', methods=['POST'])
def process_form():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comments'] = request.form['comments']
    return redirect('/result')

@app.route('/result')
def result():
    name = session['name']
    location = session['location'] 
    language = session['language'] 
    comments = session['comments'] 
    return render_template('result.html', name = name, location = location, language = language, comments = comments)

if __name__ == "__main__":
    app.run(debug = True)