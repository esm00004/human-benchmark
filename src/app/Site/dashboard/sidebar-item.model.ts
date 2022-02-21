export class SideBarItemModel {
    img: string;
    link: string;
    size: number;

    constructor (
        img: string,
        link: string,
        size: number
        ) {
            this.img = img;
            this.link = link;
            this.size = size;
    }
}