import React, { Component } from 'react';
import s from './module1.module.scss';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as file2html from 'file2html';
import TextReader from 'file2html-text';
import OOXMLReader from 'file2html-ooxml';
import docx4js from "docx4js";
import { input , option } from 'mammoth';
import {src} from './test.docx';
import mammoth from "mammoth";
class Module1 extends Component {
    
    
    render(){
      console.log(mammoth);
 


      
    
        
       
        
        
          
        return(
            <>
            <input></input>
           
          </>
        )
    }
}

export default Module1 ;