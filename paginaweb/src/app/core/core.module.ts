import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { ListaPreciosComponent } from './lista-precios/lista-precios.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,  
        NavbarComponent, 
        MainComponent,
        ListaPreciosComponent,
        ProductosComponent,
        ContactoComponent,
        NosotrosComponent
    ],
    exports: [
        FooterComponent, 
        HeaderComponent, 
        NavbarComponent, 
        MainComponent,
        ListaPreciosComponent,
        ProductosComponent,
        ContactoComponent,
        NosotrosComponent
    ],
    imports: [RouterModule]
})
export class CoreModule { }