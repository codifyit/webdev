let result=0; //result
let op1=0; //operand 1
let op2=0; //operand 2
let operator=''; //the operator
let readOp1=true; //boolean swith to read op1
let readOp2=false; //boolean swith to read op2
/*

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
    }
    //else read op1 or op2
    if(readOp1){
        //read to assign value op1
        op1=op1+lastButton;
    }else{
        //read to assing value op2
        op2=op2+lastButton;
    }
}
/*
This function assign a value to op2
*/
function op2Assign(ope2){
    op2 = ope2;
}
function sum(){
    result = op1 + op2;
}
function substract(n1,n2){
    result = n1 - n2;
}
function product(n1,n2){
    result = n1 * n2;
}
function div(n1,n2){
    result = n1 / n2;
}