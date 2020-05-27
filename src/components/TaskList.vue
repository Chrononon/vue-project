<template>
    <div class='contrainer'>
    <div class='task-zone'>
    <div class='drop-zone' @drop="onDrop($event, 'todo')" @dragenter.prevent @dragover.prevent>
        <h1>To-Do</h1>
        <div class="drag-el" draggable @dragstart="onStart($event, task)" v-for="task in todoList" :key="task.id">
            {{task.title}}
        </div>
        
    </div>
    <div class='drop-zone' @drop="onDrop($event, 'doing')" @dragenter.prevent @dragover.prevent > 
        <h1>Doing</h1>
        <div class="drag-el" draggable @dragstart="onStart($event, task)" v-for="task in doingList" :key="task.id">
            {{task.title}}
        </div>
  
    </div>
    <div class='drop-zone' @drop="onDrop($event, 'done')" @dragenter.prevent @dragover.prevent> 
        <h1>Done</h1>
        <div class="drag-el" draggable @dragstart="onStart($event, task)" v-for="task in doneList" :key="task.id">
            {{task.title}}
        </div>
        
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
                  id: 1,
                  title: 'Item A',
                  status: 'todo'
              },{
                  id: 2,
                  title: 'Item B',
                  status: 'todo'}
                  ,{
                  id: 3,
                  title: 'Item C',
                  status: 'doing'}
                  ,{
                  id: 4,
                  title: 'Item D',
                  status: 'done'    
                  }
                  ]
        }
        
    },computed:{
        todoList(){
            return this.task.filter(task => task.status == "todo")
        },
        doingList(){
            return this.task.filter(task => task.status == "doing")
        },
        doneList(){
            return this.task.filter(task => task.status == "done")
        }
    },
    methods:{
        onStart(e,task){
            e.dataTransfer.dropEffect = "move"
            e.dataTransfer.effectAllowed = "move"
            e.dataTransfer.setData('taskId', task.id)
        },
        onDrop(e, newStatus){
            const taskId = e.dataTransfer.getData('taskId')
            const task = this.tasks.find(task => task.id == taskId)
            task.status = newStatus

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