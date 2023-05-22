import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sasta';

  rname = "";
  remail = "";
  rphone = "";
  rpassword = "";

  register(name: string, email: string, phone: string, password: string) {
    this.rname = name;
    this.rphone = phone;
    this.rpassword = password;
    this.remail = email;
  }

  loginname = "";
  loginpass = "";
  result = "";

  name3 = "";
  email3 = "";
  phone3 = "";
  result3 = ""
  login(name: string, password: string) {
    this.loginname = name;
    this.loginpass = password;
    this.result = "";

    if ((this.loginname === this.rname) && (this.rpassword === this.loginpass)) {

      this.result = "Login Successful";
      this.result3 = "Your Session is started"
      this.name3 = this.rname;
      this.email3 = this.remail;
      this.phone3 = this.rphone;

    }
    else {
      this.loginname = "Access Denied";
      this.loginpass = password;
      this.result = "Invalid Credential";
    }
  }
}
