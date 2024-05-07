// const asyncHandler = () =>{};

export {asyncHandler}

const asyncHandler = (fn) => async(req, res, next) => {
    try{

    }catch(error){
        res.status(error.code || 5000).json({
            success: false,
            message: error.message
        })
        console.log(error)
    }
}