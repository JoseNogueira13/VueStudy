<template>
    <div>
      <h1>Escolas do P. PORTO</h1>
      <table>
        <thead>
          <tr>
            <th>Nome da Escola</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="school in schools" :key="school">
            <td>{{ school }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        schools: [
          'Escola Superior de Educação (ESE)',
          'Escola Superior de Música e Artes do Espetáculo (ESMAE)',
          'Escola Superior de Tecnologia e Gestão (ESTG)',
          'Instituto Superior de Contabilidade e Administração do Porto (ISCAP)',
          'Escola Superior de Saúde (ESS)',
          'Escola Superior de Media Artes e Design (ESMAD)'
        ]
      };
    }
  };
  </script>
  
  <style>
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  