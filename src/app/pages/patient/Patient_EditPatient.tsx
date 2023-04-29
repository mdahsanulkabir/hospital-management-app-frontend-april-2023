import Patient_addORupdate from "./Patient_addORupdate"

const Patient_EditPatient = () => {
    return (
        <Patient_addORupdate
            customHeaderTitle={"Edit Patient"}
            customHeaderSub={"Edit Patient Details"}
            submitButtonText={"Update Patient"}
        />
    )
};

export default Patient_EditPatient;