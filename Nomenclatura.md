# Políticas de Nomenclatura para el Equipo de Desarrollo

## Objetivo
Establecer un conjunto de normas de nomenclatura para asegurar la consistencia, legibilidad y mantenibilidad del código en todos los proyectos de la compañía.

## Bases de Datos

### Nombres de Bases de Datos
- Usar snake_case.
- Incluir un prefijo para identificar el entorno (dev, test, prod).
- Ejemplo: 'dev_ecommerce', 'prod_ecommerce'.

### Nombres de Tablas
- Usar snake_case.
- Preferir nombres en singular.
- Ejemplo: 'user', 'order', 'product'.

### Nombres de Columnas
- Usar snake_case.
- Ser descriptivo pero conciso.
- Prefijar claves foráneas con el nombre de la tabla referenciada.
- Ejemplo: 'user_id', 'created_at', 'order_total'.

### Índices y Claves
- Usar snake_case.
- Prefijar con el tipo de índice ('idx' para índices, 'pk' para claves primarias, 'fk' para claves foráneas).
- Ejemplo: 'idx_user_email', 'pk_users', 'fk_orders_user_id'.

## Variables

### Variables en JavaScript
- Usar camelCase para variables locales.
- Usar SCREAMING_SNAKE_CASE para constantes.
- Ser descriptivo pero conciso.
- Ejemplo: 'userName', 'orderTotal', 'MAX_USERS'.

### Variables en Archivos de Configuración (.env)
- Usar SCREAMING_SNAKE_CASE.
- Ejemplo: 'DATABASE_URL', 'API_KEY'.

## Funciones

### Nombres de Funciones
- Usar camelCase.
- Iniciar con un verbo que describa la acción.
- Ejemplo: 'getUser', 'createOrder', 'calculateTotal'.

### Parámetros de Funciones
- Usar camelCase.
- Ser descriptivo pero conciso.
- Ejemplo: 'userId', 'orderData'.

## Clases

### Nombres de Clases
- Usar PascalCase.
- Ser descriptivo pero conciso.
- Ejemplo: 'UserController', 'OrderService', 'ProductModel'.

### Propiedades y Métodos
- Propiedades: usar camelCase.
- Métodos: usar camelCase.
- Ejemplo: 'this.userName', 'this.createOrder()'.

## Git

### Nombres de Ramas
- Usar kebab-case.
- Prefijar con el tipo de trabajo ('feature', 'bugfix', 'hotfix', 'release').
- Ejemplo: 'feature/user-authentication', 'bugfix/order-total-calculation'.

### Mensajes de Commit
- La primera línea debe ser concisa y no mayor a 50 caracteres.
- Iniciar con un verbo en imperativo: 'Add', 'Fix', 'Update', 'Remove'.
- Ejemplo: 'Add user authentication', 'Fix order total calculation'.

## Archivos y Directorios

### Nombres de Archivos
- Usar kebab-case para archivos JavaScript.
- Usar PascalCase para componentes de React.
- Ejemplo: 'user-controller.js', 'order-service.js', 'UserProfile.js'.

### Nombres de Directorios
- Usar kebab-case.
- Ejemplo: 'controllers', 'services', 'models'.

## Convenciones Generales

### Idioma
- Usar inglés para todos los nombres y comentarios en el código.

### Comentarios
- Utilizar comentarios para explicar el por qué de un código complejo, no el cómo.
- Usar JSDoc para documentar funciones, métodos y clases.

