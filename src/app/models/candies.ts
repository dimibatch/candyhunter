export interface Candy {
    productName:  string[];
    imgUrl:       string[];
    candyId:      string[]; 
}

export class Candies implements Candy{
    productName:  string[];
    imgUrl:       string[];
    candyId:      string[]; 
    collected: boolean[];
}
