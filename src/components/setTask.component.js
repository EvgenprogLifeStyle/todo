import { Component } from "../core/component";

export class setTask extends Component {
   constructor(id) {
      super(id);
   }
   init() {
      this.status = 0; // Статус задачи по умолчанию
 
      this.$list = document.getElementById("todo-list"); // Блок со списком
 
      // Добавление задачи
      this.$id.querySelector(".header-todo__btn").addEventListener("click", this.addTask.bind(this));
      this.$list.addEventListener("click", this.done.bind(this))

      this.action(this.$list);
     
   }


   getDataLocal(){
      return localStorage.getItem("mylist")
   }

   setDataLocal(data){
      localStorage.setItem("mylist", JSON.stringify(data))
   }

   jsonParseLocal(){
     return JSON.parse(this.getDataLocal())
   }

   addTask() {

      const inputValue = this.$id.querySelector(".input");
      const dataList = this.jsonParseLocal();
      let idTask = 1  

      dataList === null ? idTask : idTask = dataList.length + 1
      
      if(inputValue.value){
         const newTask = {
            id: idTask,
            task: inputValue.value,
            status: this.status,
         }

         dataList 
            ? this.setDataLocal([...dataList, newTask])
            : this.setDataLocal([newTask])
         
         this.action(this.$list);
         inputValue.value = "";

      }else{
         alert('Specify a task!')
      }
   }

   

   // Вывод списка из Localstorage 
   action(list) {
     
      if(this.getDataLocal()){
         list.innerHTML = ''
         list = this.jsonParseLocal()
         list.forEach((item, index) => {
      
            let statusTask = item.status == 1 ? "ok" : ''; 
            let status = item.status == 1 ? "_ev" : ''; 
            let taskItem = `
            <li data-id="${index}" class="todo__item ${statusTask}">
               <div class="_text" ><div>${item.task}</div></div>
               <label class="_next ${status}"></label>
               <div class="_del"></div>
            </li>`;
         
            this.$list.insertAdjacentHTML("afterbegin", taskItem);
         });
      }else{
         list.innerHTML = '<div class="post__null">the list is empty</div>'
      }
   }

   done(e) {

      let list = this.jsonParseLocal()
      const el = e.target.classList
      const elParent = e.target.parentElement

      if (el.contains("_next")) {
   
         elParent.classList.toggle("ok");
         el.toggle("_ev");

         elParent.classList.contains("ok")
            ? list[elParent.dataset.id].status = 1
            : list[elParent.dataset.id].status = 0;

        return  this.setDataLocal(list)
      }

      if (el.contains("_del")) {

         list.splice([elParent.dataset.id],1)
         let clone = elParent.cloneNode(true)

         const productImageFlyTop = elParent.getBoundingClientRect().top;
         const productImageFlyLeft = elParent.getBoundingClientRect().left;

         clone.style.cssText = 
            `top: ${productImageFlyTop}px;
            left: ${productImageFlyLeft}px;
            transition: all 10s ease 0s;
            width: ${elParent.offsetWidth}px; `;

         document.body.append(clone)

         const basket = document.querySelector('.basket')
         const cartFlyLeft = basket.getBoundingClientRect().left;
         const cartFlyTop = basket.getBoundingClientRect().top;

         clone.style.cssText = 
            `position: fixed;
            top:${cartFlyTop}px;
            left: ${cartFlyLeft}px;
            z-index: 10;
            width: 0;
            opacity:0;
            transition: all 0.4s ease 0s;`;
 
         this.setDataLocal(list)
         if(this.getDataLocal() == '[]')  localStorage.removeItem('mylist') 
         this.action(this.$list) 
      } 
   }
}
