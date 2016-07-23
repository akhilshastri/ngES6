/**
 * Created by Akhil on 24-07-2016.
 */
import {model} from './model'
import {InvalidArgumentTypeException} from 'common/appErrors';

@model({endpoint:'sketch'})
export  class SketchModel {

    constructor(sketch){
       let data ;
       if( typeof sketch === 'string'){
           data = JSON.parse(sketch);
       } else if( typeof sketch==='object'){
           data = sketch;
       } else {
           throw new InvalidArgumentTypeException();
       }
       Object.assign(this,data);
    }

   static parseList(sketches){

       let data ;
       if( typeof sketches === 'string'){
           data = JSON.parse(sketches);
       } else if( typeof sketches==='object'){
           data = sketches;
       } else {
           throw new InvalidArgumentTypeException();
       }
       if(!Array.isArray(data)){
           throw new InvalidArgumentTypeException();
       }

       return sketches.map((sketch)=>new SketchModel(sketch));
   }
}