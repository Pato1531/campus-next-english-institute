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
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
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
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
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
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
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
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
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
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
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
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
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
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
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
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
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
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
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
    titulo: "COMPLETAR_TITULO_CURSO",
    nivel: "COMPLETAR_NIVEL",
    modulos: [
      {
        id: "efz-m1",
        titulo: "Módulo 1 · COMPLETAR_TITULO",
        orden: 1,
        lecciones: [
          {
            id: "efz-m1-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "efz-m1-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "efz-m1-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "efz-m1-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
      {
        id: "efz-m2",
        titulo: "Módulo 2 · COMPLETAR_TITULO",
        orden: 2,
        lecciones: [
          {
            id: "efz-m2-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "efz-m2-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "efz-m2-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "efz-m2-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
      {
        id: "efz-m3",
        titulo: "Módulo 3 · COMPLETAR_TITULO",
        orden: 3,
        lecciones: [
          {
            id: "efz-m3-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "efz-m3-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "efz-m3-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "efz-m3-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
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
