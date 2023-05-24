import webapp2
import json
import urllib
from google.appengine.ext.webapp import template

class HomePage(webapp2.RequestHandler):
    def get(self):
        temp = {}
        self.response.write(template.render('./template/index.html',temp))

    def post(self):
        pincode = self.request.get('pincode')
        url = "https://api.postalpincode.in/pincode/" + pincode

        data = urllib.urlopen(url).read()
        data = json.loads(data)

        status = data[0]["Status"]

        if status == "Success":
            name = data[0]["PostOffice"][0]["Name"]
            region = data[0]["PostOffice"][0]["Name"]

            temp = {"name":name,"region":region}
            self.response.write(template.render('./template/results.html',temp))
        else :
            temp = {"data":data}
            self.response.write(template.render('./template/results.html',temp))



app = webapp2.WSGIApplication([("/",HomePage)],debug=True)
