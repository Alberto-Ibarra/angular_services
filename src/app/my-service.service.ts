import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MyService{
    getData(): string{
        return 'Hello World!'
    }
}