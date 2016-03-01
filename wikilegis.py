#!flask/bin/python

from app import app as application
app.debug = True
app.run(host='0.0.0.0', port=8080)
