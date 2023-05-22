import webapp2

class HomePage(webapp2.RequestHandler):
    def get(self):
        i=0;
        while i<10:
            self.response.write("33305 \t Information Technology \t")
            self.response.write("<html> <br> </html>")
            i =i+1;

app = webapp2.WSGIApplication([("/",HomePage)],debug=True)