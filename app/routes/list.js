import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(){
    let session = localStorage.username;
    if(session==null){
      this.replaceWith('login');
    }
  },
  model(){
    return{
      people: [
        {
          id: 'santiago',
          username:'srestrepoo',
          password:'1234',
          name: 'Santiago',
          salary: 5000000,
          gender: 'M',
        },
        {
          id: 'ana',
          username:'anbolivarl',
          password:'1234',
          name: 'Ana',
          salary: 5000000,
          gender: 'F',
        },
        {
          id: 'pablo',
          username:'delfines',
          password:'5678',
          name: 'Pablo',
          salary: 6000000,
          gender: 'M',
        },
        {
          id: 'diana',
          username:'dianap',
          password:'9012',
          name: 'Diana',
          salary: 6500000,
          gender: 'F',
        },
        {
          id: 'emilio',
          username:'frpozea',
          password:'9012',
          name: 'Emilio',
          salary: 5500000,
          gender: 'M',
        },
      ],
    };
  },
});
