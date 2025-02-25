from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/second-page')
def second_page():
    return render_template('second-page.html')

@app.route('/third-page')
def third_page():
    return render_template('third-page.html')


@app.route('/forth-page/<name>')
def forth_page(name):
    return render_template('forth-page.html', name=name) # Pass 'name' to template

@app.route('/fifth-page/<name>/<number>') # Correct route name and parameter
def fifth_page(name, number):
    return render_template('fifth-page.html', name=name, number=number)

@app.route('/sixth-page')
def sixth_page():
    return render_template('sixth-page.html')

if __name__ == '__main__':
    app.run(debug=True)
