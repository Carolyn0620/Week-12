from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/second-page')
def second_page():
    return render_template('second-page.html')

if __name__ == '__main__':
    app.run(debug=True)
