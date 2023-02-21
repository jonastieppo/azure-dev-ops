import {Request, Response} from 'express';
import {SideNavLinks, links} from '../src/app/models/sidenavlinks'


export function getAllLinks(req: Request, res: Response) {

    function generateItens (n : number) : SideNavLinks{
        let counter = 0;
        const sideNav : SideNavLinks = {links : []
                                        , mainArea:'Project 2020'
                                        }
        while(counter < n){
            sideNav.links.push(
                {
                    iconUrl : "https://www.svgrepo.com/show/453570/sheet-folded-table.svg"
                    ,id : counter+1
                    ,title : Math.random().toString(36).substring(2,5+2)
                }
            )
            counter++
        }
        return sideNav
    }
    res.status(200).json(generateItens(31));


}


