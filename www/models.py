import datetime

from sqlalchemy.schema import Column
from sqlalchemy.types import Integer
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


#This models will be used in our DataBase.
#And contains all the data to show in the html.
class Samples(Base):
    __tablename__ = 'samples'
    id=Column(Integer, primary_key=True)
    temperature=Column('temperature', Integer)
    humidity=Column('humidity', Integer)
    pressure=Column('pressure', Integer)
    windspeed=Column('windspeed', Integer)

    def serialize(self):	#This function returns the objects data in a easily serializable format.
    	return{
    		'id': self.id,
    		'temperature': self.temperature,
    		'humidity': self.humidity,
    		'pressure': self.pressure,
    		'windspeed': self.windspeed 
    	}
    


