from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/another_route')
def another_route():
    return "this server is workinggggggggggggggg"

@app.route('/resource/<id>')
def variable_example(id):
    return f"requested resouce with id {id}"

@app.route('/multiply/<int:x>/<int:y>')
def multiply(x,y):
    result = x * y
    return render_template('multiply.html', x = x, y = y, result = result) # left hand side is what will go into the html(or template), the right hand side is defined above

@app.route('/multiply/<int:x>/<int:y>/table')
def multiplication_table(x,y):
    return render_template('table.html', x = x, y = y)

@app.route('/multiply2/<int:x>/<int:y>/table')
def multiplication_table(x,y):
    results_list = []
    for i in range (0,x + 1):
        result_i = []
        for j in range (0,y + 1):
            result_i.append(i*j)
        results_list.append(result_i)
    print(results_list)
    return render_template('table2.html', x = x, y = y)    

if __name__ == "__main__":
    app.run(debug = True)
