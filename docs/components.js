module.exports = {
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            completed: { type: 'boolean' }
          }
        }
      }
    }
  };
  