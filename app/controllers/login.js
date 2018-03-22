import Controller from '@ember/controller';

export default Controller.extend({

  incError: null,
  actions:{
    autLogin(){
      //var incError;
      const username = this.get('username');
      const password = this.get('password');
      const people = this.get('model.people');
      const person = people.findBy('username',username);
      //console.log(typeof person);
      if(typeof(person)!=="undefined"){
        console.log(username);
        if (person.password === password){
          localStorage.username = username;
          window.alert('Succesful');
          this.set('password', null);
          this.set('incError', null);
          this.transitionToRoute('home');
        }else{
          //window.alert('Wrong password');
          $('.incorrect').css('background-color','darkRed');
          this.set('password', null);
          this.set('incError', 'username or password is incorrect');
        }
      }else{
        //window.alert("username doesn't exist");
        $('.incorrect').css('background-color','darkRed');
        this.set('password', null);
        this.set('incError', 'username or password is incorrect');
      }
    },
  },
});
