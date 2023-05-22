import webapp2

class MainPage(webapp2.RequestHandler) :
    def get(self):
        for i in range(1,6): 
            self.response.write("Hemang  \t 33305 \t Information Technology")
            self.response.write("<html><br></html>")
    

app = webapp2.WSGIApplication([('/', MainPage)],debug=True)
