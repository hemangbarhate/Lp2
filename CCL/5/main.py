import webapp2

class HomePage(webapp2.RequestHandler):
    def get(self):
        i=1
        while(i<=10):
            self.response.write(i)
            self.response.write(" * 10 = ")
            self.response.write(i*10)
            self.response.write("<html><br></html>")
            i=i+1

app = webapp2.WSGIApplication([("/",HomePage)],debug=True)