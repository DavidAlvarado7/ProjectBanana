export interface Appointments {
    iD: number;
    Name: string;
    ContactInfo: string;
    SelectService: null | number;
    Description: string;
    Date: null | Date;
   
}

export interface SubmitAppointments{
    Name: string;
    ContactInfo: string;
    SelectService: null | number;
    Description: string;
    Date: null | Date;

 
}
