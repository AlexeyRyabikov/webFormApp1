import type { TreeDataNode } from "antd";
import { BranchItemsType } from "../../Types/branchItems.type";

const treeData: BranchItemsType[] = [
  {
    title: "cars",
    key: "0-0",
    itemProps: {
      a: { value: "1908-н.в.", nameProp: "годы выпуска", editable: false },
      b: {
        value: "ок. 85 млн. шт. в год",
        nameProp: "темпы производства автомобилей",
        editable: true,
      },
      c: {
        value:
          "самым дорогим автомобилем является Rolls-Royce La Rose Noire Droptail. Его цена составляет более 30 млн $",
        nameProp: "цена самого дорогого автомобиля",
        editable: true,
      },
    },
    children: [
      {
        title: "chevrolete",
        key: "0-0-0",
        itemProps: {
          a: {
            value: "1911-н.в.",
            nameProp: "годы существования",
            editable: false,
          },
          b: { value: "США", nameProp: "страна-производитель", editable: true },
        },
        children: [
          {
            title: "camaro",
            key: "0-0-0-0",
            itemProps: {
              a: {
                value: "1966-2002,2009-н.в.",
                nameProp: "годы производства",
                editable: true,
              },
              b: {
                value: "88-650л.с.",
                nameProp: "мощность",
                editable: true,
              },
            },
          },
          {
            title: "chevelle ss",
            key: "0-0-0-1",
            itemProps: {
              a: {
                value: "1964-1978",
                nameProp: "годы производства",
                editable: true,
              },
              b: {
                value: "110-456 л.с.",
                nameProp: "мощность",
                editable: true,
              },
            },
          },
        ],
      },
      {
        title: "dodge",
        key: "0-0-1",
        itemProps: {
          a: {
            value: "1914-н.в.",
            nameProp: "годы выпуска автомобилей",
            editable: false,
          },
          b: { value: "США", nameProp: "страна-производитель", editable: true },
        },
        children: [
          {
            title: "Viper",
            key: "0-0-1-0",
            itemProps: {
              a: {
                value: "1992-2017",
                nameProp: "годы производства",
                editable: true,
              },
              b: {
                value: "от 406 до 640 л.с.",
                nameProp: "мощность",
                editable: true,
              },
              c: {
                value:
                  "Dodge Viper (ˈvaɪpər) — спортивный автомобиль компании Dodge (подразделение Chrysler Corporation). Производство двухместного автомобиля началось в 1992 году на заводе New Mack Assembly. Прародителем и имеющий общие черты с Viper, как интерьера, так и экстерьера стал Dodge Stealth[источник не указан 2434 дня], он же Mitsubishi 3000GT, который был представлен годом ранее. К слову, дизайн обеих ранних культовых моделей принадлежит Тому Гейлу, который тогда возглавлял дизайнерский отдел Chrysler. В октябре 1995 года производство было перенесено на завод Conner Avenue Assembly, где и продолжалось до последнего времени. Автомобиль, а также его многочисленные модификации, часто можно увидеть в различных ТВ шоу, видео играх, фильмах и музыкальных клипах. С 2012 года автомобиль на правах флагмана перешёл под крыло отделения SRT, и до первой половины 2014 года обозначался как SRT Viper[1].",
                nameProp: "описание",
                editable: true,
              },
            },
          },
          {
            title: "Challenger",
            key: "0-0-1-1",
            itemProps: {
              a: {
                value: "1969-2023",
                nameProp: "годы производства",
                editable: true,
              },
              b: {
                value: "от 110 до 820 л.с.",
                nameProp: "мощность",
                editable: true,
              },
            },
          },
        ],
      },
      {
        title: "ford",
        key: "0-0-2",
        itemProps: {
          a: { value: "1", nameProp: "ffff", editable: true },
          b: { value: "1", nameProp: "ffff", editable: true },
          c: { value: "1", nameProp: "ffff", editable: false },
        },
        children: [
          {
            title: "thunderburd",
            itemProps: {
              a: {
                value: "1955 по 2005 годы",
                nameProp: "годы выпуска",
                editable: true,
              },
              b: {
                value: "4.4 млн",
                nameProp: "суммарный тираж",
                editable: true,
              },
              c: {
                value: "от 110 до 365 л. с.,",
                nameProp: "мощность",
                editable: false,
              },
            },
            key: "0-0-2-0",
          },
          {
            title: "torino",
            itemProps: {
              a: {
                value: "1968 по 1976 годы",
                nameProp: "годы выпуска",
                editable: true,
              },
              b: {
                value: "2.3 млн",
                nameProp: "суммарный тираж",
                editable: true,
              },
              c: {
                value: "от 95 до 390 л. с.",
                nameProp: "мощность",
                editable: false,
              },
            },
            key: "0-0-2-1",
          },
        ],
      },
    ],
  },
];
const jSONTreeData = JSON.stringify(treeData);
export default jSONTreeData;
