from random import randint
from database import Database
from models import Samples

import time

def insertSamples(session):

    ### Generate value random and start insert data to DB ###
    toInsert = Sample()
    #toInsert.id = idValue++ This value is autoincremental.
    toInsert.temperature = randint(0,100)
    toInsert.humidity = randint(0,100)
    toInsert.pressure = randint(1020,1030)
    toInsert.windspeed = randint(5,300)
    ### End generate and insert to DB ###
    
    db.insertSamples(toInsert)
    time.sleep(1)

if __name__ == '__main__':
  db = Database()
  session = db.get_session()
  insertSamples(session)


