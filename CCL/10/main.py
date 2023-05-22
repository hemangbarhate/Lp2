import os
import json
import urllib
import webapp2
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        template_values = {
                "error" : ""
            }
        path = os.path.join(os.path.dirname(__file__), 'index.html')
        self.response.out.write(template.render(path, template_values))

    def post(self):
        name = self.request.get('name')
        
        # query_params = "?name={}".format(name)
        url = "http://universities.hipolabs.com/search"+ "?name=" + name
        print(url)
        data = urllib.urlopen(url).read()
        data = json.loads(data)
        html = "Names \n"
        for i in data:
            html += ( i['name'] )
            self.response.write("<html> <br> </html>")

        

        template_values = {
            "universities": data
        }
        path = os.path.join(os.path.dirname(__file__), 'results.html')
        self.response.out.write(template.render(path, template_values))
        
        
app = webapp2.WSGIApplication([('/', MainPage)], debug=True)