
interface Login_Page{
    submit: string,
    title: string,
    subTitle: string,
}

interface Personal_Info{
    firstName: string,
    lastName: string,
    email: string,
    firstWorkDay: string,
    position: string,
    team: string
}

interface List_Info{
    Num: string,
    lastName: string,
    firstName: string,
    team: string,
    leaveType: string,
    createdDate: string,
    leaveHour: string,
    approvedBy: string,
    modifiedDate: string,
    state: string,
}


interface Side_Titles{
    first: string
}

interface Top_Titles{
    logout: string
}


export interface RequestModel{
    error:"error" | "success" | "info" | "warning" | "loading" | undefined,
    success:"error" | "success" | "info" | "warning" | "loading" | undefined,
    loginUrl:string,
    unsupportedError:string
}

export const LoginRequest : RequestModel = {
    error:"error",
    success:"success",
    loginUrl:"http://localhost:8000/api/user/login",
    unsupportedError:"An error occurred"
}

export const PersonalInfo: Personal_Info = {
    firstName: "Овог:",
    lastName: "Нэр:",
    email: "Имэйл:",
    firstWorkDay: "Ажилд орсон огно:",    
    position: "Албан тушаал:",
    team: "Баг:",
}

export const SideTitles: Side_Titles = {
    first: "Амралт, чөлөө"
}

export const TopTitles: Top_Titles = {
    logout: "Гарах",
}
export const LoginPage: Login_Page = {
    submit: "Нэвтрэх",
    title: "Erin",
    subTitle: "Systems",
}

export const ListInfo: List_Info = {
    Num: "#",
    lastName: "Овог",
    firstName: "Нэр",
    team: "Баг",
    leaveType: "Төрөл",
    createdDate: "Үүссэн огноо",
    leaveHour: "Авсан цаг",
    approvedBy: "Батлах менежер",
    modifiedDate: "Авсан огноо",
    state: "Төлөв"
}