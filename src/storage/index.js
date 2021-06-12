// Storage封装
const STORAGE_KEY = 'xiebinghua';

export default {
    // 储存值 递归
    setItem(key, value, module_name) {
        if(module_name){
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name,val)
        }
        let val = this.getStorage();
        val[key] = value;
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    },
    // 获取值 递归
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) return val[key]
        }
        return this.getStorage()[key];
    },
    // 获取此应用的整个storage
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear(key, module_name) {
        let val = this.getStorage();
        if(module_name){
            if(!val[module_name]) return
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }

}