import webapp2

class HomePage(webapp2.RequestHandler):
    def get(self):
    
        for i in range(1,11):
            self.response.write(i)


app = webapp2.WSGIApplication([("/",HomePage)],debug=True)