export interface IndustryMajor {
    imCode: string;
    name: string;
    nickname: string;
    addressLine1: string;
    addressLine2: string;
    pincode: string;
    city: string;
    district: string;
    state: string;
    country: string;
    emailId: string;
    phoneNumber: string;
    fax: string;
    businessGroup: string;
    loanAccOwnedBy: string;
    debitProcessingChargeAccnt: {
        accNumber: string;
        nickName: string;
        branchCode: string;
    }
    debitCommissionChargeAccnt: {
        accNumber: string;
        nickName: string;
        branchCode: string;
    }
    debitInterestAccnt: {
        accNumber: string;
        nickName: string;
        branchCode: string;
    }
    debitAccnt: {
        accNumber: string;
        nickName: string;
        branchCode: string;
    }
    imLimit: string;
    limitExpirydate: string;
    postageCharges: string;
    commissionCharges: string;
    taxCharges: string;
    dueDate: string;
    interestRecoverOn: string;
    vendorAutoOnboarding: string;
    sharedBy: string;
    backDatedInvoicing: string;
    noOfDaysFrom: string;
    noOfDaysTo: string;
    hostToHostUniken: string;
}
