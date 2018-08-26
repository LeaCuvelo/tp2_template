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

    #TODO moverlo de aca!  es el init del proceso que genera las muestras y lo manda a la db
    cmd = "python3 process.py"
    subprocess.Popen(cmd.split(), preexec_fn=os.setsid)
    return render_template('index.html')


@app.route('/sensor', methods = ["GET"])  #Cambiar dsp, para q renderize,
def start_sensors():
    muestra = db.getSample(1)
    #SACAR UNA MUESTRA DE LA DB Y MANDARLA EN VEZ DE 4
    # llamar a get muestra
    return jsonify(muestra)  #No renderiza html, devuelve ajax nomas

#This method return the average of the 10 lastest samples
@app.route('/average', methods = ["GET"])
def get_average():
    average = db.getAverageSamples()
    return jsonify(average)

#This method return the last sample in DB
@app.route('/last-sample', methods = ["GET"])
def get_last_sample():
    lastSample = db.getLastSample()
    return jsonify(lastSample)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8888)

