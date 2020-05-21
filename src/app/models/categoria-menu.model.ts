
export interface Categoria{
    nombreCategoria: string;
    url: string;
    icon: string;
    titleList: TitleList[];
}

export interface TitleList{
    nombretitle: string;
    subcategorias: SubCategoria [];
}


export interface SubCategoria{
    nombreScategoria: string;
    url: string;
}