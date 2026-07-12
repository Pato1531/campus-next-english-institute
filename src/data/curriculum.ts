// src/data/curriculum.ts
// Fuente única de verdad del contenido de cada curso: portada, módulos y lecciones.
// Mismo espíritu que elearningCourses.ts: agregar contenido = agregar datos acá,
// sin tocar componentes ni rutas.
//
// CÓMO COMPLETAR: reemplazá cada 'COMPLETAR_*' por el contenido real. No cambies
// los 'id' de las lecciones una vez que haya alumnos con progreso guardado — son
// la referencia estable que usa progreso_lecciones en Supabase.

export interface OpcionPregunta {
  texto: string;
  correcta: boolean;
}

export interface Pregunta {
  id: string;
  enunciado: string;
  opciones: OpcionPregunta[];
}

export interface Leccion {
  id: string;
  titulo: string;
  videoUrl: string;
  pdfUrl: string;
  orden: number;
  // Opcional a propósito: mientras no se cargue el mini test de una lección,
  // el campus muestra el botón manual de "marcar como completada" como
  // fallback. En cuanto se agregan preguntas acá, el test la reemplaza.
  preguntas?: Pregunta[];
}

export interface Modulo {
  id: string;
  titulo: string;
  orden: number;
  lecciones: Leccion[];
}

export interface CursoCurriculum {
  cursoSlug: string;
  titulo: string;
  nivel: string;
  modulos: Modulo[];
}

