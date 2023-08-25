import { LightningElement, track } from 'lwc';

const column = [
    {label: 'File Name', fieldName: 'fileUploadName'},
];

export default class FileUploader extends LightningElement {
    @track data = [];
    column = column;
    get accedptedFormat(){
        return ['.pdf', '.png'];
    }
    handleFinished(event){
        const uploadedFiles = event.detail.files;
        const newFiles = [];

        uploadedFiles.forEach(file => {
            newFiles.push({
                fileUploadName: file.name,
            });
        });

        this.data = [...this.data, ...newFiles];
    }
}