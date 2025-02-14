export declare class CreateCarDto {
    readonly brand: string;
    readonly car_model: string;
    readonly year: number;
    readonly type: string;
    readonly price: number;
    readonly colors: {
        name: string;
        image: string;
        stock: number;
    }[];
    readonly features: string[];
}
