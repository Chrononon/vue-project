<template>
    <div class='contrainer'>
    <div class='task-zone'>
    <div class='drop-zone'> \
        <h1>To-Do</h1>
        <div class='drag-el'>Item 1</div>
    </div>
    <div class='drop-zone'> \
        <h1>Doing</h1>
        <div class='drag-el'>Item 2</div>
    </div>
    <div class='drop-zone'> \
        <h1>Done</h1>
        <div class='drag-el'>Item 3</div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'TaskList',
    data(){
        return{
              task:[{
                  id:1,
                  title: 'Item A',
                  status: 'todo'
              },{
                  id:2,
                  title: 'Item B',
                  status: 'todo'}
                  ,{
                  id:3,
                  title: 'Item C',
                  status: 'todo'}]
        }
        
    }
}
</script>

<style scoped>
.contrainer{
    margin: 30px 0;
}
.task-zone{
    display: flex;
    justify-content: space-around;
}
.drop-zone{
    border: 1px solid black;
    width: 250px;
    height: 400px;
    padding: 10px 0;
}
.drag-el{
    border: 1px solid black;
    width: 200px;
    height: 40px;

}
</style>