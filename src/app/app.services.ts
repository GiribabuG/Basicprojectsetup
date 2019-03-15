import { Injectable } from "@angular/core";

import { environment } from "../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AppServices{
public serverUrl = environment.apiUrl;
constructor(private http : HttpClient){}


singUp(signupdata){
    return this.http.post(this.serverUrl + "/api/v1.0/users/register", signupdata);
}

login(userdata){
    return this.http.post(this.serverUrl + "/api/v1.0/users/login", userdata);
}
verifyEmailId(verifyEamilToken){
    return this.http.get(this.serverUrl + "/api/v1.0/users/verify-email/"+verifyEamilToken);
}
resetPasswordLink(passwordLink){
    return this.http.post(this.serverUrl + "/api/v1.0/users/password-reset-link", passwordLink);
}

createPassword(newPassword){
    return this.http.post(this.serverUrl + "/api/v1.0/users/reset-password-with-token", newPassword);
}
userProfile(){
    return this.http.get(this.serverUrl + "/api/v1.0/users/" );
}
changePassword(passwords){
    var data=passwords;
    console.log(data);
    return this.http.put(this.serverUrl + "/api/v1.0/users/", data );
}
// admin services 

userDetails(){
    console.log('sARDFGYTERWAESGD')
    return this.http.get(this.serverUrl + "/api/v1.0/users/all");
}

adminViewDetails(token){
    return this.http.get(this.serverUrl + "/api/v1.0/users/" + token);
}

adminUpdateUserDetails(token){
    return this.http.get(this.serverUrl + "/api/v1.0/users/"+ token);
}

UpdateUserDetails(token,data){
    return this.http.put(this.serverUrl + "/api/v1.0/users/"+ token, data);
}

DeleteUser(token){
    return this.http.delete(this.serverUrl + "/api/v1.0/users/"+ token);
}
countryCodes(){
    return this.http.get("http://data.fixer.io/api/latest?access_key=1e1c03c8640f897e3728e6a3245918a3")
}
}