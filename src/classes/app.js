import {Site} from "./site";
import {model} from "../model";
import {Sidebar} from "./sidebar";

export class App {

    start() {
        const site = new Site('#site')
        new Sidebar('#panel', newBlock => {
            model.push(newBlock)
            site.render(model)
        })
        site.render(model)
    }

}