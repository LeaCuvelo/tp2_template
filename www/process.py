from random import randint
from database import Database
from models import Samples

def insertSamples(session):

    ### Start generate values random ###
    idValue++
    temperatureValue = randint(0,100)
    humidityValue = randint(0,100)
    pressureValue = randint(1020,1030)
    windspeedValue = randint(5,300)
    ### End values random ###

    ### Start insert to DB ###
    toInsert = Sample()
    toInsert.id = idValue++
    toInsert.temperature = temperatureValue
    toInsert.humidity = humidityValue
    toInsert.pressure = pressureValue
    toInsert.windspeed = windspeedValue
    ### End insert to DB ###
    
    session.add(toInsert)
    session.commit()
    session.close ()

if __name__ == '__main__':
  db = Database()
  session = db.get_session()
  insertSamples(session)


