<template>
    <div>
        <h1>Editar Categoria</h1>

        
    </div>
</template>

<script>
export default {
    // props espera que seja passado um campo obrigatório, ou seja, valores dinamicos.
    props: {
        id: {
            require: true
        }
    },
    created () {
        this.$store.dispatch('loadCategory', this.id)
                        .then(response => this.category = response)
                        .catch(error => {
                            console.log(error)
                        })
    }
}
</script>

<style scoped>

</style>