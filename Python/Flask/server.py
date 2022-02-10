from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "this server is working"

@app.route('/another_route')
def another_route():
    return "this server is workinggggggggggggggg"

@app.route('/resource/<id>')
def variable_example(id):
    return f"requested resouce with id {id}"

if __name__ == "__main__":
    app.run(debug = True)
