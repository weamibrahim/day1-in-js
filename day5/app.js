let employees=[];
class Person{
    #health_Rate = 0;
    constructor(full_name, money, sleep_mood)
    {
    this.name = full_name;
    this.money = money;
    this.sleep_mood = sleep_mood;


    }
    
    get health_Rate () {
        return this.#health_Rate
      }
    
      set health_Rate (value) {
        if (value > 100) 
        {   console.log('Sorry you canot enter healrate higher than 100')
            this.#health_Rate = this.#health_Rate}
        else {this.#health_Rate = value}
      }
    sleep(hours) {
        if(hours==7)
        {
         this.sleep_mood = "Happy";
         console.log(this.sleep_mood);
        }
        else if(hours<7)
        {
         this.sleep_mood = "Tired";
         console.log(this.sleep_mood);
        }
        else 
        {
         this.sleep_mood = "Lazy";
         console.log(this.sleep_mood);
        }
     }
      Eat(meals) {
         switch(meals)
         {
             case 1: 
                 this.health_Rate = 50;
                 console.log(this.health_Rate);
                 break;
             case 2 :
                 this.health_Rate = 75;
                 console.log(this.health_Rate);
                 break;
             case 3:
                 this.health_Rate = 100; 
                 console.log(this.health_Rate);
                 break;
         }
      }
      Buy(items) {	
         if(items==1)
         {
             this.money=this.money - 10;
             console.log(this.money);
         }
         else{
             console.log(this.money);
         }
      }
    }

class Employee extends Person{
         #salary;
    constructor(full_name, money, sleep_mood, salary,
                  id, email, workMood, isManager)
    { 
        super(full_name, money, sleep_mood)
        this.id = id
        this.mail = email
        this.workMood = workMood
        this.isManager = isManager
       
       this.#salary=1000
  

            
         }
        
         get salary () {
            return this.#salary
          }
        
          set salary (value) {
            if (value < 1000) 
            {   alert('Sorry Salary must be 1000 at least')
                this.#salary = this.#salary}
            else {this.#salary = value}
          }
        
   
  
   work(hours)
   {
    if(hours==8)
        {
         this.sleep_mood = "Happy";
         console.log(this.sleep_mood);
        }
        else if(hours>8)
        {
         this.sleep_mood = "Tired";
         console.log(this.sleep_mood);
        }
        else 
        {
         this.sleep_mood = "Lazy";
         console.log(this.sleep_mood);
        }
   }}
   


class Office extends Employee{
    constructor(full_name, money, sleep_mood, salary, 
        id, email, workMood, isManager, name)
        {
            super(full_name, money, sleep_mood,salary,
                id, email, workMood, isManager)
                this.n = name
        }
    hire(employee)
        {   
            for(let i=0;i<employees.length;i++){
                let currentemp=employees[i]
                if(currentemp.id===employee.id )
                {alert('Sorry, this id already taken')
                 menu()}
                
                
                }
            employees.push(employee)
                  
       }
    getAllEmployees()
    
        {
        
        for(let i=0;i<employees.length;i++){
            let currentemp=employees[i];
            if(currentemp.isManager==='false'){
                alert("fullname\t"+currentemp.name+"      "+"money\t"+currentemp.money+"      "+"sleep mode\t"+currentemp.sleep_mood+"      "+"email\t"+currentemp.mail+"      "+"work mode\t"+currentemp.workMood+"     "+" id is =" +currentemp.id+ "    "+"is manager\t"+currentemp.isManager +"   "+"salary is "+currentemp.salary);}
            else {
                alert("fullname\t"+"   "+currentemp.name+"   "+"money\t"+currentemp.money+"    "+"sleep mode\t"+currentemp.sleep_mood+"    "+"email\t"+currentemp.mail+"    "+"work mode\t"+currentemp.workMood+"    "+" id is =" +currentemp.id+"    " +"is manager\t "+currentemp.isManager );}
             
          
        }}
    getEmployee(empid)
        {
            for(let i=0;i<employees.length;i++){
            let currentemp =employees[i];
            if(currentemp.id==empid ){
            if(currentemp.isManager==='false'){
                alert("fullname\t"+currentemp.name+"      "+"money\t"+currentemp.money+"      "+"sleep mode\t"+currentemp.sleep_mood+"      "+"email\t"+currentemp.mail+"      "+"work mode\t"+currentemp.workMood+"     "+" id is =" +currentemp.id+ "    "+"is manager\t"+currentemp.isManager +"   "+"salary is "+currentemp.salary);}
            else {
                alert("fullname\t"+"   "+currentemp.name+"   "+"money\t"+currentemp.money+"    "+"sleep mode\t"+currentemp.sleep_mood+"    "+"email\t"+currentemp.mail+"    "+"work mode\t"+currentemp.workMood+"    "+" id is =" +currentemp.id+"    " +"is manager\t "+currentemp.isManager );} 
            }
           
        }}
    fire(empid)
        {
           
            for(let i=0;i<employees.length;i++)
            {  let currentemp=employees[i]
               if(currentemp.id==empid )
                {
                 
                    employees.splice(i,1)
                    
                }
            }
           
        } 
  } 

 let office1 = new Office ();
function menu(){
    do{
        var operation = Number(prompt('Enter number\n 1) Add employee:\n 2) get employee by its id\n 3) getAll employees:\n 4) Delete  emplyee by it id\n 5) Quit from menu'))
        if(operation == 5)
           {break}
        switch(operation)
        {
            case 1: 
              var ismanager = prompt(' is manager true or false')
              var id = Number(prompt('Enter ID: '))
              var name = prompt('Enter Full Name: ')
              var mail = prompt('Enter Email: ')
              var salary = Number(prompt('Enter Salary: '))
              const emp = new Employee(name, 50, "bad", salary,id, mail, "lazy",ismanager)
              emp.salary= salary; 
              office1.hire(emp)
              break;
            case 2: 

            var emp_id = Number(prompt('Enter ID: '))
            office1.getEmployee(emp_id)
                
            break


               
            case 3: 
            office1.getAllEmployees()   
            break
            case 4: 
                var emp_id = Number(prompt('Enter  ID: '))
                office1.fire(emp_id)
            break
            default:
                alert('This is not allowed operation')
            break
        }
    }
    while(operation !='' && operation !=null)
    {
        alert('You are exited')
                
    }
}
 menu()