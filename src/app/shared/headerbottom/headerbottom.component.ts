import { Component, OnInit } from "@angular/core";
// Importamos router de Angular
import { Router, NavigationEnd } from "@angular/router";
@Component({
  selector: "app-headerbottom",
  templateUrl: "./headerbottom.component.html",
  styleUrls: ["./headerbottom.component.css"]
})
export class HeaderbottomComponent implements OnInit {
  bakcgroundImage: String;
  // Inyectamos router en el constructor
  constructor(public route: Router) {
    // Luego de inyectarlo en el constructor, creamos un metodo para suscribirse a los cambios de ruta.
    // Este método dispone de muchos eventos, ver: https://angular.io/api/router/Event
    this.route.events.subscribe(currentRouteData => {
      // En este caso nos importará el evento NavigationEnd, por lo que solo trabajaremos con ese
      // El mismo se dispará cuando la navegación finalizó su proceso
      // El if es necesario para obtener solamente la instancia de NavigationEnd y no todas las que se disparan
      if (currentRouteData instanceof NavigationEnd) {
        // Hacemos un log en consola para ver datos de esta instancia
        console.log("NavigationEnd:", currentRouteData.url);
        // Aplicamos la lógica correspondiente según queramos;
        this.changeHeaderData(currentRouteData.url);
      }
    });
  }

  ngOnInit() {}

  changeHeaderData(url) {
    const homeImg: String = "../../assets/images/home-bg.jpg";
    const aboutImg: String = "../../assets/images/about-bg.jpg";
    const postImg: String = "../../assets/images/post-bg.jpg";
    const contactImg: String = "../../assets/images/contact-bg.jpg";

    switch (url) {
      case "/home":
        this.bakcgroundImage = homeImg;
        break;
      case "/about":
        this.bakcgroundImage = aboutImg;
        break;
      case "/post":
        this.bakcgroundImage = postImg;
        break;
      case "/contact":
        this.bakcgroundImage = contactImg;
        break;
      default:
        this.bakcgroundImage = contactImg;
        break;
    }
  }
}