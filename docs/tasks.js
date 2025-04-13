module.exports = {
    paths: {
      '/create': {
        post: {
          tags: ['Tasks'],
          summary: 'Crear una tarea',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Task' }
              }
            }
          },
          responses: {
            201: { description: 'Tarea creada' }
          }
        }
      },
      '/': {
        get: {
          tags: ['Tasks'],
          summary: 'Obtener todas las tareas',
          responses: {
            200: { description: 'Lista de tareas' }
          }
        }
      },
      '/id/{_id}': {
        put: {
          tags: ['Tasks'],
          summary: 'Actualizar solo el título de una tarea',
          parameters: [
            { name: '_id', in: 'path', required: true, schema: { type: 'string' } }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { type: 'object', properties: { title: { type: 'string' } } }
              }
            }
          },
          responses: {
            200: { description: 'Tarea actualizada' }
          }
        },
        delete: {
          tags: ['Tasks'],
          summary: 'Eliminar una tarea',
          parameters: [
            { name: '_id', in: 'path', required: true, schema: { type: 'string' } }
          ],
          responses: {
            200: { description: 'Tarea eliminada' }
          }
        }
      }
    }
  };
  