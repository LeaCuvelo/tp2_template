# Imports
from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
	#Get first Sample and show in html.
	firstSample = db.get_sample(1)	#This is the first sample of database.

    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8888)

