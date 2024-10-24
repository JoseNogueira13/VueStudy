<template>
    <div>
      <h2>Nota dos Alunos</h2>
  
      <div v-for="student in students" :key="student.name" class="student">
        <h3>{{ student.name }}</h3>
        <p>Nota: {{ student.grade }}</p>
  
        <p v-if="student.grade >= 0 && student.grade <= 7">Reprovado</p>
        <p v-else-if="student.grade > 7 && student.grade < 10">Oral</p>
        <p v-else-if="student.grade >= 10 && student.grade <= 20">Aprovado</p>
        <p v-else>Nota inválida</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        students: [
          { name: 'João', grade: 5 },
          { name: 'Maria', grade: 8 }, 
          { name: 'Hugo', grade: 12 },
          { name: 'José', grade: 22 },
          { name: 'Tiago', grade: 0 }
        ]
      };
    }
  };
  </script>
  

  