// 1. Definimos la entrada de los menús de desayuno, comida y cena:

const menuDesayuno = {
  primero: [
    { plato: 'Tostadas', precio: 1.70 },
    { plato: 'Sandwich', precio: 1.60 },
    { plato: 'Pincho de tortilla', precio: 2.10 }
  ],
  segundo: [
    { plato: 'Cereales con kéfir', precio: 1.80 },
    { plato: 'Fruta', precio: 1.20 },
    { plato: 'Bizcocho', precio: 1.60 }
  ],
  postre: [
    { plato: 'Zumo', precio: 1.20 },
    { plato: 'Café', precio: 1.40 },
    { plato: 'Colacao', precio: 1.50 }
  ]
};

const menuComida = {
  primero: [
      { plato: 'Crema de verduras', precio: 3.10 },
      { plato: 'Ensalada César', precio: 3.0 },
      { plato: 'Tallarines salteados', precio: 3.80 },
    ],
    segundo: [
      { plato: 'Albóndigas', precio: 5.80 },
      { plato: 'Pescado', precio: 5.20 },
      { plato: 'Pollo estofado', precio: 5.00 }
    ],
    postre: [
      { plato: 'Yogur', precio: 1.10 },
      { plato: 'Natillas', precio: 1.00 },
      { plato: 'Fruta', precio: 1.30 }
    ]
};

const menuCena = {
  primero: [
      { plato: 'Pasta a la carbonara', precio: 3.90 },
      { plato: 'Menestra de verduras', precio: 2.80 },
      { plato: 'Ensalada de la casa', precio: 3.00 },
    ],
    segundo: [
      { plato: 'Ternera con verduras', precio: 7.40 },
      { plato: 'Lubina', precio: 7.80 },
      { plato: 'Pollo a la plancha', precio: 6.60 }
    ],
    postre: [
      { plato: 'Flan', precio: 1.90 },
      { plato: 'Macedonia', precio: 2.00 },
      { plato: 'Arroz con leche', precio: 2.30 }
    ]
};


// 2. Definimos una función que me permita mostrar el menú completo con los precios de cada plato dependiendo de la hora:

function printMenu(menu) {
  return menu.map(item => `- ${item.plato} - €${item.precio.toFixed(2)}`).join("\n");
}


// 3. Definimos los comentarios aleatorios que se añadirán tras seleccionar cada plato:

const comments = [
  "¡Maravilosa selección!",
  "¡Muy buena opción!",
  "¡Simplemente delicioso!",
  "¡Uno de los platos más solicitados de la casa!",
  "¡Buenísimo!",
  "¡Nuestra especialidad!",
  "¡Estupenda selección!"
];


// 4. Definimos la función que nos permitirá añadir un comentario aleatorio después de la selección del comensal:

function getRandomComment() {
  return comments[Math.floor(Math.random() * comments.length)];
}

// 5. Definimos una función que convierta las entradas del prompt en minúscula para evitar el case-sensitive al digitar el nombre del plato:

function getItemByName(menu, name) {
  return menu.find(item => item.plato.toLowerCase() === name.toLowerCase());
}


// 6. Mostramos las opciones de cada plato para que el comensal elija:

function promptForSelection(menu, menuName) {
  let selection;
  let item;
  do {
      selection = prompt(`¿Qué desea ordenar de ${menuName}? Ingresa el nombre del producto:\n${printMenu(menu)}`);
      item = getItemByName(menu, selection);
      if (!item) {
          alert("Lo siento pero ese plato no lo tenemos en la carta.\n\nPor favor, dame una opción válida que esté incluída en nuestro menú.");
      }
  } while (!item);
  alert(`${getRandomComment()}\n\nHas seleccionado: ${item.plato} - €${item.precio.toFixed(2)}`);
  return item;
}


// 7. Definimos la función que suma los precios de mi selección y me devuelve una factura que se muestra al final.
// Definida dentro del condicional.
  

// 8. Ponemos un comentario aleatorio al final para despedir al comensal:

const despedirse = [
  "¡Esperamos que haya sido una experiencia placentera!",
  "¡Espero que todo haya sido de su agrado!",
  "¡Gracias y vuelva pronto!",
  "¡Nos ha encantado tenerle con nosotros, regrese!",
  "¡Esperamos que todo haya estado a su gusto!",
  "¡Gracias por su visita!",
];

function getRandomComment2() {
  return despedirse[Math.floor(Math.random() * despedirse.length)];
}



// Bienvenida al restaurante

alert('Bienvenido!\n\nRestaurante DevCamp: El código del sabor');

// Solicitar al usuario que ingrese la hora
let hora = prompt("Nuestro horario de cocina es de 8:00 22:00.\n\nPor favor, ingresa la hora actual en formato 24 horas.\n\n(por ejemplo, 15 para las 3 PM):");

// Convertir la entrada a un número
hora = parseInt(hora);

