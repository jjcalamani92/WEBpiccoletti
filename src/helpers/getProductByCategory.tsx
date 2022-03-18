export const getProductByCategory = (products: any, category: any) => {
  const validCategory = [
    "poleras",
    "leggins",
    "camisas",
    "chamarras",
    "pantalones",
    "correctores",
    "bases-de-maquillaje",
    "para-la-cocina",
    "para-el-escritorio",
    "para-el-hogar",
    "muebles",
    "peluches",
    "joyeros"
  ];
  if (!validCategory.includes(category)) {
    throw new Error(`Tipo de categoria '${category}' no es correcto`);
  }
  return products.filter(
    (product: { category: any }) => product.category === category
  );
};
