import { TroupeauServiceService } from "../services/troupeau/troupeau-service.service";
import { IEntree } from "./entree.model";
import { ITroupeau } from "./troupeau.model";

export interface IAnimal {
    id: number,
    reference: string,
    nom: string
    entree:IEntree,
}