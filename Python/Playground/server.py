from flask import Flask, render_template

app = Flask(__name__)

@app.route('/play')
def play():
    return render_template('play.html')

@app.route('/play/<int:x>')
def multiple(x):
    return render_template('play2.html', x = x)

@app.route('/play/<int:x>/<color>')
def changecolor(x, color):
    return render_template('play3.html', x = x, color = color)

if __name__ == "__main__":
    app.run(debug = True)