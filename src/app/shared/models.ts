export type Perfume = {
    id: number,
    name?: string,
    family?: string,
    notes?: string,
    image?: string,
    price?: number
}

export type Ingredient = {
    id: number,
    name?: string,
    image?: string
}

export type CustomFragrance = {
    id?: number,
    name?: string,
    ingredients?: Ingredient[],
    price?: number

}


export type User = {
    id?: number,
    name?: string,
    emailAddress?: string,
    type?: string,
}

export type UserCartItem = {
    user?: User,
    perfume?: Perfume,
    customFragrance?: CustomFragrance,
    quantity?: number

}
