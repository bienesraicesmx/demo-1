# Endpoints Bienes raices

## Manejo de errores y respuesta

Si el valor de **error** es **true** detener ejecucion y mostrar el mensaje retornado en el mismo objeto **error**

## Cabezera de Auth

En los endpoints que requieren Auth se debe enviar un header con el siguiente nombre **bearer** y valor **jwt** obtenido luego de realizar el login: 

## Registrar Usuario

### Endpoint

**POST /api/v1/users**

### Enviar valores

**{"email":"ada22d@mda.com","password":"123123","r_password":"123123"}**

### Respuesta

```
{ "response": "Usuario Creado", "error": false }
```

## Login

### Endpoint

**POST /api/v1/login**

### Enviar valores

```
{"email":"ada22d@mda.com","password":"123123"}
```

### Respuesta
```
{
    "response": "Autenticación correcta",
    "error": false,
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwidXNlcklEIjoiNjNiNzVmYThjMTIwYTc1NDVjMGEwNjJkIiwiaWF0IjoxNjcyOTY0MTkxLCJleHAiOjE2NzMwNTA1OTF9.fqj9OlhScN9Cj3grgw2cYz16UChsS9IoddPMSYQ9CkE"
}
```

## Obtener Propiedades

### Endpoint

**GET /api/v1/properties**

### Enviar valores

No requiere

### Respuesta

```
{
    "response": [
    {
        "price": 15225,
        "bano": 1,
        "rooms": 1,
        "estacionamiento": 0,
        "_id": "63b763d252566667001fc1f6",
        "title": "priedad de prueba",
        "categorie": [
            "Renta"
        ],
        "description": "llinda casa",
        "owner": "63b75fa8c120a7545c0a062d",
        "location": "ubicacion",
        "img": "https://i.blogs.es/c68014/casa-3d/1366_2000.jpeg",
        "gallery": [
            "https://i.blogs.es/c68014/casa-3d/1366_2000.jpeg"
        ]
    }
    ],
    "error": false
}
```

## Crear Propiedades

### Endpoint

**POST /api/v1/properties/newProperty** 

Requiere Auth

### Enviar valores

```
{"title":"priedad de prueba", "categorie":["Renta"], "price":15225, "bano":1, "rooms":1, "estacionamiento":0, "description":"llinda casa", "location":"ubicacion", "img":"https://i.blogs.es/c68014/casa-3d/1366_2000.jpeg","gallery":["https://i.blogs.es/c68014/casa-3d/1366_2000.jpeg"]}
```

### Respuesta

```
{
    "error": false,
    "response": "Propiedad creada"
}
```

## Actualizar Propiedad

### Endpoint

**POST /api/v1/properties/updateProperty** 

Requiere Auth

### Enviar valores

```
{"id":"id de la propiedad a actualizar","title":"priedad de prueba2", "categorie":["Renta"], "price":15225, "bano":1, "rooms":2, "estacionamiento":0, "description":"llinda casa2", "location":"ubicacion", "img":"https://i.blogs.es/c68014/casa-3d/1366_2000.jpeg","gallery":["https://i.blogs.es/c68014/casa-3d/1366_2000.jpeg","https://i.blogs.es/c68014/casa-3d/1366_2000.jpeg"]}
```

### Respuesta

```
{
    "error": false,
    "response": "Propiedad actualizada"
}
```