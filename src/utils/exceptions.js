const QueryException = (errCode,errMsg)=>{
    return {errCode,errMsg,status:400}
}

const NoDataException=(errCode,errMsg,status)=>{
    return {errCode,errMsg,status}
}

const PasswordException = (errCode,errMsg)=>{
    return {errCode,errMsg,status:400}
}

const FailedLoginException = (errCode,errMsg)=>{
    return {errCode,errMsg,status:401}
}

const AuthException = (errCode,errMsg)=>{
    return {errCode,errMsg,status:401}
}


module.exports = {QueryException,NoDataException,PasswordException,FailedLoginException,AuthException}