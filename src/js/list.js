 const toList = document.querySelector('.list')
const listFunctions = {
    addToList : function (data) {
        if(Array.isArray(data)){
            data.forEach(element => this.addElementToList(element));
        } else {
            this.addElementToList(data);
        }   
    },
    addElementToList : function(params) {
        if(Object.keys(this).length === 0){
            const key = 'key0';
            this[key] = { data: params, head: true, next: null};
        } else{ 
            const key = this.addLinkToTheLast(this.findHead());
            this[key] = { data: params, head: false, next: null};
        }
        toList.innerHTML = '';
        this.showAll(this.findHead(),0);
    },
    generateKey : function() {
       const str = Object.keys(this)[Object.keys(this).length-1]
       const element = str.split('key')[1];
       return 'key'+ (Number(element)+1);
    },
    addLinkToTheLast : function(key) {
        if (this[key]['next'] === null) {
            this[key]['next'] = this.generateKey();
            return  this[key]['next'];
        } else{ 
            return this.addLinkToTheLast(this[key]['next']);
        }
    },
    deleteElement : function (param) {
        const whatTodelete = this.findBy('data', param, this.findHead());
        if (this[whatTodelete[2]]['next'] !== null){
        this[whatTodelete[2]]['next'] = whatTodelete[1];
        delete this[whatTodelete[0]];
        toList.innerHTML = '';
        this.showAll(this.findHead(),0);
        return true;
    } 
    return -1;
    },
    deleteLast : function () {
        const whatTodelete = this.findBy('next', null, this.findHead());
        if (this[whatTodelete[0]]['next'] === null){
        this[whatTodelete[2]]['next'] = whatTodelete[1];
        delete this[whatTodelete[0]];
        toList.innerHTML = '';
        this.showAll(this.findHead(),0);
        return true;
    } 
    return -1;
    },
    findBy : function (param, findWhat, key, keyBefore) {
        if (this[key][param] === findWhat) {
            return [key,this[key]['next'],keyBefore];
        } else if(this[key][param] !== null){ 
           return this.findBy(param, findWhat,this[key]['next'],key);
        } else{
            return [key,null,keyBefore];
        }
    },
    findSize : function () {
        return Object.keys(this).length+1;
    },
    findHead : function(){
        let result = -1;
        Object.keys(this).forEach(element => {
            if (this[element]['head']){
                result = element;
            }
        })
        return result;
    },
    findById : function(id){
        return this.findId(id,0,this.findHead());
    },
    findIdByvalue : function(value) {
        return this.findValue(value,0,this.findHead());
    },
    findValue : function(value,count,key){
        if(this[key]['data'] === value){
            return count;
        } else if(this[key]['next'] !== null){
           return this.findValue(value,++count,this[key]['next']);
        }
        return -1;
    },
    findId : function(id,count,key){
        if(count === id){
            return this[key]['data'];
        } else if(this[key]['next'] !== null){
           return this.findId(id,++count,this[key]['next']);
        }
        return -1;
    },
    showAll : function(key,count) {
        if(this[key])
        {   
            this.showInHTML(this[key],key,++count);
            this.showAll(this[key]['next'],count);
        } else{
            this.showNull();
        }
    },
    showInHTML : function(obj,key,count) {
        const task = document.createElement('div');
        let head;
        obj['head'] ? head = 'Head' : head = 'Element';
        task.classList.add('element');
  task.innerHTML = 
 ` <div class="head"> <h1>${head}</h1></div>
 <div class="container">
 <div class="mainContent">
     <div class="data">
         ${obj['data']}
     </div>
     <div class="pointer">
        ${key}
     </div>
     </div>
     <div class="arrow">
         ------------>
     </div>
 </div>
 <div class="number">
     <h1>Node ${count}</h1>
 </div>`;
toList.appendChild(task);
    },
    showNull: function() {
    const task = document.createElement('div');
  task.innerHTML = 
 ` <div class="null">
 <h1>Null</h1>
 </div>`;
toList.appendChild(task);
    }
}


// list.addToList('head');
// console.log(list);

// list.addToList('first element');
// list.addToList('second element');
// list.addToList('third element');
// console.log(list.deleteElement('first element'));
// console.log(list.findSize());
// console.log(list.findById(2));
// console.log(list.findIdByvalue('first element'));
// list.addToList(['forth element','fifth element']);
// console.log(list)
//list.showAll(list.findHead(),0)



