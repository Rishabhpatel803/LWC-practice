import { LightningElement } from 'lwc';

const column = [
    {label: 'File Name', fieldName: 'fileUploadName'},
];

export default class FileUploader extends LightningElement {
    data = [];
    column = column;
    uploadedFilesName;
    get accedptedFormat(){
        return ['.pdf', '.png'];
    }
    handleFinished(event){
        const uploadFiles = event.detail.files;
        console.log(uploadFiles);
        for(const getName in uploadFiles){
            const data = `{"fileUploadName": ${uploadFiles[getName].name}}`;
            console.log(data);
        }
        alert('No of uploaded Files :'+ uploadFiles.length);
    }
}