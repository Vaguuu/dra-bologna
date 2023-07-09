const searchTerm = 'ginecología'; // Término de búsqueda

// URL de la API PubMed para realizar consulta de búsqueda avanzada por keywords
const apiUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${searchTerm}[Title/Abstract]&retmode=json`;

// Realizar la solicitud HTTP utilizando fetch
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Filtrar los resultados para mostrar solo las publicaciones que coinciden con los keywords
    const results = data.esearchresult.idlist;
    // Mostrar los resultados
    const resultsContainer = document.getElementById('results-container');
    results.forEach(id => {
      const linkElement = document.createElement('a');
      linkElement.href = `https://pubmed.ncbi.nlm.nih.gov/${id}`;
      linkElement.textContent = `https://pubmed.ncbi.nlm.nih.gov/${id}`;
      resultsContainer.appendChild(linkElement);
    });
  })
  .catch(error => {
    console.error(error);
  });
