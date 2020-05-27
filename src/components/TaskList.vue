<template>
    <div class='contrainer'>
    <div class="add-task">
        <input id="new-task" type="text" v-model="newtask">
        <button type="button" @click="addTask(newtask)">Add New Task </button>

    </div>
    <div class='task-zone'>
    <div class='drop-zone' @drop="onDrop($event, 'todo')" @dragenter.prevent @dragover.prevent>
        <h1>To-Do</h1>
        <div class="drag-el" draggable @dragstart="onStart($event, task)" v-for="task in todoList" :key="task.id">
            <!-- {{task.title}} -->
            <span v-if="editTask != task.id">{{task.title}}</span>
            <input v-else class="edit-task" type="text" v-model="task.title" >
            <button v-if="editTask != task.id" type="button" @click="onEdit(task)">Edit</button>
            <button v-else type="button" @click="editedTask(task)">Save</button>
            <button type="button" @click="deleteTask(task)">Delete</button>
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
                  ],
                  newtask: "",
                  editTask: ""
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
            const task = this.task.find(task => task.id == taskId)
            task.status = newStatus

        },
        addTask(newtask){
            let newId = this.task.length + 1
            this.task.push({ id:newId, title:newtask, status:'todo'})
            this.newtask = ""
        },
        onEdit(task){
            this.editTask = task.id
        },
        editedTask(updatetask){
            const task = this.task.find(task => task.id == updatetask.id)
            task.title = updatetask.title
            this.editTask= ""
        },
        deleteTask(deletetask){
            this.task.filter(task => task.id != deletetask.id)
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
    margin: 5px auto;
    padding-top: 15px;
}
.add-task{
    margin: 30px 0;
}
</style>