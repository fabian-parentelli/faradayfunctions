# Faradays Functions.

## Instalación.

```bash
npm install faradayfunctions
```
## `restDays`

La función `restDays` calcula el número de días restantes hasta una fecha determinada. Esta función es útil para aplicaciones que necesitan realizar un seguimiento de las fechas de finalización de eventos, tareas o cualquier otro tipo de plazo.

### Uso

Primero, debes importar la función en el archivo donde deseas usarla. Puedes hacerlo de la siguiente manera:

```
import { restDays } from 'faradayfunctions';
```
### Llamar a la función

La función restDays acepta un parámetro endDate de tipo Date, que representa la fecha de finalización. A continuación, se muestra cómo utilizar la función:

```
const endDate = new Date('2024-12-31');
const remainingDays = restDays(endDate);
console.log(`Días restantes: ${remainingDays}`);
```