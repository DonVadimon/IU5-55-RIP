export type Car = {
    pk: number;
    name: string;
    price: number;
    description: string;
    main_image?: string;
    score: number;
    manufacturer: number;
};

export type CreateCarDto = Omit<Car, 'pk'>;

export type UpdateCarDto = Partial<Car>;
