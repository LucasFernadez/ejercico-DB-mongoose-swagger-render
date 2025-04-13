module.exports = {
    openapi: '3.0.0',
    info: {
      title: 'API de Tareas',
      version: '1.0.0',
      description: 'CRUD de tareas con Express y MongoDB'
    },
    servers: [
      {
        url: 'https://<tu-nombre-app>.onrender.com',
        description: 'Servidor en producción'
      },
      {
        url: 'http://localhost:8080',
        description: 'Servidor local'
      }
    ]
  };
  