// Verificar si la entrada es válida
if (isNaN(hora) || hora < 8 || hora > 22) {
  alert("Por favor, ingresa una hora válida entre 8 y 22.");
  

} else {
  // Ofrecer un menú diferente dependiendo de la hora
  // let menu;
  if (hora >= 8 && hora < 12) {
      // menu = "¡Buenos días! Aquí está tu menú de desayuno";
    alert("¡Buenos días! Aquí está tu menú de desayuno");

// Muestra el menú completo al cliente con los precios:
function desayuno() {
  const fullMenu = `MENÚ DE DESAYUNO
  
Primer plato:
${printMenu(menuDesayuno.primero)}
  
Segundo plato:
${printMenu(menuDesayuno.segundo)}
  
Bebida:
${printMenu(menuDesayuno.postre)}
  `;

  alert(fullMenu);
}
  desayuno();

    const selectedPrimero = promptForSelection(menuDesayuno.primero, 'Primer Plato');
    const selectedSegundo = promptForSelection(menuDesayuno.segundo, 'Segundo Plato');
    const selectedPostre = promptForSelection(menuDesayuno.postre, 'Bebida');

    const totalCost = selectedPrimero.precio + selectedSegundo.precio + selectedPostre.precio;

    const billSummary = `
    FACTURA DE COMPRA SIMPLIFICADA:

    Primero: ${selectedPrimero.plato} - €${selectedPrimero.precio.toFixed(2)}
    Segundo: ${selectedSegundo.plato} - €${selectedSegundo.precio.toFixed(2)}
    Bebida: ${selectedPostre.plato} - €${selectedPostre.precio.toFixed(2)}
    ------------------------------
    Total: €${totalCost.toFixed(2)} (IVA INCLUÍDO)
    `;

    alert(billSummary);
    alert(`${getRandomComment2()}`);
    console.log(billSummary); // Se imprime en pantalla la factura para nuestro registro.
    
    
  } else if (hora >= 12 && hora < 18) {
      // menu = "¡Buenas tardes! Aquí está tu menú de comida";
    alert("¡Buenas tardes! Aquí está tu menú de comida");
    
function comida() {
  const fullMenu = `MENÚ DE COMIDA
  
Primer plato:
${printMenu(menuComida.primero)}
  
Segundo plato:
${printMenu(menuComida.segundo)}
  
Postre:
${printMenu(menuComida.postre)}
  `;

  alert(fullMenu);
}
  comida();

    const selectedPrimero = promptForSelection(menuComida.primero, 'Primer Plato');
    const selectedSegundo = promptForSelection(menuComida.segundo, 'Segundo Plato');
    const selectedPostre = promptForSelection(menuComida.postre, 'Postre');
    
    const totalCost = selectedPrimero.precio + selectedSegundo.precio + selectedPostre.precio;

    const billSummary = `
    FACTURA DE COMPRA SIMPLIFICADA:

    Primero: ${selectedPrimero.plato} - €${selectedPrimero.precio.toFixed(2)}
    Segundo: ${selectedSegundo.plato} - €${selectedSegundo.precio.toFixed(2)}
    Postre: ${selectedPostre.plato} - €${selectedPostre.precio.toFixed(2)}
    ------------------------------
    Total: €${totalCost.toFixed(2)} (IVA INCLUÍDO)
    `;

    alert(billSummary);
    alert(`${getRandomComment2()}`);
    console.log(billSummary); // Se imprime en pantalla la factura para nuestro registro.
    
    
  } else {
      // menu = "¡Buenas noches! Aquí está tu menú de cena:";
      
    alert("¡Buenas noches! Aquí está tu menú de cena");
    
function cena() {
  const fullMenu = `MENÚ DE CENA
  
Primer plato:
${printMenu(menuCena.primero)}
  
Segundo plato:
${printMenu(menuCena.segundo)}
  
Postre:
${printMenu(menuCena.postre)}
  `;

  alert(fullMenu);
}
  cena();

    const selectedPrimero = promptForSelection(menuCena.primero, 'Primer Plato');
    const selectedSegundo = promptForSelection(menuCena.segundo, 'Segundo Plato');
    const selectedPostre = promptForSelection(menuCena.postre, 'Postre');
    
    const totalCost = selectedPrimero.precio + selectedSegundo.precio + selectedPostre.precio;

    const billSummary = `
    FACTURA DE COMPRA SIMPLIFICADA:

    Primero: ${selectedPrimero.plato} - €${selectedPrimero.precio.toFixed(2)}
    Segundo: ${selectedSegundo.plato} - €${selectedSegundo.precio.toFixed(2)}
    Postre: ${selectedPostre.plato} - €${selectedPostre.precio.toFixed(2)}
    ------------------------------
    Total: €${totalCost.toFixed(2)} (IVA INCLUÍDO)
    `;

    alert(billSummary);
    alert(`${getRandomComment2()}`);
    console.log(billSummary); // Se imprime en pantalla la factura para nuestro registro.
    
  }

}