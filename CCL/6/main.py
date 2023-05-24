import webapp2

class HomePage(webapp2.RequestHandler):
    def get(self):
        num1 = 0
        num2 = 1
        self.response.write("0 1 ")
        i=2
        while i <8:
            new = num1+num2
            self.response.write(new)
            self.response.write("\n")
            num1 = num2
            num2 = new
            i=i+1

app = webapp2.WSGIApplication([("/",HomePage)],debug = True)