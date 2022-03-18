const initialState = {
  banners: [
    {
      id: 1,
      title: "Hasta el 30% de descuento",
      content: "oferta limitada",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647098140/piccoletti/banner/cat-1_hq8iu2.jpg",
    },
    {
      id: 2,
      title: "Hasta el 20% de descuento",
      content: "oferta limitada",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647098139/piccoletti/banner/cat-2_cgsu0w.jpg",
    },
    {
      id: 3,
      title: "Hasta el 10% de descuento",
      content: "oferta limitada",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647098140/piccoletti/banner/cat-1_hq8iu2.jpg",
    },
    
  ],
  activeBanner: null,
};

export const bannerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
