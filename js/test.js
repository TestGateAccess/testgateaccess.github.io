Page({

takePhoto(){

   const ctx=wx.createCameraContext()

   ctx.takePhoto({

     quality:'high',

     success:(res)=>{

       this.set.Data({

         src:res.tempImagePath

       })

     }

   })

},

error(e){

   console.log(e.detail)

}

})