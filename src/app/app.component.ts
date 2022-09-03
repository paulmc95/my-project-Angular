import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgAvatarTest='./assets/images/practice/windy.jpg';
  widthImg=250;
  widthImgTest=200;
  namePrueba='Paul-testing';
  professional='engineer-developer'
  icono='https://cdn-icons-png.flaticon.com/512/1320/1320457.png';
  btnDisabledPractice=true;


  name = 'Paul';
  age=18;
  img='https://www.magitech.pe/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/8/_/8_13_16.jpg';
  btnDisabled=true;
  register={
    name:'',
    email:'',
    password:'',
  }

  person={
    name:'Paul-Mejía',
    age:18,
    avatar:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/04/15912219730543.jpg'
  }

  personDeveloper={
    name:'Hackerbyte',
    experience:10,
    avatar:'https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png',
    password:'Password-Clear'
  }

  names: string[]=['Nico','Juli','Santi'];
  newName='';
  box={
    width:100,
    height:100,
    background:'red'
  };

  products:Product[] =[
    {
      name:'El mejor juguete',
      price:565,
      image:'./assets/images/juguete.jpg',
      category:'all'
    },
    {
      name:'Bicicleta casi nueva',
      price:356,
      image:'./assets/images/bicicleta.jpg'
    },
    {
      name:'Collection de albumnes',
      price:34,
      image:'./assets/images/albumnes.jpg'
    },
    {
      name:'Mis libros',
      price:23,
      image:'/assets/images/libros.jpg'
    },
    {
      name:'lampara',
      price: 10,
      image:'/assets/images/lampara.jpg'
    },
    {
      name:'Ventilador',
      price:50,
      image:'./assets/images/ventilador.jpg'
    },
    {
      name:'Zapatos',
      price:105,
      image:'./assets/images/zapatos.jpg'
    },
    {
      name:'Mochila',
      price:20,
      image:'./assets/images/mochila.jpg'
    }
  ]

  models=[
    {
      name:'Motfrais',
      age:25,
      img:'./assets/images/practice/motfrais.jpg'
    },
    {
      name:'Didiwinx',
      age:26,
      img:'./assets/images/practice/didiwinx.jpg'
    },
    {
      name:'Natagata',
      age:28,
      img:'./assets/images/practice/natagata.jpg'
    },
    {
      name:'Maluma',
      age:29,
      img:'./assets/images/practice/maluma.jpg'
    },
    {
      name:'Didiwin2',
      age:30,
      img:'./assets/images/practice/didiwin2.jpg'
    },
    {
      name:'Tefivalenzuela',
      age:31,
      img:'./assets/images/practice/tefivalenzuela.jpg'
    },
    {
      name:'Fabibiworldcosplay',
      age:32,
      img:'./assets/images/practice/fabibiworldcosplay.jpg'
    },
    {
      name:'lacolo',
      age:35,
      img:'./assets/images/practice/lacolo.jpg'
    },
    {
      name:'tefivalenzuela2',
      age:34,
      img:'./assets/images/practice/tefivalenzuela2.jpg'
    }
  ]



  cursos: string[]=['Calculo','Mate Basica','Sistemas Operativos'];
  newCurso='';


  toggleButton(){
    this.btnDisabled=!this.btnDisabled;
  }

  toogleButtonDeveloper(){
    this.btnDisabledPractice=!this.btnDisabledPractice;
  }

  increaseAge(){
    this.person.age++;
  }

  onScroll(event:Event){
    // Obtenemos el tipado en el elemento
    const element=event.target as HTMLElement;
    // Imprimimos en que posicion esta el scroll
    console.log(element.scrollTop);
  }

  onScrollDeveloper(event: Event){
    //Obtenemos el tipiado en el elemento
    const elementScroll=event.target as HTMLElement;
    console.log(elementScroll.scrollTop);
  }

  changeName(event: Event){
    // Leer el elemento inputelement, porque es un input
    const element= event.target as HTMLInputElement;
    // Con esto cambiamos el name por el valor que este en ese input
    this.person.name=element.value;

  }


  changedNameDeveloper(event: Event){
    const elementKey=event.target as HTMLInputElement;
    this.personDeveloper.name=elementKey.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName='';
  }

  delete(index: number){
    this.names.splice(index,1);
  }

  //Para agregar cursos
  addCurso(){
    this.cursos.push(this.newCurso);
    this.newCurso='';
  }

  deleteCurso(index: number){
    this.cursos.splice(index,1);
  }

  incrementExperience(){
    this.personDeveloper.experience++;
  }

  onRegister(){
    console.log(this.register);
  }

}
