import { CategoryLayout } from "../../layouts/category/CategoryLayout";
import {
  HeadingPrimary,
  HeadingSecondary
} from "../../layouts/heading/HeadingLayouts";
import { ProductComponent } from "../product/ProductComponent";
import { StoreComponent } from "./StoresComponent";

export const StorePages = () => {
  return (
    <>
      <HeadingPrimary titleP="Nuestra tienda" />
      <HeadingSecondary title="Nuestras categorias" category="#" />
      <CategoryLayout />

      <HeadingSecondary title="poleras" category="/poleras" />
      <StoreComponent category="poleras" categoryTitle="" />

      <HeadingSecondary title="leggins" category="/leggins" />
      <StoreComponent category="leggins" categoryTitle="" />

      <HeadingSecondary title="camisas" category="/camisas" />
      <StoreComponent category="camisas" categoryTitle="" />

      <HeadingSecondary title="chamarras" category="/chamarras" />
      <StoreComponent category="chamarras" categoryTitle="" />

      <HeadingSecondary title="pantalones" category="/pantalones" />
      <StoreComponent category="pantalones" categoryTitle="" />
    </>
  );
};
