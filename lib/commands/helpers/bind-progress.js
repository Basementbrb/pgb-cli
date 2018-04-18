const Progress=require('../../util/progress'),format=require('./formatters');module.exports=()=>{let a={};return a.zipFiles=a=>{pgb.debug(a)},a.zipEnd=()=>{a.zipProgress&&a.zipProgress.stop()},a.apiConnect=()=>{a.uploadProgress&&a.uploadProgress.stop()},a.apiWrite=b=>{!a.zipProgress&&5e4>b.size||(!a.uploadProgress&&(a.uploadProgress=new Progress('uploading ',b.size,40),a.uploadProgress.start()),a.uploadProgress.update(b.pos,`${format.size(b.pos)} / ${format.size(b.size)}`))},a.zipWrite=b=>{a.zipProgress||(a.zipProgress=new Progress('archiving ',b.size,40),a.zipProgress.start()),a.zipProgress.update(b.pos,`${format.size(b.pos)} / ${format.size(b.size)}`)},a.unbind=()=>{process.removeListener('zip/files',a.zipFiles),process.removeListener('zip/end',a.zipEnd),process.removeListener('api/connect',a.apiConnect),process.removeListener('zip/write',a.zipWrite),process.removeListener('api/write',a.apiWrite)},a.stop=()=>{a.zipProgress&&a.zipProgress.stop(),a.uploadProgress&&a.uploadProgress.stop()},pgb.opts.noprogress||(process.once('zip/files',a.zipFiles),process.once('zip/end',a.zipEnd),process.once('api/connect',a.apiConnect),process.on('zip/write',a.zipWrite),process.on('api/write',a.apiWrite)),a};