const listFunctions = {
    addElementToList : function(params) {
        if(Object.keys(this).length === 0){
            const key = this.generateKey();
            this.head = key;
            this[key] = { data: params, head: true, next: null};
        } else{ 
            const key = this.addLinkToTheLast(this.head);
            this[key] = { data: params, head: false, next: null};
        }
    },
    generateKey : function() {
       return 'key'+ Object.keys(this).length;
    },
    addLinkToTheLast : function(key) {
        if (this[key]['next'] === null) {
            this[key]['next'] = this.generateKey();
            return  this[key]['next'];
        } else{ 
            this.addLinkToTheLast(this[key]['next']);
        }
    },
    deleteElement : function (param) {
        const whatTodelete = this.findBy('data', param, this.head);
        if (this[whatTodelete[2]]['next'] !== null){
        this[whatTodelete[2]]['next'] = whatTodelete[1];
        delete this[whatTodelete[0]];
        return true
    } 
    return -1;


    },
    findBy : function (param, findWhat, key, keyBefore) {
        switch (param) {
            case 'data':
                if (this[key]['data'] === findWhat) {
                    return [key,this[key]['next'],keyBefore];
                } else if(this[key]['data'] !== null){ 
                   return this.findBy(param, findWhat,this[key]['next'],key);
                } else{
                    return [key,null,keyBefore];
                }
               
        
            default:
                break;
        }        
    }
}

const list = Object.create(listFunctions);
list.addElementToList('head');
console.log(list);

list.addElementToList('first element');
console.log(list.deleteElement('first element'));
console.log(list);
