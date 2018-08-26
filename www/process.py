from random import randint
from database import Database
from models import Samples

import time

db = Database()

while True:
	### Generate value random and start insert data to DB ###
	toInsert = Samples()
	#toInsert.id = idValue++ This value is autoincremental.
	toInsert.temperature = randint(0,100)
	toInsert.humidity = randint(0,100)
	toInsert.pressure = randint(1020,1030)
	toInsert.windspeed = randint(5,300)
	### End generate and insert to DB ###
	
	db.insertSample(toInsert)

	time.sleep(1)