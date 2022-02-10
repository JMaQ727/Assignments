from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello World!"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<name>')
def test(name):
    return f"Hi {name}!"

@app.route('/repeat/<int:x>/<word>')
def repetition(x, word): 
    output = ""
    for x in range(0, x):
        output += f"<h1>{word}</h1>"
    return output

if __name__ == "__main__":
    app.run(debug = True)