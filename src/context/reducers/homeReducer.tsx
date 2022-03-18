const initialState = {
  sliders: [
    {
      id: 1,
      title: "Venta Hasta 50% De Descuento",
      content: "oferta especial",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647097427/piccoletti/home/home-img_hiqbzl.png",
    },
    {
      id: 2,
      title: "Venta Hasta 50% De Descuento",
      content: "oferta especial",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647097427/piccoletti/home/home-img_hiqbzl.png",
    },
    {
      id: 3,
      title: "Venta Hasta 50% De Descuento",
      content: "oferta especial",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647097427/piccoletti/home/home-img_hiqbzl.png",
    },
  ],
  activeSlider: null,
};

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
