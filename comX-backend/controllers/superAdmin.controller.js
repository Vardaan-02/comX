const responseCodes = require("../utils/responseCodes");
const {SuperAdmin, Admin} = require("../models/user.model");

exports.listAdmins = async(req, res) => {
    try {
        const superAdmin = await SuperAdmin.findById(req.user.id)
          .populate({
            path: 'adminQueue', 
            select: 'username email name', 
          });   // listing all the admin's who need approval
    
        if (!superAdmin) {
          return responseCodes.clientError.notFound(res, "Super Admin not found");
        }
        
        return responseCodes.success.ok(res, superAdmin.adminQueue, 'Admins who require approval');

      } catch (error) {
        console.error(error);
        return responseCodes.serverError.internalServerError(res, "Server error");
      }
};

exports.forbidAdmin = async(req, res)=>{
    try{
        const adminId = req.params.id;
        const superAdmin = await SuperAdmin.findOneAndUpdate(
            { adminQueue: adminId }, 
            { $pull: { adminQueue: adminId } }, 
            { new: true }
          );  // removing the admin from queue default verdict is false hence no need to change
      
          if (!superAdmin) {
            return responseCodes.clientError.notFound(res, "SuperAdmin not found or Admin not in queue");
          }
        return responseCodes.success.ok(res, {}, "Admin forbidded successfully");
    }
    catch(error){
        console.error(error);
        return responseCodes.serverError.internalServerError(res, "Server Error");
    }
}

exports.verifyAdmin = async(req, res)=>{
    try {
        const adminId = req.params.id;
    
        const updatedAdmin = await Admin.findByIdAndUpdate(
          adminId,
          { superVerify: true }, 
          { new: true }     
        );    // changing the superVerify to true
    
        if (!updatedAdmin) {
            return responseCodes.clientError.notFound(res, "Admin not in queue");
        }

        const superAdmin = await SuperAdmin.findOneAndUpdate(
            { adminQueue: adminId }, 
            { $pull: { adminQueue: adminId } }, 
            { new: true }
          );  // removing the admin from queue since verdict is given
      
          if (!superAdmin) {
            return responseCodes.clientError.notFound(res, "SuperAdmin not found or Admin not in queue");
          }
        
        return responseCodes.success.ok(res, {}, "Admin verified successfully");

      } catch (error) {
        console.error(error);
        return responseCodes.serverError.internalServerError(res, "Server Error");
      }
}