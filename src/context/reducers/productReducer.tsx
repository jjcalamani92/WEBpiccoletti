import { types } from "../types/types";
import nextId from "react-id-generator";
const initialState = {
  products: [
    {
      id: nextId(),
      title: "Chamarra Para Hombre Akiral - Gris",
      titleURL: "chamarra_para_hombre_akiral_gris",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449156/piccoletti/products/chamarras/item01/RA41589-2120-G03_3_jxv7lq.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449163/piccoletti/products/chamarras/item01/RA41589-2120-G03_8_jleyts.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg"
      ],
      description:
        "¡Cómoda y ligera! Esta Chamarra acolchada cuello alto, tiene bolsillos con cremallera para llevar tus objetos personales, además, cuenta con salida de audio y abertura en manga para mayor comodidad. Su relleno es en RPET, material reciclado de botellas plásticas.",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "chamarras",
      oldPrice: "560",
      price: "639"
    },
    {
      id: nextId(),
      title: "Chamarra Para Hombre Euralio",
      titleURL: "chamarra_para_hombre_euralio",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449209/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_1_itzp9p.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449218/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_2_fekz16.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449226/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_3_ll4gr4.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449233/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_7_ki2g82.jpg"
      ],
      description:
        "Diseño juvenil para llevar a todos lados, este estilo de Chamarra bomber, la puedes combinar con tus prendas favoritas. Cuenta con bolsillo interno y bolsillos en diferentes partes del diseño para llevar tus artículos personales.",
      dimensiones: "40[cm] * 32[cm] * 25[cm]",
      material: "madera pino procesada",
      category: "chamarras",
      oldPrice: "700",
      price: "599"
    },

    {
      id: nextId(),
      title: "Chamarra Para Hombre Euralio Black",
      titleURL: "chamarra_para_hombre_euralio_black",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449264/piccoletti/products/chamarras/item03/RA41600-2120-N01_1_lydnj8.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449273/piccoletti/products/chamarras/item03/RA41600-2120-N01_2_jppxln.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449284/piccoletti/products/chamarras/item03/RA41600-2120-N01_3_jzpp7s.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449295/piccoletti/products/chamarras/item03/RA41600-2120-N01_7_jjpy8g.jpg"
      ],
      description:
        "Diseño juvenil para llevar a todos lados, este estilo de Chamarra bomber, la puedes combinar con tus prendas favoritas. Cuenta con bolsillo interno y bolsillos en diferentes partes del diseño para llevar tus artículos personales.",
      dimensiones: "40[cm] * 32[cm] * 25[cm]",
      material: "madera pino procesada",
      category: "chamarras",
      oldPrice: "700",
      price: "599"
    },
    {
      id: nextId(),
      title: "Chamarra Para Hombre Itania",
      titleURL: "chamarra_para_hombre_itania",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449329/piccoletti/products/chamarras/item04/Chaqueta-Para-Hombre-Itania-Totto-Ra41596-2120-V22_1_fmzih6.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449391/piccoletti/products/chamarras/item04/Chaqueta-Para-Hombre-Itania-Totto-Ra41596-2120-V22_3_jjv57u.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449430/piccoletti/products/chamarras/item04/Chaqueta-Para-Hombre-Itania-Totto-Ra41596-2120-V22_5_bw7tbo.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449476/piccoletti/products/chamarras/item04/Chaqueta-Para-Hombre-Itania-Totto-Ra41596-2120-V22_8_w7ocad.jpg"
      ],
      description:
        "Para un estilo ligero y sport, esta Chamarra rompevientos tiene cremalleras impermeables, salida de audio para ir siempre con música y además, cuello alto que sirve como protector de naríz y boca. Su capota es ajustable con visera, tiene sistema de ventilación y bolsillos ocultos para llevar tus artículos de valor.",
      dimensiones: "40[cm] * 32[cm] * 25[cm]",
      material: "madera pino procesada",
      category: "chamarras",
      oldPrice: "700",
      price: "567"
    },
    {
      id: nextId(),
      title: "Chamarra Para Hombre Atlasi",
      titleURL: "chamarra_para_hombre_atlasi",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449509/piccoletti/products/chamarras/item05/Chaqueta-Para-Hombre-Atlasi-Totto-Ra41594-2120-Z50_1_aegjou.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449567/piccoletti/products/chamarras/item05/Chaqueta-Para-Hombre-Atlasi-Totto-Ra41594-2120-Z50_3_ynvkas.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449597/piccoletti/products/chamarras/item05/Chaqueta-Para-Hombre-Atlasi-Totto-Ra41594-2120-Z50_5_x7pxwi.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449629/piccoletti/products/chamarras/item05/Chaqueta-Para-Hombre-Atlasi-Totto-Ra41594-2120-Z50_8_sr2gvd.jpg"
      ],
      description:
        "¡Cómoda y ligera! Esta Chamarra viene en tejido impermeable/antifluido, cuenta con bolsillos en cremallera para llevar tus artículos personales. Tiene sistema de ventilación y cuello alto con capota.",
      dimensiones: "40[cm] * 32[cm] * 25[cm]",
      material: "madera pino procesada",
      category: "chamarras",
      oldPrice: "700",
      price: "569"
    },

    {
      id: nextId(),
      title: "Polera Para Hombre Atena 7",
      titleURL: "polera_para_hombre_atena_7",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129280/piccoletti/products/poleras/item09/RA46604-2127-V22_1_luslux.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129254/piccoletti/products/poleras/item09/RA46604-2127-V22_2_o2fgw5.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129280/piccoletti/products/poleras/item09/RA46604-2127-V22_1_luslux.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129254/piccoletti/products/poleras/item09/RA46604-2127-V22_2_o2fgw5.jpg"
      ],
      description: `Estos Leggins son de alto rendimiento y con materiales de última tecnología que favorecen un ajuste perfecto dando Push Up, Compresión ideal para tornear más las piernas y esconder la flacidez y/o celulitis. No se escurren, No se agrandan ni encogen ni deforman, no se transparentan ni se marcan las marcas del sudor, teniendo altísima respirabilidad.`,
      marca: "drakon",
      industria: "colombiana",

      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "poleras",
      oldPrice: "560",
      price: "370"
    },

    {
      id: nextId(),
      title: "Polo Mi Slim Fit Negro",
      titleURL: "polo_mi_slim_fit_negro",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128341/piccoletti/products/poleras/item03/RA46911-2124-G04_1_zfl17l.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128360/piccoletti/products/poleras/item03/RA46911-2124-G04_2_wcpiun.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128341/piccoletti/products/poleras/item03/RA46911-2124-G04_1_zfl17l.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128360/piccoletti/products/poleras/item03/RA46911-2124-G04_2_wcpiun.jpg"
      ],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "poleras",
      oldPrice: "560",
      price: "480"
    },
    {
      id: nextId(),
      title: "Leggins DRAKON LDK-062",
      titleURL: "leggins_drakon_ldk_062",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647103548/piccoletti/products/leggins/leggins_drakon_ldk_062/01.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647103566/piccoletti/products/leggins/leggins_drakon_ldk_062/02.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647103587/piccoletti/products/leggins/leggins_drakon_ldk_062/LDK-061B-1_ehhdal.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647103607/piccoletti/products/leggins/leggins_drakon_ldk_062/LDK-061C-1_is6dpw.jpg"
      ],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "leggins",
      oldPrice: "560",
      price: "480"
    },
    {
      id: nextId(),
      title: "Leggins DRAKON LDK-055",
      titleURL: "leggins_drakon_ldk_055",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647105125/piccoletti/products/leggins/item01/LDK-055P_mze9id.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647105159/piccoletti/products/leggins/item01/LDK-055A_agicra.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647105186/piccoletti/products/leggins/item01/LDK-055B_ggrf2o.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647105214/piccoletti/products/leggins/item01/LDK-055C_goauoi.jpg"
      ],
      description: `Estos Leggins son de alto rendimiento y con materiales de última tecnología que favorecen un ajuste perfecto dando Push Up, Compresión ideal para tornear más las piernas y esconder la flacidez y/o celulitis. No se escurren, No se agrandan ni encogen ni deforman, no se transparentan ni se marcan las marcas del sudor, teniendo altísima respirabilidad.`,
      marca: "drakon",
      industria: "colombiana",

      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "leggins",
      oldPrice: "560",
      price: "370"
    },
    {
      id: nextId(),
      title: "camisa DRAKONES",
      titleURL: "camisa_drakones",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647108542/piccoletti/products/camisas/item01/f-1-1_aq1kmg.png",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647108572/piccoletti/products/camisas/item01/f-1-2_auasvo.png",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647108627/piccoletti/products/camisas/item01/f-1-3_jyvtcj.png",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647108542/piccoletti/products/camisas/item01/f-1-1_aq1kmg.png"
      ],
      description: `Estos Leggins son de alto rendimiento y con materiales de última tecnología que favorecen un ajuste perfecto dando Push Up, Compresión ideal para tornear más las piernas y esconder la flacidez y/o celulitis. No se escurren, No se agrandan ni encogen ni deforman, no se transparentan ni se marcan las marcas del sudor, teniendo altísima respirabilidad.`,
      marca: "drakon",
      industria: "colombiana",

      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "camisas",
      oldPrice: "560",
      price: "370"
    },
    {
      id: nextId(),
      title: "Polera Para Hombre Mozartpro 3",
      titleURL: "polera_para_hombre_mozartpro_3",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647127762/piccoletti/products/poleras/item04/RA46911-2123-N01_1_psy5lv.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647127806/piccoletti/products/poleras/item04/RA46911-2123-N01_2_vdyxad.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647127762/piccoletti/products/poleras/item04/RA46911-2123-N01_1_psy5lv.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647127806/piccoletti/products/poleras/item04/RA46911-2123-N01_2_vdyxad.jpg"
      ],
      description: `Estos Leggins son de alto rendimiento y con materiales de última tecnología que favorecen un ajuste perfecto dando Push Up, Compresión ideal para tornear más las piernas y esconder la flacidez y/o celulitis. No se escurren, No se agrandan ni encogen ni deforman, no se transparentan ni se marcan las marcas del sudor, teniendo altísima respirabilidad.`,
      marca: "drakon",
      industria: "colombiana",

      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "poleras",
      oldPrice: "560",
      price: "370"
    },
    {
      id: nextId(),
      title: "Polera Para Hombre Volga",
      titleURL: "polera_para_hombre_volga",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128482/piccoletti/products/poleras/item05/Camiseta-Para-Hombre-Volga-Totto-Ra46624-2120-N01_1_inp9lz.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128500/piccoletti/products/poleras/item05/Camiseta-Para-Hombre-Volga-Totto-Ra46624-2120-N01_2_spuryn.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128513/piccoletti/products/poleras/item05/Camiseta-Para-Hombre-Volga-Totto-Ra46624-2120-N01_5_owobja.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128523/piccoletti/products/poleras/item05/Camiseta-Para-Hombre-Volga-Totto-Ra46624-2120-N01_7_ga4lnu.jpg"
      ],
      description: `Estos Leggins son de alto rendimiento y con materiales de última tecnología que favorecen un ajuste perfecto dando Push Up, Compresión ideal para tornear más las piernas y esconder la flacidez y/o celulitis. No se escurren, No se agrandan ni encogen ni deforman, no se transparentan ni se marcan las marcas del sudor, teniendo altísima respirabilidad.`,
      marca: "drakon",
      industria: "colombiana",

      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "poleras",
      oldPrice: "560",
      price: "370"
    },
    {
      id: nextId(),
      title: "Polera Para Hombre Mozartpro 2",
      titleURL: "polera_para_hombre_mozartpro_2",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128709/piccoletti/products/poleras/item06/RA46911-2122-N01_2_ifsotp.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128721/piccoletti/products/poleras/item06/RA46911-2122-N01_4_qao13t.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128709/piccoletti/products/poleras/item06/RA46911-2122-N01_2_ifsotp.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128721/piccoletti/products/poleras/item06/RA46911-2122-N01_4_qao13t.jpg"
      ],
      description: `Estos Leggins son de alto rendimiento y con materiales de última tecnología que favorecen un ajuste perfecto dando Push Up, Compresión ideal para tornear más las piernas y esconder la flacidez y/o celulitis. No se escurren, No se agrandan ni encogen ni deforman, no se transparentan ni se marcan las marcas del sudor, teniendo altísima respirabilidad.`,
      marca: "drakon",
      industria: "colombiana",

      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "poleras",
      oldPrice: "560",
      price: "370"
    },
    {
      id: nextId(),
      title: "Polera Para Hombre Set X 2 Mozav",
      titleURL: "polera_para_hombre_set_x_2_mozav",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128873/piccoletti/products/poleras/item07/RA46395-2120-BB1_1_vimggd.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128887/piccoletti/products/poleras/item07/RA46395-2120-BB1_2_snmb8z.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128903/piccoletti/products/poleras/item07/RA46395-2120-BB1_6_psivw7.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128919/piccoletti/products/poleras/item07/RA46395-2120-BB1_7_w5yteh.jpg"
      ],
      description: `Estos Leggins son de alto rendimiento y con materiales de última tecnología que favorecen un ajuste perfecto dando Push Up, Compresión ideal para tornear más las piernas y esconder la flacidez y/o celulitis. No se escurren, No se agrandan ni encogen ni deforman, no se transparentan ni se marcan las marcas del sudor, teniendo altísima respirabilidad.`,
      marca: "drakon",
      industria: "colombiana",

      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "poleras",
      oldPrice: "560",
      price: "370"
    },
    {
      id: nextId(),
      title: "Polera Para Hombre Mozartpro 5",
      titleURL: "polera_para_hombre_mozartpro_5",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129066/piccoletti/products/poleras/item08/RA46911-2125-R52_1_ojxrwp.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129087/piccoletti/products/poleras/item08/RA46911-2125-R52_2_csjf1m.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129109/piccoletti/products/poleras/item08/RA46911-2125-R52_7_ebxslp.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129066/piccoletti/products/poleras/item08/RA46911-2125-R52_1_ojxrwp.jpg"
      ],
      description: `Estos Leggins son de alto rendimiento y con materiales de última tecnología que favorecen un ajuste perfecto dando Push Up, Compresión ideal para tornear más las piernas y esconder la flacidez y/o celulitis. No se escurren, No se agrandan ni encogen ni deforman, no se transparentan ni se marcan las marcas del sudor, teniendo altísima respirabilidad.`,
      marca: "drakon",
      industria: "colombiana",

      color: "negro",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "poleras",
      oldPrice: "560",
      price: "370"
    },
    {
      id: nextId(),
      title: "Polo Mi Slim Fit Negro",
      titleURL: "polo_mi_slim_fit_negros",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647102096/piccoletti/products/shirts/item01/gallery-1_xzfuej.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647102125/piccoletti/products/shirts/item01/gallery-4_er89zp.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647102115/piccoletti/products/shirts/item01/gallery-3_mm0mmo.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647102105/piccoletti/products/shirts/item01/gallery-2_prw84p.jpg"
      ],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "poleras",
      oldPrice: "560",
      price: "480"
    },
    {
      id: nextId(),
      title: "Camisa Para Hombre Taly - Blanco",
      titleURL: "camisa_para_hombre_taly_blanco",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129799/piccoletti/products/camisas/item02/RA49201-2120-B01_1_omldvo.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129829/piccoletti/products/camisas/item02/RA49201-2120-B01_2_aybrkw.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129861/piccoletti/products/camisas/item02/RA49201-2120-B01_7_xu8n6p.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129799/piccoletti/products/camisas/item02/RA49201-2120-B01_1_omldvo.jpg"
      ],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "camisas",
      oldPrice: "560",
      price: "480"
    },
    {
      id: nextId(),
      title: "Camisa Para Hombre Porter",
      titleURL: "camisa_para_hombre_porter",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129958/piccoletti/products/camisas/item03/RA49141-2120-0H3_1_ouq1kq.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129994/piccoletti/products/camisas/item03/RA49141-2120-0H3_2_d6pczs.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647130031/piccoletti/products/camisas/item03/RA49141-2120-0H3_7_egfkf1.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129958/piccoletti/products/camisas/item03/RA49141-2120-0H3_1_ouq1kq.jpg"
      ],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "camisas",
      oldPrice: "560",
      price: "480"
    },
    {
      id: nextId(),
      title: "Pantalón Para Hombre Skintech",
      titleURL: "pantalon_para_hombre_skintech",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647452196/piccoletti/products/pantalones/item01/RA48254-2120-N01_1_oi0inv.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647452233/piccoletti/products/pantalones/item01/RA48254-2120-N01_2_y5q1ko.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647452309/piccoletti/products/pantalones/item01/RA48254-2120-N01_6_ldbun9.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647452270/piccoletti/products/pantalones/item01/RA48254-2120-N01_7_cmirua.jpg"
      ],
      description:
        "¡Recorre tu camino siempre cómodo y ligero! Este pantalon tiene tela 4 way strech y es tipo skinny, por lo que se adapta a tu cuerpo y a su vez, te brinda comodidad. ¡Crea tu propio estilo!",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "pantalones",
      oldPrice: "560",
      price: "376"
    },
    {
      id: nextId(),
      title: "Jogger Para Hombre Jix",
      titleURL: "jogger_para_hombre_jix",
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647452597/piccoletti/products/pantalones/item02/Jogger-Para-Hombre-Jix-Totto-Ra48588-2120-N01_1_ksrtsl.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647452644/piccoletti/products/pantalones/item02/Jogger-Para-Hombre-Jix-Totto-Ra48588-2120-N01_2_u1kk8m.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647452691/piccoletti/products/pantalones/item02/Jogger-Para-Hombre-Jix-Totto-Ra48588-2120-N01_5_bmadox.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647452740/piccoletti/products/pantalones/item02/Jogger-Para-Hombre-Jix-Totto-Ra48588-2120-N01_7_xbkqhm.jpg"
      ],
      description:
        "Para esos días en los que solo quieres utilizar ropa cómoda, este jogger tiene cintura y bota elástica. Su tela es tacto frio, lo que te permite sentir esa sensación de frescura, ligereza y confort. Tiene bolsillos laterales para llevar tus artículos de valor.",
      dimensiones: "25[cm] * 32[cm] * 18[cm]",
      material: "madera pino procesada",
      category: "pantalones",
      oldPrice: "560",
      price: "389"
    }
  ],
  activeProduct: null,
  index: 0
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.setImage:
      return {
        ...state,
        index: action.i
      };
    default:
      return state;
  }
};
