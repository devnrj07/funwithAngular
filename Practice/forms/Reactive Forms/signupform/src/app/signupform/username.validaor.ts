import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidator {
    //Synchronous validations
    static noSpaces(control : AbstractControl) :ValidationErrors|null{

        if((control.value as string).indexOf(' ')>=0){
            return {noSpaces :true}
        }
       return null 
    }

    //AsyncValidations using AysncValidatorsFn returns prmoise<ValidationErrors|null> or Observable<ValidationErrors|null>

    static uniqueName(control : AbstractControl) : Promise<ValidationErrors|null>{

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                    if((control.value as string) ==='nrj'){
                        resolve({isUnique:true})
                    }
                    else{
                        resolve(null)
                    }
            },2000)
        })
    }
}