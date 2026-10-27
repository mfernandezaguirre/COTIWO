# Cotiwo v13 — Base SaaS multiempresa (demo conectada)

## Ejecutar

```bash
python -m pip install -r requirements.txt
python -m uvicorn server:app --reload
```

- Panel empresarial: http://127.0.0.1:8000/
- Portal de comprador: http://127.0.0.1:8000/clientes.html?empresa=atl

## Flujo de empresa nueva

1. En el panel elegí **Registrar nueva empresa**.
2. Introducí datos **ficticios**, incluyendo CUIT válido de prueba y un identificador URL único.
3. Iniciá sesión con la nueva cuenta.
4. En **Licencia y enlace**, simulá el pago mensual único de **US$ 70**.
5. Copiá el enlace exclusivo y abrilo como comprador; registrá un comprador ficticio.
6. Creá productos en la cuenta empresarial (si es un vendedor de bienes), solicitá presupuesto desde el portal y revisá **Solicitudes** y **Notificaciones**.

## Alcance y límites de seguridad

El software es una **demo funcional, no un producto listo para producción**. Utiliza SQLite local. El pago de US$ 70 es simulado, nunca se aceptan datos de tarjetas reales. Los enlaces no están desplegados públicamente; solo funcionan en el host donde se ejecuta el servidor.

**No lo publiques para uso real sin:** PostgreSQL persistente, migraciones, sesiones seguras con HTTPS, rate limits, separación de datos auditada, CSRF, políticas de contraseñas, validación/verificación empresarial, acceso estricto por invitaciones, control de facturación y webhooks verificados. La URL con `empresa` identifica el proveedor pero por sí misma no constituye una invitación secreta. La demo aún permite que un comprador se registre con el identificador de empresa conocido.

## Sustitución del repositorio

Respaldá el repositorio actual y copiá el contenido completo de esta carpeta a `cotiwo-cloud`. Asegurate de **no subir** bases SQLite reales, archivos `.env`, contraseñas ni datos de clientes. El proyecto no actualiza GitHub, Render o Supabase automáticamente.
