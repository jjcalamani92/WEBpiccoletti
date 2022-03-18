const initialState = {
  categories: [
    {
      id: 0,
      title: "poleras",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647102547/piccoletti/catetgory/1867565_zxlevb.png",
    },
    {
      id: 1,
      title: "camisetas",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099576/piccoletti/catetgory/2957379_dqbaud.png",
    },
    {
      id: 2,
      title: "vestidos",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099598/piccoletti/catetgory/1785375_ync0oq.png",
    },
    {
      id: 3,
      title: "ropa de niño",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099606/piccoletti/catetgory/2123076_owhhls.png",
    },
    {
      id: 4,
      title: "camisas",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099613/piccoletti/catetgory/1749000_u8wcue.png",
    },
    {
      id: 5,
      title: "sudadera",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099620/piccoletti/catetgory/2160939_ejz2md.png",
    },
    {
      id: 6,
      title: "chamarras",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099628/piccoletti/catetgory/3797202_fg789z.png",
    },
    {
      id: 7,
      title: "gorras",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099691/piccoletti/catetgory/1974158_wwx7vd.png",
    },
    {
      id: 8,
      title: "sombrero para varon",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099718/piccoletti/catetgory/2790087_iwwfln.png",
    },
    {
      id: 9,
      title: "sombrero para mujer",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099730/piccoletti/catetgory/4335033_dwgas2.png",
    },
    {
      id: 10,
      title: "leggins",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647130725/piccoletti/catetgory/3937647_nhdvgu.png",
    },
    {
      id: 11,
      title: "zapatos",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647130765/piccoletti/catetgory/860895_uj1rtv.png",
    },
    
    
  ],
  activeCategory: null,
};

export const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
