# Imports
from flask import Flask
from flask import render_template
from aux_pro import Process
from database import Database

app = Flask(__name__)
db = Database()
pro = Process()

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/sensor', methods = ["POST"])
def start_sensors():





	return render_template('sensor.html')




if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8888)

