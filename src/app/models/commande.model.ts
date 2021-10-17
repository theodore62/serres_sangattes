export interface Commande {
    id: any;
    numero: string;
    liste: Liste;
    date: string;
    nom: string;
    client: string;
    infoComplementaire: string;
    archive: boolean;
  }

export interface Liste {
  nom: string;
  prix: string;
  quantite: string;
  unite: string;
}