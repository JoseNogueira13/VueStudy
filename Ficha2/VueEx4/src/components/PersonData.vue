<template>
    <div>
        <ul>
            <li>First Name: {{person.firstName}}</li>
            <li>Last Name: {{person.lastName}}</li>
            <li>Age: {{person.age}}</li>
        </ul>

        <p>{{ printName() }}</p>
        <p>{{ printName() }}</p>

        <p>{{ printDataPersonComputed }}</p>
        <p>{{ printDataPersonComputed }}</p>
        <p>{{ getFullNameComputed }}</p>
    </div>

</template>

<script>
export default {
  data() {
    return {
        person: {firstName: "Rui", lastName: "Silva", age: 23} 
        }  
    },
    methods: {
        printName() {
            console.log("METHOD-->", "NOME:", this.person.firstName + " " + "IDADE:", this.person.age)
        }
    },
    computed:{
        printDataPersonComputed() {
            console.log("COMPUTED-->", "NOME:", this.person.firstName + " " + "IDADE:", this.person.age)
        },
        getFullNameComputed() {
            return this.person.firstName + " " + this.person.lastName
        }
    },
    watch: {
    'person.age'(newValue, oldValue) {
      console.log("Idade alterada! De:", oldValue, "Para:", newValue);
    }
  },
    onMounted() {
        console.log("EVENTO: mounted")
    },
    created() {
        console.log("EVENTO: created")
    },
    updated() {
        console.log("EVENTO: updated")
    },
}

</script>