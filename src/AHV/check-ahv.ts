interface ResponseObject {
    valid: Boolean;
    length: number;
    description: string
}

/**
 * ahv checker and validator
 * @param ahv 
 */
const check = (ahv: string) => {

    // get only numbers in given string
    const ssnNumber = ahv.replace(/[^0-9]/g,'');
    
    const ssnNumberLength = ssnNumber.length;

    if(ssnNumberLength > 13 || ssnNumberLength < 13) {
        return response({
            valid: false,
            length: ssnNumberLength,
            description: `Given AHV length is ${ssnNumberLength > 13 ? 'greater than 13 digits' : 'less than 13 digits'}`
        });
    }

    // convert string to array of numbers
    const ahvArray = ssnNumber.split("").map(Number);

    let sum = 0;
    for (let index = 0; index < ssnNumberLength - 1; index++) {
        if (index % 2 === 1) {
            sum = sum + (ahvArray[index] * 3);
        } else {
            sum = sum + ahvArray[index];
        }
    }

        //checking if sum of number ends with 0, if so check number will always be 0
        // else it will get 10 - ($sum % 10) 
        let checkNumber;
        if (sum % 10 === 0) {
            checkNumber = 0;
        } else {
            checkNumber = 10 - (sum % 10);
        }
        if (checkNumber === ahvArray[12]) {
            return response({
                valid: true,
                length: ssnNumberLength,
                description: 'AHV number is correct.'
            })
        }
        return response({
            valid: false,
            length: ssnNumberLength,
            description: 'AHV number is not correct!'
        })
}

/**
 * response function
 * @param ResponseObject
 */
const response = ({valid, length, description} : ResponseObject) => {
    const response: ResponseObject = {
        valid,
        length,
        description
    }
    return response;
}
export default check;
