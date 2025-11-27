let result=0; //result
let op1=''; //operand 1
let op2=''; //operand 2
let operator=''; //the operator
let readOp1=true; //boolean swith to read op1
let readOp2=false; //boolean swith to read op2
/*
This function assigns the button key pushed
author: Rafa
version: 1.0
Return value: undefined
Params: lastButton(represents the key button pushed)
*/
function opAssign(lastButton){
    //if last button was = then calculate and new operation, read op1
    if(lastButton=='='){
        //create the expression to finish the calc
        //evaluate the operator first
        if(operator=='+'){
            result = Number(op1) + Number(op2);
        }else if(operator=='-'){
            result = Number(op1) - Number(op2);
        }else if(operator=='/'){
            result = Number(op1) / Number(op2);
        }else{
            result = Number(op1) * Number(op2);
        }
        op1=''; //clear the op1 value
        op2=''; //clear the op2 value
        operator=''; //clear the operator value
        readOp1=true;
        readOp2=!readOp1;
    }else if(lastButton=='*' || lastButton=='/' || lastButton=='+' ||
        lastButton=='-'){
        //if last button was +,*,/,- then complete operation, read op2
        readOp2=true;
        readOp1=!readOp2;
        operator=lastButton;
    }else if(readOp1){
        //read to assign value op1
        op1=op1+lastButton;
    }else{
        //read to assing value op2
        op2=op2+lastButton;
    }
}
function getResult(){
    return result;
}