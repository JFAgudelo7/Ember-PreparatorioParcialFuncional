import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(){
    let session = localStorage.username;
    if(session!=null){
      this.replaceWith('home');
    }
  },
  model(){
    let people = [
      {
        username:'srestrepoo',
        password:'1234',
        name: 'Santiago',
        salary: 5000000,
        gender: 'M',
      },
      {
        username:'anbolivarl',
        password:'1234',
        name: 'Ana',
        salary: 5000000,
        gender: 'F',
      },
      {
        username:'delfines',
        password:'5678',
        name: 'Pablo',
        salary: 6000000,
        gender: 'M',
      },
      {
        username:'dianap',
        password:'9012',
        name: 'Diana',
        salary: 6500000,
        gender: 'F',
      },
      {
        username:'frpozea',
        password:'9012',
        name: 'Emilio',
        salary: 5500000,
        gender: 'M',
      }
    ];
    let newUser = localStorage.newUser;
    if(typeof(newUser)!="undefined"){
    let newUserJSON = JSON.parse(newUser);
        people.push(newUserJSON);
  }
    //newUser = JSON.stringfy(newUserJSON);

    console.log(people);
      return{
        people:people,
      };
    },
});
