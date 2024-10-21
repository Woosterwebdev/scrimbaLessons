csv = 'Eric,John,Michael,Terry,Graham:TerryG;Brian'
csv = csv.replace(':', ',').replace(';', ',').split(',')
friends_list = csv
print(friends_list)
# From the list above fill a list(friends_list) properly
# with the names of all the friends. One per "slot"
# you may need to run same command several times
# use print() statements to work your way through the exercise

#Alternate with join

#csv = 'Eric,John,Michael,Terry,Graham:TerryG;Brian'
#friends_list = ((','.join(csv.split(';')).split(':'))).split(',')
#print(friends_list)