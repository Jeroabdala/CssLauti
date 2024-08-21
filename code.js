// Usando Fetch API para conectarse a la API de Shopify
const fetchProductData = async () => {
  // URL de la API de Shopify
  const url = 'https://tecstoreargentina.myshopify.com/admin/api/2023-07/products.json?handle=camara-imilab-c22-xiaomi';
  
  // Credenciales de la API (usando Basic Auth)
  const apiKey = 'daff7abea9e9428f68689dc70d5a7282';
  const password = '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';

  // Crear el encabezado de autenticación
  const authHeader = 'Basic ' + btoa(`${apiKey}:${password}`);

  try {
    // Hacer la solicitud GET a la API de Shopify
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      }
    });

    // Verificar si la respuesta fue exitosa
    if (response.ok) {
      // Convertir la respuesta a JSON
      const productData = await response.json();
      console.log('Datos del Producto:', productData);
    } else {
      console.error('Error al obtener los datos:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error de conexión:', error);
  }
};

// Llamar a la función para obtener los datos
fetchProductData();
