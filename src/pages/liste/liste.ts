import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ConfigServiceTsProvider} from '../../providers/config-service-ts/config-service-ts';
import { DecoPage } from '../deco/deco';
import { LoginPage } from '../login/login';
import { AuthenticationService } from '../../services/authentication.service';
import { WordpressService } from '../../services/wordpress.service';
/**
 * Generated class for the ListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html',
  providers :[ConfigServiceTsProvider]
})
export class ListePage {
  hide: any;
  listes: any[];
  loggedUser: boolean=false;
  test= 'none';
  lie= 'none';
  tda='none'
activite:Array<any> = new Array<any>();
lieu: Array<any> = new Array<any>();
tdage:Array<any> = new Array<any>();
  constructor(public nav: NavController, 
    public navParams: NavParams,
     private http: Http,
      public ConfigServ: ConfigServiceTsProvider,
    public authenticationService: AuthenticationService,
    public wordpressService :    WordpressService

  ) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ListePage');
    Observable.forkJoin(
      this.getActivite()).subscribe(data=> {
        for( let i = 0; i <= data.length; i++){
          let item = data[0][i];

          this.activite.push(item.name);
          console.log(this.activite)
        }
      
      })
      Observable.forkJoin(
        this.getLieu()).subscribe(data=> {
          for( let i = 0; i <= data.length; i++){
            let item = data[0][i];
  
            this.lieu.push(item.name);
            console.log(this.lieu)
          }
        
        })
        Observable.forkJoin(
          this.getAge()).subscribe(data=> {
            for( let i = 0; i <= data.length; i++){
              let item = data[0][i];
    
              this.tdage.push(item.name);
              console.log(this.tdage)
            }
          
          })

    
console.log(this.activite)
    // this.callBDD( this.http)
  }

  ionViewDidEnter(){

  }

  getActivite(){

    return this.wordpressService.getActivites(this.activite);

  }
  getLieu(){

    return this.wordpressService.getLieu(this.lieu);

  }

  getAge(){

    return this.wordpressService.getAge(this.age);

  }
//   callBDD( $http) {
//     $http.get('../../bdd_wp.php').then(successCallback, errorCallback);

// function successCallback(response){

// this.terms = response.data;}
// function errorCallback(error){
//     //error code
// }
//   }

  clickliste(){
    this.nav.setRoot('ListePage');
    


  }
  clickmap(){
    this.nav.setRoot('HomePage');

  }
  boolean =false
  clicksearch(){
    if(this.boolean==false){
    this.boolean=true
    document.getElementById('pagesearch').style.display = "flex";
    document.getElementById('fond').style.display = "flex";
    }
    else{
      this.boolean=false
      document.getElementById('pagesearch').style.display = "none";
      document.getElementById('fond').style.display = "none";
    }

  }
  clickcarte(){
    this.nav.setRoot('CartePage');

  }
  clickexit(){
    this.authenticationService.getUser()
    .then(
      (data) => {
      this.loggedUser = true;
      console.log(this.loggedUser) ;
      this.nav.setRoot(DecoPage);


      },
      (error) => {this.loggedUser = false;
      this.nav.setRoot(LoginPage);

      }

 
    );

  }
  clickfond(){
    this.boolean=false
    document.getElementById('pagesearch').style.display = "none";
    document.getElementById('fond').style.display = "none";
  }

  age = false ;
  clickage(){
    if(this.age==false){
      this.age=true
      this.categorie=false
      this.localisation=false

      document.getElementById('clickage').style.height = "80px";
      document.getElementById('clickage').style.transition = "1s";
      document.getElementById('clickcategorie').style.height = "0px";
      document.getElementById('clicklocalisation').style.height = "0px";
      this.tda="block"
      this.lie="none"
      this.test="none"
    }
    else{
      this.age=false
      document.getElementById('clickage').style.height = "0px";
      document.getElementById('clickage').style.transition = "1s";
      this.categorie=false
      this.localisation=false
      this.tda="none"



    }


  }

  categorie=false
clickcategorie(){
  if(this.categorie==false){
    this.categorie=true
    this.age=false
    this.localisation=false
    document.getElementById('clickcategorie').style.height = "80px";
    document.getElementById('clickcategorie').style.transition = "1s";   
    document.getElementById('clicklocalisation').style.height = "0px";
    document.getElementById('clickage').style.height = "0px";
    this.test="block";
    this.tda="none";
    this.lie="none"
  }
  else{
    this.categorie=false
    this.age=false
    this.localisation=false
    document.getElementById('clickcategorie').style.height = "0px";
    document.getElementById('clickcategorie').style.transition = "1s";
    this.test="none";
 
  }
  

}
localisation =false
clicklocalisation(){
  if(this.localisation==false){
    this.localisation=true
    document.getElementById('clicklocalisation').style.height = "80px";
    document.getElementById('clickcategorie').style.height = "0px";
    document.getElementById('clickage').style.height = "0px";
    document.getElementById('clicklocalisation').style.transition = "1s";
    document.getElementById('ploc').style.display = "block";
    this.lie="block";
    this.test="none";
    this.tda="none";

  }
  else{
    this.categorie=false
    this.age=false
    this.localisation=false
    document.getElementById('clicklocalisation').style.height = "0px";
    document.getElementById('clicklocalisation').style.transition = "1s";
    document.getElementById('ploc').style.display = "none";
    this.lie="none";


  }
}
agesearch=false
catsearch=false
locsearch=false
clickagesearch(){
  console.log('trolololo')
  if(this.agesearch==false){
    this.agesearch=true
    this.catsearch=false
    this.locsearch=false

    document.getElementById('clickag').style.height = "80px";
    document.getElementById('clickag').style.transition = "1s";
    document.getElementById('clickcategori').style.height = "0px";
    document.getElementById('clicklocalisatio').style.height = "0px";
  }
  else{
    this.agesearch=false
    document.getElementById('clickag').style.height = "0px";
    document.getElementById('clickag').style.transition = "1s";
    this.catsearch=false
    this.locsearch=false


  }


}

clickcatsearch(){
if(this.catsearch==false){
  this.catsearch=true
  this.agesearch=false
  this.locsearch=false
  document.getElementById('clickcategori').style.height = "80px";
  document.getElementById('clickcategori').style.transition = "1s";   
  document.getElementById('clicklocalisatio').style.height = "0px";
  document.getElementById('clickag').style.height = "0px";


}
else{
  this.catsearch=false
  this.agesearch=false
  this.locsearch=false
  document.getElementById('clickcategori').style.height = "0px";
  document.getElementById('clickcategori').style.transition = "1s";
;
}


}

clicklocsearch(){
if(this.locsearch==false){
  this.locsearch=true
  document.getElementById('clicklocalisatio').style.height = "80px";
  document.getElementById('clickcategori').style.height = "0px";
  document.getElementById('clickag').style.height = "0px";
  document.getElementById('clicklocalisatio').style.transition = "1s";
  document.getElementById('ploc').style.display = "block";

}
else{
  this.catsearch=false
  this.agesearch=false
  this.locsearch=false
  document.getElementById('clicklocalisatio').style.height = "0px";
  document.getElementById('clicklocalisatio').style.transition = "1s";
  document.getElementById('ploc').style.display = "none";

}

}


}
