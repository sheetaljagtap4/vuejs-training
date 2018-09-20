<template>
    <div>
        {{ fullname.fname }} {{ fullname.lname }}
    </div>
</template>

<script>
export default {
  props: ['fullname']
};
</script>

<style>
</style>