export const curriculum: CursoCurriculum[] = [
  {
    cursoSlug: "english-for-tourism",
    titulo: "English for Tourism",
    nivel: "A1-B1",
    modulos: [
      {
        id: "tourism-m1",
        titulo: "Módulo 1 · At the Airport",
        orden: 1,
        lecciones: [
          {
            id: "tourism-m1-l1",
            titulo: "Check-in & Baggage",
            videoUrl: "https://youtu.be/yIhPjHGWTWc",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m1l1-material.pdf",
            orden: 1,
            preguntas: [
              {
                id: "tourism-m1-l1-p1",
                enunciado: "¿Cómo se dice 'tarjeta de embarque' en inglés?",
                opciones: [
                  { texto: "Luggage", correcta: false },
                  { texto: "Boarding pass", correcta: true },
                  { texto: "Carry-on bag", correcta: false },
                  { texto: "Passport", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l1-p2",
                enunciado: "¿Qué frase usás para decir que tenés una valija para facturar?",
                opciones: [
                  { texto: "I'd like a window seat, please.", correcta: false },
                  { texto: "Here is my passport.", correcta: false },
                  { texto: "I have one suitcase to check in.", correcta: true },
                  { texto: "Is my flight on time?", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l1-p3",
                enunciado: "¿En inglés británico, qué palabra se usa con más frecuencia para decir 'equipaje'?",
                opciones: [
                  { texto: "Baggage", correcta: false },
                  { texto: "Suitcase", correcta: false },
                  { texto: "Luggage", correcta: true },
                  { texto: "Bags", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l1-p4",
                enunciado: "¿El empleado te dice: \"Would you like a window or an aisle seat?\" Qué te está preguntando?",
                opciones: [
                  { texto: "Si tenés equipaje para facturar.", correcta: false },
                  { texto: "Si preferís asiento ventana o pasillo.", correcta: true },
                  { texto: "Si tu vuelo está a horario.", correcta: false },
                  { texto: "Si podés mostrar tu pasaporte.", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l1-p5",
                enunciado: "¿Completá la frase: \"________ my passport. Here it is.\"",
                opciones: [
                  { texto: "There is", correcta: false },
                  { texto: "Here is", correcta: true },
                  { texto: "This is", correcta: false },
                  { texto: "That is", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l1-p6",
                enunciado: "¿Cómo preguntás si tu vuelo está a horario?",
                opciones: [
                  { texto: "Is my flight on time?", correcta: true },
                  { texto: "Where is my boarding pass?", correcta: false },
                  { texto: "Can I check in my luggage?", correcta: false },
                  { texto: "What seat do I have?", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l1-p7",
                enunciado: "¿Traducí al inglés: \"Quisiera hacer el check-in, por favor.\"",
                opciones: [
                  { texto: "I want the check-in.", correcta: false },
                  { texto: "I'd like to check in, please.", correcta: true },
                  { texto: "Please check me in.", correcta: false },
                  { texto: "Can you check in me?", correcta: false },
                ],
              },
            ],
          },
          {
            id: "tourism-m1-l2",
            titulo: "Security & Immigration",
            videoUrl: "https://youtu.be/FgDM1NIhaJs",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m1l2-material.pdf",
            orden: 2,
            preguntas: [
              {
                id: "tourism-m1-l2-p1",
                enunciado: "¿Qué significa 'Security check'?",
                opciones: [
                  { texto: "Control de inmigración", correcta: false },
                  { texto: "Puerta de embarque", correcta: false },
                  { texto: "Control de seguridad", correcta: true },
                  { texto: "Formulario de declaración", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l2-p2",
                enunciado: "¿El personal te dice: \"Please remove your shoes and belt.\" Qué tenés que hacer?",
                opciones: [
                  { texto: "Mostrar tu pasaporte.", correcta: false },
                  { texto: "Sacar los zapatos y el cinturón.", correcta: true },
                  { texto: "Poner la computadora en una bandeja.", correcta: false },
                  { texto: "Pasar por el escáner.", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l2-p3",
                enunciado: "¿Qué significa 'Nothing to declare'?",
                opciones: [
                  { texto: "No tenés pasaporte.", correcta: false },
                  { texto: "No tenés equipaje.", correcta: false },
                  { texto: "No llevás productos para declarar en aduana.", correcta: true },
                  { texto: "No tenés vuelo de regreso.", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l2-p4",
                enunciado: "¿El oficial te pregunta: \"What is the purpose of your visit?\" Cómo respondés si estás de vacaciones?",
                opciones: [
                  { texto: "I'm here on business.", correcta: false },
                  { texto: "I'm staying for one week.", correcta: false },
                  { texto: "I'm here on holiday.", correcta: true },
                  { texto: "I'm at a hotel in the city.", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l2-p5",
                enunciado: "¿Cómo decís que te vas a quedar dos semanas?",
                opciones: [
                  { texto: "I'm staying at a hotel.", correcta: false },
                  { texto: "Two weeks.", correcta: true },
                  { texto: "I'm here for business.", correcta: false },
                  { texto: "My flight is on time.", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l2-p6",
                enunciado: "¿Si no entendés una pregunta del oficial, qué decís?",
                opciones: [
                  { texto: "I don't speak English.", correcta: false },
                  { texto: "Please collect your belongings.", correcta: false },
                  { texto: "Could you repeat that, please?", correcta: true },
                  { texto: "Here is my boarding pass.", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l2-p7",
                enunciado: "¿Qué significa 'Boarding gate'?",
                opciones: [
                  { texto: "Control de seguridad.", correcta: false },
                  { texto: "Puerta de embarque.", correcta: true },
                  { texto: "Tarjeta de embarque.", correcta: false },
                  { texto: "Control de inmigración.", correcta: false },
                ],
              },
            ],
          },
          {
            id: "tourism-m1-l3",
            titulo: "Gates & Flights",
            videoUrl: "https://youtu.be/J6UDYv27LOM",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m1l3-material.pdf",
            orden: 3,
            preguntas: [
              {
                id: "tourism-m1-l3-p1",
                enunciado: "¿Qué significa 'Delayed'?",
                opciones: [
                  { texto: "Cancelado", correcta: false },
                  { texto: "Retrasado", correcta: true },
                  { texto: "Embarcando", correcta: false },
                  { texto: "Llegada", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l3-p2",
                enunciado: "¿Escuchás: \"This is the final call for flight BA205.\" Qué tenés que hacer?",
                opciones: [
                  { texto: "Esperar en la sala.", correcta: false },
                  { texto: "Ir al mostrador de check-in.", correcta: false },
                  { texto: "Correr a la puerta de embarque.", correcta: true },
                  { texto: "Buscar tu equipaje.", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l3-p3",
                enunciado: "¿Cómo preguntás en qué puerta está tu vuelo?",
                opciones: [
                  { texto: "Where is my luggage?", correcta: false },
                  { texto: "Excuse me, which gate is my flight?", correcta: true },
                  { texto: "Is my flight on time?", correcta: false },
                  { texto: "Where is the terminal?", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l3-p4",
                enunciado: "¿Tu vuelo fue cancelado. Qué frase usás en el mostrador?",
                opciones: [
                  { texto: "My flight has been delayed. What should I do?", correcta: false },
                  { texto: "I have a connecting flight. Will I make it?", correcta: false },
                  { texto: "My flight was cancelled. Can you help me, please?", correcta: true },
                  { texto: "Where is gate 14, please?", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l3-p5",
                enunciado: "¿Qué significa 'Connecting flight'?",
                opciones: [
                  { texto: "Vuelo directo.", correcta: false },
                  { texto: "Vuelo cancelado.", correcta: false },
                  { texto: "Vuelo de conexión.", correcta: true },
                  { texto: "Vuelo retrasado.", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l3-p6",
                enunciado: "¿El personal te dice: \"Please proceed to gate 22.\" Qué tenés que hacer?",
                opciones: [
                  { texto: "Esperar en la sala general.", correcta: false },
                  { texto: "Dirigirte a la puerta 22.", correcta: true },
                  { texto: "Hacer el check-in.", correcta: false },
                  { texto: "Buscar el terminal.", correcta: false },
                ],
              },
              {
                id: "tourism-m1-l3-p7",
                enunciado: "¿Qué significa 'Layover'?",
                opciones: [
                  { texto: "Última llamada.", correcta: false },
                  { texto: "Puerta de embarque.", correcta: false },
                  { texto: "Espera entre dos vuelos.", correcta: true },
                  { texto: "Formulario de aduana.", correcta: false },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "tourism-m2",
        titulo: "Módulo 2 · At the Hotel",
        orden: 2,
        lecciones: [
          {
            id: "tourism-m2-l1",
            titulo: "Hotel Check-in",
            videoUrl: "https://youtu.be/BrJCRln5_sg",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m2l1-material.pdf",
            orden: 1,
            preguntas: [
              {
                id: "tourism-m2-l1-p1",
                enunciado: "¿Cómo se dice 'ascensor' en inglés británico?",
                opciones: [
                  { texto: "Elevator", correcta: false },
                  { texto: "Escalator", correcta: false },
                  { texto: "Lift", correcta: true },
                  { texto: "Stairs", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l1-p2",
                enunciado: "¿Qué es una 'twin room'?",
                opciones: [
                  { texto: "Una habitación con cama doble.", correcta: false },
                  { texto: "Una habitación con dos camas individuales separadas.", correcta: true },
                  { texto: "Una habitación para una sola persona.", correcta: false },
                  { texto: "Una suite de lujo.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l1-p3",
                enunciado: "¿Cuál es la primera frase que decís al llegar a la recepción?",
                opciones: [
                  { texto: "What time is check-out?", correcta: false },
                  { texto: "Is breakfast included?", correcta: false },
                  { texto: "I have a reservation. My name is García.", correcta: true },
                  { texto: "Could I have a room on a higher floor?", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l1-p4",
                enunciado: "¿El recepcionista dice: \"Enjoy your stay.\" Qué te está diciendo?",
                opciones: [
                  { texto: "Que el check-out es a las 12.", correcta: false },
                  { texto: "Que disfrutes tu estadía.", correcta: true },
                  { texto: "Que el desayuno está incluido.", correcta: false },
                  { texto: "Que subas por el ascensor.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l1-p5",
                enunciado: "¿Cómo preguntás si el desayuno está incluido?",
                opciones: [
                  { texto: "What time is breakfast?", correcta: false },
                  { texto: "Is breakfast included?", correcta: true },
                  { texto: "Could I have breakfast?", correcta: false },
                  { texto: "Where is the restaurant?", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l1-p6",
                enunciado: "¿Qué significa 'reservation'?",
                opciones: [
                  { texto: "Recepción del hotel.", correcta: false },
                  { texto: "Llave de la habitación.", correcta: false },
                  { texto: "Tu reserva hecha antes de llegar.", correcta: true },
                  { texto: "El piso de la habitación.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l1-p7",
                enunciado: "¿Cómo pedís la contraseña del Wi-Fi?",
                opciones: [
                  { texto: "Could I have the internet?", correcta: false },
                  { texto: "What is the Wi-Fi password?", correcta: true },
                  { texto: "Is Wi-Fi included?", correcta: false },
                  { texto: "Where is the Wi-Fi?", correcta: false },
                ],
              },
            ],
          },
          {
            id: "tourism-m2-l2",
            titulo: "Requests & Services",
            videoUrl: "https://youtu.be/40jRGmdqiLo",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m2l2-material.pdf",
            orden: 2,
            preguntas: [
              {
                id: "tourism-m2-l2-p1",
                enunciado: "¿Qué es un 'wake-up call'?",
                opciones: [
                  { texto: "Una llamada de emergencia.", correcta: false },
                  { texto: "El servicio de despertador del hotel.", correcta: true },
                  { texto: "Una llamada para pedir room service.", correcta: false },
                  { texto: "El servicio de lavandería.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l2-p2",
                enunciado: "¿Cómo pedís una toalla extra de forma educada?",
                opciones: [
                  { texto: "I need a towel.", correcta: false },
                  { texto: "Give me a towel, please.", correcta: false },
                  { texto: "Could I have an extra towel, please?", correcta: true },
                  { texto: "I want an extra towel.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l2-p3",
                enunciado: "¿El recepcionista dice: \"I'll send someone right away.\" Qué significa?",
                opciones: [
                  { texto: "Van a mandar a alguien mañana.", correcta: false },
                  { texto: "Van a mandar a alguien ahora mismo.", correcta: true },
                  { texto: "No hay nadie disponible.", correcta: false },
                  { texto: "Tenés que bajar a la recepción.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l2-p4",
                enunciado: "¿Cómo se dice 'las seis y media' en inglés británico?",
                opciones: [
                  { texto: "Six thirty.", correcta: false },
                  { texto: "Half six.", correcta: false },
                  { texto: "Half past six.", correcta: true },
                  { texto: "Six and a half.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l2-p5",
                enunciado: "¿Qué frase usás para reportar que el aire acondicionado no funciona?",
                opciones: [
                  { texto: "The air conditioning is very cold.", correcta: false },
                  { texto: "Could you fix the air conditioning?", correcta: false },
                  { texto: "The air conditioning isn't working.", correcta: true },
                  { texto: "I don't like the air conditioning.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l2-p6",
                enunciado: "¿Qué es 'housekeeping'?",
                opciones: [
                  { texto: "El servicio de habitación.", correcta: false },
                  { texto: "El servicio de limpieza del hotel.", correcta: true },
                  { texto: "El conserje del hotel.", correcta: false },
                  { texto: "La caja fuerte de la habitación.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l2-p7",
                enunciado: "¿Cómo preguntás si hay servicio de lavandería?",
                opciones: [
                  { texto: "Where is the laundry?", correcta: false },
                  { texto: "Is there a laundry service available?", correcta: true },
                  { texto: "Could I have laundry service?", correcta: false },
                  { texto: "I need laundry, please.", correcta: false },
                ],
              },
            ],
          },
          {
            id: "tourism-m2-l3",
            titulo: "Problems & Complaints",
            videoUrl: "https://youtu.be/rzFmni_CU6E",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m2l3-material.pdf",
            orden: 3,
            preguntas: [
              {
                id: "tourism-m2-l3-p1",
                enunciado: "¿Cómo se dice 'queja' o 'reclamo' en inglés?",
                opciones: [
                  { texto: "Problem", correcta: false },
                  { texto: "Complaint", correcta: true },
                  { texto: "Inconvenience", correcta: false },
                  { texto: "Refund", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l3-p2",
                enunciado: "¿Qué frase usás para pedir hablar con el gerente?",
                opciones: [
                  { texto: "I need help, please.", correcta: false },
                  { texto: "There is a problem.", correcta: false },
                  { texto: "I'd like to speak to the manager, please.", correcta: true },
                  { texto: "Could you help me, please?", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l3-p3",
                enunciado: "¿El recepcionista dice: \"I sincerely apologise for the inconvenience.\" Qué significa?",
                opciones: [
                  { texto: "No pueden resolver el problema.", correcta: false },
                  { texto: "Se disculpan formalmente por el inconveniente.", correcta: true },
                  { texto: "Te van a dar un reembolso.", correcta: false },
                  { texto: "Van a cambiar tu habitación.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l3-p4",
                enunciado: "¿Cómo reportás que no hay agua caliente?",
                opciones: [
                  { texto: "The water is cold.", correcta: false },
                  { texto: "There is no hot water in my room.", correcta: true },
                  { texto: "The shower isn't working.", correcta: false },
                  { texto: "I need hot water, please.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l3-p5",
                enunciado: "¿Qué significa 'leaking'?",
                opciones: [
                  { texto: "Roto.", correcta: false },
                  { texto: "Sin funcionamiento.", correcta: false },
                  { texto: "Con una pérdida de agua.", correcta: true },
                  { texto: "Muy ruidoso.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l3-p6",
                enunciado: "¿El recepcionista te ofrece una solución y vos respondés: \"That would be perfect.\" Qué significa?",
                opciones: [
                  { texto: "No estás conforme con la solución.", correcta: false },
                  { texto: "Querés hablar con el gerente.", correcta: false },
                  { texto: "Aceptás la solución — eso sería perfecto.", correcta: true },
                  { texto: "Querés un reembolso.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l3-p7",
                enunciado: "¿Cómo pedís un cambio de habitación?",
                opciones: [
                  { texto: "I need another room.", correcta: false },
                  { texto: "My room is broken.", correcta: false },
                  { texto: "I'd like to change my room, please.", correcta: true },
                  { texto: "The room isn't good.", correcta: false },
                ],
              },
            ],
          },
          {
            id: "tourism-m2-l4",
            titulo: "Checkout & Payment",
            videoUrl: "https://youtu.be/vdudLx-LTJM",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m2l4-material.pdf",
            orden: 4,
            preguntas: [
              {
                id: "tourism-m2-l4-p1",
                enunciado: "¿Cuál es la primera frase que decís al llegar a la recepción el día de la partida?",
                opciones: [
                  { texto: "Could I have my bill, please?", correcta: false },
                  { texto: "I'd like to check out, please.", correcta: true },
                  { texto: "Can I pay by credit card?", correcta: false },
                  { texto: "Could I have a receipt?", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l4-p2",
                enunciado: "¿Cómo decís que creés que hay un error en tu factura?",
                opciones: [
                  { texto: "This bill is wrong.", correcta: false },
                  { texto: "I don't understand my bill.", correcta: false },
                  { texto: "I think there is a mistake on my bill.", correcta: true },
                  { texto: "The bill isn't correct.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l4-p3",
                enunciado: "¿Qué significa 'contactless payment'?",
                opciones: [
                  { texto: "Pago en efectivo.", correcta: false },
                  { texto: "Pago con cheque.", correcta: false },
                  { texto: "Pago sin contacto — tocando la tarjeta.", correcta: true },
                  { texto: "Pago con depósito previo.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l4-p4",
                enunciado: "¿El recepcionista te dice: \"Safe travels.\" Qué significa?",
                opciones: [
                  { texto: "Que tengas un vuelo seguro — forma británica de despedirse de un viajero.", correcta: true },
                  { texto: "Que tengas cuidado con el equipaje.", correcta: false },
                  { texto: "Que llegues temprano al aeropuerto.", correcta: false },
                  { texto: "Que revises tu factura.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l4-p5",
                enunciado: "¿Cómo preguntás si podés hacer el checkout más tarde de la hora establecida?",
                opciones: [
                  { texto: "Can I stay longer?", correcta: false },
                  { texto: "Could I have a late checkout, please?", correcta: true },
                  { texto: "What time is checkout?", correcta: false },
                  { texto: "I need more time in my room.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l4-p6",
                enunciado: "¿Qué es el 'deposit' en el contexto de un hotel?",
                opciones: [
                  { texto: "La factura final de la estadía.", correcta: false },
                  { texto: "El comprobante de pago.", correcta: false },
                  { texto: "El depósito o seña pagada al hacer la reserva.", correcta: true },
                  { texto: "El cargo extra por el minibar.", correcta: false },
                ],
              },
              {
                id: "tourism-m2-l4-p7",
                enunciado: "¿Cómo decís que no usaste el minibar?",
                opciones: [
                  { texto: "The mini bar is empty.", correcta: false },
                  { texto: "I don't want the mini bar charge.", correcta: false },
                  { texto: "I didn't use the mini bar.", correcta: true },
                  { texto: "The mini bar isn't working.", correcta: false },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "tourism-m3",
        titulo: "Módulo 3 · Out & About",
        orden: 3,
        lecciones: [
          {
            id: "tourism-m3-l1",
            titulo: "At the Restaurant",
            videoUrl: "https://youtu.be/VepcXDlStaw",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m3l1-material.pdf",
            orden: 1,
            preguntas: [
              {
                id: "tourism-m3-l1-p1",
                enunciado: "¿Cómo se dice 'entrada' en inglés británico?",
                opciones: [
                  { texto: "Appetizer", correcta: false },
                  { texto: "Starter", correcta: true },
                  { texto: "First course", correcta: false },
                  { texto: "Opening dish", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l1-p2",
                enunciado: "¿Cuál es la forma más educada de pedir algo en un restaurante?",
                opciones: [
                  { texto: "I want the salmon.", correcta: false },
                  { texto: "Give me the salmon, please.", correcta: false },
                  { texto: "I'd like the salmon, please.", correcta: true },
                  { texto: "Salmon, please.", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l1-p3",
                enunciado: "¿El mozo te pregunta: \"Are you ready to order?\" Qué te está preguntando?",
                opciones: [
                  { texto: "Si querés ver el menú.", correcta: false },
                  { texto: "Si estás listo para pagar.", correcta: false },
                  { texto: "Si estás listo para pedir.", correcta: true },
                  { texto: "Si querés postre.", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l1-p4",
                enunciado: "¿Por qué es importante preguntar 'Is service included?' antes de dejar propina?",
                opciones: [
                  { texto: "Porque en el Reino Unido no se deja propina nunca.", correcta: false },
                  { texto: "Porque muchos restaurantes ya incluyen el service charge en la cuenta.", correcta: true },
                  { texto: "Porque la propina es obligatoria.", correcta: false },
                  { texto: "Porque el servicio siempre está incluido.", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l1-p5",
                enunciado: "¿Qué significa 'still water'?",
                opciones: [
                  { texto: "Agua caliente.", correcta: false },
                  { texto: "Agua mineral con gas.", correcta: false },
                  { texto: "Agua sin gas.", correcta: true },
                  { texto: "Agua de la canilla.", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l1-p6",
                enunciado: "¿Cómo decís que sos alérgico a las nueces?",
                opciones: [
                  { texto: "I don't like nuts.", correcta: false },
                  { texto: "No nuts, please.", correcta: false },
                  { texto: "I'm allergic to nuts.", correcta: true },
                  { texto: "I can't eat nuts.", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l1-p7",
                enunciado: "¿Qué es el 'takeaway'?",
                opciones: [
                  { texto: "El postre del restaurante.", correcta: false },
                  { texto: "La propina.", correcta: false },
                  { texto: "Comida para llevar.", correcta: true },
                  { texto: "El menú del día.", correcta: false },
                ],
              },
            ],
          },
          {
            id: "tourism-m3-l2",
            titulo: "Getting Around, Shopping & Sightseeing",
            videoUrl: "https://youtu.be/nfTOuFfH2Uw",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m3l2-material.pdf",
            orden: 2,
            preguntas: [
              {
                id: "tourism-m3-l2-p1",
                enunciado: "¿Cómo se dice 'el metro' en inglés británico?",
                opciones: [
                  { texto: "The metro", correcta: false },
                  { texto: "The subway", correcta: false },
                  { texto: "The underground / the tube", correcta: true },
                  { texto: "The train", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l2-p2",
                enunciado: "¿Qué frase usás para pedir direcciones educadamente en la calle?",
                opciones: [
                  { texto: "Where is it?", correcta: false },
                  { texto: "Excuse me, how do I get to...?", correcta: true },
                  { texto: "Tell me the way.", correcta: false },
                  { texto: "I need directions.", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l2-p3",
                enunciado: "¿Cómo le decís a un taxista que se quede con el vuelto?",
                opciones: [
                  { texto: "That's fine.", correcta: false },
                  { texto: "Keep the change.", correcta: true },
                  { texto: "No change, please.", correcta: false },
                  { texto: "Give me the receipt.", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l2-p4",
                enunciado: "¿Qué significa 'changing room' en una tienda de ropa?",
                opciones: [
                  { texto: "La caja", correcta: false },
                  { texto: "El probador", correcta: true },
                  { texto: "La vidriera", correcta: false },
                  { texto: "El depósito", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l2-p5",
                enunciado: "¿Cómo preguntás si un producto tiene descuento?",
                opciones: [
                  { texto: "Is this cheap?", correcta: false },
                  { texto: "Is there a discount on this?", correcta: true },
                  { texto: "How much is it?", correcta: false },
                  { texto: "Can I pay less?", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l2-p6",
                enunciado: "¿En inglés británico, cómo se le dice a las zapatillas?",
                opciones: [
                  { texto: "Sneakers", correcta: false },
                  { texto: "Trainers", correcta: true },
                  { texto: "Runners", correcta: false },
                  { texto: "Sport shoes", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l2-p7",
                enunciado: "¿Qué frase usás para preguntar el horario de apertura de un museo?",
                opciones: [
                  { texto: "Is it open?", correcta: false },
                  { texto: "What time does it open?", correcta: true },
                  { texto: "When is it closed?", correcta: false },
                  { texto: "Do you open today?", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l2-p8",
                enunciado: "¿Qué es un 'guided tour'?",
                opciones: [
                  { texto: "Un mapa turístico", correcta: false },
                  { texto: "Una audioguía", correcta: false },
                  { texto: "Una visita guiada", correcta: true },
                  { texto: "Un folleto", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l2-p9",
                enunciado: "¿Cómo preguntás si necesitás reservar con anticipación?",
                opciones: [
                  { texto: "Is there a queue?", correcta: false },
                  { texto: "Do I need to book in advance?", correcta: true },
                  { texto: "Can I come tomorrow?", correcta: false },
                  { texto: "Is it free?", correcta: false },
                ],
              },
              {
                id: "tourism-m3-l2-p10",
                enunciado: "¿Qué significa 'queue' en inglés británico?",
                opciones: [
                  { texto: "Cola de espera / fila", correcta: true },
                  { texto: "Boletería", correcta: false },
                  { texto: "Salida", correcta: false },
                  { texto: "Entrada principal", correcta: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoSlug: "job-ready-english",
    titulo: "COMPLETAR_TITULO_CURSO",
    nivel: "COMPLETAR_NIVEL",
    modulos: [
      {
        id: "jobready-m1",
        titulo: "Módulo 1 · COMPLETAR_TITULO",
        orden: 1,
        lecciones: [
          {
            id: "jobready-m1-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "jobready-m1-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "jobready-m1-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "jobready-m1-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
      {
        id: "jobready-m2",
        titulo: "Módulo 2 · COMPLETAR_TITULO",
        orden: 2,
        lecciones: [
          {
            id: "jobready-m2-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "jobready-m2-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "jobready-m2-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "jobready-m2-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
      {
        id: "jobready-m3",
        titulo: "Módulo 3 · COMPLETAR_TITULO",
        orden: 3,
        lecciones: [
          {
            id: "jobready-m3-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "jobready-m3-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "jobready-m3-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "jobready-m3-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
    ],
  },
  {
    cursoSlug: "english-from-zero",
    titulo: "English from Zero",
    nivel: "A1",
    modulos: [
      {
        id: "efz-m1",
        titulo: "Módulo 1 · Los Cimientos",
        orden: 1,
        lecciones: [
          {
            id: "efz-m1-l1",
            titulo: "Alphabet, Numbers & Basic Greetings",
            videoUrl: "https://youtu.be/val8qy30IY0",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m1l1-material%20(1).pdf",
            orden: 1,
            preguntas: [
              {
                id: "efz-m1-l1-p1",
                enunciado: "¿Cómo se pronuncia la letra 'G' en inglés?",
                opciones: [
                  { texto: "'je' (como en español)", correcta: false },
                  { texto: "'yi'", correcta: true },
                  { texto: "'gue'", correcta: false },
                  { texto: "'ji'", correcta: false },
                ],
              },
              {
                id: "efz-m1-l1-p2",
                enunciado: "¿Cuál es el número 'seven' en español?",
                opciones: [
                  { texto: "Seis", correcta: false },
                  { texto: "Ocho", correcta: false },
                  { texto: "Siete", correcta: true },
                  { texto: "Nueve", correcta: false },
                ],
              },
              {
                id: "efz-m1-l1-p3",
                enunciado: "¿Qué saludo usás después de las seis de la tarde?",
                opciones: [
                  { texto: "Good morning", correcta: false },
                  { texto: "Good afternoon", correcta: false },
                  { texto: "Good evening", correcta: true },
                  { texto: "Good night siempre", correcta: false },
                ],
              },
              {
                id: "efz-m1-l1-p4",
                enunciado: "¿Cómo respondés a 'How are you?' de forma estándar?",
                opciones: [
                  { texto: "Yes, I am.", correcta: false },
                  { texto: "I'm fine, thank you.", correcta: true },
                  { texto: "Good morning.", correcta: false },
                  { texto: "My name is...", correcta: false },
                ],
              },
              {
                id: "efz-m1-l1-p5",
                enunciado: "¿Qué significa 'Nice to meet you'?",
                opciones: [
                  { texto: "¿Cómo estás?", correcta: false },
                  { texto: "Buenas tardes", correcta: false },
                  { texto: "Mucho gusto", correcta: true },
                  { texto: "Hasta luego", correcta: false },
                ],
              },
              {
                id: "efz-m1-l1-p6",
                enunciado: "¿Cuál es el número 'ten'?",
                opciones: [
                  { texto: "8", correcta: false },
                  { texto: "9", correcta: false },
                  { texto: "10", correcta: true },
                  { texto: "7", correcta: false },
                ],
              },
              {
                id: "efz-m1-l1-p7",
                enunciado: "¿Cómo se pronuncia la letra 'H' en inglés?",
                opciones: [
                  { texto: "'ache' (como en español)", correcta: false },
                  { texto: "'eich'", correcta: true },
                  { texto: "'ha'", correcta: false },
                  { texto: "'ge'", correcta: false },
                ],
              },
              {
                id: "efz-m1-l1-p8",
                enunciado: "¿Hasta qué hora aproximadamente se usa 'Good morning'?",
                opciones: [
                  { texto: "Todo el día", correcta: false },
                  { texto: "Hasta el mediodía", correcta: true },
                  { texto: "Hasta las seis de la tarde", correcta: false },
                  { texto: "Solo al despertarse", correcta: false },
                ],
              },
              {
                id: "efz-m1-l1-p9",
                enunciado: "¿Cómo preguntás el nombre de alguien de forma simple?",
                opciones: [
                  { texto: "How are you?", correcta: false },
                  { texto: "What's your name?", correcta: true },
                  { texto: "Nice to meet you.", correcta: false },
                  { texto: "Good morning.", correcta: false },
                ],
              },
              {
                id: "efz-m1-l1-p10",
                enunciado: "¿Cuál es el número 'three'?",
                opciones: [
                  { texto: "2", correcta: false },
                  { texto: "3", correcta: true },
                  { texto: "4", correcta: false },
                  { texto: "5", correcta: false },
                ],
              },
            ],
          },
          {
            id: "efz-m1-l2",
            titulo: "The Verb To Be",
            videoUrl: "https://youtu.be/nLPQUzwOReI",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m1l2-material%20(1).pdf",
            orden: 2,
            preguntas: [
              {
                id: "efz-m1-l2-p1",
                enunciado: "¿Cuál es la forma corta de 'I am'?",
                opciones: [
                  { texto: "I's", correcta: false },
                  { texto: "I'm", correcta: true },
                  { texto: "I'r", correcta: false },
                  { texto: "Iam", correcta: false },
                ],
              },
              {
                id: "efz-m1-l2-p2",
                enunciado: "¿Qué forma corresponde a 'she'?",
                opciones: [
                  { texto: "She're", correcta: false },
                  { texto: "She'm", correcta: false },
                  { texto: "She's", correcta: true },
                  { texto: "She'is", correcta: false },
                ],
              },
              {
                id: "efz-m1-l2-p3",
                enunciado: "¿Cómo decís 'Nosotros somos estudiantes'?",
                opciones: [
                  { texto: "We is students.", correcta: false },
                  { texto: "We're students.", correcta: true },
                  { texto: "We am students.", correcta: false },
                  { texto: "We it students.", correcta: false },
                ],
              },
              {
                id: "efz-m1-l2-p4",
                enunciado: "¿Cuál es la forma correcta para 'they'?",
                opciones: [
                  { texto: "They's", correcta: false },
                  { texto: "They'm", correcta: false },
                  { texto: "They're", correcta: true },
                  { texto: "They'is", correcta: false },
                ],
              },
              {
                id: "efz-m1-l2-p5",
                enunciado: "¿Cómo decís 'Él no es de Londres'?",
                opciones: [
                  { texto: "He no is from London.", correcta: false },
                  { texto: "He's not from London.", correcta: true },
                  { texto: "He not's from London.", correcta: false },
                  { texto: "He isn't not from London.", correcta: false },
                ],
              },
              {
                id: "efz-m1-l2-p6",
                enunciado: "¿Qué forma usás para 'you' (vos/tú)?",
                opciones: [
                  { texto: "You's", correcta: false },
                  { texto: "You'm", correcta: false },
                  { texto: "You're", correcta: true },
                  { texto: "You'is", correcta: false },
                ],
              },
              {
                id: "efz-m1-l2-p7",
                enunciado: "¿Completá: 'I ___ from Argentina.'",
                opciones: [
                  { texto: "is", correcta: false },
                  { texto: "are", correcta: false },
                  { texto: "am", correcta: true },
                  { texto: "be", correcta: false },
                ],
              },
              {
                id: "efz-m1-l2-p8",
                enunciado: "¿Cuándo se usa la forma larga 'I am' en vez de 'I'm'?",
                opciones: [
                  { texto: "Nunca se usa", correcta: false },
                  { texto: "Para dar énfasis o sonar más formal", correcta: true },
                  { texto: "Solo por escrito", correcta: false },
                  { texto: "Solo con nombres propios", correcta: false },
                ],
              },
              {
                id: "efz-m1-l2-p9",
                enunciado: "¿Completá: 'She ___ happy.'",
                opciones: [
                  { texto: "am", correcta: false },
                  { texto: "are", correcta: false },
                  { texto: "is", correcta: true },
                  { texto: "be", correcta: false },
                ],
              },
              {
                id: "efz-m1-l2-p10",
                enunciado: "¿Cuál es la forma correcta para 'it'?",
                opciones: [
                  { texto: "It's", correcta: true },
                  { texto: "It'm", correcta: false },
                  { texto: "It're", correcta: false },
                  { texto: "It'is", correcta: false },
                ],
              },
            ],
          },
          {
            id: "efz-m1-l3",
            titulo: "Personal Pronouns & Possessives",
            videoUrl: "https://youtu.be/-5cWjjTYyPQ",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m1l3-material%20(1).pdf",
            orden: 3,
            preguntas: [
              {
                id: "efz-m1-l3-p1",
                enunciado: "¿Cuál es el posesivo de 'I'?",
                opciones: [
                  { texto: "Me", correcta: false },
                  { texto: "Mine", correcta: false },
                  { texto: "My", correcta: true },
                  { texto: "I's", correcta: false },
                ],
              },
              {
                id: "efz-m1-l3-p2",
                enunciado: "¿Cuál es el posesivo de 'she'?",
                opciones: [
                  { texto: "Hers", correcta: false },
                  { texto: "Her", correcta: true },
                  { texto: "She's", correcta: false },
                  { texto: "Herself", correcta: false },
                ],
              },
              {
                id: "efz-m1-l3-p3",
                enunciado: "¿Qué significa 'your' en español?",
                opciones: [
                  { texto: "Vos sos", correcta: false },
                  { texto: "Tu / tuyo", correcta: true },
                  { texto: "Vos estás", correcta: false },
                  { texto: "Ustedes", correcta: false },
                ],
              },
              {
                id: "efz-m1-l3-p4",
                enunciado: "¿Cuál es la diferencia entre 'your' y 'you're'?",
                opciones: [
                  { texto: "No hay diferencia", correcta: false },
                  { texto: "'Your' es posesivo, 'you're' es 'you are'", correcta: true },
                  { texto: "'You're' es posesivo, 'your' es 'you are'", correcta: false },
                  { texto: "Ambas son lo mismo pero formal/informal", correcta: false },
                ],
              },
              {
                id: "efz-m1-l3-p5",
                enunciado: "¿Cuál es el posesivo de 'they'?",
                opciones: [
                  { texto: "Them", correcta: false },
                  { texto: "Themselves", correcta: false },
                  { texto: "Their", correcta: true },
                  { texto: "They's", correcta: false },
                ],
              },
              {
                id: "efz-m1-l3-p6",
                enunciado: "¿Completá: 'This is ___ phone.' (de él)",
                opciones: [
                  { texto: "he", correcta: false },
                  { texto: "his", correcta: true },
                  { texto: "him", correcta: false },
                  { texto: "it's", correcta: false },
                ],
              },
              {
                id: "efz-m1-l3-p7",
                enunciado: "¿Cuál es el posesivo de 'we'?",
                opciones: [
                  { texto: "Us", correcta: false },
                  { texto: "Ours", correcta: false },
                  { texto: "Our", correcta: true },
                  { texto: "We's", correcta: false },
                ],
              },
              {
                id: "efz-m1-l3-p8",
                enunciado: "¿Completá: 'Is this ___ bag?' (tuya)",
                opciones: [
                  { texto: "you", correcta: false },
                  { texto: "you're", correcta: false },
                  { texto: "your", correcta: true },
                  { texto: "yours", correcta: false },
                ],
              },
              {
                id: "efz-m1-l3-p9",
                enunciado: "¿Cuál es el posesivo de 'it'?",
                opciones: [
                  { texto: "Its", correcta: true },
                  { texto: "It's", correcta: false },
                  { texto: "Itself", correcta: false },
                  { texto: "They", correcta: false },
                ],
              },
              {
                id: "efz-m1-l3-p10",
                enunciado: "¿Completá: 'This is ___ house.' (de nosotros)",
                opciones: [
                  { texto: "we", correcta: false },
                  { texto: "us", correcta: false },
                  { texto: "our", correcta: true },
                  { texto: "ours", correcta: false },
                ],
              },
            ],
          },
          {
            id: "efz-m1-l4",
            titulo: "Articles & Basic Nouns (a, an, the)",
            videoUrl: "https://youtu.be/JNZ1lrzXXq0",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m1l4-material.pdf",
            orden: 4,
            preguntas: [
              {
                id: "efz-m1-l4-p1",
                enunciado: "¿Cuándo se usa 'an' en vez de 'a'?",
                opciones: [
                  { texto: "Antes de mayúsculas", correcta: false },
                  { texto: "Antes de sonido de vocal", correcta: true },
                  { texto: "Antes de plurales", correcta: false },
                  { texto: "Nunca, es lo mismo", correcta: false },
                ],
              },
              {
                id: "efz-m1-l4-p2",
                enunciado: "¿Por qué se dice 'an hour' si 'hour' empieza con H?",
                opciones: [
                  { texto: "Es una excepción sin razón", correcta: false },
                  { texto: "Porque la H no se pronuncia, suena a vocal", correcta: true },
                  { texto: "Porque 'hour' es plural", correcta: false },
                  { texto: "Es un error común aceptado", correcta: false },
                ],
              },
              {
                id: "efz-m1-l4-p3",
                enunciado: "¿Cuándo usás 'the' en vez de 'a'?",
                opciones: [
                  { texto: "Siempre que hablás de un objeto", correcta: false },
                  { texto: "Cuando ya se sabe específicamente cuál es", correcta: true },
                  { texto: "Solo con nombres propios", correcta: false },
                  { texto: "Solo en plural", correcta: false },
                ],
              },
              {
                id: "efz-m1-l4-p4",
                enunciado: "¿Completá: '___ apple' (una manzana, mención general)",
                opciones: [
                  { texto: "A", correcta: false },
                  { texto: "An", correcta: true },
                  { texto: "The", correcta: false },
                  { texto: "No hace falta artículo", correcta: false },
                ],
              },
              {
                id: "efz-m1-l4-p5",
                enunciado: "¿Completá: '___ book' (un libro, mención general)",
                opciones: [
                  { texto: "A", correcta: true },
                  { texto: "An", correcta: false },
                  { texto: "The", correcta: false },
                  { texto: "No hace falta artículo", correcta: false },
                ],
              },
              {
                id: "efz-m1-l4-p6",
                enunciado: "¿'This is a phone. ___ phone is new.' Qué va en el espacio?",
                opciones: [
                  { texto: "A", correcta: false },
                  { texto: "An", correcta: false },
                  { texto: "The", correcta: true },
                  { texto: "Some", correcta: false },
                ],
              },
              {
                id: "efz-m1-l4-p7",
                enunciado: "¿Cómo hablás de libros en general, sin especificar cuáles?",
                opciones: [
                  { texto: "The books are interesting.", correcta: false },
                  { texto: "Books are interesting.", correcta: true },
                  { texto: "A books are interesting.", correcta: false },
                  { texto: "An books are interesting.", correcta: false },
                ],
              },
              {
                id: "efz-m1-l4-p8",
                enunciado: "¿Completá: '___ umbrella' (un paraguas, mención general)",
                opciones: [
                  { texto: "A", correcta: false },
                  { texto: "An", correcta: true },
                  { texto: "The", correcta: false },
                  { texto: "No hace falta artículo", correcta: false },
                ],
              },
              {
                id: "efz-m1-l4-p9",
                enunciado: "¿Qué determina si usás 'a' o 'an'?",
                opciones: [
                  { texto: "El género de la palabra", correcta: false },
                  { texto: "El sonido con el que empieza la palabra siguiente", correcta: true },
                  { texto: "Si es objeto o persona", correcta: false },
                  { texto: "El tamaño del objeto", correcta: false },
                ],
              },
              {
                id: "efz-m1-l4-p10",
                enunciado: "¿Completá: '___ bag' (una bolsa, mención general)",
                opciones: [
                  { texto: "A", correcta: true },
                  { texto: "An", correcta: false },
                  { texto: "The", correcta: false },
                  { texto: "No hace falta artículo", correcta: false },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "efz-m2",
        titulo: "Módulo 2 · Hablando del Presente",
        orden: 2,
        lecciones: [
          {
            id: "efz-m2-l1",
            titulo: "Present Simple - Rutinas y habitos",
            videoUrl: "https://youtu.be/WO1m-SEbLV4",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m2l1-material%20(1).pdf",
            orden: 1,
            preguntas: [
              {
                id: "efz-m2-l1-p1",
                enunciado: "¿Cómo se dice 'ella trabaja' en Present Simple?",
                opciones: [
                  { texto: "She work", correcta: false },
                  { texto: "She works", correcta: true },
                  { texto: "She working", correcta: false },
                  { texto: "She to work", correcta: false },
                ],
              },
              {
                id: "efz-m2-l1-p2",
                enunciado: "¿Cuál es la forma correcta de 'have' con 'she'?",
                opciones: [
                  { texto: "She haves", correcta: false },
                  { texto: "She have", correcta: false },
                  { texto: "She has", correcta: true },
                  { texto: "She having", correcta: false },
                ],
              },
              {
                id: "efz-m2-l1-p3",
                enunciado: "¿Cuál es la forma correcta de 'go' con 'he'?",
                opciones: [
                  { texto: "He gos", correcta: false },
                  { texto: "He go", correcta: false },
                  { texto: "He goes", correcta: true },
                  { texto: "He going", correcta: false },
                ],
              },
              {
                id: "efz-m2-l1-p4",
                enunciado: "¿Completá: 'I ___ up at seven every day.' (wake)",
                opciones: [
                  { texto: "wakes", correcta: false },
                  { texto: "wake", correcta: true },
                  { texto: "waking", correcta: false },
                  { texto: "to wake", correcta: false },
                ],
              },
              {
                id: "efz-m2-l1-p5",
                enunciado: "¿Cuál es la forma correcta de 'do' con 'it'?",
                opciones: [
                  { texto: "It dos", correcta: false },
                  { texto: "It do", correcta: false },
                  { texto: "It does", correcta: true },
                  { texto: "It doing", correcta: false },
                ],
              },
              {
                id: "efz-m2-l1-p6",
                enunciado: "¿Completá: 'We ___ English every evening.' (study)",
                opciones: [
                  { texto: "studies", correcta: false },
                  { texto: "study", correcta: true },
                  { texto: "studying", correcta: false },
                  { texto: "to study", correcta: false },
                ],
              },
              {
                id: "efz-m2-l1-p7",
                enunciado: "¿Qué palabra indica frecuencia/rutina?",
                opciones: [
                  { texto: "Yesterday", correcta: false },
                  { texto: "Usually", correcta: true },
                  { texto: "Tomorrow", correcta: false },
                  { texto: "Now", correcta: false },
                ],
              },
              {
                id: "efz-m2-l1-p8",
                enunciado: "¿Completá: 'She ___ breakfast every morning.' (have)",
                opciones: [
                  { texto: "have", correcta: false },
                  { texto: "haves", correcta: false },
                  { texto: "has", correcta: true },
                  { texto: "having", correcta: false },
                ],
              },
              {
                id: "efz-m2-l1-p9",
                enunciado: "¿Para I/you/we/they, cómo se usa el verbo en Present Simple?",
                opciones: [
                  { texto: "Siempre suma -s", correcta: false },
                  { texto: "En su forma base, sin cambios", correcta: true },
                  { texto: "Siempre con 'to' adelante", correcta: false },
                  { texto: "Cambia según el día", correcta: false },
                ],
              },
              {
                id: "efz-m2-l1-p10",
                enunciado: "¿Completá: 'They ___ to work by bus.' (go)",
                opciones: [
                  { texto: "goes", correcta: false },
                  { texto: "go", correcta: true },
                  { texto: "going", correcta: false },
                  { texto: "to go", correcta: false },
                ],
              },
            ],
          },
          {
            id: "efz-m2-l2",
            titulo: "Common Verbs (have, like, want, need, go)",
            videoUrl: "https://youtu.be/PfMAbI7FP-Y",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m2l2-material%20(1).pdf",
            orden: 2,
            preguntas: [
              {
                id: "efz-m2-l2-p1",
                enunciado: "¿Qué significa 'I like coffee'?",
                opciones: [
                  { texto: "Quiero un café ahora", correcta: false },
                  { texto: "Necesito café", correcta: false },
                  { texto: "Me gusta el café (en general)", correcta: true },
                  { texto: "Tengo café", correcta: false },
                ],
              },
              {
                id: "efz-m2-l2-p2",
                enunciado: "¿Cuál es la diferencia principal entre 'want' y 'need'?",
                opciones: [
                  { texto: "No hay diferencia", correcta: false },
                  { texto: "Want es más fuerte que need", correcta: false },
                  { texto: "Need es más fuerte, algo que realmente hace falta", correcta: true },
                  { texto: "Want es formal y need informal", correcta: false },
                ],
              },
              {
                id: "efz-m2-l2-p3",
                enunciado: "¿Completá: 'She ___ a new phone.' (quiere)",
                opciones: [
                  { texto: "like", correcta: false },
                  { texto: "wants", correcta: true },
                  { texto: "need", correcta: false },
                  { texto: "has", correcta: false },
                ],
              },
              {
                id: "efz-m2-l2-p4",
                enunciado: "¿Cómo decís 'voy de compras' en inglés?",
                opciones: [
                  { texto: "I go to shopping", correcta: false },
                  { texto: "I go shopping", correcta: true },
                  { texto: "I going shopping", correcta: false },
                  { texto: "I have shopping", correcta: false },
                ],
              },
              {
                id: "efz-m2-l2-p5",
                enunciado: "¿Completá: 'I ___ two brothers.' (tengo)",
                opciones: [
                  { texto: "like", correcta: false },
                  { texto: "want", correcta: false },
                  { texto: "have", correcta: true },
                  { texto: "need", correcta: false },
                ],
              },
              {
                id: "efz-m2-l2-p6",
                enunciado: "¿Cuál es la forma correcta de 'need' con 'she'?",
                opciones: [
                  { texto: "She need", correcta: false },
                  { texto: "She needs", correcta: true },
                  { texto: "She needing", correcta: false },
                  { texto: "She to need", correcta: false },
                ],
              },
              {
                id: "efz-m2-l2-p7",
                enunciado: "¿Completá: 'I ___ a break, I'm very tired.' (necesito)",
                opciones: [
                  { texto: "like", correcta: false },
                  { texto: "want", correcta: false },
                  { texto: "need", correcta: true },
                  { texto: "have", correcta: false },
                ],
              },
              {
                id: "efz-m2-l2-p8",
                enunciado: "¿Cuál es la forma correcta de 'like' con 'he'?",
                opciones: [
                  { texto: "He like", correcta: false },
                  { texto: "He likes", correcta: true },
                  { texto: "He liking", correcta: false },
                  { texto: "He to like", correcta: false },
                ],
              },
              {
                id: "efz-m2-l2-p9",
                enunciado: "¿Completá: 'We ___ running every Sunday.' (vamos)",
                opciones: [
                  { texto: "go", correcta: true },
                  { texto: "goes", correcta: false },
                  { texto: "going", correcta: false },
                  { texto: "went", correcta: false },
                ],
              },
              {
                id: "efz-m2-l2-p10",
                enunciado: "¿Qué verbo usarías para decir que algo es imprescindible, no opcional?",
                opciones: [
                  { texto: "Like", correcta: false },
                  { texto: "Want", correcta: false },
                  { texto: "Need", correcta: true },
                  { texto: "Have", correcta: false },
                ],
              },
            ],
          },
          {
            id: "efz-m2-l3",
            titulo: "Questions and Question Words",
            videoUrl: "https://youtu.be/rEjvKO19j_c",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m2l3-material%20(1).pdf",
            orden: 3,
            preguntas: [
              {
                id: "efz-m2-l3-p1",
                enunciado: "¿Qué significa 'where'?",
                opciones: [
                  { texto: "Qué", correcta: false },
                  { texto: "Cuándo", correcta: false },
                  { texto: "Dónde", correcta: true },
                  { texto: "Quién", correcta: false },
                ],
              },
              {
                id: "efz-m2-l3-p2",
                enunciado: "¿Cuál es el orden correcto para preguntar con verbos comunes?",
                opciones: [
                  { texto: "Verbo + question word + do/does + persona", correcta: false },
                  { texto: "Question word + do/does + persona + verbo", correcta: true },
                  { texto: "Persona + do/does + question word + verbo", correcta: false },
                  { texto: "Do/does + verbo + question word + persona", correcta: false },
                ],
              },
              {
                id: "efz-m2-l3-p3",
                enunciado: "¿Cómo preguntás 'Who is she?' correctamente?",
                opciones: [
                  { texto: "Who does she is?", correcta: false },
                  { texto: "Who is she?", correcta: true },
                  { texto: "Who she is?", correcta: false },
                  { texto: "Who do she is?", correcta: false },
                ],
              },
              {
                id: "efz-m2-l3-p4",
                enunciado: "¿Completá: '___ do you live?' (dónde)",
                opciones: [
                  { texto: "What", correcta: false },
                  { texto: "When", correcta: false },
                  { texto: "Where", correcta: true },
                  { texto: "Who", correcta: false },
                ],
              },
              {
                id: "efz-m2-l3-p5",
                enunciado: "¿Por qué 'Where are you from?' no lleva 'do'?",
                opciones: [
                  { texto: "Es un error común aceptado", correcta: false },
                  { texto: "Porque usa el verbo to be", correcta: true },
                  { texto: "Porque 'where' nunca lleva do", correcta: false },
                  { texto: "Porque es pregunta corta", correcta: false },
                ],
              },
              {
                id: "efz-m2-l3-p6",
                enunciado: "¿Completá: '___ do you wake up?' (cuándo)",
                opciones: [
                  { texto: "What", correcta: false },
                  { texto: "When", correcta: true },
                  { texto: "Where", correcta: false },
                  { texto: "Who", correcta: false },
                ],
              },
              {
                id: "efz-m2-l3-p7",
                enunciado: "¿Cuál es la forma correcta con 'she' y 'does'?",
                opciones: [
                  { texto: "Where does she lives?", correcta: false },
                  { texto: "Where does she live?", correcta: true },
                  { texto: "Where do she live?", correcta: false },
                  { texto: "Where she does live?", correcta: false },
                ],
              },
              {
                id: "efz-m2-l3-p8",
                enunciado: "¿Completá: '___ do you like to eat?' (qué)",
                opciones: [
                  { texto: "What", correcta: true },
                  { texto: "When", correcta: false },
                  { texto: "Where", correcta: false },
                  { texto: "Who", correcta: false },
                ],
              },
              {
                id: "efz-m2-l3-p9",
                enunciado: "¿Qué question word usás para preguntar por una persona?",
                opciones: [
                  { texto: "What", correcta: false },
                  { texto: "Where", correcta: false },
                  { texto: "Who", correcta: true },
                  { texto: "When", correcta: false },
                ],
              },
              {
                id: "efz-m2-l3-p10",
                enunciado: "¿Cuál de estas preguntas está bien formada?",
                opciones: [
                  { texto: "What you like?", correcta: false },
                  { texto: "What do you like?", correcta: true },
                  { texto: "What does you like?", correcta: false },
                  { texto: "What you do like?", correcta: false },
                ],
              },
            ],
          },
          {
            id: "efz-m2-l4",
            titulo: "Negatives and Short Answers",
            videoUrl: "https://youtu.be/kAChKVb6Mi8",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m2l4-material%20(1).pdf",
            orden: 4,
            preguntas: [
              {
                id: "efz-m2-l4-p1",
                enunciado: "¿Cuál es el negativo correcto para 'I' con verbos comunes?",
                opciones: [
                  { texto: "I amn't", correcta: false },
                  { texto: "I doesn't", correcta: false },
                  { texto: "I don't", correcta: true },
                  { texto: "I not", correcta: false },
                ],
              },
              {
                id: "efz-m2-l4-p2",
                enunciado: "¿Cuál es el negativo correcto para 'she' con verbos comunes?",
                opciones: [
                  { texto: "She don't", correcta: false },
                  { texto: "She doesn't", correcta: true },
                  { texto: "She isn't", correcta: false },
                  { texto: "She not", correcta: false },
                ],
              },
              {
                id: "efz-m2-l4-p3",
                enunciado: "¿Cómo respondés cortamente 'No' a 'Do you like tea?'?",
                opciones: [
                  { texto: "No, I not.", correcta: false },
                  { texto: "No, I don't.", correcta: true },
                  { texto: "No, I doesn't.", correcta: false },
                  { texto: "No, I amn't.", correcta: false },
                ],
              },
              {
                id: "efz-m2-l4-p4",
                enunciado: "¿Cómo respondés cortamente 'Sí' a 'Does she work today?'?",
                opciones: [
                  { texto: "Yes, she do.", correcta: false },
                  { texto: "Yes, she does.", correcta: true },
                  { texto: "Yes, she is.", correcta: false },
                  { texto: "Yes, she working.", correcta: false },
                ],
              },
              {
                id: "efz-m2-l4-p5",
                enunciado: "¿Cuál es el negativo correcto de 'is' (to be)?",
                opciones: [
                  { texto: "Doesn't", correcta: false },
                  { texto: "Isn't", correcta: true },
                  { texto: "Don't", correcta: false },
                  { texto: "Not is", correcta: false },
                ],
              },
              {
                id: "efz-m2-l4-p6",
                enunciado: "¿Cuál es el negativo correcto de 'are' (to be)?",
                opciones: [
                  { texto: "Doesn't", correcta: false },
                  { texto: "Don't", correcta: false },
                  { texto: "Aren't", correcta: true },
                  { texto: "Not are", correcta: false },
                ],
              },
              {
                id: "efz-m2-l4-p7",
                enunciado: "¿Completá: 'They ___ work on Sundays.' (no trabajan)",
                opciones: [
                  { texto: "doesn't", correcta: false },
                  { texto: "don't", correcta: true },
                  { texto: "isn't", correcta: false },
                  { texto: "aren't", correcta: false },
                ],
              },
              {
                id: "efz-m2-l4-p8",
                enunciado: "¿Cómo respondés cortamente 'No' a 'Are you free?'?",
                opciones: [
                  { texto: "No, I don't.", correcta: false },
                  { texto: "No, I'm not.", correcta: true },
                  { texto: "No, I amn't.", correcta: false },
                  { texto: "No, I not.", correcta: false },
                ],
              },
              {
                id: "efz-m2-l4-p9",
                enunciado: "¿Completá: 'He ___ like tea.' (no le gusta)",
                opciones: [
                  { texto: "don't", correcta: false },
                  { texto: "doesn't", correcta: true },
                  { texto: "isn't", correcta: false },
                  { texto: "not", correcta: false },
                ],
              },
              {
                id: "efz-m2-l4-p10",
                enunciado: "¿Qué dos sistemas de negativo existen en inglés?",
                opciones: [
                  { texto: "Solo uno, siempre igual", correcta: false },
                  { texto: "Don't/doesn't para verbos comunes, not/isn't/aren't para to be", correcta: true },
                  { texto: "Uno para singular y otro para plural", correcta: false },
                  { texto: "Uno formal y otro informal", correcta: false },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "efz-m3",
        titulo: "Módulo 3 · El Mundo Alrededor",
        orden: 3,
        lecciones: [
          {
            id: "efz-m3-l1",
            titulo: "Family and People",
            videoUrl: "https://youtu.be/pDEWVp2_k3Y",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m3l1-material%20(1).pdf",
            orden: 1,
            preguntas: [
              {
                id: "efz-m3-l1-p1",
                enunciado: "¿Qué significa 'siblings'?",
                opciones: [
                  { texto: "Padres", correcta: false },
                  { texto: "Hermanos y hermanas, en general", correcta: true },
                  { texto: "Abuelos", correcta: false },
                  { texto: "Primos", correcta: false },
                ],
              },
              {
                id: "efz-m3-l1-p2",
                enunciado: "¿Qué significa 'an only child'?",
                opciones: [
                  { texto: "El hijo menor", correcta: false },
                  { texto: "Hijo único, sin hermanos", correcta: true },
                  { texto: "Un niño pequeño", correcta: false },
                  { texto: "El hijo mayor", correcta: false },
                ],
              },
              {
                id: "efz-m3-l1-p3",
                enunciado: "¿Cómo decís 'Tiene 25 años' en inglés?",
                opciones: [
                  { texto: "He has 25 years.", correcta: false },
                  { texto: "He is 25 years old.", correcta: true },
                  { texto: "He have 25 years old.", correcta: false },
                  { texto: "He 25 years.", correcta: false },
                ],
              },
              {
                id: "efz-m3-l1-p4",
                enunciado: "¿Qué significa 'parents'?",
                opciones: [
                  { texto: "Padres (mamá y papá)", correcta: true },
                  { texto: "Parientes en general", correcta: false },
                  { texto: "Abuelos", correcta: false },
                  { texto: "Padrinos", correcta: false },
                ],
              },
              {
                id: "efz-m3-l1-p5",
                enunciado: "¿Completá: 'This is ___ mother.' (mi)",
                opciones: [
                  { texto: "me", correcta: false },
                  { texto: "I", correcta: false },
                  { texto: "my", correcta: true },
                  { texto: "mine", correcta: false },
                ],
              },
              {
                id: "efz-m3-l1-p6",
                enunciado: "¿Cuál es el femenino de 'uncle'?",
                opciones: [
                  { texto: "Cousin", correcta: false },
                  { texto: "Aunt", correcta: true },
                  { texto: "Sister", correcta: false },
                  { texto: "Grandmother", correcta: false },
                ],
              },
              {
                id: "efz-m3-l1-p7",
                enunciado: "¿Cuál es el femenino de 'grandfather'?",
                opciones: [
                  { texto: "Mother", correcta: false },
                  { texto: "Aunt", correcta: false },
                  { texto: "Grandmother", correcta: true },
                  { texto: "Sister", correcta: false },
                ],
              },
              {
                id: "efz-m3-l1-p8",
                enunciado: "¿Completá: 'I ___ two sisters.' (tengo)",
                opciones: [
                  { texto: "am", correcta: false },
                  { texto: "have", correcta: true },
                  { texto: "has", correcta: false },
                  { texto: "like", correcta: false },
                ],
              },
              {
                id: "efz-m3-l1-p9",
                enunciado: "¿Qué significa 'daughter'?",
                opciones: [
                  { texto: "Hijo", correcta: false },
                  { texto: "Hija", correcta: true },
                  { texto: "Nieta", correcta: false },
                  { texto: "Sobrina", correcta: false },
                ],
              },
              {
                id: "efz-m3-l1-p10",
                enunciado: "¿Completá: 'Do you have any siblings? — Yes, ___.'",
                opciones: [
                  { texto: "I have", correcta: false },
                  { texto: "I do", correcta: true },
                  { texto: "I am", correcta: false },
                  { texto: "I like", correcta: false },
                ],
              },
            ],
          },
          {
            id: "efz-m3-l2",
            titulo: "Time, Days and Numbers en contexto",
            videoUrl: "https://youtu.be/7EIWG3XM1o8",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m3l2-material%20(1).pdf",
            orden: 2,
            preguntas: [
              {
                id: "efz-m3-l2-p1",
                enunciado: "¿Cómo se dice 15 en inglés?",
                opciones: [
                  { texto: "Fiveteen", correcta: false },
                  { texto: "Fifteen", correcta: true },
                  { texto: "Fivteen", correcta: false },
                  { texto: "Fifteenth", correcta: false },
                ],
              },
              {
                id: "efz-m3-l2-p2",
                enunciado: "¿Cómo se escriben los días de la semana en inglés?",
                opciones: [
                  { texto: "Con minúscula siempre", correcta: false },
                  { texto: "Con mayúscula siempre", correcta: true },
                  { texto: "Depende de la oración", correcta: false },
                  { texto: "Solo el primero con mayúscula", correcta: false },
                ],
              },
              {
                id: "efz-m3-l2-p3",
                enunciado: "¿Qué significa 'half past three'?",
                opciones: [
                  { texto: "Las tres menos media", correcta: false },
                  { texto: "Las tres y media", correcta: true },
                  { texto: "Las tres y cuarto", correcta: false },
                  { texto: "Las tres en punto", correcta: false },
                ],
              },
              {
                id: "efz-m3-l2-p4",
                enunciado: "¿Qué significa 'quarter to four'?",
                opciones: [
                  { texto: "Las cuatro y cuarto", correcta: false },
                  { texto: "Las cuatro menos cuarto", correcta: true },
                  { texto: "Las cuatro y media", correcta: false },
                  { texto: "Las cuatro en punto", correcta: false },
                ],
              },
              {
                id: "efz-m3-l2-p5",
                enunciado: "¿Cómo preguntás la hora?",
                opciones: [
                  { texto: "What hour is it?", correcta: false },
                  { texto: "What time is it?", correcta: true },
                  { texto: "How time is it?", correcta: false },
                  { texto: "What's the clock?", correcta: false },
                ],
              },
              {
                id: "efz-m3-l2-p6",
                enunciado: "¿Cómo se dice 12 en inglés?",
                opciones: [
                  { texto: "Twelve", correcta: true },
                  { texto: "Twelfth", correcta: false },
                  { texto: "Twelvety", correcta: false },
                  { texto: "Tweleve", correcta: false },
                ],
              },
              {
                id: "efz-m3-l2-p7",
                enunciado: "¿Cuál es el día después de 'Wednesday'?",
                opciones: [
                  { texto: "Tuesday", correcta: false },
                  { texto: "Friday", correcta: false },
                  { texto: "Thursday", correcta: true },
                  { texto: "Monday", correcta: false },
                ],
              },
              {
                id: "efz-m3-l2-p8",
                enunciado: "¿Cómo preguntás qué día es hoy?",
                opciones: [
                  { texto: "What day is it today?", correcta: true },
                  { texto: "What's the day today?", correcta: false },
                  { texto: "Which day today?", correcta: false },
                  { texto: "What time is today?", correcta: false },
                ],
              },
              {
                id: "efz-m3-l2-p9",
                enunciado: "¿Cómo se dice 18 en inglés?",
                opciones: [
                  { texto: "Eightteen", correcta: false },
                  { texto: "Eighteen", correcta: true },
                  { texto: "Eighteenth", correcta: false },
                  { texto: "Eighty", correcta: false },
                ],
              },
              {
                id: "efz-m3-l2-p10",
                enunciado: "¿'It's quarter past three.' Qué hora es?",
                opciones: [
                  { texto: "Tres menos cuarto", correcta: false },
                  { texto: "Tres y media", correcta: false },
                  { texto: "Tres y cuarto", correcta: true },
                  { texto: "Tres en punto", correcta: false },
                ],
              },
            ],
          },
          {
            id: "efz-m3-l3",
            titulo: "Colours, Adjectives and Descriptions",
            videoUrl: "https://youtu.be/Qps087GD9g4",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m3l3-material.pdf",
            orden: 3,
            preguntas: [
              {
                id: "efz-m3-l3-p1",
                enunciado: "¿Cómo se dice 'rojo' en inglés?",
                opciones: [
                  { texto: "Read", correcta: false },
                  { texto: "Red", correcta: true },
                  { texto: "Reed", correcta: false },
                  { texto: "Rad", correcta: false },
                ],
              },
              {
                id: "efz-m3-l3-p2",
                enunciado: "¿Dónde va 'very' en una oración?",
                opciones: [
                  { texto: "Después del adjetivo", correcta: false },
                  { texto: "Antes del adjetivo", correcta: true },
                  { texto: "Al final de la oración", correcta: false },
                  { texto: "Antes del sustantivo siempre", correcta: false },
                ],
              },
              {
                id: "efz-m3-l3-p3",
                enunciado: "¿Cómo cambia el adjetivo 'red' si el sustantivo es plural?",
                opciones: [
                  { texto: "Reds", correcta: false },
                  { texto: "Redes", correcta: false },
                  { texto: "No cambia — sigue siendo 'red'", correcta: true },
                  { texto: "Redder", correcta: false },
                ],
              },
              {
                id: "efz-m3-l3-p4",
                enunciado: "¿Completá: 'My bag ___ red.' (es)",
                opciones: [
                  { texto: "have", correcta: false },
                  { texto: "is", correcta: true },
                  { texto: "do", correcta: false },
                  { texto: "has", correcta: false },
                ],
              },
              {
                id: "efz-m3-l3-p5",
                enunciado: "¿Cuál es el opuesto de 'happy'?",
                opciones: [
                  { texto: "Bad", correcta: false },
                  { texto: "Small", correcta: false },
                  { texto: "Sad", correcta: true },
                  { texto: "Old", correcta: false },
                ],
              },
              {
                id: "efz-m3-l3-p6",
                enunciado: "¿Cuál es el opuesto de 'easy'?",
                opciones: [
                  { texto: "Difficult", correcta: true },
                  { texto: "Bad", correcta: false },
                  { texto: "Small", correcta: false },
                  { texto: "Old", correcta: false },
                ],
              },
              {
                id: "efz-m3-l3-p7",
                enunciado: "¿Cómo decís 'muy grande' en inglés?",
                opciones: [
                  { texto: "Big very", correcta: false },
                  { texto: "Very big", correcta: true },
                  { texto: "Bigly", correcta: false },
                  { texto: "Very bigger", correcta: false },
                ],
              },
              {
                id: "efz-m3-l3-p8",
                enunciado: "¿Cuál es el opuesto de 'new'?",
                opciones: [
                  { texto: "Small", correcta: false },
                  { texto: "Bad", correcta: false },
                  { texto: "Old", correcta: true },
                  { texto: "Sad", correcta: false },
                ],
              },
              {
                id: "efz-m3-l3-p9",
                enunciado: "¿Cómo describís un ejercicio antes del sustantivo?",
                opciones: [
                  { texto: "An exercise easy", correcta: false },
                  { texto: "An easy exercise", correcta: true },
                  { texto: "Easy is exercise", correcta: false },
                  { texto: "Exercise very easy", correcta: false },
                ],
              },
              {
                id: "efz-m3-l3-p10",
                enunciado: "¿Cuál es el opuesto de 'good'?",
                opciones: [
                  { texto: "Sad", correcta: false },
                  { texto: "Small", correcta: false },
                  { texto: "Bad", correcta: true },
                  { texto: "Old", correcta: false },
                ],
              },
            ],
          },
          {
            id: "efz-m3-l4",
            titulo: "Everyday Objects and There is There are",
            videoUrl: "https://youtu.be/JRqu62SE1rM",
            pdfUrl: "https://krohueieztaedatyobwb.supabase.co/storage/v1/object/public/Lecciones/m3l4-material.pdf",
            orden: 4,
            preguntas: [
              {
                id: "efz-m3-l4-p1",
                enunciado: "¿Cuándo usás 'there is' en vez de 'there are'?",
                opciones: [
                  { texto: "Siempre, no hay diferencia", correcta: false },
                  { texto: "Con sustantivos singulares", correcta: true },
                  { texto: "Con sustantivos plurales", correcta: false },
                  { texto: "Solo con personas", correcta: false },
                ],
              },
              {
                id: "efz-m3-l4-p2",
                enunciado: "¿Completá: '___ two chairs in the room.' (hay)",
                opciones: [
                  { texto: "There is", correcta: false },
                  { texto: "There are", correcta: true },
                  { texto: "There has", correcta: false },
                  { texto: "There do", correcta: false },
                ],
              },
              {
                id: "efz-m3-l4-p3",
                enunciado: "¿Cómo preguntás '¿Hay una ventana?'",
                opciones: [
                  { texto: "There is a window?", correcta: false },
                  { texto: "Is there a window?", correcta: true },
                  { texto: "Are there a window?", correcta: false },
                  { texto: "Have a window?", correcta: false },
                ],
              },
              {
                id: "efz-m3-l4-p4",
                enunciado: "¿Cómo respondés cortamente 'No' a 'Is there a sofa?'",
                opciones: [
                  { texto: "No, there isn't.", correcta: true },
                  { texto: "No, there aren't.", correcta: false },
                  { texto: "No, there doesn't.", correcta: false },
                  { texto: "No, it isn't.", correcta: false },
                ],
              },
              {
                id: "efz-m3-l4-p5",
                enunciado: "¿Completá: '___ a lamp on the table.' (hay, singular)",
                opciones: [
                  { texto: "There are", correcta: false },
                  { texto: "There is", correcta: true },
                  { texto: "There have", correcta: false },
                  { texto: "There do", correcta: false },
                ],
              },
              {
                id: "efz-m3-l4-p6",
                enunciado: "¿Qué significa 'kitchen'?",
                opciones: [
                  { texto: "Dormitorio", correcta: false },
                  { texto: "Baño", correcta: false },
                  { texto: "Cocina", correcta: true },
                  { texto: "Living", correcta: false },
                ],
              },
              {
                id: "efz-m3-l4-p7",
                enunciado: "¿Cómo negás 'There are chairs' correctamente?",
                opciones: [
                  { texto: "There isn't chairs", correcta: false },
                  { texto: "There aren't chairs", correcta: true },
                  { texto: "There doesn't chairs", correcta: false },
                  { texto: "There no chairs", correcta: false },
                ],
              },
              {
                id: "efz-m3-l4-p8",
                enunciado: "¿Qué significa 'bedroom'?",
                opciones: [
                  { texto: "Cocina", correcta: false },
                  { texto: "Baño", correcta: false },
                  { texto: "Dormitorio", correcta: true },
                  { texto: "Living", correcta: false },
                ],
              },
              {
                id: "efz-m3-l4-p9",
                enunciado: "¿Cómo respondés cortamente 'Sí' a 'Are there any cafés nearby?'",
                opciones: [
                  { texto: "Yes, there is.", correcta: false },
                  { texto: "Yes, there are.", correcta: true },
                  { texto: "Yes, they are.", correcta: false },
                  { texto: "Yes, there do.", correcta: false },
                ],
              },
              {
                id: "efz-m3-l4-p10",
                enunciado: "¿Cuál es el orden correcto para preguntar con 'there is/are'?",
                opciones: [
                  { texto: "There is/are + question mark", correcta: false },
                  { texto: "Is/Are there + sustantivo", correcta: true },
                  { texto: "Sustantivo + is/are there", correcta: false },
                  { texto: "There + sustantivo + is/are", correcta: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// ---- Helpers ----

export function getCurriculumForCourse(cursoSlug: string): CursoCurriculum | undefined {
  return curriculum.find((c) => c.cursoSlug === cursoSlug);
}

export function getTotalLecciones(cursoSlug: string): number {
  const curso = getCurriculumForCourse(cursoSlug);
  if (!curso) return 0;
  return curso.modulos.reduce((total, m) => total + m.lecciones.length, 0);
}

export function findLeccion(cursoSlug: string, leccionId: string): Leccion | undefined {
  const curso = getCurriculumForCourse(cursoSlug);
  if (!curso) return undefined;
  for (const modulo of curso.modulos) {
    const leccion = modulo.lecciones.find((l) => l.id === leccionId);
    if (leccion) return leccion;
  }
  return undefined;
}

// Primera lección sin completar, recorriendo módulos y lecciones en orden.
// Devuelve null si el alumno ya completó todo el curso.
export function getPrimeraLeccionPendiente(
  cursoSlug: string,
  leccionesCompletadasIds: string[]
): Leccion | null {
  const curso = getCurriculumForCourse(cursoSlug);
  if (!curso) return null;
  const completadas = new Set(leccionesCompletadasIds);
  for (const modulo of curso.modulos) {
    for (const leccion of modulo.lecciones) {
      if (!completadas.has(leccion.id)) return leccion;
    }
  }
  return null;
}
