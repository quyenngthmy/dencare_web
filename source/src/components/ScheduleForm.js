import React, { useState, useEffect } from "react";
import callApi from "../api";
 import { DatePicker } from 'rsuite';
 import isBefore from 'date-fns/isBefore';

function ScheduleForm(){
    const regexPhone = /^\d{10}$/;
    const modalSchedule = document.getElementById("modal-schedule");
    const msgSuccess = document.getElementById("msg-success");
    const timeValue = document.querySelector(".appointmentTime");
    const dateValue = document.querySelector(".appointmentDate");
    // set date đặt lịch
    var setDate = new Date();
    setDate.setDate(setDate.getDate() - 1);

    // thông tin form
    const initialInfo = { fullName: "", phoneNumber: "", note:"", appointmentDate: "" };
    const [infoSchedule, setInfoSchedule] = useState(initialInfo);
    const [validations, setValidations] = useState(initialInfo);
    const [isSubmit, setIsSubmit] = useState(false);

    // truyền dữ liệu và gửi thông tin đăng ký
    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputName = document.querySelector("input[name='fullName']");
        const inputPhone = document.querySelector("input[name='phoneNumber']");
  
        var appointmentDateItem;
        //set format date post api
        let valueArr = dateValue.value.split('/');
        let day = valueArr[0];
        let month = valueArr[1];
        let year = valueArr[2];
        let newDateValue = year + '-' + month + '-' + day;
        // điều kiện giá trị time hoặc date rỗng
        if (dateValue.value != "" && timeValue.value != "") {
            appointmentDateItem = newDateValue + "T" + timeValue.value;
        } else {
            appointmentDateItem = null;
        }
        const getDate = new Date();
        const getSecond = getDate.getUTCSeconds();
        const getUTC = getDate.toString().split("GMT")[1].split(" (")[0];
        // api post thông tin đăng ký
        let res = await callApi(`/odata_TDental/TDental`,"POST",
        {
            "fullName": infoSchedule.fullName, // require
            "phoneNumber": infoSchedule.phoneNumber, // require
            "note": infoSchedule.note,
            "appointmentDate": appointmentDateItem + ":" + getSecond + getUTC,
        })
        .then(() => {
            modalSchedule.classList.replace('flex', 'hidden');
            msgSuccess.classList.replace('hidden', 'flex');
            setInfoSchedule(initialInfo)
            inputName.style.borderColor  = "transparent";
            inputPhone.style.borderColor  = "transparent";
            setTimeout(() => {
                msgSuccess.classList.replace('flex', 'hidden');
            }, 5000);
        })
        .catch((err) => {
            console.log(err);
            setValidations(validate(infoSchedule));
            setIsSubmit(true);
            setTimeout(() => {
                setIsSubmit(false);
            }, 1000);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setInfoSchedule({ ...infoSchedule, [name]: value });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setInfoSchedule({ ...infoSchedule, [name]: value.trim() });
        let message = '';
        const inputName = document.querySelector("input[name='fullName']");
        const inputPhone = document.querySelector("input[name='phoneNumber']");
        setIsSubmit(true);

        if (!value.trim() && name === 'fullName') {
          message = `Vui lòng nhập họ tên của bạn!`
          inputName.style.borderColor  = "#FF123A";
        } else if(name === 'fullName'){
            inputName.style.borderColor  = "transparent";
        }
        
        if (!value.trim() && name === 'phoneNumber') {
            message = 'Vui lòng nhập số điện thoại của bạn!'
            inputPhone.style.borderColor  = "#FF123A";
          } else  if (name === 'phoneNumber' && !regexPhone.test(value.trim())) {
            message = "Số điện thoại không đúng định dạng. Xin vui lòng nhập lại!";
            inputPhone.style.borderColor  = "#FF123A";
          }  else if(name === 'phoneNumber'){
            inputPhone.style.borderColor  = "transparent";
        }

        setValidations({...validations, [name]: message })
        setTimeout(() => {
            setIsSubmit(false);
        }, 1000);
    }

   //set giá trị ban đầu cho form
    const initValue = () => {
        setInfoSchedule({...infoSchedule});
    }
    useEffect(() => {
        initValue()
    }, [validations]) 

    const validate = (values) => {
        const inputName = document.querySelector("input[name='fullName']");
        const inputPhone = document.querySelector("input[name='phoneNumber']");
        const inputTime = document.querySelector(".appointmentTime");
        const inputDate = document.querySelector(".appointmentDate");
        if (!values.fullName) {
          validations.fullName = "Vui lòng nhập họ tên của bạn!";
            inputName.style.borderColor  = "#FF123A";
        } else {
            inputName.style.borderColor  = "transparent";
        }
       
        if (!values.phoneNumber) {
            validations.phoneNumber = "Vui lòng nhập số điện thoại của bạn!";
            inputPhone.style.borderColor  = "#FF123A";
        } else if (!regexPhone.test(values.phoneNumber)) {
            validations.phoneNumber = "Số điện thoại không đúng định dạng. Xin vui lòng nhập lại!";
            inputPhone.style.borderColor  = "#FF123A";
        } else {
            inputPhone.style.borderColor  = "transparent";
        }
    
        if(!values.appointmentDate && timeValue.value != "" && dateValue.value == ""){
            validations.appointmentDate = "Vui lòng chọn đầy đủ ngày tháng năm!";
            inputDate.style.borderColor  = "#FF123A";
        } else if (!values.appointmentDate && dateValue.value != "" && timeValue.value == "") {
            inputTime.style.borderColor  = "#FF123A";
            validations.appointmentDate = "Vui lòng chọn giờ!";
        } else {
            validations.appointmentDate = "";
            inputDate.style.borderColor  = "transparent";
            inputTime.style.borderColor  = "transparent";
        }
        
        return validations
    };
  
    
    return(
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="flex flex-col items-center w-full gap-4 scrollbar">
                <div className="flex flex-col items-center w-full">
                    <input type="text" 
                    name="fullName"
                    value={infoSchedule.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Họ tên *" 
                    className="px-3.5 py-3 w-full bg-white rounded-lg placeholder:text-text-3 text-neutral-1-900 text-body-1 focus:outline-none border"/>
                    { isSubmit && validations.fullName && 
                        <div className="flex gap-2 bg-white absolute top-[3%] px-4 py-2 rounded-md lg:top-[5%]">
                            <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 -6.10352e-05C8.52219 -6.10352e-05 6.58879 0.586429 4.9443 1.68524C3.29981 2.78406 2.01809 4.34584 1.26121 6.1731C0.504333 8.00036 0.3063 10.011 0.692152 11.9508C1.078 13.8906 2.03041 15.6725 3.42894 17.071C4.82746 18.4695 6.60929 19.4219 8.5491 19.8078C10.4889 20.1936 12.4996 19.9956 14.3268 19.2387C16.1541 18.4819 17.7159 17.2001 18.8147 15.5556C19.9135 13.9111 20.5 11.9777 20.5 9.99994C20.4969 7.34873 19.4423 4.80701 17.5676 2.93233C15.6929 1.05764 13.1512 0.00306667 10.5 -6.10352e-05ZM14.5445 12.8663C14.5832 12.905 14.614 12.9509 14.6349 13.0014C14.6558 13.052 14.6666 13.1061 14.6666 13.1608C14.6666 13.2156 14.6558 13.2697 14.6349 13.3203C14.614 13.3708 14.5832 13.4167 14.5445 13.4554L13.9555 14.0445C13.9168 14.0832 13.8709 14.1139 13.8203 14.1348C13.7698 14.1558 13.7156 14.1666 13.6609 14.1666C13.6062 14.1666 13.552 14.1558 13.5015 14.1348C13.4509 14.1139 13.405 14.0832 13.3664 14.0445L10.5 11.1818L7.63364 14.0445C7.59497 14.0832 7.54906 14.1139 7.49852 14.1348C7.44798 14.1558 7.3938 14.1666 7.33909 14.1666C7.28438 14.1666 7.23021 14.1558 7.17967 14.1348C7.12913 14.1139 7.08322 14.0832 7.04455 14.0445L6.45546 13.4545C6.41676 13.4158 6.38605 13.3699 6.3651 13.3194C6.34416 13.2688 6.33338 13.2146 6.33338 13.1599C6.33338 13.1052 6.34416 13.0511 6.3651 13.0005C6.38605 12.95 6.41676 12.9041 6.45546 12.8654L9.31818 9.99994L6.45546 7.13357C6.41676 7.09491 6.38605 7.04899 6.3651 6.99845C6.34416 6.94791 6.33338 6.89374 6.33338 6.83903C6.33338 6.78432 6.34416 6.73015 6.3651 6.67961C6.38605 6.62907 6.41676 6.58315 6.45546 6.54448L7.04546 5.95539C7.08413 5.91669 7.13004 5.88599 7.18058 5.86504C7.23112 5.84409 7.28529 5.83331 7.34 5.83331C7.39471 5.83331 7.44888 5.84409 7.49942 5.86504C7.54996 5.88599 7.59588 5.91669 7.63455 5.95539L10.5 8.81812L13.3664 5.95176C13.405 5.91305 13.4509 5.88235 13.5015 5.8614C13.552 5.84046 13.6062 5.82967 13.6609 5.82967C13.7156 5.82967 13.7698 5.84046 13.8203 5.8614C13.8709 5.88235 13.9168 5.91305 13.9555 5.95176L14.5445 6.54085C14.5832 6.57951 14.614 6.62543 14.6349 6.67597C14.6558 6.72651 14.6666 6.78068 14.6666 6.83539C14.6666 6.8901 14.6558 6.94427 14.6349 6.99481C14.614 7.04535 14.5832 7.09127 14.5445 7.12994L11.6818 9.99994L14.5445 12.8663Z" fill="#FF123A"/>
                            </svg>
                            <p className="text-neutral-1-900 text-body-2">{ validations.fullName }</p> 
                        </div> 
                    }
                </div>
                <div className="flex flex-col items-center w-full">
                    <input
                        type="tel" 
                        name="phoneNumber"
                        value={infoSchedule.phoneNumber}
                        placeholder="Số điện thoại *" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="px-3.5 py-3 w-full bg-white rounded-lg placeholder:text-text-3 text-neutral-1-900 text-body-1 focus:outline-none border"/>
                    { isSubmit && validations.phoneNumber &&  
                        <div className="flex gap-2 bg-white absolute top-[8%] px-4 py-2 rounded-md lg:top-[10%]">
                            <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 -6.10352e-05C8.52219 -6.10352e-05 6.58879 0.586429 4.9443 1.68524C3.29981 2.78406 2.01809 4.34584 1.26121 6.1731C0.504333 8.00036 0.3063 10.011 0.692152 11.9508C1.078 13.8906 2.03041 15.6725 3.42894 17.071C4.82746 18.4695 6.60929 19.4219 8.5491 19.8078C10.4889 20.1936 12.4996 19.9956 14.3268 19.2387C16.1541 18.4819 17.7159 17.2001 18.8147 15.5556C19.9135 13.9111 20.5 11.9777 20.5 9.99994C20.4969 7.34873 19.4423 4.80701 17.5676 2.93233C15.6929 1.05764 13.1512 0.00306667 10.5 -6.10352e-05ZM14.5445 12.8663C14.5832 12.905 14.614 12.9509 14.6349 13.0014C14.6558 13.052 14.6666 13.1061 14.6666 13.1608C14.6666 13.2156 14.6558 13.2697 14.6349 13.3203C14.614 13.3708 14.5832 13.4167 14.5445 13.4554L13.9555 14.0445C13.9168 14.0832 13.8709 14.1139 13.8203 14.1348C13.7698 14.1558 13.7156 14.1666 13.6609 14.1666C13.6062 14.1666 13.552 14.1558 13.5015 14.1348C13.4509 14.1139 13.405 14.0832 13.3664 14.0445L10.5 11.1818L7.63364 14.0445C7.59497 14.0832 7.54906 14.1139 7.49852 14.1348C7.44798 14.1558 7.3938 14.1666 7.33909 14.1666C7.28438 14.1666 7.23021 14.1558 7.17967 14.1348C7.12913 14.1139 7.08322 14.0832 7.04455 14.0445L6.45546 13.4545C6.41676 13.4158 6.38605 13.3699 6.3651 13.3194C6.34416 13.2688 6.33338 13.2146 6.33338 13.1599C6.33338 13.1052 6.34416 13.0511 6.3651 13.0005C6.38605 12.95 6.41676 12.9041 6.45546 12.8654L9.31818 9.99994L6.45546 7.13357C6.41676 7.09491 6.38605 7.04899 6.3651 6.99845C6.34416 6.94791 6.33338 6.89374 6.33338 6.83903C6.33338 6.78432 6.34416 6.73015 6.3651 6.67961C6.38605 6.62907 6.41676 6.58315 6.45546 6.54448L7.04546 5.95539C7.08413 5.91669 7.13004 5.88599 7.18058 5.86504C7.23112 5.84409 7.28529 5.83331 7.34 5.83331C7.39471 5.83331 7.44888 5.84409 7.49942 5.86504C7.54996 5.88599 7.59588 5.91669 7.63455 5.95539L10.5 8.81812L13.3664 5.95176C13.405 5.91305 13.4509 5.88235 13.5015 5.8614C13.552 5.84046 13.6062 5.82967 13.6609 5.82967C13.7156 5.82967 13.7698 5.84046 13.8203 5.8614C13.8709 5.88235 13.9168 5.91305 13.9555 5.95176L14.5445 6.54085C14.5832 6.57951 14.614 6.62543 14.6349 6.67597C14.6558 6.72651 14.6666 6.78068 14.6666 6.83539C14.6666 6.8901 14.6558 6.94427 14.6349 6.99481C14.614 7.04535 14.5832 7.09127 14.5445 7.12994L11.6818 9.99994L14.5445 12.8663Z" fill="#FF123A"/>
                            </svg>
                            <p className="text-neutral-1-900 text-body-2">{ validations.phoneNumber }</p> 
                        </div> 
                    }
                </div>
                <div className="flex justify-center w-full">
                    <div className="grid grid-cols-2 gap-x-4 w-full">
                        <input type="date" id="date" className="appointmentDate bg-white"/>
                        <input type="time" id="time" className="appointmentTime bg-white"/>
                    </div>
                    { isSubmit && validations.appointmentDate &&  
                        <div className="flex gap-2 bg-white absolute top-[13%] px-4 py-2 rounded-md lg:top-[15%]">
                            <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 -6.10352e-05C8.52219 -6.10352e-05 6.58879 0.586429 4.9443 1.68524C3.29981 2.78406 2.01809 4.34584 1.26121 6.1731C0.504333 8.00036 0.3063 10.011 0.692152 11.9508C1.078 13.8906 2.03041 15.6725 3.42894 17.071C4.82746 18.4695 6.60929 19.4219 8.5491 19.8078C10.4889 20.1936 12.4996 19.9956 14.3268 19.2387C16.1541 18.4819 17.7159 17.2001 18.8147 15.5556C19.9135 13.9111 20.5 11.9777 20.5 9.99994C20.4969 7.34873 19.4423 4.80701 17.5676 2.93233C15.6929 1.05764 13.1512 0.00306667 10.5 -6.10352e-05ZM14.5445 12.8663C14.5832 12.905 14.614 12.9509 14.6349 13.0014C14.6558 13.052 14.6666 13.1061 14.6666 13.1608C14.6666 13.2156 14.6558 13.2697 14.6349 13.3203C14.614 13.3708 14.5832 13.4167 14.5445 13.4554L13.9555 14.0445C13.9168 14.0832 13.8709 14.1139 13.8203 14.1348C13.7698 14.1558 13.7156 14.1666 13.6609 14.1666C13.6062 14.1666 13.552 14.1558 13.5015 14.1348C13.4509 14.1139 13.405 14.0832 13.3664 14.0445L10.5 11.1818L7.63364 14.0445C7.59497 14.0832 7.54906 14.1139 7.49852 14.1348C7.44798 14.1558 7.3938 14.1666 7.33909 14.1666C7.28438 14.1666 7.23021 14.1558 7.17967 14.1348C7.12913 14.1139 7.08322 14.0832 7.04455 14.0445L6.45546 13.4545C6.41676 13.4158 6.38605 13.3699 6.3651 13.3194C6.34416 13.2688 6.33338 13.2146 6.33338 13.1599C6.33338 13.1052 6.34416 13.0511 6.3651 13.0005C6.38605 12.95 6.41676 12.9041 6.45546 12.8654L9.31818 9.99994L6.45546 7.13357C6.41676 7.09491 6.38605 7.04899 6.3651 6.99845C6.34416 6.94791 6.33338 6.89374 6.33338 6.83903C6.33338 6.78432 6.34416 6.73015 6.3651 6.67961C6.38605 6.62907 6.41676 6.58315 6.45546 6.54448L7.04546 5.95539C7.08413 5.91669 7.13004 5.88599 7.18058 5.86504C7.23112 5.84409 7.28529 5.83331 7.34 5.83331C7.39471 5.83331 7.44888 5.84409 7.49942 5.86504C7.54996 5.88599 7.59588 5.91669 7.63455 5.95539L10.5 8.81812L13.3664 5.95176C13.405 5.91305 13.4509 5.88235 13.5015 5.8614C13.552 5.84046 13.6062 5.82967 13.6609 5.82967C13.7156 5.82967 13.7698 5.84046 13.8203 5.8614C13.8709 5.88235 13.9168 5.91305 13.9555 5.95176L14.5445 6.54085C14.5832 6.57951 14.614 6.62543 14.6349 6.67597C14.6558 6.72651 14.6666 6.78068 14.6666 6.83539C14.6666 6.8901 14.6558 6.94427 14.6349 6.99481C14.614 7.04535 14.5832 7.09127 14.5445 7.12994L11.6818 9.99994L14.5445 12.8663Z" fill="#FF123A"/>
                            </svg>
                            <p className="text-neutral-1-900 text-body-2">{ validations.appointmentDate }</p> 
                        </div> 
                    }
                </div>
                <textarea 
                cols={50} rows={3} 
                name="note" 
                value={infoSchedule.note}
                onChange={(e) => handleChange(e)}
                placeholder="Nội dung" maxLength={500} className="px-3.5 pt-3 placeholder:text-text-3 text-neutral-1-900 text-body-1 bg-white rounded-lg w-full focus:outline-none"></textarea>
            </div>
            <button type="submit" className="w-full py-4 rounded-lg bg-error-400 text-white text-base font-semibold text-center">Đặt Lịch</button>
        </form>
    )
}
export default ScheduleForm;