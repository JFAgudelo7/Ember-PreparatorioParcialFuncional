import Controller from '@ember/controller';

export default Controller.extend({
  result:null,
  incError:null,
  actions:{
    plus(){
      const N1 = parseInt(this.get('number1'));
      const N2 = parseInt(this.get('number2'));
      if (N1>=-1000 && N1<=1000 && N2>=-1000 && N2<=1000){
        this.set('result',(N1 + N2));
        this.set('incError',null);
      }else{
        $('.incorrect').css('background-color','darkRed');
        this.set("incError","Number out of range");
        this.set('result',null);
      }
    },
    substract(){
      const N1 = parseInt(this.get('number1'));
      const N2 = parseInt(this.get('number2'));
      if ((N1 >= -1000) && (N1 <= 1000) && (N2 >= -1000) && (N2 <= 1000)){
        this.set('result',(N1 - N2));
        this.set('incError',null);
      }else{
        $('.incorrect').css('background-color','darkRed');
        this.set("incError","Number out of range");
        this.set('result',null);
      }
    },
  },
});
