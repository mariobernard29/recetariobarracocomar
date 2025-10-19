document.addEventListener('DOMContentLoaded', () => {
    // Base de datos de recetas con imágenes
    const recetas = {
        "bebidas-sin-alcohol": {
            nombre: "Bebidas sin Alcohol",
            lista: [
                {
                    id: "limonada-natural",
                    nombre: "Limonada Natural",
                    imagen: "images/limonada-natural.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Agua Natural", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "limonada-mineral",
                    nombre: "Limonada Mineral",
                    imagen: "images/limonada-mineral.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Agua Mineral", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "limonada-de-pepino",
                    nombre: "Limonada de Pepino",
                    imagen: "images/limonada-de-pepino.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Concentrado Pepino", cantidad: "2", umed: "OZ" },
                        { nombre: "Agua Mineral o Natural", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "limonada-de-fresa",
                    nombre: "Limonada de Fresa",
                    imagen: "images/limonada-de-fresa.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Concentrado Fresa", cantidad: "2", umed: "OZ" },
                        { nombre: "Agua Mineral o Natural", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "horchata-de-coco",
                    nombre: "Horchata de Coco",
                    imagen: "images/horchata-de-coco.png",
                    ingredientes: [
                        { nombre: "Concentrado Horchata", cantidad: "4", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "2", umed: "OZ" },
                        { nombre: "Calahua", cantidad: "2", umed: "OZ" },
                        { nombre: "Leche Entera", cantidad: "2", umed: "OZ" },
                        { nombre: "Agua Natural", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Canela Entera", cantidad: "1", umed: "PZA" },
                        { nombre: "Coco Rayado", cantidad: "1", umed: "GRS" }
                    ],
                    preparacion: [
                        "Mezclar muy bien el concentrado de horchata.",
                        "Agregar hielo al vaso.",
                        "Agregar ingredientes y mezclar.",
                        "Decorar con canela y coco."
                    ]
                },
                {
                    id: "mocktail-de-frutos-rojos",
                    nombre: "Mocktail de Frutos Rojos",
                    imagen: "images/mocktail-de-frutos-rojos.png",
                    ingredientes: [
                        { nombre: "Sour Mix", cantidad: "3", umed: "OZ" },
                        { nombre: "Concentrado Frutos Rojos", cantidad: "2", umed: "OZ" },
                        { nombre: "Agua Mineral", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Brocheta Frutos Rojos", cantidad: "TOP", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar ingredientes y mezclar.",
                        "Decorar con brocheta de frutos rojos."
                    ]
                },
                 {
                    id: "limonadas-stevia",
                    nombre: "Limonadas con stevia",
                    imagen: "images/limonada-natural.png",
                    ingredientes: [
                        { nombre: "limon", cantidad: "1.5", umed: "OZ" },
                        { nombre: "Jarabe de stevia", cantidad: "1.5", umed: "OZ" },
                        { nombre: "Agua Natural o mineral", cantidad: "TOP", umed: "VASO" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" },
                        { nombre: "Consentrado (de ser necesario)", cantidad: "2", umed: "OZ" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Decorar con limón deshidratado."
                    ]
                },
                {
                    id: "pina-colada-sin-alcohol",
                    nombre: "Piña Colada (Sin Alcohol)",
                    imagen: "images/pina-colada-sin-alcohol.png",
                    ingredientes: [
                        { nombre: "Crema de Coco", cantidad: "2 1/2", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "2 1/2", umed: "OZ" },
                        { nombre: "Leche Entera", cantidad: "3", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "3/4", umed: "OZ" },
                        { nombre: "Granadina", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Incorporar los ingredientes en la licuadora junto con un vaso de hielo.",
                        "Mezclar hasta obtener una consistencia sólida.",
                        "Añadir granadina a la copa.",
                        "Verter el contenido en la copa.",
                        "Decorar con media naranja deshidratada y una hoja de hierbabuena."
                    ]
                },
                {
                    id: "clamato-preparado",
                    nombre: "Clamato Preparado",
                    imagen: "images/clamato-preparado.png",
                    ingredientes: [
                        { nombre: "Consentrado de michelada", cantidad: "4", umed: "OZ" },
                        { nombre: "Limon", cantidad: "1", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "Vaso" },
                        { nombre: "Apio", cantidad: "1", umed: "PZ" },
                        { nombre: "Clamato", cantidad: "1", umed: "TOP" }
                       
                    ],
                    preparacion: [
                        "Escarchar el vaso con limon y tajin.",
                        "Agregar hielo al vaso.",
                        "Agregar los ingredientes.",
                        "Mezclar hasta integrar.",
                        "Decorar con apio.",
                    ]
                }
            ]
        },
        "mixologia": {
            nombre: "Mixología de la Casa",
            lista: [
                {
                    id: "caballito-de-mar",
                    nombre: "Caballito de Mar",
                    imagen: "images/caballito-de-mar.png",
                    ingredientes: [
                        { nombre: "Vodka Oso Negro", cantidad: "2", umed: "OZ" },
                        { nombre: "Concentrado Fresa", cantidad: "2", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "3", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Limón Entero", cantidad: "1", umed: "PARTIDO EN 4" },
                        { nombre: "Hierbabuena", cantidad: "5", umed: "HOJAS" },
                        { nombre: "Agua Mineral", cantidad: "4", umed: "OZ" }
                    ],
                    preparacion: [
                        "Agregar un limón partido en 4, 5 hojas de hierbabuena y jarabe natural para machacar suave.",
                        "Agregar los demás ingredientes al shaker y agitar hasta que se enfríe el Boston Shake.",
                        "Agregar al tiki hielo nuevo y la bebida del shaker.",
                        "Agregar el agua mineral.",
                        "Agregar hielo molido por encima, hojas de hierbabuena y limón deshidratado para decorar."
                    ]
                },
                {
                    id: "el-pescado",
                    nombre: "El Pescado",
                    imagen: "images/el-pescado.png",
                    ingredientes: [
                        { nombre: "Mezcal Mitre", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Concentrado Frutos Rojos", cantidad: "2", umed: "OZ" },
                        { nombre: "Jarabe de Agave", cantidad: "1", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Sal de Gusano", cantidad: "1", umed: "GRS" },
                        { nombre: "Romero", cantidad: "1", umed: "PZA" },
                        { nombre: "Naranja Deshidratada", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes con hielo al Boston Shaker.",
                        "Mezclar hasta que el Boston se enfríe.",
                        "Agregar al vaso.",
                        "Decorar con naranja deshidratada con un romero cruzado."
                    ]
                },
                {
                    id: "el-tiburon",
                    nombre: "El Tiburón",
                    imagen: "images/el-tiburon.png",
                    ingredientes: [
                        { nombre: "Mezcal Mitre", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Sunset Mix", cantidad: "5", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe de Agave", cantidad: "1", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "GRS" },
                        { nombre: "Naranja Deshidratada", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al Boston Shaker y hielo.",
                        "Mezclar hasta que el shaker esté frío.",
                        "Agregar al vaso y top de hielo molido.",
                        "Agregar 1/2 rodaja de naranja deshidratada al vaso."
                    ]
                },
                {
                    id: "la-calavera",
                    nombre: "La Calavera",
                    imagen: "images/la-calavera.png",
                    ingredientes: [
                        { nombre: "Mezcal Mitre", cantidad: "2 1/2", umed: "OZ" },
                        { nombre: "Sirope Negro", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "3", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Jugo de Naranja", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe de Agave", cantidad: "1", umed: "OZ" },
                        { nombre: "Ginger Ale", cantidad: "2", umed: "OZ" },
                        { nombre: "Naranja Deshidratada", cantidad: "1", umed: "PZA" },
                        { nombre: "Hierbabuena", cantidad: "2", umed: "HOJAS" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielo a excepción del Ginger Ale.",
                        "Mezclar hasta que el shaker esté frío.",
                        "Rellenar con hielo molido y agregar el Ginger Ale top.",
                        "Decorar con la naranja deshidratada y hierba buena."
                    ]
                }
            ]
        },
        "cocteleria": {
            nombre: "Coctelería de la Casa",
            lista: [
                {
                    id: "zenith-tropical",
                    nombre: "Zenith Tropical",
                    imagen: "images/zenith-tropical.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "2", umed: "OZ" },
                        { nombre: "Mix Sunset", cantidad: "5", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1", umed: "OZ" },
                        { nombre: "Clara de Huevo", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Hierbabuena", cantidad: "5", umed: "HOJAS" },
                        { nombre: "Brocheta de Frutos Rojos", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielo y activar la hierbabuena.",
                        "Mezclar bien para que la clara de huevo espume.",
                        "Agregar a la copa.",
                        "Decorar con la brocheta de frutos rojos."
                    ]
                },
                {
                    id: "mango-mezcal",
                    nombre: "Mango Mezcal",
                    imagen: "images/mango-mezcal.png",
                    ingredientes: [
                        { nombre: "Mezcal", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Concentrado de Mango", cantidad: "2", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Miel de Agave", cantidad: "1", umed: "OZ" },
                        { nombre: "Sal de Gusano", cantidad: "1", umed: "GRS" },
                        { nombre: "Hierbabuena", cantidad: "5", umed: "HOJAS" },
                        { nombre: "Romero", cantidad: "1", umed: "PZA" },
                        { nombre: "Limón Deshidratado", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielo.",
                        "Mezclar hasta que el shaker se enfríe.",
                        "Agregar al vaso old fashioned escarchado de sal de gusano y verter la mezcla.",
                        "Decorar con limón deshidratado y romero."
                    ]
                },
                 {
                    id: "margarita-de-mango",
                    nombre: "Margarita de Mango",
                    imagen: "images/margarita-de-mango.png",
                    ingredientes: [
                        { nombre: "Tequila Jose Cuervo", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Licor Controy", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Concentrado de Mango", cantidad: "1", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielo.",
                        "Mezclar hasta que quede homogéneo.",
                        "Escarchar con sal y limón.",
                        "Agregar el contenido y decorar con limón deshidratado y hierbabuena."
                    ]
                },
                {
                    id: "daiquiri-sunset",
                    nombre: "Daiquiri Sunset",
                    imagen: "images/daiquiri-sunset.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "2", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "3", umed: "OZ" },
                        { nombre: "Concentrado de Mango", cantidad: "2", umed: "OZ" },
                        { nombre: "Jugo de Naranja", cantidad: "2", umed: "OZ" },
                        { nombre: "Controy", cantidad: "3/4", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes a la licuadora con un vaso con hielo.",
                        "Mezclar hasta generar consistencia sólida.",
                        "Agregar a la copa el contenido.",
                        "Decorar con limón deshidratado y mango en cubos."
                    ]
                },
                {
                    id: "mojito",
                    nombre: "Mojito",
                    imagen: "images/mojito.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "2", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "2", umed: "OZ" },
                        { nombre: "Hierbabuena", cantidad: "2", umed: "OZ" },
                        { nombre: "Limón Entero", cantidad: "2", umed: "PARTIDOS EN 4" },
                        { nombre: "Agua Mineral", cantidad: "TOP", umed: "OZ" }
                    ],
                    preparacion: [
                        "Activar 5 hojas de hierbabuena y añadirlas después de macerar el limón entero, partido en 4, junto con jugo de limón, ron y jarabe natural.",
                        "Machacar suavemente, intentando aplastar el limón sin dañar las hojas de hierbabuena.",
                        "Agregar hielo triturado hasta llenar el vaso (el hielo no muy triturado)",
                        "Cubrir con agua mineral y mezclar muy bien todos los ingredientes.",
                        "Decorar con 5 hojas de hierbabuena y rodajas de limón deshidratado."
                    ]
                },
                {
                    id: "pina-colada",
                    nombre: "Piña Colada",
                    imagen: "images/pina-colada.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Crema de Coco", cantidad: "2", umed: "OZ" },
                        { nombre: "Ron Malibu", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "2", umed: "OZ" },
                        { nombre: "Leche Evaporada", cantidad: "2", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "3/4", umed: "OZ" },
                        { nombre: "Granadina", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Incorporar los ingredientes en la licuadora junto con un vaso de hielo.",
                        "Mezclar hasta obtener una consistencia sólida.",
                        "Añadir granadina a la copa.",
                        "Verter el contenido en la copa.",
                        "Decorar con media naranja deshidratada y una hoja de hierbabuena."
                    ]
                },
                {
                    id: "blue-hawaiian",
                    nombre: "Blue Hawaiian",
                    imagen: "images/blue-hawaiian.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Crema de Coco", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Licor Curacao Azul", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "3", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "3/4", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker.",
                        "Mezclar hasta que el shaker esté frío.",
                        "Agregar a la copa y decorar con el garnish de naranja deshidratada."
                    ]
                },
                {
                    id: "miami-beach",
                    nombre: "Miami Beach",
                    imagen: "images/miami-beach.png",
                    ingredientes: [
                        { nombre: "Ron Bacardi Blanco", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Licor de Melon Midori", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jugo de Piña", cantidad: "1", umed: "OZ" },
                        { nombre: "Jugo de Limón", cantidad: "1/2", umed: "OZ" },
                        { nombre: "Jugo de Naranja", cantidad: "1", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1", umed: "OZ" },
                        { nombre: "Romero", cantidad: "1", umed: "PZA" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al vaso con hielo.",
                        "Mezclar los ingredientes hasta que se enfríe.",
                        "Agregar a un vaso con hielo nuevo.",
                        "Decorar con romero, una cereza enjuagada y naranja deshidratada."
                    ]
                },
                {
                    id: "carajillo",
                    nombre: "Carajillo",
                    imagen: "images/carajillo.png",
                    ingredientes: [
                        { nombre: "Licor 43", cantidad: "1 1/2", umed: "OZ" },
                        { nombre: "Cafe Expreso", cantidad: "2", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "VASO" }
                    ],
                    preparacion: [
                        "Agregar los ingredientes al shaker con hielos medianos.",
                        "Mezclar los ingredientes hasta que se enfríe.",
                        "Agregar a un vaso old fashion con hielo nuevo.",
                        "Decorar con dos granos de café entero."
                    ]
                },
                {
                    id: "perla-negra",
                    nombre: "Perla Negra",
                    imagen: "images/perla-negra.png",
                    ingredientes: [
                        { nombre: "Jägermeister", cantidad: "1.5", umed: "OZ" },
                        { nombre: "Red Bull", cantidad: "250", umed: "ML" }
                    ],
                    preparacion: [
                        "Añadir el Jäger a un shot.",
                        "Colocar el shot en un vaso old fashion sin derramar el Jäger.",
                        "Verter el Red Bull frío en el vaso."
                    ]
                },
                {
                    id: "aperol-sprits",
                    nombre: "Aperol Sprits",
                    imagen: "images/aperol-sprits.png",
                    ingredientes: [
                        { nombre: "Aperol", cantidad: "2", umed: "OZ" },
                        { nombre: "Proseco", cantidad: "4", umed: "OZ" },
                        { nombre: "Limon", cantidad: "3/4", umed: "OZ" },
                        { nombre: "Jarabe Natural", cantidad: "1", umed: "OZ" }
                    ],
                    preparacion: [
                        "Añadir los ingredientes a una copa con hielo.",
                        "Mezclar hasta que los ingredientes se integren.",
                        "Decorar con una rodaja de naranja deshidratada."
                    ]
                },
                 {
                    id: "clericot",
                    nombre: "clericot",
                    imagen: "images/aperol-sprits.png",
                    ingredientes: [
                        { nombre: "sour mix", cantidad: "3", umed: "OZ" },
                        { nombre: "agua mineral", cantidad: "4", umed: "OZ" },
                        { nombre: "Vino Tinto", cantidad: "2", umed: "OZ" },
                        { nombre: "Naranja deshidratada", cantidad: "1", umed: "PX" }
                    ],
                    preparacion: [
                        "Añadir los ingredientes esepto el vino a una copa con hielo.",
                        "Mezclar hasta que los ingredientes se integren.",
                        "Vertir el vino sin que se mezcle.",
                        "Decorar con una rodaja de naranja deshidratada."
                    ]
                },
                {
                    id: "negroni",
                    nombre: "Negroni",
                    imagen: "images/negroni.png",
                    ingredientes: [
                        { nombre: "Campari", cantidad: "1", umed: "OZ" },
                        { nombre: "Gin", cantidad: "1", umed: "OZ" },
                        { nombre: "Rosso", cantidad: "1", umed: "OZ" },
                        { nombre: "Hielo", cantidad: "1", umed: "TOP" },
                        { nombre: "Piel de naranja", cantidad: "1", umed: "PZ" }
                    ],
                    preparacion: [
                        "Añadir los ingredientes a un vaso roquero.",
                        "Porner la piel de naraja en el vaso y exprimir el zumo de ella."
                    ]
                }
            ]
        }
    };

    const params = new URLSearchParams(window.location.search);
    const categoriaId = params.get('categoria');
    const recetaId = params.get('receta');

    // Lógica para la página de lista de recetas (recetas.html)
    if (document.getElementById('recipe-list')) {
        const categoria = recetas[categoriaId];
        if (categoria) {
            document.getElementById('category-title').textContent = categoria.nombre;
            const recipeList = document.getElementById('recipe-list');
            categoria.lista.forEach(receta => {
                const link = document.createElement('a');
                link.href = `receta-individual.html?categoria=${categoriaId}&receta=${receta.id}`;
                link.className = 'recipe-card';
                link.textContent = receta.nombre;
                recipeList.appendChild(link);
            });
        }
    }

    // Lógica para la página de receta individual (receta-individual.html)
    if (document.getElementById('recipe-name')) {
        const categoria = recetas[categoriaId];
        const receta = categoria ? categoria.lista.find(r => r.id === recetaId) : null;
        
        // **NUEVA LÓGICA PARA CARGAR LA IMAGEN**
        const recipeImageEl = document.getElementById('recipe-image-placeholder');

        if (receta && recipeImageEl) {
            // Cargar la imagen
            recipeImageEl.src = receta.imagen;
            recipeImageEl.alt = receta.nombre;

            // Cargar el resto de la información
            document.getElementById('back-to-recipes').href = `recetas.html?categoria=${categoriaId}`;
            document.getElementById('recipe-name').textContent = receta.nombre;

            const ingredientsBody = document.getElementById('ingredients-body');
            receta.ingredientes.forEach(ing => {
                const row = ingredientsBody.insertRow();
                row.innerHTML = `<td>${ing.nombre}</td><td>${ing.cantidad}</td><td>${ing.umed}</td>`;
            });

            const methodSteps = document.getElementById('method-steps');
            receta.preparacion.forEach(paso => {
                const li = document.createElement('li');
                li.textContent = paso;
                methodSteps.appendChild(li);
            });
        }
    }

});



