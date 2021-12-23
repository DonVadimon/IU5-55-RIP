export type Manufacturer = {
    pk: number;
    name: string;
};

export type CreateManufacturerDto = Omit<Manufacturer, 'pk'>;

export type UpdateManufacturerDto = Partial<Manufacturer>;
