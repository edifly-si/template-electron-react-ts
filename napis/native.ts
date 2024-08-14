
// const ffi=require('node-ffi-napi');
import ffi from 'ffi-napi';
import path from 'path';

const dllPath = path.join(__dirname, '../../napis/example64.dll');
console.log(dllPath, process.arch);

 const myLibrary = ffi.Library(dllPath, {
   'add': ['int', ['int', 'int']]
});

export default myLibrary
