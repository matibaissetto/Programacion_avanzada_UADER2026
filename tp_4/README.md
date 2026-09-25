# TP4 - Sesiones de pago y webhook Stripe

Microservicio HTTP desarrollado con NestJS para crear sesiones de pago con Stripe y recibir eventos mediante webhook.

<!-- REQUISITOS -->

- Node.js
- npm
- Stripe CLI
- Cuenta de Stripe en modo prueba

<!-- INSTALACIÓN -->

Instalar las dependencias:

```bash
npm install
```

Copiar `.env.template` a `.env`.

En Windows PowerShell:

```powershell
Copy-Item .env.template .env
```

Configurar las variables de entorno:

```env
PORT=3003
STRIPE_SECRET=sk_test_...
STRIPE_SUCCESS_URL=http://localhost:3003/payments/success
STRIPE_CANCEL_URL=http://localhost:3003/payments/cancel
STRIPE_ENDPOINT_SECRET=whsec_...
```

El archivo `.env` contiene las credenciales reales y no debe subirse al repositorio.

<!-- LEVANTAR EL MICROSERVICIO -->

```bash
npm run start:dev
```

El microservicio queda disponible en:

```text
http://localhost:3003
```

<!-- CREAR SESIÓN DE PAGO -->

Ruta:

```text
POST /payments/create-payment-session
```

Body de ejemplo:

```json
{
  "orderId": "ord-1",
  "currency": "usd",
  "items": [
    {
      "name": "Producto",
      "price": 20,
      "quantity": 1
    }
  ]
}
```

La respuesta devuelve al menos el identificador y la URL de Checkout:

```json
{
  "id": "cs_test_...",
  "url": "https://checkout.stripe.com/..."
}
```

<!-- RUTA DE PAGO EXITOSO -->

```text
GET /payments/success
```

Respuesta:

```json
{
  "ok": true,
  "message": "Payment successful"
}
```

<!-- RUTA DE PAGO CANCELADO -->

```text
GET /payments/cancel
```

Respuesta:

```json
{
  "ok": false,
  "message": "Payment cancelled"
}
```

<!-- WEBHOOK -->

Ruta:

```text
POST /payments/webhook
```

Para escuchar eventos de Stripe y reenviarlos al microservicio:

```bash
stripe listen --events charge.succeeded --forward-to localhost:3003/payments/webhook
```

Stripe CLI genera un secreto que comienza con `whsec_`. Ese valor debe guardarse en:

```env
STRIPE_ENDPOINT_SECRET=whsec_...
```

<!-- PRUEBA DE PAGO -->

En modo de prueba puede utilizarse la siguiente tarjeta:

```text
4242 4242 4242 4242
```

Puede utilizarse cualquier fecha futura y cualquier CVC de tres dígitos.

Al completarse correctamente el pago, Stripe envía el evento `charge.succeeded` al webhook y el microservicio registra en consola el `orderId` recibido en la metadata.