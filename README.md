EXAMEN pensamiento computacional

<img width="1469" height="704" alt="Captura de pantalla 2026-06-25 a la(s) 8 20 18 p m" src="https://github.com/user-attachments/assets/2b3fbf51-0fc7-4387-b755-d5dd8b390d9d" />


https://editor.p5js.org/magdalenaa/sketches/pdEHGQwvQ
https://editor.p5js.org/magdalenaa/full/pdEHGQwvQ

INFORMACIÓN DEL PROYECTO
nombre: Bauhaus interactivo
autor/a: Magdalena Frías

DESCRIPCIÓN: El proyecto combina figuras geométricas simples, una paleta de colores primaria y elementos sonoros para crear una experiencia dinámica. El usuario interactúa mediante el mouse y el teclado, el movimiento del cursor modifica el tamaño y la rotación de las figuras, además de controlar la transición del volumen entre dos audios, mientras que al presionar cualquier tecla las figuras cambian de posición de forma aleatoria y se alterna el sonido reproducido. De esta manera, cada interacción genera una composición visual y sonora diferente, permitiendo que el usuario participe activamente en la transformación de la obra manteniendo la estética del diseño Bauhaus.

DESCRIPCIÓN OBJETIVA

En pantalla se logra apreciar 4 figuras geometricas las cuales son un cuadrado amarillo, un triangulo negro, y dos circulos, uno rojo y uno azul. También hay de fondo dos lineas puestas aleatoriamente y particulas en toda la pantalla, las cuales están presentes en forma de pequeños cuadrados de los mismo colores usados anteriormente.


INPUTS


Movimiento del mouse en el eje X (mouseX)
Controla el tamaño de las figuras geométricas.
Mientras más hacia la derecha se mueve el mouse, mayor es el tamaño de algunas figuras; hacia la izquierda, disminuye.


Movimiento del mouse en el eje Y (mouseY)
Controla la rotación del cuadrado y del triángulo.
También modifica el volumen de los dos audios, haciendo una transición gradual entre ellos.


Presión de cualquier tecla (keyPressed())
Cambia aleatoriamente la posición de las figuras principales.
Alterna el audio que se está reproduciendo.



OUTPUTS


Salida visual
Se muestra una composición inspirada en el estilo Bauhaus.
Las figuras cambian de tamaño, rotación y posición según la interacción del usuario.
El cursor se representa como un círculo negro que sigue el movimiento del mouse.
Los pequeños cuadrados de colores complementan la composición y aportan textura visual.


Salida sonora
Se reproducen dos audios.
El volumen cambia según la posición vertical del mouse.
Al presionar una tecla, el audio cambia entre el primero y el segundo, acompañando las modificaciones visuales de la composición.



La idea central del proyecto es poder hacer interactuar al usuario de manera simple e intuitiva.







Explicación de la interacción
¿Qué datos entran al sistema?

El sistema recibe como datos de entrada la posición del mouse en los ejes horizontal (mouseX) y vertical (mouseY), además de la presión de cualquier tecla del teclado mediante la función keyPressed(). Estas entradas son capturadas en tiempo real y permiten que el usuario interactúe constantemente con la composición.

¿Cómo se procesan?

Los datos obtenidos del mouse son procesados utilizando la función map(), la cual convierte la posición del cursor en valores que controlan el tamaño de las figuras, el ángulo de rotación y el volumen de los dos audios. Por otra parte, cuando el usuario presiona una tecla, la función keyPressed() ejecuta un conjunto de instrucciones que generan nuevas posiciones aleatorias para las figuras y alternan el audio que se reproduce.

¿Cómo se transforman?

La información ingresada por el usuario se transforma en cambios visuales y sonoros. El movimiento horizontal del mouse modifica el tamaño de las figuras geométricas, mientras que el movimiento vertical controla tanto la rotación de algunas figuras como la transición del volumen entre los dos audios. Al presionar cualquier tecla, las figuras cambian de ubicación mediante valores aleatorios generados con random(), y el sonido cambia entre el primer y el segundo audio.

¿Qué respuestas producen?

Como respuesta, el sistema genera una composición visual dinámica inspirada en el estilo Bauhaus. Las figuras cambian de tamaño, orientación y posición según la interacción del usuario. Paralelamente, el sistema produce una respuesta sonora mediante dos audios cuyo volumen varía con el movimiento del mouse y cuya reproducción alterna al presionar una tecla. Cada interacción produce una composición diferente, tanto visual como auditivamente.







REFERENTES, PROCESO E ITERACIONES



<img width="720" height="694" alt="Captura de pantalla 2026-06-25 a la(s) 6 40 43 p m" src="https://github.com/user-attachments/assets/c25db7c5-1833-4eab-85ce-39170fab4dd5" />



Este fue el primer código que hice para el examen, fue solo una experimentación usando figuras al azar, como no interactuaba tanto con el usuario ni tampoco había usado referentes o principios de diseño lo descarté.












REFERENTES:



<img width="736" height="1104" alt="freedom to ski" src="https://github.com/user-attachments/assets/d71531a9-1441-4a0d-b1ef-1812b703f6aa" />




<img width="736" height="1104" alt="In geometry we trust series" src="https://github.com/user-attachments/assets/c53c72b8-d668-4607-9dc7-3ec607fb2159" />












COMPLICACIONES:
Durante el proceso tuve muchas complicaciones, ya que al poner nuevos codigos era confuso saber en que me estaba equivocando o por que no funcionaba, para resolver esas dudas usé cloude y videos de youtube, también me ayudó revisar las slides de la clase.
Como conclusión sobre los apredizajes obtenidos, puedo decir que a lo largo del proceso aprendí a utilizar p5.js para crear composiciones visuales dinámicas, incorporando elementos interactivos como el movimiento del mouse, el uso del teclado y la integración de sonido y otra multimedia.



Uno de los mayores desafíos fue mi nula experiencia con este tipo de programas. Antes de realizar este proyecto y los anteriores tenía conocimientos inexistentes tanto en programación como en el uso de p5.js, por lo que aprender de código, sintaxis y la forma en que se estructuran los programas requirió mucho tiempo. Además, fue necesario familiarizarme con GitHub, una herramienta con la que no tenía conocimientos previos. Aprender a crear repositorios, subir archivos, etc, fue un proceso nuevo que implicó dificultades al inicio, pero que me permitió desarrollar una herramineta para futuros proyectos.




A pesar de estos desafíos, el resultado obtenido para mi demuestra un avance en el manejo de herramientas de programación. Este proyecto me permitió comprender conceptos técnicos, también valorar el proceso de experimentación y resolución de problemas. Como resultado, terminé el trabajo con una mayor confianza para enfrentar nuevos proyectos que involucren programación.











DIAGRAMA DE FLUJO 







<img width="550" height="777" alt="diagrama de flujo" src="https://github.com/user-attachments/assets/a801f3fa-3eda-4e80-b06e-423bebcf8f4b" />













