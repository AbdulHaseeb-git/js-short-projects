const upload = document.getElementById('upload');
const custombtn = document.getElementById('custom-btn');
const filename = document.querySelector('.file-name');

custombtn.addEventListener('click',()=>{
    upload.click();
})
upload.addEventListener('change',function(){
    if(this.value){
        let fileTitle = this.value.split('\\').pop();
        filename.textContent = fileTitle;
    }else{
        filename.textContent = "No File Selected"
    }
})