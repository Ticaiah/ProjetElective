export interface IArticle {
    titreArticle: string
    Prix: Number
    Quantité: Number
    Couleur: string
    img: string
    _id : string
}
export class articlesModel {
    
    public titreArticle: string
    public Prix: string | Number
    public Quantité: string | Number
    public Couleur: string
    public img: string
    public _id !: string

    public constructor (titreArticle:string = "Title", Prix:Number=0, Quantité:Number=0, Couleur:string="", img:string="") {
        this.titreArticle= titreArticle
        this.Prix=Prix
        this.Quantité=Quantité
        this.Couleur=Couleur
        this.img=img
    }
}