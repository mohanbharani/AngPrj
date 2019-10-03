export class Recipe {

    public Name: string;
    public Description: string;
    public ImagePath: string;


    constructor(name: string, desc: string, imgPath: string){

        this.Name = name;
        this.Description = desc;
        this.ImagePath = imgPath;
    }
}