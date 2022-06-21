export interface article {
    titreArticle: string
    Prix: Number
    Quantité: Number
    Couleur: string
    img: string
}
export class articlesModel {
    
    public titreArticle: string
    public Prix: string | Number
    public Quantité: string | Number
    public Couleur: string
    public img: string

    public constructor (titreArticle:string, Prix:Number, Quantité:Number, Couleur:string, img:string) {
        this.titreArticle= titreArticle
        this.Prix=Prix
        this.Quantité=Quantité
        this.Couleur=Couleur
        this.img=img
    }
}