import type { TreeDataNode } from "antd";
import { BranchItemsType } from "../../Types/branchItems.type";

const treeData: BranchItemsType[] = [
  {
    title: "cars",
    key: "0-0",
    itemProps: {
      years: {
        value: [
          {
            subPropName: "годы выпуска",
            subPropText: "1908-н.в.",
            editable: true,
          },
        ],
        nameProp: "годы выпуска",
        editable: false,
      },
      productionCapacity: {
        value: [
          {
            subPropName: "темпы производства автомобилей",
            subPropText: "ок. 85 млн. шт. в год",
            editable: true,
          },
        ],
        nameProp: "темпы производства автомобилей",
        editable: true,
      },
      mostExpensive: {
        // value:
        //   "самым дорогим автомобилем является Rolls-Royce La Rose Noire Droptail. Его цена составляет более 30 млн $",
        value: [
          {
            subPropName: "цена самого дорогого автомобиля",
            subPropText:
              "самым дорогим автомобилем является Rolls-Royce La Rose Noire Droptail. Его цена составляет более 30 млн $",
            editable: false,
          },
        ],
        nameProp: "цена самого дорогого автомобиля",
        editable: true,
      },
    },
    children: [
      {
        title: "chevrolete",
        key: "0-0-0",
        itemProps: {
          years: {
            value: [
              {
                subPropName: "годы существования",
                subPropText: "1911-н.в.",
                editable: false,
              },
            ],
            nameProp: "годы существования",
            editable: false,
          },
          country: {
            value: [
              {
                subPropName: "страна производитель",
                subPropText: "США",
                editable: true,
              },
            ],
            nameProp: "страна-производитель",
            editable: true,
          },
        },
        children: [
          {
            title: "camaro",
            key: "0-0-0-0",
            itemProps: {
              years: {
                value: [
                  {
                    subPropName: "первое поколение",
                    subPropText: "1966—1969",
                    editable: true,
                  },
                  {
                    subPropName: "второе поколение",
                    subPropText: "1970—1981",
                    editable: true,
                  },
                  {
                    subPropName: "второе поколение",
                    subPropText: "1970—1981",
                    editable: true,
                  },
                  {
                    subPropName: "третье поколение",
                    subPropText: "1981—1992",
                    editable: true,
                  },
                  {
                    subPropName: "четвёртое поколение",
                    subPropText: "1993—2002",
                    editable: true,
                  },
                  {
                    subPropName: "пятое поколение",
                    subPropText: "2009—2015",
                    editable: false,
                  },
                  {
                    subPropName: "шестое поколение",
                    subPropText: "2015—2023",
                    editable: true,
                  },
                ],
                nameProp: "годы производства",
                editable: true,
              },
              power: {
                value: [
                  {
                    subPropName: "самый мощный из camaro",
                    subPropText: "1004 л.c., двигатель V8 объёмом 10,4л",
                    editable: true,
                  },
                  {
                    subPropName: "наименее мощный camaro",
                    subPropText: "88л.с., двигатель 2л",
                    editable: true,
                  },
                ],
                nameProp: "мощность",
                editable: true,
              },
            },
          },
          {
            title: "chevelle ss",
            key: "0-0-0-1",
            itemProps: {
              years: {
                value: [
                  {
                    subPropName: "годы производства",
                    subPropText: "1964-1978",
                    editable: true,
                  },
                ],
                nameProp: "годы производства",
                editable: true,
              },
              power: {
                value: [
                  {
                    subPropName: "мощность",
                    subPropText: "110-456 л.с.",
                    editable: true,
                  },
                ],
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
          years: {
            value: [
              {
                subPropName: "годы выпуска автомобилей",
                subPropText: "1914-н.в.",
                editable: true,
              },
            ],
            nameProp: "годы выпуска автомобилей",
            editable: false,
          },
          country: {
            value: [
              {
                subPropName: "страна производитель",
                subPropText: "США",
                editable: true,
              },
            ],
            nameProp: "страна-производитель",
            editable: true,
          },
        },
        children: [
          {
            title: "Viper",
            key: "0-0-1-0",
            children: [
              {
                title: "Viper SRT10(2008)",
                key: "0-0-1-0-0",
                children: [],
                itemProps: {
                  power: {
                    value: [
                      {
                        subPropName: "мощность",
                        subPropText: "608 л.с., двигатель V10",
                        editable: true,
                      },
                    ],
                    nameProp: "мощность",
                    editable: true,
                  },
                  description: {
                    value: [
                      {
                        subPropName: "описание",
                        subPropText:
                          "Dodge Viper (ˈvaɪpər) — спортивный автомобиль компании Dodge (подразделение Chrysler Corporation). Производство двухместного автомобиля началось в 1992 году на заводе New Mack Assembly. Прародителем и имеющий общие черты с Viper, как интерьера, так и экстерьера стал Dodge Stealth[источник не указан 2434 дня], он же Mitsubishi 3000GT, который был представлен годом ранее. К слову, дизайн обеих ранних культовых моделей принадлежит Тому Гейлу, который тогда возглавлял дизайнерский отдел Chrysler. В октябре 1995 года производство было перенесено на завод Conner Avenue Assembly, где и продолжалось до последнего времени. Автомобиль, а также его многочисленные модификации, часто можно увидеть в различных ТВ шоу, видео играх, фильмах и музыкальных клипах. С 2012 года автомобиль на правах флагмана перешёл под крыло отделения SRT, и до первой половины 2014 года обозначался как SRT Viper[1].",
                        editable: true,
                      },
                    ],
                    nameProp: "описание",
                    editable: true,
                  },
                  specifications: {
                    value: [
                      {
                        subPropName: "разгон до сотни",
                        subPropText: "3.8 секунды",
                        editable: true,
                      },
                      {
                        subPropName: "макс. крутящий момент",
                        subPropText: "759 Нм",
                        editable: true,
                      },
                      {
                        subPropName: "объём двигателя",
                        subPropText: "8.4л",
                        editable: false,
                      },
                    ],
                    nameProp: "характеристики",
                    editable: true,
                  },
                },
              },
            ],
            itemProps: {
              years: {
                // value: "1992-2017",
                value: [
                  {
                    subPropName: "годы производства",
                    subPropText: "1992-2017",
                    editable: true,
                  },
                ],
                nameProp: "годы производства",
                editable: true,
              },
              power: {
                value: [
                  {
                    subPropName: "мощность",
                    subPropText: "от 406 до 640 л.с.",
                    editable: true,
                  },
                ],
                nameProp: "мощность",
                editable: true,
              },
              description: {
                value: [
                  {
                    subPropName: "описание",
                    subPropText:
                      "Dodge Viper (ˈvaɪpər) — спортивный автомобиль компании Dodge (подразделение Chrysler Corporation). Производство двухместного автомобиля началось в 1992 году на заводе New Mack Assembly. Прародителем и имеющий общие черты с Viper, как интерьера, так и экстерьера стал Dodge Stealth[источник не указан 2434 дня], он же Mitsubishi 3000GT, который был представлен годом ранее. К слову, дизайн обеих ранних культовых моделей принадлежит Тому Гейлу, который тогда возглавлял дизайнерский отдел Chrysler. В октябре 1995 года производство было перенесено на завод Conner Avenue Assembly, где и продолжалось до последнего времени. Автомобиль, а также его многочисленные модификации, часто можно увидеть в различных ТВ шоу, видео играх, фильмах и музыкальных клипах. С 2012 года автомобиль на правах флагмана перешёл под крыло отделения SRT, и до первой половины 2014 года обозначался как SRT Viper[1].",
                    editable: true,
                  },
                ],
                nameProp: "описание",
                editable: true,
              },
            },
          },
          {
            title: "Challenger",
            key: "0-0-1-1",
            itemProps: {
              power: {
                value: [
                  {
                    subPropName: "мощность",
                    subPropText: "от 110 до 820 л.с.",
                    editable: true,
                  },
                ],
                nameProp: "мощность",
                editable: true,
              },
              b: {
                value: [
                  {
                    subPropName: "первое поколение",
                    subPropText: "1969-1974",
                    editable: true,
                  },
                  {
                    subPropName: "второе поколение",
                    subPropText: "1978—1983",
                    editable: true,
                  },
                  {
                    subPropName: "третье поколение",
                    subPropText: "2008—2023",
                    editable: true,
                  },
                ],
                nameProp: "годы производства",
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
          a: {
            // value: "1911-н.в.",
            value: [
              {
                subPropName: "годы производства",
                subPropText: "1911-н.в.",
                editable: true,
              },
            ],
            nameProp: "годы выпуска автомобилей",
            editable: true,
          },
          b: {
            value: [
              {
                subPropName: "страна производитель",
                subPropText: "США",
                editable: true,
              },
            ],
            nameProp: "страна-производитель",
            editable: true,
          },
        },
        children: [
          {
            title: "thunderburd",
            itemProps: {
              a: {
                // value: "1955 по 2005 годы",
                value: [
                  {
                    subPropName: "годы выпуска",
                    subPropText: "1955 по 2005 годы",
                    editable: true,
                  },
                ],
                nameProp: "годы выпуска",
                editable: true,
              },
              b: {
                // value: "4.4 млн",
                value: [
                  {
                    subPropName: "суммарный тираж",
                    subPropText: "4.4 млн",
                    editable: true,
                  },
                ],
                nameProp: "суммарный тираж",
                editable: true,
              },
              c: {
                value: [
                  {
                    subPropName: "мощность",
                    subPropText: "от 110 до 365 л. с.",
                    editable: true,
                  },
                ],
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
                value: [
                  {
                    subPropName: "годы выпуска",
                    subPropText: "1968 по 1976 годы",
                    editable: true,
                  },
                ],
                nameProp: "годы выпуска",
                editable: true,
              },
              b: {
                value: [
                  {
                    subPropName: "суммарный тираж",
                    subPropText: "2.3 млн",
                    editable: true,
                  },
                ],
                nameProp: "суммарный тираж",
                editable: true,
              },
              c: {
                value: [
                  {
                    subPropName: "мощность",
                    subPropText: "от 95 до 390 л. с.",
                    editable: true,
                  },
                ],
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
