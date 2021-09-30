export interface Commande {
    id: any;
    liste: Liste;
    date:string;
    client: string;
    infoComplementaire: string;
  }

export interface Liste {
  nom: string;
  prix: string;
  quantite: string;
  unite: string;
}