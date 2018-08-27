# Imports
from flask import Flask
from flask import render_template
from aux_pro import Process
from database import Database
from flask import jsonify

import subprocess
import os

app = Flask(__name__)
db = Database()
pro = Process()

@app.route('/')
def index():
    cmd = "python3 process.py"
    subprocess.Popen(cmd.split(), preexec_fn=os.setsid)
    return render_template('index.html')

#This method return the last sample in DB
@app.route('/last-sample', methods = ["GET"])
def get_last_sample():
    lastSample = db.getLastSample()
    return jsonify(lastSample)

#This method return the average of the 10 lastest samples
@app.route('/average', methods = ["GET"])
def get_average():
    average = db.getAverageSamples()
    return jsonify(average)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8888)

