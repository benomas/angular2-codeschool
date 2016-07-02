import { bootstrap } from '@angular/platform-browser-dynamic';
import { bootstrap } from '@angular/platform-browser-dynamic';


@Component(
    {
        selector:'my-app',
        template:'<h1>{{title}}</h1>'
    });
class AppComponent
{
    title = 'Utra Raicing';

    carPart =
    {
        "id":1,
        "name":"Super Tires",
        "description":"These tires are the very best",

    }
}

bootstrap(AppComponent);