import Controller from '@ember/controller';

var registers = '{"registers":[]}';

export default Controller.extend({
  incError: null,
  actions:{
    localRegister(){
      const username = this.get('username');
      const password = this.get('password');
      const name = this.get('name');
      const salary = parseInt(this.get('salary'));
      const gender = this.get('gender');
      console.log(name);
      if(typeof(username)=='string'){
        if(typeof(password)!='undefined' && password != null){
          if(typeof(name)=='string'){
            if(typeof(salary)=='number' && salary >= 0){
              if(gender=='Male' || gender=='Female'){
                let newUser = '{"username":"'+username +'","password":"'+password+'","name":"'+name+'","salary":"'+salary+'", "gender":"'+gender+'"}';
                var newUserJSON = JSON.parse(newUser);
                newUser = JSON.stringify(newUserJSON);
                localStorage.newUser = newUser;
                //localStorage.newUsername = username;
                //localStorage.newPassword = password;
                //localStorage.newName = name;
                //localStorage.newSalary = salary;
                //localStorage.newGender = gender;
                $('.incorrect').css('background-color','lightGreen');
                this.set('incError', 'Succesful');
              }else{
                $('.incorrect').css('background-color','darkRed');
                this.set('incError', 'invalid gender');
              }
            }else{
              $('.incorrect').css('background-color','darkRed');
              this.set('incError', 'invalid salary');
            }
          }else{
            $('.incorrect').css('background-color','darkRed');
            this.set('incError', 'invalid name');
          }
        }else{
          $('.incorrect').css('background-color','darkRed');
          this.set('incError', 'invalid password');
        }
      }else {
        $('.incorrect').css('background-color','darkRed');
        this.set('incError', 'invalid username');
      }
    },
  },
});
