from flask import Flask, render_template, session, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<int:x>')
def changex(x):
    return render_template('second.html', x = x)

if __name__ == "__main__":
    app.run(debug = True)