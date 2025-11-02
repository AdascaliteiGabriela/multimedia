 const arrayTasks = [];
 


      document.addEventListener("DOMContentLoaded", () => {
         const btnAdd = document.querySelector("#buttonAdd");
         const inputAdd = document.querySelector("#inputAdd");
    
         function renderTodoList(){

         let listHTML='';
         for( let i=0;i<arrayTasks.length;i++)
         {
             const el=arrayTasks[i];
             listHTML+=`<p>${el}</p>`;
             
         }
         const listL=document.querySelector("#list");
         listL.innerHTML=listHTML;
        }
       
         btnAdd.addEventListener("click", () => {
             if (inputAdd.value) {arrayTasks.push(inputAdd.value);
             inputAdd.value='';
             renderTodoList();}
        });
        renderTodoList();
     
      });
